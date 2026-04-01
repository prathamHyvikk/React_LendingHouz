import React, { useState } from "react";
import logoImg from "/assets/Images/logo.png";
import bgImage from "/assets/Images/background-image.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { setAuthenticate } from "../features/authenticate";
import { setId, setPersonRole, setUserType } from "../features/personRole";
import Input from "../Component/Input";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/register`,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          dob: form.dob,
          password: form.password,
          c_password: form.confirmPassword,
          user_type: "C",
        },
      );

      toast.success(res.data.message);
      localStorage.setItem("LoginToken", res.data.data.token);

      dispatch(setAuthenticate(true));
      dispatch(setPersonRole("app"));
      dispatch(setId(res.data.data.id));
      dispatch(setUserType("C"));

      navigate("/");
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-lg">
        <div className="bg-[#F2F2F2] rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="text-center px-8 pt-6 pb-4 border-b">
            <img src={logoImg} alt="logo" className="w-40 mx-auto mb-2" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Create Account
            </h2>
            <p className="text-sm text-gray-500">Join us and get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
              <Input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <Input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <p className="text-xs my-2 text-gray-500">Date of Birth</p>
            <Input
              type="date"
              name="dob"
              max={new Date().toISOString().split("T")[0]}
              value={form.dob}
              onChange={handleChange}
              error={errors.dob}
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.c_password}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-(--primary-color) text-white font-semibold tracking-wide hover:opacity-90 transition"
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>

            <p className="text-center text-gray-700 pt-4">
              Already have an account? <br />
              <Link
                to="/app/signin"
                className="sora-bold text-gray-900 hover:text-blue-900 transition"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
