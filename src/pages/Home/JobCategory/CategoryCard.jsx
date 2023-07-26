import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { name, availableJobs, icon } = category;
  return (
    <div className=" border border-accent p-6 rounded-2xl hover:border-primary duration-300 flex items-center gap-5">
      <div className=" bg-violet-50 p-6 rounded-3xl">
        <img className=" w-16 h-16" src={icon} alt="" />
      </div>
      <div>
        <Link to="/jobs">
          <h6 className=" text-xl font-bold cursor-pointer">{name}</h6>
        </Link>
        <p>Job Available: {availableJobs}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
