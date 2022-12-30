import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col items-center  h-[350px] mb-10 w-[300px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-lg lg:sticky  md:top-32">
        <div className="bg-[#ff0000] h-[80px]  w-[300px]"></div>
        <div className="absolute w-[80px] h-[80px] border-4 border-[#ffff]  mt-10 bg-[#00b3ef] rounded-full "></div>
        <h1 className="relative mt-10 font-bold tracking-wider">SHINAS VB</h1>
        <h1 className="text-xs mt-1 text-opacity-0">
          self trained MERN stack developer
        </h1>
        <div className="bg-[#F9F9F9] w-[250px] mt-4 first-letter h-[150px]">
          <div className="flex justify-between font-medium mx-8 my-4">
            <h1 className="pr-2">followers</h1>
            <h1>1K</h1>
          </div>
          <div className="flex justify-between font-medium mx-8 my-4">
            <h1 className="pr-2">following</h1>
            <h1>22</h1>
          </div>
          <div className="flex justify-between font-medium mx-8 my-2">
            <h1 className="pr-2">Freinds</h1>
            <h1>5</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
