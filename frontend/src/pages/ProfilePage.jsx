import React from "react";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/posts/NotificationCard";
import ProfileMain from "../components/profile/ProfileMain";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-32 flex  mx-auto max-w-[1300px]">
        <ProfileMain />
        <NotificationCard />
      </div>
    </div>
  );
};

export default ProfilePage;
