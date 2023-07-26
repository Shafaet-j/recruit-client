import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };

  const [menu, setMenu] = useState(false);
  const menuClick = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className=" w-full sticky top-0 right-0 bg-white z-10 shadow">
      <nav className=" container mx-auto flex justify-between py-5 items-center px-4">
        <Link to="/">
          <h1 className=" text-3xl font-extrabold text-primary">RecruitPro</h1>
        </Link>
        <div className=" hidden lg:block">
          <div className=" flex justify-center items-center gap-8">
            <NavLink
              className=" font-medium  px-5 py-2 rounded-sm hover:text-primary"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className=" font-medium  px-5 py-2 rounded-sm hover:text-primary"
              to="/blog"
            >
              Blog
            </NavLink>
          </div>
        </div>
        <div>
          {user ? (
            <div className=" flex gap-3">
              <img
                className=" w-10 h-10 rounded-full object-cover"
                src={user?.photoURL}
                alt=""
              />
              <button onClick={handleLogOut}>LogOut</button>
            </div>
          ) : (
            <NavLink
              className=" font-medium px-5 py-2 rounded-sm hover:text-primary"
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
        <div onClick={menuClick} className=" cursor-pointer lg:hidden z-10">
          {menu ? (
            <AiOutlineClose className="h-8 w-8 text-slate-950" />
          ) : (
            <FaBars className="h-8 w-8 text-slate-950" />
          )}
        </div>
        <div
          className={`absolute right-0 duration-300 ${
            menu ? " top-[0px] opacity-100" : "-top-[236px] opacity-0"
          }`}
        >
          <MobileMenu></MobileMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
