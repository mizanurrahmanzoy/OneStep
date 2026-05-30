"use client";

import { useFilterStore } from "@/store/filterStore";

export default function SearchBar() {

  const search = useFilterStore(
    (state) => state.search
  );

  const setSearch = useFilterStore(
    (state) => state.setSearch
  );

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full h-14 border rounded-2xl px-5 outline-none"
    />
  );
}