import React from "react";

const Search = () => {
  return (
    <div className=" relative py-8">
      <input className=" max-w-[400px] h-[45px] rounded-l-xl" type="text" />

      <button className="inline-block py-2 bg-[#00cc99] max-width-[100px] lg:w-[100px] h-[45px] text-white rounded-r-xl">
        search
      </button>
    </div>
  );
};

export default Search;
