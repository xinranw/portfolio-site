import React from "react";

import "./Portfolio.scss";
import groupieGroup from "./groupie-group.png";
import leafGroup from "./leaf-group.png";
import hackathonBrowser from "./hackathon-browser.png";
import meetComcastIpad from "./meetcomcast-ipad.png";

const PortfolioItem = ({ imgSrc, title, info }) => (
  <div className="col-sm-6 portfolio-item">
    <a href="">
      <img className="img-portfolio img-responsive" src={imgSrc} alt={title} />
      <h3 className="portfolio-title">{title}</h3>
      <div className="portfolio-info">
        <div className="line" />
        {info}
      </div>
    </a>
  </div>
);

const Portfolio = () => {
  const portfolioItems = [
    {
      imgSrc: groupieGroup,
      title: "Groupie App",
      info: "iOS & Backend Developer"
    },
    {
      imgSrc: leafGroup,
      title: "Leaf App",
      info: "iOS Developer"
    },
    {
      imgSrc: hackathonBrowser,
      title: "Comcast NBCUniversal Hackathon Platform",
      info: "Visual Designer & Web Developer"
    },
    {
      imgSrc: meetComcastIpad,
      title: "#MeetComcast App",
      info: "Design & Engineering Lead"
    }
  ].map(item => {
    return <PortfolioItem {...item} />;
  });

  return (
    <section id="projects" className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center portfolio-section-title-block">
            <h2 className="section-title">My Work</h2>
            <hr className="small" />
          </div>
          <div className="col-lg-12">
            <div className="row">{portfolioItems}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
