export default function AboutMe() {
  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="">
          <p className="text-lg leading-relaxed text-gray-500">
            Hey there! 👋 I&apos;m Luke, a passionate Engineer and tech enthusiast who gets unreasonably excited about robots, AI, and anything that takes &apos;what if&apos; to &apos;what next.&apos;
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            My sweet spot? Bridging the gap between ambitious ideas and real-world engineering. Whether it&apos;s training neural networks to spot safety gear, building parallel manipulators that could lift a car, or crafting ML-powered scheduling systems – I&apos;m all about pushing the boundaries of what&apos;s possible with technology.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            Currently steering product innovation at{" "}
            <a 
              href="https://www.datascopesystems.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-orange-500 transition-colors"
            >
              DataScope
            </a>{" "}
            across Australasia, but always up for an interesting side project or deep dive into emerging tech. If you&apos;re into robotics, AI, or just want to chat about the next big thing in tech,{" "}
            <a
              href="https://www.linkedin.com/in/lukehowarduts"
              target="_blank"
              rel="noopener noreferrer" 
              className="font-semibold hover:text-orange-500 transition-colors"
            >
              let&apos;s connect!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}