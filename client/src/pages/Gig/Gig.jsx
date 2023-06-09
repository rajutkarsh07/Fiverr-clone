import React, { useState } from "react";
import "./Gig.scss";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive, projects } from "../../data";

import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";

const fetchGigs = async (id) => {
  const response = await request.get(`/gigs/single/${id}`);
  return response.data;
};

const Gig = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [data, setData] = useState({});

  const { isLoading, error, refetch } = useQuery(["gig"], () => fetchGigs(id), {
    onSuccess: (data) => {
      setData(data.gig);
      setImages(data.gig.images);
    },
  });

  console.log(data);

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
            {!isNaN(data.totalStars / data.starNumber) && (
              <div className="stars">
                {Array(Math.round(data.totalStars / data.starNumber))
                  .fill()
                  .map((item, i) => (
                    <img src="/img/star.png" alt="" key={i} />
                  ))}
                <span>
                  {!isLoading &&
                    String(Math.round(data.totalStars / data.starNumber))}
                </span>
              </div>
            )}
          </div>
          <div className="slider">
            <Carousel responsive={responsive} className="carousel">
              {/* {projects.map((projects) => {
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
              })} */}
              {images.map((img) => {
                return <img key={img} src={img} />;
              })}
            </Carousel>
          </div>
          <h2>About This Gig</h2>
          <p>{data.desc}</p>

          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="/img/noavatar.jpg" alt="" />
              <div className="info">
                <span>random</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>
                      {!isLoading &&
                        String(Math.round(data.totalStars / data.starNumber))}
                    </span>
                  </div>
                )}
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
            <h3>{data.shortTitle}</h3>
            <h2>$ {data.price}</h2>
          </div>
          <p>{data.shortDesc}</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{data.deliveryDate} Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{data.revisionNumber} Revisions</span>
            </div>
          </div>
          <div className="features">
            {!isLoading &&
              data.features &&
              data.features.map((feature) => {
                return (
                  <div className="item" key={feature}>
                    <img src="/img/greencheck.png" alt="" />
                    <span>{feature}</span>
                  </div>
                );
              })}
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
