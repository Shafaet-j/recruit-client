import React from "react";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="p-10 flex flex-col text-left gap-5 z-20 bg-white w-40 shadow">
      <NavLink className=" font-medium text-gray-900" to="/">
        Home
      </NavLink>
      <NavLink className=" font-medium text-gray-900" to="/blog">
        Blog
      </NavLink>
    </div>
  );
};

export default MobileMenu;
