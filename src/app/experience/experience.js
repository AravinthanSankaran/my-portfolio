import React from "react";

const experienceData = [
    {
    id: 1,
    title: "Utasha Technologies, React Developer",
    duration: "Sep 2024 – Present",
    location: "Coimbatore, India",
    description:
      "Enhanced performance and user experience by debugging and optimizing React components. Designed reusable UI components, collaborated with backend teams for API integration, and followed agile practices. Utilized design tools like Figma/XD and managed tasks via Jira to streamline development workflows.",
    skills: ["React.js","CSS", "JavaScript", "API Integration", "Responsive Design"],
    tools: ["VS Code", "Adobe-XD", "Jira", "GitLab"],
  },
  {
    id: 2,
    title: "Iovate Technologies LLP, Software Developer",
    duration: "Oct 2022 – Aug 2024",
    location: "Coimbatore, India",
    description:
      "Built reusable, responsive UI components using React/Next.js and Tailwind CSS. Explored new tools, created PoCs, and leveraged AI tools to optimize code quality. Gained hands-on experience with Node.js, REST APIs, Docker, databases, and Postman. Worked on implementing autonomous navigation and object recognition.",
    skills: ["Next.js", "Tailwind CSS", "JavaScript", "Node.js", "MongoDB"],
    tools: ["VS Code", "Figma", "GitHub", "Canva", "Postman", "Docker", "NPM"],
  },
  {
    id: 3,
    title: "Iovate Technologies LLP, RPA Developer",
    duration: "Oct 2022 – Aug 2024",
    location: "Coimbatore, India",
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
                <h4 className="text-lg font-medium italic">{exp?.duration} || {exp?.location}</h4>
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
