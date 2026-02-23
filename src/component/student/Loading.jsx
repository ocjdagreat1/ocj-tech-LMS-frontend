import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/ocjtechR.png"; // replace with your logo path

const Loading = () => {
  const { path } = useParams();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          return 100;
        }
        return old + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Redirect after loading
  useEffect(() => {
    if (!path) return;

    const timer = setTimeout(() => {
      navigate(`/${path}`);
    }, 3500); // smoother timing

    return () => clearTimeout(timer);
  }, [path, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-100/70 to-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl animate-pulse"></div>

      {/* Logo + Text Section */}
      <div className="relative z-10 flex flex-col items-center gap-6">

       
        <h2 className="flex items-center justify-center gap-4 text-3xl md:text-4xl font-bold text-gray-800">
          {/* Big logo */}
          <img
            src={logo}
            alt="OCJTech Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg animate-[float_3s_ease-in-out_infinite]"
          />

          {/* "International" text */}
          <span className="text-cyan-600 md:text-4xl font-semibold">
            Global
          </span>
        </h2>

        {/* Loading Text */}
        <p className="text-gray-500 text-sm tracking-widest uppercase">
          Preparing your experience...
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage */}
        <span className="text-xs text-gray-500">{progress}%</span>
      </div>
    </div>
  );
};

export default Loading;
