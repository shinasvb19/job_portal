import React from "react";

const ProfileMain = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] flex flex-col   h-[350px] mb-10 w-[550px]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]     rounded-lg lg:sticky  md:top-32">
        <div className="bg-[#ff0000] h-[80px]  w-full"></div>
        <div className="absolute w-[90px] h-[90px] border-4 border-[#ffff] ml-10 mt-10 bg-[#00b3ef] rounded-full "></div>
        <h1 className="relative mt-14 font-bold tracking-wider ml-4">
          SHINAS VB
        </h1>
        <h1 className="text-xs mt-1 text-opacity-0 ml-4">
          self trained MERN stack developer
        </h1>
        <ul className="flex text-sm ml-4">
          <l1 className="mr-2">followers</l1>
          <l1 className="mr-2">28</l1>
          <l1 className="mr-2">profile visits</l1>
          <l1 className="mr-2">28</l1>
        </ul>
        <l1 className="ml-4 font-bold text-[#00b3ef]">Contact us</l1>
        <div className="w-[200px] flex h-[40px] bg-black rounded-lg ml-4 text-white mt-4 justify-center items-center">
          <h1>Add to profile</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
