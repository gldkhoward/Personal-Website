"use client"

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Experience() {
    const experiences = [
      {  
    date: "Aug 2024 — Present",
    role: "Technical Project Manager",
    company: "DataScope Systems",
    companyUrl: "https://www.datascopesystems.com/",
    description: `
      Managing software implementation and development across Australia and the Asia Pacific. 
      Leading feature development based on client feedback and driving product rollouts 
      with partners like Laing O'Rourke.
    `,
    technologies: ["SQL", "Python", ".NET", "React", "Agile"],
  },
  {
    date: "Feb 2023 — Present",
    role: "Casual Academic",
    company: "University of Technology Sydney",
    companyUrl: "https://www.uts.edu.au",
    description: `
      Teaching Industrial Robotics, Additive Manufacturing and more to 300+ students annually. 
      Mentoring students on project-based learning, achieving a record breaking student satisfaction 
      result in the Engineering Faculty (Subject 41054) in Spring 2023.
    `,
    technologies: ["Educational Leadership", "C++", "MATLAB"],
  },
  {
    date: "Nov 2023 — Mar 2024",
    role: "Software Engineer",
    company: "Ergosphere.ai",
    companyUrl: "https://ergosphere.ai",
    description:
      "Contributed to software development projects focusing on artificial intelligence applications. Gained hands-on experience in programming and software development practices while collaborating with a team to deliver innovative solutions.",
    technologies: ["Python", "Machine Learning", "Full-Stack Software Development"],
  },
        {
          date: "May 2023 — Jan 2024",
          role: "Technical Assistant",
          company: "University of Technology Sydney",
          companyUrl: "https://www.uts.edu.au",
          description:
            "Maintained UTS Engineering infrastructure services, managing building access and induction systems. Streamlined stockkeeping and record keeping for faculty assets, enhancing operational efficiency and supporting faculty needs.",
          technologies: ["Infrastructure Management", "Compliance and Safety", "Process Development"],
        },
        {
            date: "Oct 2023 — Oct 2024",
            role: "Director",
            company: "ActivateUTS",
            companyUrl: "https://www.activateuts.com.au/",
            description: "Volunteer role; details not applicable.",
            technologies: [],
          },
      ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 py-16"
      aria-label="Work experience"
    >
      
      <div>
      <h2 className="text-4xl font-bold mb-12 text-primary">Experience</h2>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted lg:group-hover:shadow-md"></div>
                
                <div className="absolute top-0 right-0 z-20 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={exp.companyUrl} target="_blank" rel="noreferrer noopener" aria-label={`Open ${exp.company} website`}>
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </Link>
                </div>
                
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.date}
                >
                  {exp.date}
                </header>
                <div className="z-10 sm:col-span-6">
                  <div className="font-medium leading-snug text-foreground">
                    <Link
                      href={exp.companyUrl}
                      className="inline-flex flex-col items-start font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${exp.role} at ${exp.company}`}
                    >
                      <span className="text-lg">{exp.role}</span>
                      <span className="text-muted-foreground hover:text-primary">{exp.company}</span>
                    </Link>
                  </div>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {exp.technologies.map((tech, idx) => (
                      <li key={idx} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Link
            href="https://raw.githubusercontent.com/gldkhoward/Personal-Website/refs/heads/main/Luke%20Howard%20Resume%20.pdf"
            className="inline-flex items-center font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary font-semibold group/link text-base"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé"
          >
            <span>View Full Résumé</span>
            <ExternalLink className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
