"use client";
import { food_list } from "@/assets/assets";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;

    // Find the food item matching the id
    const foundItem = food_list.find((item) => item._id === id);

    setData(foundItem || null);
  }, [id]);

  if (!data) return <h1 className="text-center mt-10 text-red-500">Item not found</h1>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
      <p className="text-gray-600 mt-2">{data.description}</p>
      <p className="text-xl font-semibold text-red-500 mt-4">${data.price}</p>
    </div>
  );
};

export default Page;
