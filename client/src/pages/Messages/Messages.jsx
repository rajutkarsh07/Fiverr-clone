import React from "react";
import "./Messages.scss";

const Messages = () => {
  const handleDelete = () => {
    console.log("delete button clicked");
  };

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
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

export default Messages;
