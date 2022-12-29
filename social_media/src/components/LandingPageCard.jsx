import React from "react";

const LandingPageCard = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col items-center justify-end h-[350px] mb-10 w-[300px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-lg">
        <div className="h-[100%] w-[100%] flex flex-col justify-center">
          <h1>MERN</h1>
          <h1 className="text-2xl font-bold">
            Web Developer <br />
            Full stack
          </h1>
          <h1 className="pt-2">Bangloore</h1>
          <h1 className="text-[#275b2d] pt-6 font-bold">Apply now</h1>
        </div>
        <div className="bg-[#F6F6F6] flex w-[300px] h-[100px] items-center justify-center">
          <h1 className="font-bold">Adobe India</h1>
        </div>
      </div>
    </>
  );
};

export default LandingPageCard;
