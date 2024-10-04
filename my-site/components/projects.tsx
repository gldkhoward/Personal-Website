import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Projects() {
  const projects = [
    {
      title: 'Autonomous Steering for Audi R8',
      description: 'Developed an autonomous steering system using ROS2 for an Audi R8...',
      imageUrl: '/images/project-audi-r8.png',
      technologies: ['ROS2', 'Python', 'Computer Vision'],
      githubUrl: 'https://github.com/yourusername/autonomous-audi-r8',
    },
    {
      title: 'Machine Learning Espresso Classifier',
      description: 'Created a device that classifies espresso coffee using machine learning...',
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
                      <a href={project.githubUrl} target="_blank" className="hover:text-orange-400">
                        GitHub
                      </a>
                    </Button>
                  )}
                  <Button asChild>
                    <a href={project.learnMoreUrl}>Learn More</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
