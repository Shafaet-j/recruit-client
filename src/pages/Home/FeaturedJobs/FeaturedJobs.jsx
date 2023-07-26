import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://recruit-pro-server-shafaet-j.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <section className=" bg-violet-50 py-20 px-4">
      <h1 className=" text-4xl font-bold mb-10">Featured Jobs</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
