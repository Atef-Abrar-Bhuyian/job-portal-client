import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import { TiDelete } from "react-icons/ti";
import { TbCurrencyTaka } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const axiosSecure = useAxiosSecure(); 

  useEffect(() => {
    // fetch(`http://localhost:5000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });

    // axios.get(`http://localhost:5000/job-application?email=${user.email}`,{withCredentials:true})
    // .then(res => setJobs(res.data))

    axiosSecure.get(`/job-application?email=${user?.email}`)
    .then(res => setJobs(res.data))


  });

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center">My Applications: {jobs.length} </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Company</th>
              <th>Job Info</th>
              <th>Job Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                  <TbCurrencyTaka />
                  {job.salaryRange.min} - <TbCurrencyTaka
                   />
                  {job.salaryRange.max}  {job.salaryRange.currency}
                  </span>
                </td>
                <td>{job.jobType}</td>
                <th>
                  <button className="hover:text-red-600"><TiDelete className="text-3xl" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
