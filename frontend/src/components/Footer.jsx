import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#EDF3F5]">
      <div className=" md:flex  h-[250px] max-w-[900px] mx-32 md:mx-auto  px-4  md:justify-around py-10 font-semibold ">
        <ul>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul>
          <li>Accesibility</li>
          <li>Policy</li>
          <li>services</li>
          <li>Security</li>
        </ul>
        <ul>
          <li>Profile</li>
          <li>Report</li>
        </ul>
        <div></div>
        <ul className="md:flex hidden  justify-between w-64">
          <li>
            <h1 className="font-bold">Follow us</h1>
          </li>

          <li>
            <AiFillInstagram className="text-[30px]" />
          </li>
          <li>
            <AiFillFacebook className="text-[30px]" />
          </li>
          <li>
            <FaSnapchat className="text-[30px]" />
          </li>
        </ul>
      </div>
      <h1 className="flex items-center justify-center  font-medium">
        Talent link limited © 2023 copyright
      </h1>
    </footer>
  );
};

export default Footer;
