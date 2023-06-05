import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";

/* eslint-disable */
const fetchGig = async (userId) => {
  const response = await request.get(`/users/${userId}`);
  return response.data.user;
};

const GigCard = ({ item }) => {
  // const { isLoading, error, data } = useQuery(
  //   ["gigUser"],
  //   () => fetchGig(item.userId),
  //   {
  //     onSuccess: (data) => {
  //       console.log("Fetched gig data:", data.username);
  //     },
  //   }
  // );
  // console.log(item.userId);

  const { isLoading, error, data } = useQuery([item.userId], () =>
    request.get(`/users/${item.userId}`).then((res) => {
      return res.data.user;
    })
  );

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "something went wrong "
          ) : (
            <div className="user">
              <img src={data.img || "../img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}

          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                String(Math.round(item.totalStars / item.starNumber))}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
