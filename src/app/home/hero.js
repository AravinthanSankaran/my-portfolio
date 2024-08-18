import Image from "next/image";
import Link from "next/link";
import Hero from "../../../public/images/web-tech.png";

export default function HeroSection() {
  return (
    <div className="text-gray-700 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-12 lg:flex md:items-center mt-10">
        <div className="w-full mt-20 md:mt-0 lg:w-1/2">
          <p className="text-yellow-400 text-base md:text-xl">
            <span className="mr-2">➜</span> Hey There, I’m<span className="text-gray-700 font-semibold"> Aravinthan R S</span>
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 animate-up-down flex-shrink-0">
           <span className="text-yellow-400">Software</span> Developer
          </h1>
          <p className="text-gray-600 mt-4">
            I am dedicated to delivering high-quality software that meets user
            needs and business objectives. I strive to contribute to the success
            of every project, whether working independently or as part of a
            team.
          </p>
          <div className="mt-8 flex space-x-4 items-center place-content-center lg:place-content-start">
            <Link
              href="/resume/Aravinthan-R-S-Resume.pdf"
              className="bg-yellow-400 text-gray-900 text-center px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500"
              download="Aravinthan-Developer-CV"
              target="_blank"
            >
             Get My Resume
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <div className="border-4 border-yellow-400 rounded-lg overflow-hidden">
            <Image
              src={Hero}
              alt="Profile Picture"
              width={400}
              height={400}
              className="w-64 h-64 lg:w-80 lg:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
