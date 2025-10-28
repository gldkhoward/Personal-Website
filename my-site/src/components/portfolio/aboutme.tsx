"use client"

export default function AboutMe() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hey there! 👋 I&apos;m Luke. I&apos;m a recent graduate who&apos;s taken a dive into the Tech and Startup ecosystem to follow my passion for building things and making the world a better place. 
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            I&apos;ve often been refered to as a high agency individual, someone who can operate on little input/information and produce high levels of output. Call it cracked, a nerd, or whatever label you want. I&apos;m someone who gets shit done and loves a challenge. Throw me a problem and I&apos;ll keep working till I&apos;ve solved it.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Currently building and scaling the future of inventory management at{" "}
            <a 
              href="https://www.lecxa.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              Lecxa
            </a>{" "}
            but always up for an interesting side project or deep dive into emerging tech. If you&apos;re into robotics, AI, or just want to chat about the next big thing in tech,{" "}
            <a
              href="https://www.linkedin.com/in/lukehowarduts"
              target="_blank"
              rel="noopener noreferrer" 
              className="font-semibold hover:text-primary transition-colors"
            >
              let&apos;s connect!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}