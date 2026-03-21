"use client"

export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hi there! 👋 I&apos;m Luke. After taking a hard pivot out of the corporate scene last year, I co-founded a startup that&apos;s now making revenue and transforming inventory management for small businesses. I helped build out some of the best hackerhouses in Australia, and started a free, open-access hardware space in Sydney for builders, artists, and tinkerers to create physical things.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A lot has changed over the past year, but what hasn&apos;t is a deep love for creation -{'>'} taking things from zero to one. I love technology, I love problem solving, and I love shipping things into the real world. I&apos;m someone who does the thing, not someone who talks about doing the thing.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Currently building and scaling{" "}
            <a
              href="https://www.lecxa.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              Lecxa
            </a>{" "}
            and{" "}
            <a
              href="https://o1lab.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              o1lab
            </a>
            , but always up for an interesting project or deep dive into new tech. If you&apos;re into robotics, AI, aus startups, or just want to chat -{'> '}
            <a
              href="https://www.linkedin.com/in/lukehowarduts"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              let&apos;s connect.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}