import { BiCategoryAlt } from "react-icons/bi";
import {
  FaBookmark,
  FaHourglassHalf,
  FaInstagram,
  FaMoneyCheckAlt,
  FaRegUserCircle,
} from "react-icons/fa";
import { FaMoneyCheckDollar, FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineAlternateEmail, MdTimelapse } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { TbCurrencyTaka } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    title,
    company,
    applicationDeadline,
    company_logo,
    location,
    jobType,
    category,
    salaryRange,
    description,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
  } = useLoaderData();

  return (
    <div>
      <div>
        {/* Heading */}
        <div className="flex gap-3 bg-blue-600 bg-opacity-10 p-5">
          <div>
            <img className="w-20" src={company_logo} alt="" />
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <h1 className="text-4xl font-bold">{company}</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <SlLocationPin className="mr-2" />
                {location}
              </div>
              <div className="flex items-center">
                <MdTimelapse className="mr-2" />
                {applicationDeadline}
              </div>
              <div className="flex items-center">
                <FaMoneyCheckDollar className="mr-2" />
                {salaryRange.min}
                <TbCurrencyTaka />- {salaryRange.max}
                <TbCurrencyTaka />
                {salaryRange.currency}{" "}
              </div>
            </div>
            <div className="flex gap-4">
              <p className="p-2 rounded-xl bg-blue-500 bg-opacity-50 w-fit">
                {title}
              </p>
              <p className="p-2 rounded-xl bg-blue-500 bg-opacity-50 w-fit">
                {jobType}
              </p>
              <p className="p-2 rounded-xl bg-blue-500 bg-opacity-50 w-fit">
                {status}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <button className="btn">Apply Now</button>
            </div>
            <div>
              <FaBookmark className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Description section */}
        <div className="grid grid-cols-4 my-8">
          <div className="col-span-3">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Job Description</h3>
              <p>{description}</p>
            </div>
            <div className="space-y-4 mt-5">
              <h3 className="text-2xl font-bold">Key Responsibilities</h3>
              <p>
                {responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </p>
            </div>
            <div className="space-y-4 mt-5">
              <h3 className="text-2xl font-bold">Requirements</h3>
              <p>
                {requirements.map((requirement, idx) => (
                  <li key={idx}>{requirement}</li>
                ))}
              </p>
            </div>
            <div className="space-y-4 mt-5  items-center">
              <h3 className="text-2xl font-semibold mr-4">Share This Job: </h3>
              <div className="flex items-center gap-3">
              <button className="btn bg-blue-700 text-white"><FaSquareFacebook className="text-2xl" /> Facebook
              </button>
              <button className="btn bg-black text-white"><FaSquareXTwitter className="text-2xl" />            </button>
              <button className="btn bg-rose-500 text-white"><FaInstagram className="text-2xl" /> Instagram
              </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="p-4 border-2 rounded-xl bg-blue-400 bg-opacity-20 ">
              <h3 className="text-2xl font-bold">Job Overview</h3>
              <div className="my-4 flex gap-2 items-center">
                <FaHourglassHalf className="text-2xl" />
                <div>
                  <p className="font-bold">Expiration date:</p>
                  <p>{applicationDeadline}</p>
                </div>
              </div>
              <div className="my-4 flex gap-2 items-center">
                <SlLocationPin className="text-2xl" />
                <div>
                  <p className="font-bold">Location:</p>
                  <p>{location}</p>
                </div>
              </div>
              <div className="my-4 flex gap-2 items-center">
                <FaRegUserCircle className="text-2xl" />
                <div>
                  <p className="font-bold">Job Title:</p>
                  <p>{title}</p>
                </div>
              </div>
              <div className="my-4 flex gap-2 items-center">
                <BiCategoryAlt className="text-2xl" />
                <div>
                  <p className="font-bold">Category:</p>
                  <p>{category}</p>
                </div>
              </div>
              <div className="my-4 flex gap-2 items-center">
                <FaMoneyCheckAlt className="text-2xl" />
                <div>
                  <p className="font-bold">Salary:</p>
                  <p className="flex items-center">
                    {salaryRange.min}
                    <TbCurrencyTaka />- {salaryRange.max}
                    <TbCurrencyTaka />
                    {salaryRange.currency}{" "}
                  </p>
                </div>
              </div>
              <div className="my-4 flex gap-2 items-center">
                <IoIosPerson className="text-2xl" />
                <div>
                  <p className="font-bold">HR Name:</p>
                  <p>{hr_name}</p>
                </div>
              </div>
              <div className="my-4 flex gap-2 items-center">
                <MdOutlineAlternateEmail className="text-2xl" />
                <div>
                  <p className="font-bold">HR Email:</p>
                  <p>{hr_email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
