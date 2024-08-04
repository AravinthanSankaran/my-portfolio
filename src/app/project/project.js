import Image from "next/image";
import React from "react";
import Link from "next/link";
import Image1 from "../../../public/images/dishdiscoveryapp.png";
import Image2 from "../../../public/images/stonezenconstruction.png";
import Image3 from "../../../public/images/learnnanomind.png";
import Image4 from "../../../public/images/playnanomind.png";
import Image5 from "../../../public/images/lmslearnpage.png";

const projectData = [
  {
    id: 1,
    title: "DishDiscovery App",
    image: Image1,
    content:
      "Explore culinary delights with DishDiscovery. Built with Next.js, Tailwind CSS, and API data fetching, it offers a responsive, seamless experience for home cooks and food enthusiasts across all devices.",
    tech: "Nextjs/Reactjs, Tailwind CSS, Fake REST API",
    git: "https://github.com/AravinthanSankaran/dish-discovery-app",
    live: "https://recipe-discovery.netlify.app/",
  },
  {
    id: 2,
    title: "SiteBuilder LandingPage",
    image: Image2,
    content:
      "Showcase my construction projects with Stonezen. Built using Next.js, Tailwind CSS, and React Scroll, it offers a responsive design, interactive slider, and smooth scrolling for a seamless user experience.",
    tech: "Nextjs/Reactjs, Tailwind CSS",
    git: "https://github.com/AravinthanSankaran/stonezen_construction",
    live: "https://stonezenconstruction.netlify.app/",
  },
  {
    id: 3,
    title: "LMS - Wordpress (official)",
    image: Image3,
    content:
      "Developed with WordPress and Tutor LMS, this prototype serves as a foundation for reverse engineering, enabling a comprehensive learning management system with powerful features and a user-friendly interface.",
    tech: "WordPress, Tutor-LMS, Reverse Engineering",
    live: "https://learn.nanominds.io/",
  },
  {
    id: 4,
    title: "IoT - For (official Product)",
    image: Image4,
    content:
      "Our IoT product uses Socket.IO for real-time communication and temporary OTP for secure login. With reusable UI components built with Tailwind CSS and React.js, it ensures seamless and secure access.",
    tech: "Socket-IO, Nextjs/Reactjs, Tailwind CSS",
    live: "https://play.nanominds.io/",
  },
  {
    id: 5,
    title: "LMS Homepage",
    image: Image5,
    content:
      "Our LMS homepage, built with Next.js and Tailwind CSS, includes a popup call button, chatbot, and MongoDB-connected enquiry form for secure data storage, ensuring a seamless, interactive user experience.",
    tech: "Nextjs/Reactjs, Tailwind CSS, Express, MongoDB, React-Form-Hook",
    git: "https://github.com/AravinthanSankaran/LMS_homepage",
    live: "https://lmslearnmore.netlify.app/",
  },
];

function Project() {
  return (
    <>
      <section id="project" className="min-h-screen">
        <div className="container mx-auto">
          <div className="text-gray-700 font-semibold text-4xl md:text-5xl text-center mb-8 border-b-4 py-8 border-yellow-400 w-fit mx-auto pb-2">
            Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 animate-up-down">
            {projectData.map((data) => (
              <div
                key={data.id}
                className="p-3 bg-gray-600 text-white border-4 border-yellow-400 rounded-lg overflow-hidden"
              >
                <Image src={data.image} width={2500} height={2500} />
                <h3 className="py-3 text-2xl font-semibold">{data.title}</h3>
                <p>{data.content}</p>
                <h4 className="text-xl font-semibold mt-4">Tech-Skills</h4>
                <div className="ml-5 mb-9">
                  <p>{data.tech}</p>
                </div>
                <div className="flex gap-3">
                  {data.live && (
                    <Link
                      href={data.live}
                      target="_blank"
                      className="bg-yellow-400 px-4 py-2 rounded-md cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                      Go Live
                    </Link>
                  )}
                  {data.git && (
                    <Link
                      href={data.git}
                      target="_blank"
                      className="bg-yellow-400 px-4 py-2 rounded-md cursor-pointer hover:-translate-y-2 transition-all duration-300 !bg-transparent !border-primary !border-2"
                    >
                      Git Link
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
