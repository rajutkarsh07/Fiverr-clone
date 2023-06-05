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

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/gig/:id" element={<Gig />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/message/:id" element={<Message />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/mygigs" element={<MyGigs />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
