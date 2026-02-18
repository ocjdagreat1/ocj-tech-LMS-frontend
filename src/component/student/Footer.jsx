import React, { useState, useContext } from "react";
import logo from "../../assets/ocjtechR.png";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const Footer = () => {
  const { backendUrl } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${backendUrl}/api/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Subscribed successfully 🎉");
        setEmail("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">

        {/* LEFT SECTION */}
        <div className="flex flex-col md:items-start items-center w-full">
          <img src={logo} alt="logo" />
          <p className="mt-1 text-center md:text-left text-sm text-white/80">
            We are an inspiring tech school that empowers students with practical digital skills.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>

        {/* NEWSLETTER (NOW VISIBLE ON MOBILE) */}
        <div className="flex flex-col items-center md:items-start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80 text-center md:text-left">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 pt-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-500/30 bg-gray-800 text-white placeholder-gray-500 outline-none w-full sm:w-64 h-9 rounded px-2 text-sm"
            />

            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="bg-blue-600 w-full sm:w-24 h-9 text-white rounded disabled:opacity-50"
            >
              {loading ? "Loading..." : "Subscribe"}
            </button>
          </div>
        </div>

      </div>

      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright 2026 ©
        <span className="text-red-400"> OCJ TECH</span>, All Rights Reserved.
        Powered by Opara Chibuike Justine
      </p>
    </footer>
  );
};

export default Footer;
