import React from "react";
import { BsBookmarkCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    company_logo,
    job_title,
    location,
    _id,
    salary,
    fulltime_or_parttime,
    remote_or_onsite
  } = job;
  return (
    <div className=" p-5 border shadow-lg bg-white rounded-2xl">
      <div className=" flex items-center gap-4 justify-between mb-5">
        <div className=" flex items-center gap-5">
          <img
            className=" w-16 h-16 object-cover rounded-full"
            src={company_logo}
            alt=""
          />
          <div className=" text-left">
            <h3 className=" text-xl font-bold mb-5">{job_title}</h3>
            <div className=" flex items-center gap-5">
            <p className=" bg-blue-100 px-4 py-1 rounded-lg">{fulltime_or_parttime}</p>
            <p className=" bg-green-100 px-4 py-1 rounded-lg">{remote_or_onsite}</p>
            </div>
          </div>
        </div>
        <BsBookmarkCheck size={30} />
      </div>
      <div className=" p-6 space-y-3 text-left bg-[#ff3bde18] rounded-xl mb-5">
        <p>Salary:{salary}</p>
        <p>Location:{location}</p>
        <p>Deadline:</p>
      </div>
      <div className=" text-left btn btn-primary">
        <Link to={`/jobs/${_id}`}>
          <button className=" font-semibold text-lg">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
