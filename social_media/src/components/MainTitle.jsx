import React from "react";
import Search from "./Search";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa";
const MainTitle = () => {
  return (
    <>
      <div className="items-center  max-w-[1240px] mx-auto   px-6">
        <h1 className="font-bold  sm:text-5xl md:text-6xl text-4xl leading-tight">
          New <span className="text-[#00cc99]">offers</span> <br /> are waiting
          <br />
          for you
        </h1>
        <h1 className="font-bold pt-5 text-lg text-[#3f3f3f]">
          Find a new job
        </h1>
        <Search />
        <div className="flex justify-between max-w-[200px] mt-4">
          <h1 className="font-bold">Follow us</h1>
          <AiFillInstagram className="text-[30px]" />
          <AiFillFacebook className="text-[30px]" />
          <FaSnapchat className="text-[30px]" />
        </div>
      </div>
    </>
  );
};

export default MainTitle;
