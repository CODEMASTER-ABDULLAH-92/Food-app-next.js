import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodItem = ({ food }) => {
  return (
    <Link href={`food/${food._id}`} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all max-w-sm">
      {/* Food Image */}
      <div className="w-full h-48 relative">
        <Image
          src={food.image}
          alt={food.name}
          width={200}
          height={200}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      {/* Food Details */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
        <p className="text-gray-600 mt-2 text-sm">{food.description}</p>

        {/* Price & Category */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-blue-600">${food.price}</span>
          <span className="px-3 py-1 text-sm bg-gray-200 rounded-lg">
            {food.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FoodItem;
