import { useParams } from "react-router-dom";

const JobApply = () => {
  const { id } = useParams();
  console.log(id);

  const handleSubmitJobApplication = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedin, github, resume);
  };

  return (
    <div className="card bg-base-100 w-full  shadow-2xl">
      <h1 className="text-5xl font-bold text-center p-4">Apply Now!</h1>
      <form onSubmit={handleSubmitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
