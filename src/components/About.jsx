import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Hi there! I'm Shreyas, a full stack web developer and passionate programmer. I love coding and I'm always eager to learn new technologies and programming languages.
        I started my journey as a developer by learning the basics of HTML, CSS, and JavaScript. As I progressed, I became interested in back-end development and started exploring frameworks like Node.js.
        Over the time, I've honed my skills in a variety of areas, including front-end development, back-end development, database management, and deployment. I've also worked on a range of projects, from simple websites to complex web applications.
        If you're looking for a skilled and passionate developer who's dedicated to delivering high-quality work, look no further. Let's work together to bring your ideas to life! 
        </p>
      </div>
    </div>
  );
};

export default About;
