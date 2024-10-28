import Image from 'next/image';
import { Button } from '@/components/ui/button';

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

  return (
    <section id="projects" className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold mb-12 text-orange-400">Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full aspect-[4/3] max-w-lg">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg shadow-lg hover:shadow-orange-300 transition-shadow duration-300"
                  />
                </div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center max-w-lg">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <p className="text-gray-500 mb-6">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {project.githubUrl && (
                    <Button asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-400 transition-colors"
                      >
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.learnMoreUrl && (
                    <Button asChild>
                      <a
                        href={project.learnMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-400 transition-colors"
                      >
                        Learn More
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-400 transition-colors"
                      >
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