import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/banner.jpg";
import JobCard from "../Home/FeaturedJobs/JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const roleRef = useRef(null);
  const locationRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://recruit-pro-server-shafaet-j.vercel.app/allJobs?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [search]);

  const handleLocation = (event) => {
    event.preventDefault();
    const location = locationRef.current.value;
    console.log(location);
    setSearch(location);
  };
  const handleRole = (event) => {
    event.preventDefault();
    const role = roleRef.current.value;
    console.log(role);
    setSearch(role);
  };

  return (
    <section>
      <div
        className=" h-[30vh] flex items-center justify-center flex-col"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,7,113, 0.6), rgba(5, 5, 5, 0.4)),url(${bg})`,
        }}
      >
        <h2 className=" text-5xl font-bold text-white mb-5">All jobs</h2>
        <p className=" text-lg font-semibold text-white">
          <Link to="/">Home</Link> / Jobs
        </p>
      </div>
      <div className=" flex gap-10 container mx-auto py-20">
        <div className=" lg:w-1/4 bg-violet-50 px-5 py-5 rounded-2xl">
          <form>
            {/* <div className="form-control mb-5">
              <label className="label">
                <span className=" text-lg font-bold">Search by Keywords</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  ref={searchRef}
                  placeholder="Search…"
                  className=" w-full px-5 outline-none"
                />
                <button className="py-5 px-5 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
            <div className="form-control mb-5">
              <label className="label">
                <span className=" text-lg font-bold">Location</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  ref={locationRef}
                  placeholder="city or country"
                  className="w-full px-5 outline-none"
                />
                <button onClick={handleLocation} className="py-5 px-5 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className=" text-lg font-bold">Job Role</span>
              </label>
              <div className="">
                <select
                  ref={roleRef}
                  onChange={handleRole}
                  className="px-6 outline-none bg-white text-gray-400 text-lg py-5 w-full rounded-xl"
                >
                  <option disabled>Search by job role</option>
                  <option value="manager">Manager</option>
                  <option value="junior%20developer">
                    Front end developer
                  </option>
                  <option value="senior%20designer">Graphics designer</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className=" lg:w-3/4">
          <div className=" mb-10 flex justify-between items-center">
            <h4>
              Show <span className=" font-bold">{jobs.length}</span> jobs{" "}
            </h4>
            <div className="">
              <select className="select select-bordered">
                <option disabled selected>
                  Sort by (default)
                </option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
          <div className=" space-y-5">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
