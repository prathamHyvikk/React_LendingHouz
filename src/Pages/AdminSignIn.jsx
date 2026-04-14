import React, { useEffect, useState } from "react";
import logoImg from "/assets/Images/logo.png";
import bgImage from "/assets/Images/background-image.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setId, setPersonRole, setUserType } from "../features/personRole";
import axios from "axios";
import toast from "react-hot-toast";
import { setAuthenticate, setToken } from "../features/authenticate";
import Input from "../Component/Input";

const AdminSignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    // dispatch(setPersonRole("admin"));

    // navigate("/admin/dashboard");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/login`,
        {
          email,
          password,
          user_type: "A",
          checkbox,
        },
      );

      toast.success(response.data.message);
      // localStorage.setItem("LoginToken", response.data.data.token);
      // if (checkbox == true) {
      //   localStorage.setItem("token", response.data.data.token);
      // }

      // const timeOut = 1000 * 60 * 60 * 24 * 30;
      // setTimeout(() => {
      //   localStorage.removeItem("token");
      // }, timeOut);

      const expiryTime = checkbox
        ? Date.now() + 1000 * 60 * 60 * 24 * 30
        : Date.now() + 1000 * 60 * 60 * 24; // 24 hours

      dispatch(
        setAuthenticate({
          value: true,
          expiry: expiryTime,
        }),
      );
      dispatch(setToken(response.data.data.token));

      dispatch(setPersonRole("admin"));
      dispatch(setId(response.data.data.id));
      dispatch(setUserType("A"));
      navigate("/admin/dashboard");
    } catch (error) {
      if (error.response) {
        const apiErrors = error.response.data.errors;
        setError(apiErrors);
        if (apiErrors) {
          const firstError = Object.values(apiErrors)?.[0];

          // if (firstError) {
          //   toast.error(firstError);
          // }
        } else {
          toast.error(error?.response.data.message);
        }
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, []);

  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center p-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute w-full h-full bg-white/90 top-0 left-0 z-1"></div>
        <div className="w-full max-w-md relative z-10">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#F2F2F2]">
            <div className="text-center px-8 pt-6 pb-4 border-b">
              <img src={logoImg} alt="logo" className="w-40 mx-auto mb-2" />
              <h2 className="text-2xl font-semibold text-gray-800">Sign In</h2>
              <p className="text-sm text-gray-500"> Sign in to your account </p>
            </div>

            <form className="space-y-6 px-4 sm:px-6 pt-12 pb-8 overflow-hidden">
              <Input
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />

              <Input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />

              <div className="mt-4">
                <input
                  type="checkbox"
                  value={checkbox}
                  onChange={() => setCheckbox(!checkbox)}
                />
                <span className="text-gray-500"> Remember for 30 Days</span>
              </div>

              {/* <Link to="/app/dashboard"> */}
              <button
                onClick={(e) => handleSignIn(e)}
                disabled={loading}
                className={`w-full bg-(--primary-color) ${
                  loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }  text-white sora-bold py-2 rounded-lg mb-6 hover:bg-blue-800 transition duration-200`}
              >
                {loading ? "Sign in..." : "Sign In"}
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignIn;
