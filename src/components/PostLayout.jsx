import React from "react";
import { Link, Outlet } from "react-router-dom";

function PostLayout() {
  return (
    <>
      <Link to="/postpage/1">post 1</Link>
      <Link to="/postpage/2">post 2</Link>
      <Link to="/postpage/newpost">Newpost</Link>
      <Outlet />
    </>
  );
}

export default PostLayout;
