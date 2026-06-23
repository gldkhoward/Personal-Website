"use client"

import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const experienceRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Detect if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Intersection Observer for mobile scroll-triggered animations
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          
          if (entry.isIntersecting) {
            // Find the experience item closest to center of viewport
            const rect = entry.boundingClientRect;
            const viewportCenter = window.innerHeight / 2;
            const itemCenter = rect.top + rect.height / 2;
            const distanceFromCenter = Math.abs(itemCenter - viewportCenter);
            
            // Only trigger if this item is closest to center
            const isClosestToCenter = experienceRefs.current.every((ref, idx) => {
              if (!ref || idx === index) return true;
              const refRect = ref.getBoundingClientRect();
              const refCenter = refRect.top + refRect.height / 2;
              const refDistance = Math.abs(refCenter - viewportCenter);
              return distanceFromCenter <= refDistance;
            });
            
            if (isClosestToCenter) {
              setHoveredIndex(index);
            }
          } else {
            // Only clear if this was the active item
            if (hoveredIndex === index) {
              setHoveredIndex(null);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isMobile, hoveredIndex]);

  const experiences = [
  {
    date: "Aug 2025 — Apr 2026",
    role: "Co-Founder & CTO",
    company: "Lecxa",
    companyUrl: "https://www.lecxa.com.au/",
    description: `
      Built a frictionless inventory management system for small to medium businesses. There's a huge gap in this space for systems that just work, are low touch and easy to use. Lecxa is that system — an inventory manager for your business, not one you need to hire an inventory manager to maintain. Took it 0→1 into a revenue-generating SaaS, owning the technical architecture and product direction as CTO.
    `,
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Vercel", "AWS", "Python"],
  },  
  {
    date: "Feb 2023 — Present",
    role: "Sessional Academic & Subject Developer",
    company: "University of Technology Sydney",
    companyUrl: "https://www.uts.edu.au/about/faculties/engineering-and-information-technology/mechanical-and-mechatronic-engineering",
    description: `
      I learn through teaching. It started in high school helping classmates with concepts, and turned into my first teaching contract off the back of strong results. Since then I've taught across 8 subjects at UTS — these days Industrial Robotics and Additive Manufacturing to 300+ students a year — built lecture, tutorial and lab content from scratch, and earned the highest student satisfaction result ever recorded for a FEIT subject.
    `,
    technologies: ["Educational Leadership", "Robotics", "Additive Manufacturing", "CAD"],
  },
  {  
    date: "Aug 2024 — Aug 2025",
    role: "Technical Project Manager",
    company: "DataScope Systems",
    companyUrl: "https://www.datascopesystems.com/",
    description: `
      This was an interesting side quest. During my final year I was approached about an opportunity with DataScope — they needed a quick learner to onboard and kickstart some projects using their software in Australia. Next thing I know I'm in Chester, UK for over a month, then back home running implementation and support for APAC clients. As the only employee in the region, I'll be honest, it was isolating at times — managers and colleagues were asleep when I had to make the big calls. But it taught me to back myself, operate with full autonomy, and ship independently, which is something I lean on every day now.
    `,
    technologies: ["SQL", "Python", ".NET", "React", "Agile"],
  },
  {
    date: "Nov 2023 — Mar 2024",
    role: "Software Engineer",
    company: "Ergosphere.ai",
    companyUrl: "https://ergosphere.ai",
    description:
      "My first professional software role — and the one that made me realise I'm a software-mechatronics engineer at heart. As a mechatronics engineer you get a taste of a lot of disciplines; this is where I learnt software was mine. It piqued my interest in machine learning and led me to enrol in a Computer Science sub-major in Data Analytics and Machine Learning to chase it further.",
    technologies: ["Python", "Machine Learning", "Full-Stack Software Development"],
  },
  {
    date: "Oct 2023 — Oct 2024",
    role: "Director",
    company: "ActivateUTS",
    companyUrl: "https://www.activateuts.com.au/",
    description: "I am one of the BIGGEST advocates for student experience/involvement at university. ActivateUTS is the social lifeblood of UTS, a not-for-profit organisation that looks after on-campus events, activities, societies and facilities. I was fortunate enough to be elected as a Director to help manage the organisation and help steer policy and direction in alignment with what students wanted.",
    technologies: [],
  },
        {
          date: "May 2023 — Jan 2024",
          role: "Technical Assistant",
          company: "University of Technology Sydney",
          companyUrl: "https://www.uts.edu.au",
          description:
            "Ever wondered how/who organises desks, equipment, supplies and card access within an engineering faculty, turns out a team of 3 people (of which I was one for this stint). I worked as a technical team member to organise and maintain lab/general spaces for UTS FEIT. If you wanted card access for a lab or space, you emailed our team (honestly, a little surreal doing this as a full-time student myself).",
          technologies: ["Infrastructure Management", "Compliance and Safety", "Process Development", "PowerBI"],
        },
        {
          date: 'Oct 2022 - May 2023', 
          role: "Bar Manager",
          company: "The Underground + The Loft",
          companyUrl: "https://theundergroundsydney.com.au/whats-on/",
          description: <>I was skeptical on including this one, but it was a cracker experience/story, a student managing a student bar, who&apos;s idea was that? Long story short, I managed 2 bars, a team of 20+ staff and the budget that came with it. It was a blast, we ran the <a href="https://www.mediaweek.com.au/sxsw-sydney-officially-launches-with-sydney-event/" target="_blank" rel="noreferrer noopener" className="text-primary hover:underline">first launch event for SXSW in Aus</a>, concerts with over 600 people and most importantly provided a revamped space for students to socialise and unwind. I learnt a lot about managing people, venues and the importance of having a good team.</>,
          technologies: ["Event Management", "Venue Management"],
        }
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
            <li 
              key={index} 
              ref={(el) => { experienceRefs.current[index] = el; }}
              data-index={index}
              className="mb-12"
            >
              <div 
                className={`group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${
                  hoveredIndex === index ? 'opacity-100' : ''
                }`}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              >
                <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${
                  hoveredIndex === index ? 'bg-muted shadow-md' : ''
                }`}></div>
                
                <div className={`absolute top-0 right-0 z-20 p-1 transition-opacity ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
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
        {/* <div className="mt-12">
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
        </div> */}
      </div>
    </section>
  );
}
