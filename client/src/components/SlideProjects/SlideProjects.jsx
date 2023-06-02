import React from "react";
import "../Slide/Slide.scss";
import "./SlideProjects.scss";
import { responsive, projects } from "../../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SlideProjects = () => {
  // console.log(projects);

  return (
    <div className="SlideProjects-main">
      <Carousel responsive={responsive} className="carousel">
        {projects.map((projects) => {
          {
            return (
              <div key={projects.id} className="SlideProjects">
                <img src={projects.img} alt="" />
                <div className="info">
                  <img src={projects.pp} alt="" />
                  <div className="texts">
                    <h2>{projects.cat}</h2>
                    <span>{projects.username}</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </Carousel>
    </div>
  );
};

export default SlideProjects;
