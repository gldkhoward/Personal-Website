"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Info, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VideoPlayer } from './video-player';

export default function Projects() {
  const projects = [
    {
      title: 'o1lab',
      description:
        <>A not-for-profit, open-access hardware lab and component library — completely free to use. Backed by the <a href="https://www.blackbird.foundation/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">Blackbird Foundation</a> with equipment/consumable donations from <a href="https://breakerindustries.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">Breaker</a> and UTS. From zero to one — a garage-like culture built around access, experimentation, and real-world making.</>,
      imageUrl: '/images/o1lab.png',
      technologies: ['Hardware', 'Open Access', 'Not-for-Profit', 'Component Library'],
      liveUrl: 'https://o1lab.xyz',
    },
    {
      title: 'Build In Syd',
      description:
        'A one-pager guide for people looking to build in Sydney — co-created in a single morning. Covers the startup ecosystem, active VCs, communities, and how to plug in fast. Now expanding to Build In Aus, Build In Melb, and Build In Bris.',
      imageUrl: '/images/syd.png',
      technologies: ['Community', 'Startups', 'Sydney', 'Guide'],
      liveUrl: 'https://buildinsyd.com/',
    },
    {
      title: 'Lecxa',
      description:
        'A frictionless inventory management system for small to medium businesses.',
      imageUrl: '/images/lecxa.png',
      technologies: ['Vercel', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      liveUrl: 'https://www.lecxa.com.au/',
    },
    {
      title: 'Arrayah / Billabong',
      description:
        <>Helped build out <a href="https://arrayah.city" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">Arrayah</a>&apos;s hackerhouses — intentional coliving spaces for founders, researchers, and artists across Sydney and Perth. <a href="https://billabong.arrayah.city/billabong" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">Billabong</a> is a waterfront residency in Drummoyne where momentum gathers. High agency, holistic building, and ambition rooted locally.</>,
      imageUrl: '/images/billabong.jpg',
      technologies: ['Community', 'Coliving', 'Hackerhouses', 'Sydney'],
      liveUrl: 'https://billabong.arrayah.city/billabong',
    },
    {
      title: 'Uni Scheduler',
      description:
        'My first Next.js app — an ML timetabling tool that builds optimal university schedules from your preferences. Shipped on Vercel early on; no longer maintained, but still quietly used by students today.',
      imageUrl: '/images/unisched.png',
      technologies: ['Next.js', 'Vercel', 'Machine Learning', 'Python', 'Django'],
      githubUrl: 'https://github.com/gldkhoward/UniScheduler',
      liveUrl: 'https://www.unischeduler.com/'
    },
    {
      title: 'PPE Detection for Construction',
      description:
        'A custom Neural Network architecture and trained model for end-to-end detection and verification of whether operatives are wearing correct PPE.',
      imageUrl: '/images/ppe.png',
      technologies: ['Neural Networks', 'Computer Vision', 'Python'],
      githubUrl: 'https://github.com/gldkhoward/PPE-Yolov5',
    },
    {
      title: 'High Payload Parallel Manipulator',
      description:
        'Capstone project focused on a custom cable-driven manipulator system for high-payload mining applications.',
      imageUrl: '/images/cdpr.png',
      technologies: ['C++', 'ROS2', 'Python', 'CAD'],
      githubUrl: 'https://github.com/gldkhoward/CDPR',
    },
    {
      title: 'PipX',
      description:
        'A google chrome extension that extends PIP (Picture in Picture) functionality with heavy customisation to any video on any website.',
      imageUrl: '/images/pipx.png',
      technologies: ['JavaScript', 'Chrome Extensions'],
      githubUrl: 'https://github.com/gldkhoward/pipx-chrome-exentsion',
    },
    {
      title: 'UTS Motorsports',
      description:
        "My home for nearly three years — I went from recruit to Business Director & Senior Engineer of UTS's Formula SAE electric race team. I rebuilt and led a 10-person business team across marketing, sponsorship and events, and on the engineering side built the car's Ackermann steering system and internal wheel temperature/pressure sensing. Hit play for the reveal — a launch video I directed and presented live to 200+ people.",
      imageUrl: '/images/utsme.jpg',
      technologies: ['Formula SAE', 'EV', 'Vehicle Dynamics', 'CAD', 'Leadership'],
      videoId: 'Tv4lowdoVSQ',
    },
    {
      title: 'GoFur',
      description:
        'A B2B online marketplace for craft brewers, aimed at streamlining sales, inventory, and integration processes.',
      imageUrl: '/images/gofur.png',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://www.gofur.com.au/',
    },
    {
      title: 'Autonomous Steering for Audi R8',
      description:
        'Developed an autonomous ML steering system using ROS2 for an Audi R8 in a simulated environment.',
      imageUrl: '/images/audir8.png',
      technologies: ['ROS2', 'C++', 'Python', 'Computer Vision'],
      githubUrl: 'https://github.com/41012/pfms-2024a-gldkhoward',
    },
    {
      title: 'Machine Learning Espresso Classifier',
      description:
        'Created a device that classifies espresso coffee using machine learning algorithms and a custom embedded sensor systems.',
      imageUrl: '/images/coffee.png',
      technologies: ['Python', 'Machine Learning', 'Embedded Systems'],
      githubUrl: 'https://github.com/Nosespresso',
      learnMoreUrl: 'https://www.nosespresso.online/'
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Mobile: continuously highlight whichever card is closest to the viewport center.
  // A single stable scroll listener (rAF-throttled) — no IntersectionObserver churn or
  // threshold lag, so the active card switches the instant you scroll onto it.
  useEffect(() => {
    if (!isMobile) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const viewportCenter = window.innerHeight / 2;
      // Only consider a card "active" once it's reasonably central.
      const activationBand = window.innerHeight * 0.45;
      let closest: number | null = null;
      let closestDist = Infinity;

      cardRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return; // off-screen
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = idx;
        }
      });

      const next = closestDist <= activationBand ? closest : null;
      setHoveredIndex((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update(); // set initial state
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            // Video tiles carry more copy, so give them extra height.
            const restHeight = project.videoId ? '360px' : '320px';
            const openHeight = project.videoId ? '464px' : '368px';

            return (
              <div
                key={index}
                className="relative overflow-visible"
              >
                {/* Project Title - Above the card */}
                <div className="mb-4 h-12 flex items-center relative z-50 overflow-visible">
                  <AnimatePresence mode="wait">
                    {!isHovered && (
                      <motion.h3
                        key={`title-above-${index}`}
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: -12,
                          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
                        }}
                        className="text-3xl font-bold text-primary relative z-50"
                      >
                        {project.title}
                      </motion.h3>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Card */}
                <motion.div
                  ref={(el) => { cardRefs.current[index] = el; }}
                  data-index={index}
                  className="group relative rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-500"
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  animate={{
                    height: isHovered ? openHeight : restHeight,
                    y: isHovered ? -48 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Static clip layer: rounding + overflow live here (never transformed) to avoid the GPU rounded-clip fringe */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden isolate bg-card">
                  {/* Full Image Background */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      // Cards render full-width on mobile but only the right ~half of a
                      // max-w-screen-xl container on desktop (~600px). Telling Next the real
                      // render size stops it shipping a ~1200px+ source for a 600px slot.
                      sizes="(min-width: 1024px) 600px, (min-width: 768px) 90vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay that darkens on hover */}
                    <div
                      className={`absolute inset-0 bg-black transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-20'
                        }`}
                    />
                  </div>

                  {/* Play button for video tiles — stays visible and glides into the
                      uncovered left image area when the details panel wipes in. */}
                  {project.videoId && (!isMobile || !isHovered) && (
                    <motion.button
                      type="button"
                      onClick={() => setActiveVideo(project.videoId!)}
                      aria-label={`Play ${project.title} video`}
                      className="absolute top-1/2 z-40 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white ring-1 ring-white/40 backdrop-blur-sm transition-colors hover:bg-black/65"
                      initial={false}
                      animate={{ left: isHovered && !isMobile ? '16.6667%' : '50%' }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
                    </motion.button>
                  )}

                  {/* Details Panel - wipes open from the right edge (pinned edges = no visual leak) */}
                  <motion.div
                    className="absolute top-0 right-0 bottom-0 w-full md:w-2/3 bg-card p-6 flex flex-col z-30"
                    style={{ willChange: 'clip-path' }}
                    initial={false}
                    animate={{
                      clipPath: isHovered ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)',
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Animated Title inside details panel */}
                    <div className="mb-3 relative z-50 overflow-visible">
                      <AnimatePresence mode="wait">
                        {isHovered && (
                          <motion.h3
                            key={`title-inside-${index}`}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="text-2xl font-bold text-primary relative z-50"
                          >
                            {project.title}
                          </motion.h3>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.div
                      className="text-muted-foreground mb-4 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {project.description}
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                    >
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-2 mt-auto"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {project.videoId && (
                        <Button
                          size="sm"
                          variant="default"
                          className="flex items-center gap-1"
                          onClick={() => setActiveVideo(project.videoId!)}
                        >
                          <Play size={16} fill="currentColor" />
                          <span>Watch</span>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Github size={16} />
                            <span>Code</span>
                          </a>
                        </Button>
                      )}
                      {project.learnMoreUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.learnMoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <Info size={16} />
                            <span>Details</span>
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" variant="default" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink size={16} />
                            <span>Live</span>
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom themed player with in-page picture-in-picture */}
      {activeVideo && (
        <VideoPlayer videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}