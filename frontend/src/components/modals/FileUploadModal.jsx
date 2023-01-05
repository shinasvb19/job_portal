import React, { useRef } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
const Register_style = {
  position: "fixed",
  top: "50%",
  left: "50%",

  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const overlay_style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgb( 0, 0, 0, .7 )",
  zIndex: 1000,
};

const FileUploadModal = ({ open, onClose }) => {
  const imageInput = useRef(null);
  if (!open) return null;
  return (
    <>
      <div style={overlay_style}>
        <div
          className="flex flex-col w-[500px] h-[700px] rounded-3xl"
          style={Register_style}
        >
          <div
            className="font-extrabold flex justify-between   w-[100%] mb-12"
            onClick={onClose}
          >
            <h1 className="font-extrabold text-lg">Create post </h1>
            <AiFillCloseSquare className="font-extrabold text-xl" />
          </div>

          <textarea
            className="focus:outline-0   w-98 h-20 rounded-2xl"
            placeholder=" What's on your mind...."
          />
          <div className="w-[400px] h-[350px] flex  border-zinc-300 border-2 rounded-2xl items-center justify-center">
            <div
              className="w-[370px] h-[320px] flex flex-col bg-[#f6f6f6]  rounded-2xl items-center justify-center"
              onClick={() => imageInput.current.click()}
            >
              <BsImages className="text-[30px]" />
              <h1>Add photos</h1>
            </div>
          </div>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              console.log(image);
            }}
            type="file"
            id="file"
            ref={imageInput}
            style={{ display: "none" }}
            accept="image/x-png,image/gif,image/jpeg"
          />
        </div>
      </div>
    </>
  );
};

export default FileUploadModal;
