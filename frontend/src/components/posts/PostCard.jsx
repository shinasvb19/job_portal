import React, { useState } from "react";
import { useSelector } from "react-redux";

import Like from "./Like";
const PostCard = ({ post }) => {
  const [liked, SetLiked] = useState(false);

  const updateLike = () => {
    SetLiked(!liked);
  };

  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col shrink px-8  h-auto mb-10 min-w-[300px] py-8 max-w-[450px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  mt-12    rounded-lg ">
        <div className="flex">
          <div
            className={`mr-8 w-[50px] h-[50px] bg-[url(${post.url})] rounded-md bg-cover`}
          ></div>

          <div>
            <h1 className="font-bold text-lg">{post.details[0].name}</h1>
            <h1 className="font-normal text-xs">
              {post.details[0].followers.length} followers
            </h1>
            <h1 className="font-normal text-xs">3 day ago</h1>
          </div>
        </div>

        <h1 className="break-all font-medium text-sm pt-3 pb-4">{post.desc}</h1>
        <div className=" w-full   rounded-md bg-contain bg-no-repeat  mb-6">
          <img src={`${post.url}`} alt="" />
        </div>
        <Like liked={{ liked, updateLike }} />
      </div>
    </>
  );
};

export default PostCard;
