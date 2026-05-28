"use client";

import { categories } from "../../data/categories";
import { FiChevronRight } from "react-icons/fi";

const CategorySidebar = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">

      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        All Categories
      </h2>

      <div className="space-y-2">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              className="w-full flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-gray-100 transition"
            >

              <div className="flex items-center gap-4">

                <div className="text-blue-600">
                  <Icon size={22} />
                </div>

                <span className="font-medium text-gray-700">
                  {category.name}
                </span>

              </div>

              <FiChevronRight className="text-gray-400" />

            </button>
          );
        })}

      </div>
    </div>
  );
};

export default CategorySidebar;