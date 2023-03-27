import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Add,
  Gig,
  Gigs,
  Login,
  Message,
  Messages,
  MyGigs,
  Orders,
  Register,
  Error,
} from "./pages/index";

import { Navbar, Footer } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Add />} />
          <Route path="/" element={<Gig />} />
          <Route path="/" element={<Gigs />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Message />} />
          <Route path="/" element={<Messages />} />
          <Route path="/" element={<MyGigs />} />
          <Route path="/" element={<Orders />} />
          <Route path="/" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
