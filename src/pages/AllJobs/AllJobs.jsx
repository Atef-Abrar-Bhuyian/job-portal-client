/* eslint-disable no-unused-vars */
import React from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCart from "../Home/HotJobCart";

const AllJobs = () => {
  const { jobs, loading } = useJobs();
  if(loading){
    return <h2>Data Loading</h2>
  }
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">All Jobs here</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobCart key={job._id} job={job}></HotJobCart>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
