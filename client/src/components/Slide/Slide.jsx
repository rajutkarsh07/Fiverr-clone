import React from "react";
import "./Slide.scss";
import { responsive, cards } from "../../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Slide = () => {
  // console.log(cards);

  return (
    <div className="slide">
      <Carousel responsive={responsive} className="carousel">
        {cards.map((cards) => {
          {
            return (
              <Link to="/" key={cards.id}>
                <div className="categoryCard">
                  <h2>hello</h2>
                  <img src={cards.img} alt="" />
                  <span className="desc">{cards.desc}</span>
                  <span className="title">{cards.title}</span>
                </div>
              </Link>
            );
          }
        })}
      </Carousel>
    </div>
  );
};

export default Slide;
