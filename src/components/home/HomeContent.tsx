"use client";

import { useFilterStore } from "@/store/filterStore";

import MainHero from "./MainHero";
import ProductGrid from "./ProductGrid";
import ProductSection from "./ProductSection";

import { products } from "@/data/products";
import CategorySidebar from "./CategorySidebar";

export default function HomeContent() {

  const {
    search,
    category,
    subCategory,
    childCategory,
  } = useFilterStore();

  const hasFilters =
    search.trim() ||
    category ||
    subCategory ||
    childCategory;

  if (hasFilters) {
    return (
      <div className="py-6">

        <div className="mb-6">

          <h2 className="text-3xl font-bold">
            Products
          </h2>

          <div className="flex gap-2 mt-3 flex-wrap">

            {category && (
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {category}
                <span className="ml-1 cursor-pointer text-black-500 font-bold" onClick={() => useFilterStore.setState({ category: null, subCategory: null, childCategory: null })} >
                  &nbsp;×
                </span>
              </span>
            )}


            {subCategory && (
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {subCategory}
                <span className="ml-1 cursor-pointer text-black-500 font-bold" onClick={() => useFilterStore.setState({ subCategory: null, childCategory: null })} >
                  &nbsp;×
                </span>
              </span>
            )}

            {childCategory && (
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {childCategory}
                <span className="ml-1 cursor-pointer text-black-500 font-bold" onClick={() => useFilterStore.setState({ childCategory: null })} >
                  &nbsp;×
                </span>
              </span>
            )}

          </div>

        </div>
        <div className="grid grid-cols-12 gap-6 items-stretch">

          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <CategorySidebar />
          </div>

          {/* Hero */}
          <div className="col-span-12 lg:col-span-9">

            <ProductGrid />

          </div>

        </div>

      </div>
    );
  }

  return (
    <>
      <MainHero />

      <ProductSection
        title="Trending Products"
        products={products}
      />

      <ProductSection
        title="Electronics Deals"
        products={products.filter(
          (item) =>
            item.category === "Electronics"
        )}
      />

      <ProductSection
        title="Home Decor Picks"
        products={products.filter(
          (item) =>
            item.category === "Home Decor"
        )}
      />

      <ProductSection
        title="Cosmetics Collection"
        products={products.filter(
          (item) =>
            item.category === "Cosmetics"
        )}
      />

      <ProductSection
        title="Jewelry Collection"
        products={products.filter(
          (item) =>
            item.category === "Jewelry"
        )}
      />
    </>
  );
}