import React from "react";
import hero from "../../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[90vh] bg-gradient-to-r to-blue-500"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15,7,113, 0.6), rgba(5, 5, 5, 0.4)),url(${hero})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 font-bold text-6xl text-white">
            Find Your best Job
          </h1>
          <p className="mb-5 text-xl text-white">
            Explore top-rated jobs,activities and more..
          </p>
          <form>
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-0">
              <input
                type="text"
                placeholder="Type here"
                className=" pl-4 lg:rounded-l-lg outline-none text-gray-600 text-lg py-5"
              />
              <select className="px-6 outline-none bg-white border-l text-gray-400 text-lg py-5">
                <option disabled selected>
                  Search by job role
                </option>
                <option>Manager</option>
                <option>Front end developer</option>
                <option>Graphics designer</option>
              </select>
              <input
                type="text"
                placeholder="Location"
                className=" border-l pl-4 outline-none text-lg py-5"
              />
              <p className=" text-left">
                <Link to="/jobs">
                  <button
                    className=" inline-block bg-primary px-7 py-5 lg:rounded-r-lg text-xl text-white hover:bg-secondary duration-300"
                    type="submit"
                  >
                    Search
                  </button>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
