import React from "react";
import laundry from "../../../projects/laundry-cover.jpg";
import shera from "../../../projects/shera-cover.png";
import mart from "../../../projects/dhaka-cover.png";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const Portfolio = () => {
  const portfolioData = [
    {
      photo: laundry,
      title: "Digital Laundry",
      description: "Automatic and dynamic laundry management system",
      frontend: "https://github.com/riandev/digital-laundry-client",
      backend: "https://github.com/riandev/digital-laundry-server",
      preview: "https://laundry-cbbd8.web.app",
    },
    {
      photo: shera,
      title: "Quary Management",
      description: "Customer Quary Management System for Shera Bangla 64",
      frontend: "https://github.com/riandev/shera-client",
      backend: "https://github.com/riandev/shera-server",
      preview: "https://shera-crm.web.app/",
    },
    {
      photo: mart,
      title: "Dhaka Mart",
      description:
        "E-commerce Management system with dynamic featurs",
      frontend: "https://github.com/riandev/dhaka-mart-client",
      backend: "https://github.com/riandev/dhaka-mart-server",
      preview: "https://e-commerce-a-10.web.app",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-center mt-5">My Work & Portfolio</h2>
        <h5 className="text-center text-secondary mt-3 mb-4">
          Obviously I'm a Web Developer. Experienced with all stages <br /> of
          the development cycle for dynamic web projects.
        </h5>
      </div>
      <div className='container'>
        <div className='row'>
          {portfolioData.map((portfolio) => (
            <PortfolioCard portfolio={portfolio}></PortfolioCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
