import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const projects = [
    {
      title: 'PPE Detection for Construction',
      description:
        'A custom Neural Network architecture and trained model for end-to-end detection and verification of whether individuals are wearing correct PPE.',
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
        'A personal project showcasing experiments with web frameworks and tools. Includes useful resources for getting started with web development.',
      imageUrl: '/images/project-gldk-components.png',
      technologies: ['React', 'Next.js', 'TypeScript'],
      learnMoreUrl: 'https://github.com/gldkhoward/GldkWebComponents',
    },
    {
      title: 'Uni Scheduler.io',
      description:
        'An open-source ML timetabling system that generates optimal timetable selections based on user preferences.',
      imageUrl: '/images/project-uni-scheduler.png',
      technologies: ['Machine Learning', 'Python', 'Django'],
      githubUrl: 'https://github.com/gldkhoward/UniScheduler.io',
    },
    {
      title: 'GoFur',
      description:
        'A B2B online marketplace for craft brewers, aimed at streamlining sales, inventory, and integration processes.',
      imageUrl: '/images/gofur.png',
      technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://www.gofur.com.au/', // New live site URL field
    },
    {
      title: 'Autonomous Steering for Audi R8',
      description:
        'Developed an autonomous steering system using ROS2 for an Audi R8 in a simulated environment.',
      imageUrl: '/images/project-audi-r8.png',
      technologies: ['ROS2', 'Python', 'Computer Vision'],
      githubUrl: 'https://github.com/41012/pfms-2024a-gldkhoward',
    },
    {
      title: 'Machine Learning Espresso Classifier',
      description:
        'Created a device that classifies espresso coffee using machine learning algorithms and embedded systems.',
      imageUrl: '/images/project-espresso.png',
      technologies: ['Python', 'Machine Learning', 'Embedded Systems'],
      githubUrl: 'https://github.com/yourusername/espresso-classifier',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-orange-400">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row space-y-8 md:space-x-16">
              <div className="md:w-1/2">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg hover:shadow-orange-300 transition-shadow duration-300"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-orange-400">{project.title}</h3>
                <p className="mt-2 text-gray-500">{project.description}</p>
                <p className="mt-2 text-gray-500">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
                <div className="mt-4 space-x-4">
                  {project.githubUrl && (
                    <Button asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="hover:text-orange-400"
                      >
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.learnMoreUrl && (
                    <Button asChild>
                      <a href={project.learnMoreUrl} target="_blank" className="hover:text-orange-400">
                        Learn More
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" className="hover:text-orange-400">
                        Live Site
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
