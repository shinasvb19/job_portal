import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/posts/NotificationCard";
import PostCard from "../components/posts/PostCard";
import ProfileCard from "../components/posts/ProfileCard";

const PostsPage = () => {
  return (
    <div className="mt-32 md:mt-0">
      <Navbar />
      <div className="grid  grid-cols-1 lg:grid-cols-3 mt-8 max-w-[1200px] mx-auto">
        <ProfileCard />
        <div className="mt-32">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        <NotificationCard />
      </div>
      <Footer />
    </div>
  );
};

export default PostsPage;
