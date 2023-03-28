import React, { useState } from "react";
import "./Featured.scss";
import { search, girl } from "../index";

function Featured() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    console.log(`you searched ${input} on searchbox`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={search} alt="" />
              <input
                type="text"
                placeholder="I want a new website"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={girl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
