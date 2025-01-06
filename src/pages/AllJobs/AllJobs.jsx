/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCart from "../Home/HotJobCart";
import { BiSearch } from "react-icons/bi";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary,setMinSalary] = useState("")
  const [maxSalary,setMaxSalary] = useState("")
  const { jobs, loading } = useJobs(sort, search,minSalary,maxSalary);
  if (loading) {
    return <h2>Data Loading</h2>;
  }
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">All Jobs here</h1>
      <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center gap-6 my-8">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort ? "btn-success" : ""}`}
        >
          {sort ? "Sorted By Salary" : "Sort By Salary"}
        </button>
          <BiSearch />
        <div className="flex items-center justify-center gap-2">
          <input
            onKeyUp={(e) => setSearch(e.target.value)}
            type="text"
            className="input w-full"
            placeholder="Search Jobs By Location"
          />
          <input
            onKeyUp={(e) => setMinSalary(e.target.value)}
            type="text"
            className="input max-w-sm"
            placeholder="Min Salary"
          />
          <input
            onKeyUp={(e) => setMaxSalary(e.target.value)}
            type="text"
            className="input max-w-sm"
            placeholder="Max Salary"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobCart key={job._id} job={job}></HotJobCart>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
