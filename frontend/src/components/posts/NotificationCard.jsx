import React from "react";

const NotificationCard = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] hidden md:flex flex-col items-center -z-10 h-[350px]  w-[300px] mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   px-4  rounded-lg  md:sticky  md:top-32">
        <h1 className="mt-4 font-medium">Notifications</h1>
        <ul className="mt-4 flex flex-col break">
          <li>
            <h1>Firms to hire more from campuses 1d ago</h1>
          </li>
          <li>
            <h1>Firms to hire more from campuses 1d ago</h1>
          </li>
          <li>
            <h1>Firms to hire more from campuses 1d ago</h1>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NotificationCard;
