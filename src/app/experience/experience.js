import React from "react";

const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Experienced in React for building dynamic, responsive UIs, Next.js for server-side rendering (SSR) and static site generation (SSG), WordPress for content management, and Tailwind CSS for creating efficient, visually appealing designs.",
    skills: ["Nextjs/Reactjs", "Tailwind CSS", "JavaScript", "Wordpress"],
    tools: ["VS Code", "Figma", "Git", "Canva"],
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "Familiar with Node.js for building server-side applications and RESTful APIs. Basic knowledge of Express.js, MongoDB, and authentication. Learning to optimize performance and integrate frontend and backend components.",
    skills: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
    tools: ["Docker", "Postman", "Git"],
  },
  {
    id: 3,
    title: "Robotics and Automation",
    description:
      "Familiar with Robotics Process Automation (RPA) using Python3, ROS-2, and Node-RED.js. Basic understanding of OpenCV for computer vision and AI tools for improving automation and decision-making.",
    skills: ["ROS2", "Nav2", "OpenCV", "Python"],
    tools: ["Gazebo", "Rviz2"],
  },
];

function Experience() {
  return (
    <>
      {/* <section id="experience" className="min-h-screen">
        <div className="container mx-auto">
          <div className="text-gray-700 mt-20 md:mt-0 font-semibold text-4xl md:text-5xl text-center mb-8 border-b-4 py-8 border-yellow-400 w-fit mx-auto pb-2">
            Work Experience
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 animate-up-down">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="p-6 bg-gray-600 text-white border-4 border-yellow-400 rounded-lg overflow-hidden"
              >
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="py-3">{exp.description}</p>
                <h4 className="text-xl font-semibold mt-4">Skills</h4>
                <ul className="list-disc ml-5">
                  {exp.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <h4 className="text-xl font-semibold mt-4">Tools</h4>
                <ul className="list-disc ml-5">
                  {exp.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section id="experience" className="min-h-screen">
        <div className="container mx-auto">
          <div className="text-gray-800 mt-20 md:mt-0 font-semibold text-3xl md:text-4xl lg:text-5xl text-center mb-8 border-b-4 py-8  border-yellow-400 w-fit mx-auto pb-2">
            Work Experience
          </div>
          <div className="grid grid-cols-1 justify-center gap-8 animate-up-down">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col p-6 bg-gray-600 text-white border-4 border-yellow-400 rounded-lg overflow-hidden"
              >
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="py-3">{exp.description}</p>
                <div className="flex flex-row justify-evenly">
                  <div>
                <h4 className="text-xl font-semibold mt-4">Skills</h4>
                <ul className="list-disc ml-5">
                  {exp.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                </div>
                <div>
                <h4 className="text-xl font-semibold mt-4">Tools</h4>
                <ul className="list-disc ml-5">
                  {exp.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
