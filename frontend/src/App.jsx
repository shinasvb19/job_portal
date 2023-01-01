import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Jobs from "./pages/Jobs";
import LandingPage from "./pages/LandingPage";
import PostsPage from "./pages/PostsPage";
import ProfilePage from "./pages/ProfilePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
