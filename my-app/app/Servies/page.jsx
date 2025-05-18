"use client";
import React from "react";
import { FaUtensils, FaTruck, FaConciergeBell, FaStar, FaLeaf, FaClock } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Delicious Meals",
    description: "Enjoy a variety of mouth-watering meals made by top chefs.",
    icon: <FaUtensils className="text-red-500 text-5xl" />,
  },
  {
    id: 2,
    title: "Fast Delivery",
    description: "We deliver your food hot and fresh, right to your doorstep.",
    icon: <FaTruck className="text-red-500 text-5xl" />,
  },
  {
    id: 3,
    title: "24/7 Service",
    description: "Order anytime, anywhere, and we’ll serve you with pleasure.",
    icon: <FaClock className="text-red-500 text-5xl" />,
  },
  {
    id: 4,
    title: "Premium Quality",
    description: "We use only high-quality, fresh ingredients in every meal.",
    icon: <FaStar className="text-red-500 text-5xl" />,
  },
  {
    id: 5,
    title: "Healthy Choices",
    description: "Choose from a variety of healthy and organic meal options.",
    icon: <FaLeaf className="text-red-500 text-5xl" />,
  },
  {
    id: 6,
    title: "Personalized Service",
    description: "Customize your orders to suit your taste and dietary needs.",
    icon: <FaConciergeBell className="text-red-500 text-5xl" />,
  },
];

const Services = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Our Services 🍽️
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center hover:shadow-xl transition-all"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Service Title */}
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
