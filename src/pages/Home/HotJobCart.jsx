import { FaMapMarkerAlt } from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HotJobCart = ({ job }) => {
  const {
    // eslint-disable-next-line react/prop-types
    _id,
    // eslint-disable-next-line react/prop-types
    title,
    // eslint-disable-next-line react/prop-types
    company,
    // eslint-disable-next-line react/prop-types
    company_logo,
    // eslint-disable-next-line react/prop-types
    requirements,
    // eslint-disable-next-line react/prop-types
    description,
    // eslint-disable-next-line react/prop-types
    location,
    // eslint-disable-next-line react/prop-types
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt={title} />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex gap-1 items-center">
            {" "}
            <FaMapMarkerAlt /> {location}{" "}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge badge-secondary">NEW</div>
        <p> {description} </p>
        <div className="flex gap-2 flex-wrap ">
          {
            // eslint-disable-next-line react/prop-types
            requirements.map((skill, idx) => (
              <p
                key={idx}
                className="border rounded-md text-center p-2 hover:text-blue-500"
              >
                {skill}
              </p>
            ))
          }
        </div>
        <div className="card-actions justify-end items-center mt-4">
          <p className="flex items-center gap-2">
            Salary: <TbCoinTakaFilled />
            {/* eslint-disable-next-line react/prop-types */}
            {salaryRange.min} - {salaryRange.max} {salaryRange.currency}{" "}
          </p>
          <Link to={`/jobs/${_id}`}>
          <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCart;
