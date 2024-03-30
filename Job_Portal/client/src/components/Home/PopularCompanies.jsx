import React from "react";
import { FaApple, FaMicrosoft } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Street 10 Karachi, Pakistan",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];

  return (
    <>
      <div className="companies">
        <div className="container">
          <h3>Top Companies</h3>;
          <div className="banner">
            {companies.map((ele) => {
              return (
                <div className="card" key={ele.id}>
                  <div className="content">
                    <div className="icon">{ele.icon}</div>
                    <div className="text">
                      <p>{ele.title}</p>
                      <p>{ele.location}</p>
                    </div>
                  </div>
                  <button>Open Positions {ele.openPositions}</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCompanies;
