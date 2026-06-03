"use client";
import Link from "next/link";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCartStore } from "@/store/cartStore";
import { products } from "@/data/products";

type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  image: string;
  discount: number;
  rating: number;
  category: string;
};

type Props = {
  product: Product;
};
const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );
  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 block"
    >

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100">

        {/* Discount */}
        <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.discount}% OFF
        </div>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:text-red-500 transition">
          <FiHeart />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <p className="text-sm text-blue-600 font-medium mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-800 line-clamp-2 min-h-[56px]">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">

          <FaStar className="text-yellow-400" />

          <span className="text-sm text-gray-600">
            {product.rating}
          </span>

        </div>

        {/* Price */}
        <div className="flex items-end gap-3 mt-4">

          <p className="text-2xl font-bold text-gray-900">
            ৳ {product.price}
          </p>

          <p className="text-gray-400 line-through text-sm">
            ৳ {product.oldPrice}
          </p>

        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            e.preventDefault();

            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
            });
          }}
          className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl flex items-center justify-center gap-2 transition font-medium"
        >

          <FiShoppingCart />

          Add To Cart

        </button>

      </div>
    </Link>
  );
};

export default ProductCard;