import axios from "axios";
import { useEffect, useState } from "react";

const useJobs = (sort, search, minSalary, maxSalary) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://job-protal-server-ten.vercel.app/jobs?sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`
      )
      .then((res) => {
        setLoading(false);
        setJobs(res.data);
      });
  }, [sort, search, minSalary, maxSalary]);

  return { jobs, loading };
};

export default useJobs;
