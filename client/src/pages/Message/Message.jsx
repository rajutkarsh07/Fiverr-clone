import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit button clicked");
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> {">"} John Doe {">"}
        </span>

        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
