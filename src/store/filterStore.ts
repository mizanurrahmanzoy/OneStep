import { create } from "zustand";

type FilterState = {
  search: string;

  category: string | null;

  subCategory: string | null;

  childCategory: string | null;

  setSearch: (value: string) => void;

  setCategory: (value: string | null) => void;

  setSubCategory: (value: string | null) => void;

  setChildCategory: (value: string | null) => void;

  clearFilters: () => void;
};

export const useFilterStore =
  create<FilterState>((set) => ({
    search: "",

    category: null,

    subCategory: null,

    childCategory: null,

    setSearch: (value) =>
      set({ search: value }),

    setCategory: (value) =>
      set({
        category: value,
        subCategory: null,
        childCategory: null,
      }),

    setSubCategory: (value) =>
      set({
        subCategory: value,
        childCategory: null,
      }),

    setChildCategory: (value) =>
      set({
        childCategory: value,
      }),

    clearFilters: () =>
      set({
        search: "",
        category: null,
        subCategory: null,
        childCategory: null,
      }),
  }));