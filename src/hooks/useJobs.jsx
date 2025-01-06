import axios from "axios";
import { useEffect, useState } from "react";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://job-protal-server-ten.vercel.app/jobs").then((res) => {
      setLoading(false);
      setJobs(res.data);
    });
  }, []);

  return {jobs,loading};
};

export default useJobs;
