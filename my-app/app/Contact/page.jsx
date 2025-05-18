"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Contact Us 📞
      </h2>

      {/* Contact Form & Info Section */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-4">We would love to hear from you. Reach out to us for any inquiries.</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <p>123 Food Street, New York, NY 10001</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-red-500 text-xl" />
              <p>+1 234 567 890</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-red-500 text-xl" />
              <p>contact@foodtrove.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-gray-700 hover:text-red-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-700 hover:text-red-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-gray-700 hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Find Us on the Map</h3>
        <iframe
          className="w-full h-64 md:h-96 rounded-lg shadow-lg"
          src="https://maps.app.goo.gl/oJYLF6pEGJYu9Yww7?g_st=ic"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
