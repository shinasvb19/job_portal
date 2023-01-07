import React from "react";
import { AiOutlineHeart, AiOutlineComment, AiFillEdit } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
const Like = ({ liked }) => {
  return (
    <div>
      <div className=" w-full h-[50px] font-extrabold text-2xl flex">
        <button
          className="flex mx-auto justify-between"
          onClick={(e) => {
            liked.updateLike();
          }}
        >
          {liked.liked ? <FcLike /> : <AiOutlineHeart />}

          <div className="font-medium ml-1 text-lg">like</div>
        </button>
        <div className="flex mx-auto justify-between">
          <AiOutlineComment />

          <div className="font-medium ml-1 text-lg">comment</div>
        </div>
        <div className="flex mx-auto justify-between">
          <AiFillEdit />
          <div className="font-medium ml-1 text-lg">edit</div>
        </div>
        <div className="flex mx-auto justify-between">
          <FaShareAlt className="text-lg mt-1" />
          <div className="font-medium ml-1 text-lg">share</div>
        </div>
      </div>
    </div>
  );
};

export default Like;
