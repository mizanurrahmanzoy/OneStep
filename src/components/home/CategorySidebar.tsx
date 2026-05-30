"use client";

import { useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

import { categories } from "@/data/categories";
import { useFilterStore } from "@/store/filterStore";

const CategorySidebar = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<number | null>(null);

  const {
    setCategory,
    setSubCategory,
    setChildCategory,
  } = useFilterStore();
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-5 shadow-sm">

      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        All Categories
      </h2>

      <div className="space-y-2">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="border border-gray-100 rounded-2xl overflow-hidden"
            >
              {/* Category */}
              <button
                onClick={() => {

                  setCategory(category.name);
                  setSubCategory(null);
                  setChildCategory(null);

                  setOpenCategory(
                    openCategory === category.id
                      ? null
                      : category.id
                  );
                }}
                className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">

                  <div className="text-blue-600">
                    <Icon size={22} />
                  </div>

                  <span className="font-medium">
                    {category.name}
                  </span>

                </div>

                {openCategory === category.id ? (
                  <FiChevronDown />
                ) : (
                  <FiChevronRight />
                )}
              </button>

              {/* Sub Categories */}
              {openCategory === category.id && (
                <div className="bg-gray-50 border-t">

                  {category.subCategories.map((sub) => (
                    <div key={sub.id}>

                      {/* Sub Category */}
                      <button
                        onClick={() => {

                          setCategory(category.name);

                          setSubCategory(sub.name);

                          setChildCategory(null);

                          setOpenSubCategory(
                            openSubCategory === sub.id
                              ? null
                              : sub.id
                          );
                        }}
                        className="w-full flex justify-between items-center px-10 py-3 hover:bg-gray-100 transition"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {sub.name}
                        </span>

                        {openSubCategory === sub.id ? (
                          <FiChevronDown size={16} />
                        ) : (
                          <FiChevronRight size={16} />
                        )}
                      </button>

                      {/* Child Categories */}
                      {openSubCategory === sub.id && (
                        <div className="pl-14 pr-4 pb-3">

                          {sub.children.map((child) => (
                            <button
                              key={child}
                              className="block w-full text-left py-2 text-sm text-gray-500 hover:text-blue-600 transition"
                              onClick={() => {
                                setCategory(category.name);

                                setSubCategory(sub.name);

                                setChildCategory(child);
                              }}
                            >


                              {child}
                            </button>
                          ))}

                        </div>
                      )}

                    </div>
                  ))}

                </div>
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default CategorySidebar;