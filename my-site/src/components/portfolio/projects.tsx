"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Lecxa',
      description:
        'A frictionless inventory management system for small to medium businesses.',
      imageUrl: '/images/lecxa.png',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Golang'],
      liveUrl: 'https://www.lecxa.com.au/',
    },
    {
      title: 'Uni Scheduler.io',
      description:
        'Ongoing open-source ML timetabling system project that generates optimal timetable selections based on user preferences. ',
      imageUrl: '/images/unisched.png',
      technologies: ['Machine Learning', 'Python', 'Django'],
      githubUrl: 'https://github.com/gldkhoward/UniScheduler.io',
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
      technologies: ['C++', 'ROS2','Python', 'CAD'],
      githubUrl: 'https://github.com/gldkhoward/CDPR',
    },
    {
      title: 'PipX',
      description:
        'A google chrome extension that extends PIP (Picture in Picture) functionality to any video on any website.',
      imageUrl: '/images/pipx.png',
      technologies: ['JavaScript', 'Chrome Extensions'],
      githubUrl: 'https://github.com/gldkhoward/pipx-chrome-exentsion',
    },
    {
      title: 'GLDK Components',
      description:
        'A personal project to experiment and collate my front-end web-development resources. Also serves as a deployment playground where I can experiment and test out new concepts for Web-Development',
      imageUrl: '/images/gldkcmpts.png',
      technologies: ['React', 'Next.js', 'TypeScript'],
      learnMoreUrl: 'https://github.com/gldkhoward/GldkWebComponents',
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

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ 
                          opacity: 0,
                          y: 40,
                          x: 200,
                          scale: 0.9,
                          transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            mass: 0.8
                          }
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
                  className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    height: isHovered ? '368px' : '320px',
                    y: isHovered ? -48 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    mass: 0.8
                  }}
                >
                  {/* Full Image Background */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay that darkens on hover */}
                    <div 
                      className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                        isHovered ? 'opacity-60' : 'opacity-20'
                      }`}
                    />
                  </div>
                  
                  {/* Details Panel - Slides in from right on hover */}
                  <motion.div 
                    className="absolute top-0 right-0 bottom-0 w-full md:w-2/3 bg-card/95 backdrop-blur-sm p-6 flex flex-col z-30"
                    initial={{ x: '100%' }}
                    animate={{ 
                      x: isHovered ? 0 : '100%'
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    {/* Animated Title inside details panel */}
                    <div className="mb-3 relative z-50 overflow-visible">
                      <AnimatePresence mode="wait">
                        {isHovered && (
                          <motion.h3
                            key={`title-inside-${index}`}
                            initial={{ 
                              opacity: 0,
                              y: -60,
                              x: -200,
                              scale: 1.2
                            }}
                            animate={{ 
                              opacity: 1,
                              y: 0,
                              x: 0,
                              scale: 1
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 180,
                              damping: 12,
                              mass: 1
                            }}
                            className="text-2xl font-bold text-primary relative z-50"
                          >
                            {project.title}
                          </motion.h3>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <motion.p 
                      className="text-muted-foreground mb-4 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    
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
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}