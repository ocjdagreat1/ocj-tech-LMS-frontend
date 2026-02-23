import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/ocjtechR.png"; // adjust path if needed

const AppLayout = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef(null);

  // Animate progress to 95%
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(intervalRef.current);
          return 95;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Simulate page load finish
  useEffect(() => {
    const timer = setTimeout(() => {
      clearInterval(intervalRef.current);
      setProgress(100);

      // small delay so user sees 100%
      setTimeout(() => setVisible(false), 400);
    }, 2000); // simulate page load time (adjust if needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <img src={logo} alt="Logo" className="w-20 mb-4 animate-pulse" />
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs text-gray-500 tracking-widest uppercase">
            Preparing your experience...
          </p>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default AppLayout;