import React from "react";
import Tindog from "../assets/portfolio/Tindog.png";
import Itrepeats from "../assets/portfolio/ITrepeats.jpg.png";
import Pizza from "../assets/portfolio/Pizza.png";
import Laundry from "../assets/portfolio/Laundry.png";
import Hackathon from "../assets/portfolio/Hackathon.png"
import IUCEE from "../assets/portfolio/IUCEE.png"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      link:"https://github.com/Shreyas4545/It-Repeats",
      src: Itrepeats,
    },
    {
      id: 2,
      link:"https://github.com/Shreyas4545/Pizza-Express.git",
      src: Pizza,
    },
    {
      id: 3,
      link:"https://github.com/Shreyas4545/Laundry-Site.git",
      src: Laundry,
    },
    {
      id: 4,
      link:"https://github.com/Shreyas4545/ksp-submission.git",
      src: Hackathon,
    },
    {
      id: 5,
      link:"https://github.com/Shreyas4545/TinDog-Master-Web-application.git",
      src: Tindog,
    },
    {
      id: 6,
      link:"https://github.com/CatalystsReachOut/IUCEE-platform-dev-backend.git",
      src: IUCEE,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b sm:pt-[4rem] from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id,link,src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            {
              id===6?<>
              <img
                src={src}
                alt=""
                className="rounded-md h-[10rem] w-[20rem] duration-200 hover:scale-105"
              />
              </>:<img
              src={src}
              alt=""
              className="rounded-md h-[10rem] duration-200 hover:scale-105"
            />
            }
              <div className="flex items-center justify-center">
                {/*<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
          </button>*/}
                <a href={link} target="_blank">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
