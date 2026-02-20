import React, { useState, useContext, useEffect } from "react";
import logo from "../../assets/ocjtechR.png";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom'

const Footer = () => {
  const { backendUrl } = useContext(AppContext);

  const [email, setEmail] = useState(localStorage.getItem("newsletterEmail") || "");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  // Check subscription status when email changes or on initial load
  useEffect(() => {
    const checkSubscription = async () => {
      if (!email) return setSubscribed(false);

      try {
        const res = await fetch(`${backendUrl}/api/newsletter/check/${encodeURIComponent(email)}`);
        const data = await res.json();
        setSubscribed(data.subscribed);
        if (data.subscribed) localStorage.setItem("newsletterEmail", email);
      } catch (err) {
        console.error("Check subscription error:", err);
      }
    };

    const delayDebounce = setTimeout(checkSubscription, 500);
    return () => clearTimeout(delayDebounce);
  }, [email, backendUrl]);

  const handleToggleSubscribe = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      if (!subscribed) {
        // Subscribe
        const res = await fetch(`${backendUrl}/api/newsletter/subscribe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (data.success) {
          toast.success("Subscribed successfully 🎉");
          setSubscribed(true);
          localStorage.setItem("newsletterEmail", email);
        } else {
          toast.error(data.message);
        }
      } else {
        // Unsubscribe
        const res = await fetch(`${backendUrl}/api/newsletter/unsubscribe`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        if (data.success) {
          toast.success("Unsubscribed successfully ⚡");
          setSubscribed(false);
          localStorage.removeItem("newsletterEmail");
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      console.error(err);
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
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/contact-us">Contact us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col items-center md:items-start w-full">
          <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
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
              onClick={handleToggleSubscribe}
              disabled={loading || !email}
              className="bg-blue-600 w-full sm:w-32 h-9 text-white rounded disabled:opacity-50"
            >
              {loading ? "Loading..." : subscribed ? "Unsubscribe" : "Subscribe"}
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
