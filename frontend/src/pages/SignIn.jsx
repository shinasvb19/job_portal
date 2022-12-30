import React from "react";
import Navbar from "../components/Navbar";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col w-[300px] h-[300px] items-center pt-10 mx-80 my-32  ">
        <h1 className="text-[30px] font-bold mb-10">Sign In</h1>
        <div className=" flex items-center w-[400px] h-[30px] border-b-2 mb-20 border-gray-500 rounded">
          <input
            type="text"
            className="w-[100%] h-[100%] focus:outline-0 text-clip"
            placeholder="example@gmail.com"
          />
        </div>
        <div className=" flex items-center w-[400px] h-[30px] border-b-2  border-gray-500 rounded">
          <input
            type="password"
            className="w-[100%] h-[100%] focus:outline-0 text-clip"
            placeholder="password"
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
