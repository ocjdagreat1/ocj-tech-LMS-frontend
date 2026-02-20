import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";


import AOS from "aos";
import "aos/dist/aos.css";

import team1 from "../../assets/ocj.jpg";
import team2 from "../../assets/card3.jpg";
import team3 from "../../assets/card10.jpg";

import Footer from "../../component/student/Footer";

// Your swiper images (put these inside PUBLIC/images folder)
const aboutImages = [
  "/images/course_3.png",
  "/images/htmlimage.png",
  "/images/javascriptImage.jpg",
  "/images/pythonImage.jpg",
];

const About = () => {
  const { user } = useUser();

  const [openSection, setOpenSection] = useState(null);

  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const collapsible = (title, icon, content, key) => (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(key)}
        className="w-full text-left px-4 py-3 flex justify-between items-center font-medium hover:bg-gray-100 transition"
      >
        <span className="flex items-center gap-2 text-gray-800">
          {icon} {title}
        </span>
        <span className="text-gray-500">{openSection === key ? "▲" : "▼"}</span>
      </button>

      <div
        className={`px-4 overflow-hidden transition-all duration-700 ease-in-out ${
          openSection === key ? "max-h-96 py-3" : "max-h-0 py-0"
        }`}
      >
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full bg-gradient-to-b from-cyan-100/70 to-white pt-20 pb-28">

        {/* TOP SECTION */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 px-5">

          {/* TEXT */}
          <div className="flex-1" data-aos="fade-right">
            <h5 className="text-red-500 uppercase tracking-wide mb-2">
              About Us
            </h5>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              We Empower the Next Generation of Tech Innovators
            </h2>

            <p className="text-gray-700 mb-6">
              OCJTech International is a forward-thinking tech school committed
              to hands-on, real-world training in web development, cybersecurity,
              and data science. Our programs are designed to equip students with
              practical skills needed to succeed in the global technology industry.
            </p>

            {/* COLLAPSIBLE */}
            <div className="space-y-3">
              {collapsible(
                "Our Vision",
                "👁️",
                "To become a leading international technology academy producing innovative developers and problem-solvers worldwide.",
                "vision"
              )}

              {collapsible(
                "Our Mission",
                "❤️",
                "To provide affordable, practical, and high-quality tech education that empowers students with employable skills.",
                "mission"
              )}

              {collapsible(
                "Our Values",
                "✅",
                "Innovation, Integrity, Excellence, Practical Learning, and Student Success.",
                "values"
              )}
            </div>
          </div>

          {/* SWIPER IMAGES */}
          <div className="flex-1 max-w-xl w-full" data-aos="fade-left">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              fadeEffect={{ crossFade: true }}
            >
              {aboutImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`OCJTech ${index + 1}`}
                    className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* OUR STORY */}
        <div
          className="max-w-7xl mx-auto mt-20 px-5 text-center"
          data-aos="fade-up"
        >
          <h5 className="text-red-500 uppercase tracking-wide mb-2">
            Where It Started
          </h5>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Story
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-left">
            <p>
              OCJTech International was founded to bridge the gap between
              theoretical learning and real-world technical skills. We recognized
              that many students graduate without practical experience, so we
              created a system focused on hands-on training and project-based
              learning.
            </p>

            <p>
              From a small beginning, OCJTech has grown into a community of
              learners passionate about technology. Our goal remains to train,
              mentor, and guide students into successful careers in software
              development and IT.
            </p>
          </div>

          <div className="mt-8 text-center">
  {!user ? (
    <button
      onClick={() => toast.info("Login to join us")}
      className="px-7 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
    >
      Join Us Now
    </button>
  ) : null}
</div>

        </div>
{/* TEAM SECTION */}
<div className="mt-24 max-w-7xl mx-auto px-5">
  <h5 className="text-red-500 uppercase tracking-wide text-center mb-2">
    Meet Our Team
  </h5>

  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
    The People Behind OCJTech
  </h2>

  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

    {/* CARD 1 */}
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
      data-aos="zoom-in"
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={team1}
          alt="Founder"
          className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Opara Chibuike Justine
        </h3>
        <p className="text-gray-600 text-sm">
          Full-Stack Developer / Founder
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
      data-aos="zoom-in"
      data-aos-delay="150"
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={team2}
          alt="Manager"
          className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Jimmy Ray
        </h3>
        <p className="text-gray-600 text-sm">
          Project Manager
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={team3}
          alt="Developer"
          className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Mary Johnson
        </h3>
        <p className="text-gray-600 text-sm">
          Web Developer / Data Analyst
        </p>
      </div>
    </div>

  </div>
</div>


      </div>

      <Footer />
    </>
  );
};

export default About;
