import React from "react";
import bg from "../../../assets/bg.jpg";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Extra = () => {
  return (
    <section className=" flex items-center py-20 px-4">
      <div className=" lg:flex justify-between items-center container mx-auto">
        <div className=" lg:w-1/2 mb-5">
          <img
            src={bg}
            className="lg:h-[600px] lg:w-[600px] object-cover shadow-2xl rounded-2xl"
          />
        </div>
        <div className=" text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">
            Millions of Jobs. Find the one that suits you.
          </h1>
          <p className="py-6">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </p>
          <ul className=" space-y-4 mb-5">
            <li className=" flex items-center gap-4">
              <span>
                <FaCheck />
              </span>
              Bring to the table win-win survival
            </li>
            <li className=" flex items-center gap-4">
              <span>
                <FaCheck />
              </span>
              Capitalize on low hanging fruit to identify
            </li>
            <li className=" flex items-center gap-4">
              <span>
                <FaCheck />
              </span>
              But I must explain to you how all this
            </li>
          </ul>
          <Link to="/signUp">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Extra;
