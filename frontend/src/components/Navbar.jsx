import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/signup");
  };
  const [nav, setNav] = useState(true);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-[#EDF3F5] fixed top-0 z-50 w-full">
      <div className="flex items-center h-24 max-w-[1350px] mx-auto  px-4 justify-between">
        <h1 className="w-full text-3xl font-bold">Dream</h1>
        <ul className="hidden md:flex">
          <li className="p-6">
            <Link to="/posts">posts</Link>
          </li>
          <li className="p-6">
            <Link to="/jobs">jobs</Link>
          </li>
          <li className="p-6">
            <Link to="/profile">Profile</Link>
          </li>

          <li className="p-6">Contact</li>
          <li className="p-6">
            {user ? (
              <button
                className="bg-[#212A2D] h-8  text-white rounded-2xl w-32 "
                onClick={(e) => {
                  dispatch(logOut());
                }}
              >
                logout
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/signin");
                }}
              >
                signin
              </button>
            )}
          </li>
          {!user && (
            <button
              onClick={handleSubmit}
              className=" bg-[#212A2D] mt-4 h-12 text-white rounded-2xl w-40 "
            >
              sign up
            </button>
          )}
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={25}></AiOutlineMenu>
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r z-10 h-full border-r-grey-900 bg-white ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold m-8">Dream</h1>
          <ul className="uppercase p-4">
            <li className="p-6 border-b border-gray-400">Jobs</li>
            <li className="p-6 border-b border-gray-400">Profile</li>
            <li className="p-6 border-b border-gray-400">Posts</li>
            <li className="p-6 border-b border-gray-400">Contact</li>
            <li className="p-6 border-b border-gray-400"></li>
            <li onClick={handleSubmit} className="p-6  w-60 ">
              sign up
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
