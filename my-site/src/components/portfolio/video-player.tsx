"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Maximize2,
  PictureInPicture2,
} from "lucide-react";

/* ----------------------------- YouTube IFrame API ----------------------------- */

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getCurrentTime(): number;
  getDuration(): number;
  mute(): void;
  unMute(): void;
  isMuted(): boolean;
  loadVideoById(id: string): void;
  destroy(): void;
}

interface YTPlayerOptions {
  videoId: string;
  playerVars?: Record<string, number | string>;
  events?: {
    onReady?: (e: { target: YTPlayer }) => void;
    onStateChange?: (e: { data: number; target: YTPlayer }) => void;
  };
}

interface YTNamespace {
  Player: new (el: HTMLElement, opts: YTPlayerOptions) => YTPlayer;
  PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
}

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadYouTubeApi(): Promise<YTNamespace> {
  return new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve(window.YT);
      return;
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      if (window.YT) resolve(window.YT);
    };
    if (!document.getElementById("yt-iframe-api")) {
      const s = document.createElement("script");
      s.id = "yt-iframe-api";
      s.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(s);
    }
  });
}

/* --------------------------------- Component --------------------------------- */

type Mode = "expanded" | "pip";

const fmt = (s: number) => {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

function Ctrl({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/15 hover:text-white"
    >
      {children}
    </button>
  );
}

export function VideoPlayer({
  videoId,
  onClose,
}: {
  videoId: string;
  onClose: () => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const loadedRef = useRef(videoId);
  const seekingRef = useRef(false);
  const hideTimer = useRef<number | undefined>(undefined);

  const [mode, setMode] = useState<Mode>("expanded");
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pipPos, setPipPos] = useState<{ x: number; y: number } | null>(null);
  const [showControls, setShowControls] = useState(true);

  // Create the player once; the iframe persists across expanded <-> pip.
  useEffect(() => {
    let cancelled = false;
    let interval: number | undefined;

    loadYouTubeApi().then((YT) => {
      if (cancelled || !hostRef.current) return;
      const mount = document.createElement("div");
      hostRef.current.appendChild(mount);

      const player = new YT.Player(mount, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          playsinline: 1,
          fs: 0,
        },
        events: {
          onReady: (e) => {
            playerRef.current = e.target;
            setReady(true);
            setDuration(e.target.getDuration());
            setMuted(e.target.isMuted());
            e.target.playVideo();
          },
          onStateChange: (e) => {
            if (!window.YT) return;
            if (e.data === window.YT.PlayerState.PLAYING) setPlaying(true);
            else if (
              e.data === window.YT.PlayerState.PAUSED ||
              e.data === window.YT.PlayerState.ENDED
            )
              setPlaying(false);
          },
        },
      });
      playerRef.current = player;

      interval = window.setInterval(() => {
        const p = playerRef.current;
        if (!p || seekingRef.current || !p.getDuration) return;
        const d = p.getDuration() || 0;
        const c = p.getCurrentTime() || 0;
        setDuration(d);
        setCurrent(c);
        setProgress(d ? c / d : 0);
      }, 250);
    });

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
      try {
        playerRef.current?.destroy();
      } catch {}
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap the clip if a different tile is opened while the player is live.
  useEffect(() => {
    if (ready && playerRef.current && loadedRef.current !== videoId) {
      loadedRef.current = videoId;
      playerRef.current.loadVideoById(videoId);
    }
  }, [videoId, ready]);

  // Lock page scroll + Escape to close — only in the expanded (modal) mode.
  useEffect(() => {
    if (mode !== "expanded") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mode, onClose]);

  // Auto-hide controls while playing; reveal on activity.
  const poke = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (playing) hideTimer.current = window.setTimeout(() => setShowControls(false), 2500);
  }, [playing]);

  useEffect(() => {
    poke();
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [poke]);

  const togglePlay = () => {
    const p = playerRef.current;
    if (!p) return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  };

  const toggleMute = () => {
    const p = playerRef.current;
    if (!p) return;
    if (p.isMuted()) {
      p.unMute();
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  };

  const seekFromClientX = (clientX: number) => {
    const el = trackRef.current;
    const p = playerRef.current;
    if (!el || !p) return;
    const rect = el.getBoundingClientRect();
    const frac = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const d = p.getDuration() || duration;
    setProgress(frac);
    setCurrent(frac * d);
    p.seekTo(frac * d, true);
  };

  const onScrubDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    seekingRef.current = true;
    seekFromClientX(e.clientX);
    const move = (ev: PointerEvent) => seekFromClientX(ev.clientX);
    const up = () => {
      seekingRef.current = false;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const enterPip = () => {
    const w = 360;
    const h = (w * 9) / 16;
    setPipPos({ x: window.innerWidth - w - 16, y: window.innerHeight - h - 16 });
    setMode("pip");
  };

  // Drag the mini-player around (pip mode only).
  const onContainerPointerDown = (e: React.PointerEvent) => {
    if (mode !== "pip" || !containerRef.current) return;
    const target = e.target as HTMLElement;
    if (target.closest("button,[data-nodrag]")) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offX = e.clientX - rect.left;
    const offY = e.clientY - rect.top;
    const move = (ev: PointerEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const x = Math.min(window.innerWidth - el.offsetWidth - 8, Math.max(8, ev.clientX - offX));
      const y = Math.min(window.innerHeight - el.offsetHeight - 8, Math.max(8, ev.clientY - offY));
      setPipPos({ x, y });
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const expanded = mode === "expanded";

  return (
    <>
      {expanded && (
        <motion.div
          className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        />
      )}

      <motion.div
        ref={containerRef}
        onPointerDown={onContainerPointerDown}
        onPointerMove={poke}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={
          expanded
            ? "fixed left-1/2 top-1/2 z-[100] w-[min(92vw,1024px)] -translate-x-1/2 -translate-y-1/2"
            : "fixed z-[100] w-[360px] cursor-move"
        }
        style={!expanded && pipPos ? { left: pipPos.x, top: pipPos.y } : undefined}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-white/10">
          <div
            ref={hostRef}
            className="absolute inset-0 [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:h-full [&>iframe]:w-full"
          />

          {/* Pointer blocker: intercepts hover/click so YouTube's own chrome
              (title, share, watch-later, logo) never surfaces. Click toggles play. */}
          <div
            className="absolute inset-0 z-10"
            onClick={() => {
              if (expanded) togglePlay();
            }}
          />

          {/* Opaque scrim hides YouTube's start / paused / end-screen chrome
              ("more videos", logo) whenever the video isn't actively playing. */}
          {!playing && (
            <div className="absolute inset-0 z-20 grid place-items-center bg-black">
              {!ready ? (
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-white" />
              ) : (
                <button
                  type="button"
                  data-nodrag
                  onClick={togglePlay}
                  aria-label="Play"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Play size={28} fill="currentColor" className="translate-x-0.5" />
                </button>
              )}
            </div>
          )}

          {/* Controls overlay */}
          <div
            className={`pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent" />

            <div className="pointer-events-auto absolute right-2 top-2 flex gap-1">
              {expanded ? (
                <Ctrl onClick={enterPip} label="Picture in picture">
                  <PictureInPicture2 size={17} />
                </Ctrl>
              ) : (
                <Ctrl onClick={() => setMode("expanded")} label="Expand">
                  <Maximize2 size={17} />
                </Ctrl>
              )}
              <Ctrl onClick={onClose} label="Close">
                <X size={18} />
              </Ctrl>
            </div>

            <div className="pointer-events-auto absolute inset-x-0 bottom-0 px-3 pb-2.5">
              <div
                ref={trackRef}
                data-nodrag
                onPointerDown={onScrubDown}
                className="group/scrub relative flex h-3 cursor-pointer items-center"
              >
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/25">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-500"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <div
                  className="absolute h-3 w-3 -translate-x-1/2 rounded-full bg-white opacity-0 shadow transition-opacity group-hover/scrub:opacity-100"
                  style={{ left: `${progress * 100}%` }}
                />
              </div>

              <div className="mt-1.5 flex items-center gap-2">
                <Ctrl onClick={togglePlay} label={playing ? "Pause" : "Play"}>
                  {playing ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                </Ctrl>
                <Ctrl onClick={toggleMute} label={muted ? "Unmute" : "Mute"}>
                  {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </Ctrl>
                <span className="ml-0.5 font-mono text-[11px] tabular-nums text-white/80">
                  {fmt(current)} / {fmt(duration)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
