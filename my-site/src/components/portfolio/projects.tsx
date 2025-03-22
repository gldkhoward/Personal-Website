"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Info } from 'lucide-react';

export default function Projects() {
  const projects = [
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
      technologies: ['Cable-Driven Robotics', 'Mechanics', 'Embedded Systems'],
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
      title: 'Uni Scheduler.io',
      description:
        'Ongoing open-source ML timetabling system project that generates optimal timetable selections based on user preferences.',
      imageUrl: '/images/unisched.png',
      technologies: ['Machine Learning', 'Python', 'Django'],
      githubUrl: 'https://github.com/gldkhoward/UniScheduler.io',
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
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative h-64 md:h-auto md:w-1/2">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div 
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-40' : 'opacity-0'
                    }`}
                  />
                </div>
                
                <div className="p-6 md:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-auto pt-4">
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}