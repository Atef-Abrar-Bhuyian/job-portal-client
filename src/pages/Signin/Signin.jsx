import Lottie from "lottie-react";
import loginLottieData from "../../assets/Lottie/login.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
const Signin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState(false);

  const from = location.state || "/";

  const handleSeePassword = () => {
    if (setSeePassword) {
      setSeePassword(!seePassword);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log("sign in", result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center mt-4 text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {seePassword ? (
                <FaEyeSlash
                  onClick={handleSeePassword}
                  className="absolute mt-12 ml-72 text-2xl"
                />
              ) : (
                <FaEye
                  onClick={handleSeePassword}
                  className="absolute mt-12 ml-72 text-2xl"
                />
              )}
              <input
                type={seePassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* <span className="text-sm text-rose-600 mt-2">{error}</span> */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
