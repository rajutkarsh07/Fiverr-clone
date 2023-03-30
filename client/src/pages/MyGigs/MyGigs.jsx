import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

const MyGigs = () => {
  const handleDelete = () => {
    console.log("delete button clicked");
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <th>img</th>
            <th>graphic design</th>
            <th>$100</th>
            <th>20</th>
            <th onClick={handleDelete}>delete</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
