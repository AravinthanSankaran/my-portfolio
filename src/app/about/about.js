import React from "react";

function about() {
  return (
    <div className="container mx-auto">
      <div className=" text-gray-700 font-semibold text-4xl md:text-5xl mt-20 md:mt-0 text-center mb-8 border-b-4 py-8  border-yellow-400 w-fit mx-auto pb-2">
        About Me
      </div>
      <div>
        {" "}
        <p className="text-gray-600 text-lg text-justify md:text-center">
          I&apos;m a passionate <b>web developer</b> with nearly <b>2.5 years</b> of hands-on experience in building modern web applications using <b>React, Next.js, and Node.js</b>. I specialize in crafting seamless user interfaces and Beginner Level in backend systems, with <b>MongoDB and SQL</b> as my go-to for efficient database management.

          Throughout my journey, I&apos;ve been actively involved in every phase of the development lifecycle — from requirement gathering to designing and developing <b>end-to-end solutions.</b> I well in writing <b>clean, maintainable code</b> and Good <b>Prompter</b> and a range of backend technologies to deliver impactful digital experiences.

          In addition to web development, I have experience with Python for <b>Robotic Process Automation (RPA)</b>, which complements my technical toolkit and offers automation-driven solutions.

          I&apos;m constantly exploring new tools and technologies, and I thrive on opportunities that challenge me to grow as both a frontend and backend developer.
        </p>
      </div>
      <div className="">
        <h3 className=" text-gray-700 font-semibold text-3xl md:text-4xl text-center mb-8 border-b-4 py-8  border-yellow-400 w-fit mx-auto pb-2">
          Personal Details
        </h3>
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-evenly items-center gap-8 text-gray-600 mb-5">
            <div className="text-lg text-center">
              <b>Date of Birth</b>
              <br></br> 30-12-1998
            </div>
            <div className="text-lg text-center">
              <b>Education</b>
              <br></br>
              <b>B.E.,</b> 2016-2020
            </div>
            <div className="text-lg text-center">
              <b>Certification</b>
              <br></br> Full stack developer
            </div>
            <div className="text-lg text-center">
              <b>Marital Status</b>
              <br></br> Single
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
