"use client"

export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hi there! 👋 I&apos;m Luke — a founder and full-stack engineer who builds things from zero to one: software products, technical systems, and the communities around them. I co-founded{" "}
            <a
              href="https://www.lecxa.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              Lecxa
            </a>{" "}
            and took it from idea to a revenue-generating inventory platform for small businesses, helped build out some of the best hackerhouses in Australia, and founded{" "}
            <a
              href="https://o1lab.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              o1lab
            </a>{" "}
            — a free, open-access hardware lab in Sydney backed by the Blackbird Foundation.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The common thread is simple: I like technology, getting it into people&apos;s hands, and creating the ecosystem around it so others can build too. I love problem solving, I love shipping into the real world, and I&apos;m someone who does the thing, not someone who talks about doing the thing.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            These days I&apos;m bullish on Australia 🇦🇺, startups, AI, robotics, and the next generation of technical founders — and always up for an interesting project or a deep dive into new tech. If you&apos;re into any of that, or just want to chat -{'> '}
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
