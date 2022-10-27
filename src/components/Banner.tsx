import React, { useRef, useState } from "react";
import MdLogo from "../assets/M.png";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="left">
          <h1 className="main-text">
            <span>Medium</span> is a place to <br /> write read add <br />
            connect
          </h1>
          <p>
            its easy and free to post yout thinking of any topic, connect with
            millions of readers
          </p>
        </div>
        <img src={MdLogo} alt="medim banner logo" />
      </div>
      <div className="flex bg-yellow-400 justify-center items-center text-3xl font-bold">
        {[...Array(20)].map((one: string, index: number) => {
          return <span key={one + index}>^</span>;
        })}
      </div>
    </div>
  );
};

export default Banner;
