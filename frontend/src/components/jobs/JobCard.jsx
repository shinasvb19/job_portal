import React from "react";

const JobCard = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] hidden md:flex flex-col   h-auto min-h-[100px] mb-10 w-[700px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-xl  md:sticky  md:top-32">
        <div className="">
          <h1 className="font-bold pt-4 text-xl">Recommended for you</h1>
          <h1 className="font-light text-xs">
            based on your profile and search history
          </h1>
        </div>
        <div className="w-700px h-auto min-h-[100px] bg-white border-b-2 mt-4 ">
          <h1>assasss</h1>
        </div>
        <div className="w-700px h-auto min-h-[100px] border-b-2"></div>
      </div>
    </div>
  );
};

export default JobCard;
