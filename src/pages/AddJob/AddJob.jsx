import Swal from "sweetalert2";
import useAuth from "../../hooks/UseAuth";

const AddJob = () => {
    const {user} = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Job Has Been Added",
                showConfirmButton: false,
                timer: 1500
              });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Post a New Job</h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="description"
            placeholder="Job Description"
            required
          ></textarea>
        </div>

        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select defaultValue={"Pick a Job Type"} required className="select select-ghost w-full max-w-xs">
            <option disabled>
              Pick a Job Type
            </option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Intern</option>
          </select>
        </div>

        {/* Job Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select defaultValue={"Pick a Job Field"} required className="select select-ghost w-full max-w-xs">
            <option disabled>
              Pick a Job Field
            </option>
            <option>Engineering</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>Teaching</option>
            <option>Developer</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="min"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="max"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <select
            defaultValue={"Pick a Currency"}
              name="currency"
              required
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>
                Pick a Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="requirements"
            placeholder="Put Each Requirement In A New Line"
            required
          ></textarea>
        </div>

        {/* Job Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="responsibilities"
            placeholder="Write Each Responsibilities In A New Line"
            required
          ></textarea>
        </div>

        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name "
            className="input input-bordered"
            required
          />
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            name="hr_email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered"
            required
          />
        </div>

         {/* Application Deadline */}
         <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Deadline"
            className="input input-bordered"
            required
          />
        </div>

        {/* Submit btn */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
