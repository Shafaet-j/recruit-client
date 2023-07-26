import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCard from "../Home/FeaturedJobs/JobCard";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    company_logo,
    location,
    salary,
    job_title,
    job_description,
    job_responsibility,
  } = job;
  console.log(job);
  return (
    <section>
      <div className="bg-violet-50 py-14">
        <div className=" h-[30vh] flex items-center justify-between container mx-auto">
          <div className=" flex items-center gap-5 text-left">
            <img className=" w-40 h-40 rounded-md" src={company_logo} alt="" />
            <div>
              <h2 className=" text-3xl font-bold mb-5">{job_title}</h2>
              <div className=" flex items-center gap-5">
                <span className=" flex items-center">
                  <CiLocationOn size={30} /> {location}
                </span>
                <span className=" flex items-center">
                  <GiTakeMyMoney size={30} /> {salary}
                </span>
              </div>
            </div>
          </div>
          <div>
            <button className=" btn btn-primary">apply for job</button>
          </div>
        </div>
      </div>

      <div className=" flex justify-between container mx-auto mt-16 py-20">
        <div className=" text-left w-3/5">
          <h4 className=" text-2xl font-bold mb-5">Job Description</h4>
          <p className=" mb-5 text-gray-500">{job_description}</p>
          <h4 className=" text-2xl font-bold mb-5">Key Responsibility</h4>
          <p className="mb-5 text-gray-500">{job_responsibility}</p>
        </div>
        <div className=" lg:w-2/5 bg-violet-50 px-5 py-5 rounded-xl">
          <h4 className=" text-2xl font-bold mb-5 text-left">Job Overview</h4>
          <div className=" flex items-center gap-5 text-left mb-6">
            <CiLocationOn size={45} />
            <div>
              <p className=" text-lg font-bold">Location:</p>
              <p>{location}</p>
            </div>
          </div>
          <div className=" flex items-center gap-5 text-left mb-6">
            <CiUser size={45} />
            <div>
              <p className=" text-lg font-bold">Job Title:</p>
              <p>{job_title}</p>
            </div>
          </div>
          <div className=" flex items-center gap-5 text-left mb-6">
            <GiTakeMyMoney size={45} />
            <div>
              <p className=" text-lg font-bold">Salary:</p>
              <p>{salary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
