import React from "react";
const IconCards = ({ item }) => {
  return (
    <>
      <div className="bg-[#EDF3F5] flex flex-col items-center justify-center h-[180px] w-[150px] mx-auto my-8 px-4  rounded-lg">
        <div className="bg-[#ffff] mt-3 h-[100px] w-[100px] rounded-full flex items-center justify-center">
          <h1>{item.component}</h1>
        </div>
        <div className="mt-1 h-[30px] text-xs text-center pt-3 flex w-[30px] items-center justify-center">
          <h1>{item.desc}</h1>
        </div>
      </div>
    </>
  );
};

export default IconCards;
