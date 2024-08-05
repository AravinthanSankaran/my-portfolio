import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
// import Title from "./common/Title";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <MdOutlineEmail />,
      data: "aravinthanrsnkl@gmail.com",
    },
    {
      id: 2,
      icon: <MdOutlineLocalPhone />,
      data: "7708710727",
    },
  ];
  return (
    <div id="contact" className="m-20">
      <div className="text-gray-700 font-semibold text-4xl md:text-5xl text-center mb-8 border-b-4 py-8 border-yellow-400 w-fit mx-auto pb-2">
        Contact
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {contactDetails.map((detail) => {
          return (
            <div
              key={detail.id}
              className="mx-auto flex items-center gap-4 py-3 px-4 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(-90deg, rgba(255, 255, 0, 0) 0%, rgba(255, 255, 0, 0.5) 50%, rgba(255, 255, 0, 0.8) 100%)",
              }}
            >
              <span className="text-2xl">{detail.icon}</span>
              <h2>{detail.data}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
