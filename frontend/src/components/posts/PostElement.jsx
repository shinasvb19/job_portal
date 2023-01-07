import React, { useState } from "react";
import { FcStackOfPhotos, FcVideoFile, FcKindle } from "react-icons/fc";
import Modal from "react-modal";
import FileUploadModal from "../modals/FileUploadModal";
const PostElement = ({ updateEvent }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#FFFFFF] hidden md:flex flex-col  h-[100px] mb-14 w-[450px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-lg  md:fixed  md:top-24">
      <h1 className="mt-4 ml-4 font-bold">Your posts</h1>
      <ul className="mt-4 flex">
        <li className="text-2xl ml-2">
          <FcStackOfPhotos onClick={() => setOpen(true)} />
        </li>
        <li onClick={() => setOpen(true)}>photos</li>
        <FileUploadModal
          open={{ open, updateEvent }}
          onClose={() => setOpen(false)}
        />
        <li className="text-2xl ml-2">
          <FcVideoFile />
        </li>
        <li>Videos</li>
        <li className="text-2xl ml-2">
          <FcKindle />
        </li>
        <li>Job posts</li>
      </ul>
    </div>
  );
};

export default PostElement;
