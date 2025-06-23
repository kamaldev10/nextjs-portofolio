// components/sections/ContactSection.tsx
"use client"; // Mungkin ada form input di sini

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // 'success', 'error', 'submitting'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Di sini kamu akan mengirim data form.
    // Untuk portofolio sederhana, kamu bisa pakai layanan seperti Formspree, Netlify Forms, atau Web3Forms.
    // Contoh menggunakan Formspree:
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        // Ganti dengan ID Formspree-mu
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Bersihkan form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] py-16 text-center  bg-gray-50 dark:bg-gray-900"
    >
      <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0 ms-0 md:ms-5">
        <div>Location</div>
      </div>
      <div className="md:w-1/2 order-1 md:order-2 flex justify-center items-center p-4">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Have a question or want to work together? Feel free to send me a
            message!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-green-600 dark:text-green-400">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 dark:text-red-400">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
