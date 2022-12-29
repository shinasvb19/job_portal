import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#EDF3F5]">
      <div className=" flex  h-[250px] max-w-[900px] mx-auto  px-4  justify-around py-10 font-semibold ">
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
        <ul className="flex px-10 justify-between w-64">
          <li>
            <h1 className="font-bold">Follow us</h1>
          </li>

          <li>
            <AiFillInstagram className="text-[30px]" />
          </li>
          <li>
            {" "}
            <AiFillFacebook className="text-[30px]" />
          </li>
          <li>
            <FaSnapchat className="text-[30px]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
