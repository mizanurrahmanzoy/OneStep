"use client";

import { products } from "@/data/products";

import { useFilterStore } from "@/store/filterStore";

export default function ProductGrid() {

  const {
    search,
    category,
    subCategory,
    childCategory,
  } = useFilterStore();

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        search === "" ||
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        !category ||
        product.category === category;

      const matchesSubCategory =
        !subCategory ||
        product.subCategory ===
          subCategory;

      const matchesChildCategory =
        !childCategory ||
        product.childCategory ===
          childCategory;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubCategory &&
        matchesChildCategory
      );
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {filteredProducts.map((product) => (

        <div
          key={product.id}
          className="bg-white rounded-3xl p-5 border"
        >

          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full object-cover rounded-2xl"
          />

          <h3 className="font-bold mt-4">
            {product.title}
          </h3>

          <p className="text-blue-600 font-bold mt-2">
            ৳ {product.price}
          </p>

        </div>

      ))}

      {filteredProducts.length === 0 && (

        <div className="col-span-full text-center py-20">

          <h2 className="text-2xl font-bold">
            No products found
          </h2>

        </div>

      )}

    </div>
  );
}