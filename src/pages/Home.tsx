import React, { useContext } from "react";
import { Banner, Posts } from "../components";
const Home = () => {
  return (
    <div>
      <Banner />
      <h1 className="font-bold text-center mt-5 mb-5 underline text-3xl">
        Our intersting posts
      </h1>
      <Posts />
    </div>
  );
};

export default Home;
