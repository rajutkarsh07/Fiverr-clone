import React from "react";
import "./Gig.scss";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive, projects } from "../../data";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            Fiverr {">"} Graphics & Design {">"}
          </span>
          <h1>I will create AI art for you</h1>
          <div className="user">
            <img className="pp" src="/img/noavatar.jpg" alt="" />
            <span>Utkarsh Raj</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5 </span>
            </div>
          </div>
          <div className="slider">
            <Carousel responsive={responsive} className="carousel">
              {projects.map((projects) => {
                {
                  return (
                    <div className="SlideProjects">
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
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, dolores.
          </p>

          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="/img/noavatar.jpg" alt="" />
              <div className="info">
                <span>random</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>4</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <h2>$ 50</h2>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>5 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <img src="/img/greencheck.png" alt="" />
            <span>kuch bhi</span>
          </div>
          <Link to="/">
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gig;
