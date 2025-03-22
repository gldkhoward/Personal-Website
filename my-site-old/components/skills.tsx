export default function Skills() {
    const skills = [
      'Python', 'C/C++', 'JavaScript', 'React', 'Next.js', 
      'Tailwind CSS', 'MATLAB', 'ROS/ROS2', 'FPGA Design', 
      'Embedded Systems', 'Machine Learning', 'Git', 
      'Autodesk Suite', 'Adobe Suite',
    ];
  
    return (
      <section id="skills" className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-orange-400">Skills & Tech Stack</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <li 
                key={index} 
                className="text-lg py-2 px-4 bg-gray-100 hover:bg-orange-100 rounded transition duration-300 shadow-md"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  