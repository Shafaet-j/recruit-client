import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-violet-50">
        <footer className="footer bg-violet-50 py-10 text-base-content px-4 container mx-auto lg:grid-cols-4 grid-cols-2">
          <div className=" text-left">
            <h2 className=" text-primary font-bold text-3xl">RecruitPro</h2>
            <p>
              RecruitPro.
              <br />
              Providing reliable jobs since 1992
            </p>
          </div>
          <div>
            <span className="footer-title">About Company</span>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">Terms & Condition</a>
            <a className="link link-hover">Privacy & Policy</a>
            <a className="link link-hover">Candidate Listing</a>
          </div>
          <div>
            <span className="footer-title">For Candidate’s</span>
            <a className="link link-hover">Create Resume</a>
            <a className="link link-hover">Browse Categories</a>
            <a className="link link-hover">Save Jobs List</a>
            <a className="link link-hover">Browse Jobs</a>
          </div>
          <div>
            <span className="footer-title">For Employer’s</span>
            <a className="link link-hover">Post A Job</a>
            <a className="link link-hover">Browse Candidates</a>
            <a className="link link-hover">Job Packages</a>
          </div>
        </footer>
      </div>
      <div className="dark:bg-slate-950 dark:text-slate-300 dark:border-t-2 dark:border-slate-900 py-5">
        <p>Copyright © 2023 - All right reserved by RecruitPro</p>
      </div>
    </>
  );
};

export default Footer;
