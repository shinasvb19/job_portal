import React from "react";
import { AiOutlineHeart, AiOutlineComment, AiFillEdit } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
const PostCard = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col shrink px-8 h-[650px] mb-10 min-w-[350px] py-8 max-w-[400px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]     rounded-lg ">
        <div className="flex">
          <div className="mr-8 w-[50px] h-[50px] bg-[url('https://picsum.photos/200/300')] rounded-md bg-cover"></div>
          <div>
            <h1 className="font-bold text-lg">Amazon web service(aws)</h1>
            <h1 className="font-normal text-xs">75,000 Followers</h1>
            <h1 className="font-normal text-xs">3 day ago</h1>
          </div>
        </div>

        <h1 className="break-all font-medium text-sm pt-3 pb-4">
          if you want better feedback from your boss, try asking in advance,
          being specific..
        </h1>
        <div className=" w-full  h-[450px] bg-[url('https://picsum.photos/200/300')] rounded-md bg-cover  mb-6"></div>
        <div className=" w-full h-[50px] font-extrabold text-2xl flex">
          <div className="flex mx-auto justify-between">
            <AiOutlineHeart />
            <div className="font-medium ml-1 text-lg">like</div>
          </div>
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
    </>
  );
};

export default PostCard;
