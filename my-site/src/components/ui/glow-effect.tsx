import { cn } from '@/lib/utils';

export type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  colors?: string[];
  mode?:
    | 'rotate'
    | 'pulse'
    | 'breathe'
    | 'colorShift'
    | 'flowHorizontal'
    | 'static';
  blur?:
    | number
    | 'softest'
    | 'soft'
    | 'medium'
    | 'strong'
    | 'stronger'
    | 'strongest'
    | 'none';
  scale?: number;
  duration?: number;
};

const getBlurClass = (blur: GlowEffectProps['blur']) => {
  if (typeof blur === 'number') {
    return `blur-[${blur}px]`;
  }

  const presets = {
    softest: 'blur-xs',
    soft: 'blur-sm',
    medium: 'blur-md',
    strong: 'blur-lg',
    stronger: 'blur-xl',
    strongest: 'blur-xl',
    none: 'blur-none',
  };

  return presets[blur as keyof typeof presets];
};

/**
 * Pure-CSS animated glow. The rotating modes animate a custom `--glow-angle`
 * property (see globals.css) instead of pulling in an animation library, so the
 * landing page ships no extra JS for this effect.
 */
export function GlowEffect({
  className,
  style,
  colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F'],
  mode = 'rotate',
  blur = 'medium',
  scale = 1,
  duration = 5,
}: GlowEffectProps) {
  const isStatic = mode === 'static';
  const background = isStatic
    ? `linear-gradient(to right, ${colors.join(', ')})`
    : `conic-gradient(from var(--glow-angle) at 50% 50%, ${colors.join(', ')})`;

  return (
    <div
      aria-hidden
      style={{
        ...style,
        background,
        transform: `scale(${scale}) translateZ(0)`,
        animation: isStatic ? undefined : `glow-rotate ${duration}s linear infinite`,
        willChange: isStatic ? undefined : 'background',
      }}
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full motion-reduce:animate-none',
        getBlurClass(blur),
        className
      )}
    />
  );
}
