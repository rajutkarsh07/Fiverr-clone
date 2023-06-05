import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import { useLocation } from "react-router-dom";

const fetchGigs = async (search, min, max, sort) => {
  const response = await request.get(
    `gigs?${search}&min=${min}&max=${max}&sort=${sort}`
  );
  return response.data;
};

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [gigs, setGigs] = useState([]);
  const minRef = useRef();
  const maxRef = useRef();

  const location = useLocation();
  // console.log(location);

  const { isLoading, error, refetch } = useQuery(
    ["gigData"],
    () =>
      fetchGigs(
        location.search,
        minRef.current.value,
        maxRef.current.value,
        sort
      ),
    {
      onSuccess: (data) => {
        setGigs(data.gigs);
      },
    }
  );

  // console.log(gigs);

  const reSort = (value) => {
    setSort(value);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    // console.log("apply button clicked");
    refetch();
  };

  // if (isLoading || isFetching) {
  //   return <h3>Loading...</h3>;
  // }

  // if (isError) {
  //   return <h3>{error.message}</h3>;
  // }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">{"Fiverr > Graphics & Design >"}</span>
        <h1>AI Artists</h1>
        <p>
          {
            "Explore the boundaries of art and technology with Fiverr's AI artists"
          }
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? error.message
            : gigs.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
