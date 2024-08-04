import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <div className="text-lg text-white text-center py-3 bg-gray-800 ">
      <p>Created by Aravinthan @ {year.getFullYear()}</p>
    </div>
  );
};

export default Footer;
