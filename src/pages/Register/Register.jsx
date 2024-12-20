import Lottie from "lottie-react";
import registerLottieData from "../../assets/Lottie/register.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../shared/SocialLogin";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [seePassword, setSeePassword] = useState(false);

  const handleSeePassword = () => {
    if (setSeePassword) {
      setSeePassword(!seePassword);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // password validation
    if (password.length < 6) {
      setError("Password Must Contain At Least 6 Characters");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password Must Contain At Least One Lowercase Letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password Must Contain At Least One Uppercase Letter");
      return;
    }

    // show Password validation Error
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center mt-4 text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
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
              <span className="text-sm text-rose-600 mt-2">{error}</span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
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

export default Register;
