import React from "react";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: "/images/portfoliologo.png",
      name: "Personal-portfolio",
    },
    {
      id: 2,
      logo: "/images/ecoomercewbsitelogo.jpeg",
      name: "E-commerce website",
    },
    {
      id: 3,
      logo: "/images/instagarmlogo.jpeg",
      name: "Instagram-clone",
    },
    {
      id: 4,
      logo: "/images/bloggingwebsitelogo.jpeg",
      name: "Blogging-website",
    },
    {
      id: 5,
      logo: "/images/gymlogo.jpeg",
      name: "Gym-website",
    },
    
  ];

  return (
    <div id="portfolio"
      name="Portfolio"
      className="section max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Live
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;