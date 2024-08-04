import React from "react";

function about() {
  return (
    <div className="container mx-auto">
      <div className=" text-gray-700 font-semibold text-4xl md:text-5xl text-center mb-8 border-b-4 py-8  border-yellow-400 w-fit mx-auto pb-2">
        About Me
      </div>
      <div>
        {" "}
        <p className="text-gray-600 text-lg text-justify md:text-center">
          I have nearly <b>two</b> years of experience in web development,
          specializing in building applications with React, Next.js, and
          Node.js. I also work with MongoDB for database management. I've been
          involved in every stage of the development process, from gathering
          requirements to creating front and back-end components. As a{" "}
          <b>frontend and backend developer</b>, I am passionate about using
          HTML, CSS, JavaScript, and various backend technologies to create
          innovative web applications. Additionally, I have experience with
          Python for <b>Robotics Process Automation (RPA)</b>, which I consider
          a secondary focus. I am always looking for new technologies to grow
          and apply my skills in both frontend and backend development.
        </p>
      </div>
      <div className="">
        <h3 className=" text-gray-700 font-semibold text-4xl md:text-5xl text-center mb-8 border-b-4 py-8  border-yellow-400 w-fit mx-auto pb-2">
          Personal Details
        </h3>
        <div className="mt-">
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-evenly items-center gap-8 text-gray-600">
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
