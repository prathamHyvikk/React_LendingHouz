import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-gradient-to-bl from-[#FF9201] to-[#FF9201] flex flex-col items-center justify-center text-center font-pop text-black z-[9999] overflow-hidden">
      <img
        src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
        alt="404"
        className="h-[300px] md:h-[340px] animate-bounce"
      />

      <h1 className="text-[2.5rem] md:text-[3.5rem] font-extrabold mt-6">
          Page Not Found
      </h1>

      <p className="text-lg md:text-xl mt-4">
        The page you were looking for could not be found.
      </p>

      

      <button
        onClick={() => navigate(-1)}
        className="mt-10 bg-white cursor-pointer text-black text-xl md:text-2xl font-extrabold py-3 px-8 rounded-full shadow-[0_20px_70px_rgba(0,0,0,0.1)]     transition-all duration-300"
      >
        ← Go Back
      </button>

      {/* Optional floating animation glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
    </div>
  );
};

export default NotFound;
