"use client";
import { menu_list, food_list } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import FoodItem from "./FoodItem";

const DisplayFood = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Show all items if no category is selected, otherwise filter
  const filteredFood = selectedCategory
    ? food_list.filter((item) => item.category === selectedCategory)
    : food_list;

  return (
    <section className="py-12 px-6 md:px-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Our Delicious Menu 🍽️
      </h2>

      {/* Scrollable Menu List */}
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar px-2 py-4">
        {/* Show All Button */}
        <div
          onClick={() => setSelectedCategory("")}
          className={`cursor-pointer flex flex-col items-center p-3 rounded-lg transition-all ${
            selectedCategory === ""
              ? "border-2 border-red-500 bg-red-100 shadow-md"
              : "hover:bg-gray-100"
          }`}
        >
          <span className="text-lg font-semibold">🍽️ All</span>
        </div>

        {/* Category Buttons */}
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(item.menu_name)}
            className={`cursor-pointer flex flex-col items-center p-3 rounded-lg transition-all ${
              selectedCategory === item.menu_name
                ? "border-2 border-red-500 bg-red-100 shadow-md"
                : "hover:bg-gray-100"
            }`}
          >
            {/* Menu Image */}
            <Image
              src={item.menu_image}
              alt={item.menu_name}
              width={100}
              height={100}
              className="rounded-full min-w-[120px] object-cover"
            />

            {/* Menu Name */}
            <h3 className="mt-2 text-lg font-semibold text-gray-800">
              {item.menu_name}
            </h3>
          </div>
        ))}
      </div>

      {/* Food Items Display */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredFood.map((food, index) => (
          <FoodItem key={index} food={food} />
        ))}
      </div>
    </section>
  );
};

export default DisplayFood;
