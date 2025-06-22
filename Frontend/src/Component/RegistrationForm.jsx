import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    rollNumber: "",
    email: "",
    phone: "",
    gender: "",
    year: "",
    department: "",
    type: "Attendee",
    events: [],
  });
const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const eventsList = ["Dance", "Singing", "Drama", "Coding", "Quiz", "Photography"];
  const departments = ["CSE", "ECE", "EEE", "Mechanical", "Civil", "MBA", "Others"];
  const years = ["1st Year", "2nd Year", "3rd Year", "Final Year"];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        events: checked
          ? [...prev.events, value]
          : prev.events.filter((ev) => ev !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.rollNumber) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      // const res = await axios.post("http://localhost:5000/api/register", formData);
      const res = await axios.post(`${baseURL}/api/register`, formData);

      setSubmittedData(res.data);
    } catch (err) {
      setError("Registration failed. You may already be registered.");
      console.error(err);
    }
  };

  return (
    <section id="registration">
      <div
        className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10"
        data-aos="fade-up"
      >
    <p className="mt-3 text-sm text-white text-center italic mb-5">
  (If you're experiencing any delay in generating the QR code after clicking REGISTER, <span className="underline underline-offset-2">please wait a few moments</span> as the server may be under heavy load.)
</p>
        <div
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-white/20 drop-shadow-[0_4px_30px_rgba(255,255,255,0.6)]"
          data-aos="zoom-in"
        >
          <h2
            className="text-5xl font-extrabold text-center mb-10 text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.6)]"
            data-aos="fade-down"
          >
            Prayas <span className="text-cyan-300">Registration</span>
          </h2>

          {!submittedData ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "name", placeholder: "Full Name" },
                  { name: "college", placeholder: "College Name" },
                  { name: "rollNumber", placeholder: "Roll Number" },
                  { name: "email", placeholder: "Email Address", type: "email" },
                ].map((field, index) => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="p-3 rounded-lg bg-white/90 text-black placeholder-gray-600 shadow-md drop-shadow-md transition focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  />
                ))}

                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[6-9]{1}[0-9]{9}"
                  title="Enter a valid 10-digit phone number starting with 6-9"
                  className="p-3 rounded-lg bg-white/90 text-black placeholder-gray-600 shadow-md drop-shadow-md transition focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />

                {[
                  { name: "gender", options: ["Male", "Female", "Other"], placeholder: "Select Gender" },
                  { name: "year", options: years, placeholder: "Year of Study" },
                  { name: "department", options: departments, placeholder: "Select Department" },
                  { name: "type", options: ["Attendee", "Participant", "Contributor"], placeholder: "Register As" },
                ].map((select, i) => (
                  <select
                    key={select.name}
                    name={select.name}
                    value={formData[select.name]}
                    onChange={handleChange}
                    required
                    className="p-3 rounded-lg bg-white/90 text-black shadow-md drop-shadow-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    data-aos="fade-up"
                    data-aos-delay={500 + i * 100}
                  >
                    <option value="">{select.placeholder}</option>
                    {select.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ))}
              </div>

              <div data-aos="fade-up" data-aos-delay="800">
                <label className="block font-semibold mb-2 text-white">
                  Select Events (Optional):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {eventsList.map((event) => (
                    <label key={event} className="flex items-center gap-2 text-white">
                      <input
                        type="checkbox"
                        value={event}
                        checked={formData.events.includes(event)}
                        onChange={handleChange}
                        className="accent-cyan-500"
                      />
                      {event}
                    </label>
                  ))}
                </div>
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full bg-cyan-500 py-3 rounded-lg text-white font-bold hover:bg-cyan-600 transition transform hover:scale-105 shadow-md drop-shadow-md"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                Submit & Generate QR Code
              </button>
            </form>
          ) : (
            <div className="text-center" data-aos="zoom-in-up">
              <h3 className="text-3xl font-bold text-green-400">
                🎉 Registration Successful!
              </h3>
              <p className="mt-3">Show this QR code at the entry gate.</p>
              <p className="mt-2 text-lg font-semibold">Your Fest ID:</p>
              <p className="text-yellow-300 font-mono text-xl">{submittedData.uniqueId}</p>
              <div className="mt-4 bg-white p-4 rounded-xl shadow-md inline-block">
                <QRCode value={submittedData.uniqueId} size={200} />
              </div>
              <p className="text-sm mt-3 text-white/70">Take a screenshot or print this QR code.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
