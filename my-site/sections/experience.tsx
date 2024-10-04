import Link from "next/link";

export default function Experience() {
    const experiences = [
        {
          date: "Aug 2024 — Present",
          role: "Technical Project Manager",
          company: "DataScope Systems",
          companyUrl: "https://www.datascopesystems.com/",
          description:
            "Managed the implementation of multiple DataScope software products across Australia and Australasia, collaborating closely with Laing O'Rourke to support their software usage. Developed self-sufficiency in the role as the sole employee in the region, employing SQL and .NET technologies in an Agile work environment.",
          technologies: ["SQL", ".NET", "Agile"],
        },
        
        {
          date: "Feb 2023 — Present",
          role: "Casual Academic",
          company: "University of Technology Sydney",
          companyUrl: "https://www.uts.edu.au",
          description:
            "Involved in subject design and event management for various engineering courses. Developed communication and leadership skills, striving to empower students to achieve their best. Focused on creating engaging learning environments and fostering student success.",
          technologies: ["Educational Leadership", "Event Management"],
        },
        {
          date: "May 2023 — Jan 2024",
          role: "Technical Assistant (Infrastructure and Facilities)",
          company: "University of Technology Sydney",
          companyUrl: "https://www.uts.edu.au",
          description:
            "Maintained UTS Engineering infrastructure services, managing building access and induction systems. Streamlined stockkeeping and record keeping for faculty assets, enhancing operational efficiency and supporting faculty needs.",
          technologies: ["Infrastructure Management", "Record Keeping"],
        },
        {
          date: "Nov 2023 — Mar 2024",
          role: "Software Engineer",
          company: "Ergosphere.ai",
          companyUrl: "https://ergosphere.ai",
          description:
            "Contributed to software development projects focusing on artificial intelligence applications. Gained hands-on experience in programming and software development practices while collaborating with a team to deliver innovative solutions.",
          technologies: ["Artificial Intelligence", "Software Development"],
        },
        {
            date: "Oct 2023 — Present",
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
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200 lg:group-hover:shadow-md"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2"
                  aria-label={exp.date}
                >
                  {exp.date}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-gray-900">
                    <div>
                      <Link
                        href={exp.companyUrl}
                        className="inline-flex items-baseline font-medium leading-tight text-gray-900 hover:text-orange-500 focus-visible:text-orange-500 group/link text-base"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.role} at ${exp.company}`}
                      >
                        <span>{exp.role} · </span>
                        <span className="flex flex-row">
                           {exp.company}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px pt-2 mt-1"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-gray-700">
                    {exp.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {exp.technologies.map((tech, idx) => (
                      <li key={idx} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500">
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
            href="/resume.pdf"
            className="inline-flex items-baseline font-medium leading-tight text-gray-900 hover:text-orange-500 focus-visible:text-orange-500 font-semibold group/link text-base"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé"
          >
            <span>
              View Full <span>Résumé</span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline-block h-4 w-4 shrink-0 ml-1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
