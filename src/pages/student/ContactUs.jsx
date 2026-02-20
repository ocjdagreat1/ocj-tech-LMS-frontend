import { useState } from "react";
import { FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "../../component/student/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Update form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact/send`,
        form
      );

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-cyan-100/70 to-white py-16 px-4">

        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-14 tracking-wide">
          Get In Touch
        </h2>

        {/* CONTACT CARDS */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">

          {/* Address */}
          <div className="group bg-white rounded-2xl p-8 flex gap-4 shadow-md
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-2xl hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
            <FaHome className="text-red-500 text-4xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <h6 className="font-bold text-lg mb-2 text-gray-800">Address</h6>
              <p className="text-gray-600 leading-relaxed">
                Larcaade Building, Off Okohia Worldbank, Owerri Nigeria
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="group bg-white rounded-2xl p-8 flex gap-4 shadow-md
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-2xl hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
            <FaEnvelope className="text-red-500 text-4xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <h6 className="font-bold text-lg mb-2 text-gray-800">Email Address</h6>
              <p className="text-gray-600">info@ocjtechinternational.com</p>
              <p className="text-gray-600">newsletter@ocjdagreat1.name.ng</p>
            </div>
          </div>

          {/* Phone */}
          <div className="group bg-white rounded-2xl p-8 flex gap-4 shadow-md
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-2xl hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
            <FaPhoneAlt className="text-red-500 text-4xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <div>
              <h6 className="font-bold text-lg mb-2 text-gray-800">Phone</h6>
              <p className="text-gray-600">(+234) 906 371 0448</p>
            </div>
          </div>

        </div>

        {/* FORM + MAP */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* CONTACT FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* GOOGLE MAP */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.356698186334!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4a9b07f9a6f%3A0x3af6d7f5aafc3b09!2sOwerri-west%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1703249499393!5m2!1sen!2sng"
              className="w-full h-[550px] border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
