import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotificationCard from "../components/posts/NotificationCard";
import PostCard from "../components/posts/PostCard";
import PostElement from "../components/posts/PostElement";
import ProfileCard from "../components/posts/ProfileCard";
import { selectCurrentToken } from "../features/auth/authSlice";

const PostsPage = () => {
  const [clicked, SetClicked] = useState(false);

  const updateEvent = () => {
    SetClicked(!clicked);
  };

  const [posts, setPosts] = useState([]);
  const token = useSelector(selectCurrentToken);
  useEffect(() => {
    const instance = axios.create({
      baseURL: "http://localhost:5000",
      headers: { "X-Custom-Header": `${token}` },
    });
    instance.get("/post").then(function (response) {
      console.log(response.data);
      setPosts(response.data);
    });
  }, [clicked]);

  return (
    <div className="mt-32 md:mt-0">
      <Navbar />
      <div className="grid  grid-cols-1 lg:grid-cols-3 mt-8 max-w-[1300px] mx-auto">
        <ProfileCard />
        <div className="mt-32">
          <PostElement updateEvent={updateEvent} />
          {posts.map((post) => {
            return <PostCard post={post} key={post.id} />;
          })}
        </div>

        <NotificationCard />
      </div>
      <Footer />
    </div>
  );
};

export default PostsPage;
