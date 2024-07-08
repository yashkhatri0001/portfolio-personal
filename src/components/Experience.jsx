import React from "react";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: "/images/phplogo.png",
      name: "Php",
    },
    {
      id: 2,
      logo: "/images/css.jpg",
      name: "CSS",
    },
    {
      id: 3,
      logo: "/images/java.png",
      name: "Java",
    },
    {
      id: 4,
      logo: "/images/javascript.png",
      name: "JavaScript",
    },
    {
      id: 5,
      logo: "/images/c++logo.png",
      name: "C++",
    },
    {
      id: 6,
      logo: "/images/clangauge.png",
      name: "c-language",
    },
    {
      id: 7,
      logo: "/images/mysql.png",
      name: "MySql",
    },
  ];

  return (
    <div id="experience"
      name="Experiance"
      className="section max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;