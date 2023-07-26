import React from "react";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Extra from "../Extra/Extra";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
      <Extra></Extra>
    </div>
  );
};

export default Home;
