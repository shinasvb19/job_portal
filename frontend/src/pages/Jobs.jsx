import React from "react";
import JobCard from "../components/jobs/JobCard";
import Navbar from "../components/Navbar";

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="my-32 flex mx-auto items-center justify-center max-w-[1250px]">
        <JobCard />
      </div>
    </div>
  );
};

export default Jobs;
