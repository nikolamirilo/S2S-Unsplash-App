import React from "react";
import { Items, Hero } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Items type="all-images" />
    </div>
  );
};

export default Home;
