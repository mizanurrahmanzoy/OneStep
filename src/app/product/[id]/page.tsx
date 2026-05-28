import { products } from "@/data/products";

import Container from "../../../components/shared/Container";
import ProductSection from "@/components/home/ProductSection";

import {
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

import { FaStar } from "react-icons/fa";

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailsPage({
  params,
}: Props) {

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return (
      <div className="p-20 text-center text-3xl">
        Product Not Found
      </div>
    );
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <main className="bg-[#f5f7fa] min-h-screen py-10">

      <Container>

        {/* Product Section */}
        <div className="bg-white rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>

            <div className="bg-gray-100 rounded-3xl overflow-hidden">

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[500px] object-cover"
              />

            </div>

          </div>

          {/* RIGHT */}
          <div>

            {/* Category */}
            <p className="text-blue-600 font-semibold mb-3">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-5">

              <FaStar className="text-yellow-400" />

              <span className="font-medium">
                {product.rating}
              </span>

              <span className="text-gray-400">
                (120 Reviews)
              </span>

            </div>

            {/* Price */}
            <div className="flex items-end gap-4 mt-8">

              <h2 className="text-5xl font-bold text-gray-900">
                ৳ {product.price}
              </h2>

              <p className="text-2xl line-through text-gray-400">
                ৳ {product.oldPrice}
              </p>

            </div>

            {/* Discount */}
            <div className="mt-4 inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
              {product.discount}% OFF
            </div>

            {/* Description */}
            <div className="mt-8">

              <h3 className="text-xl font-bold mb-3">
                Product Description
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Premium quality product with modern design and
                excellent durability. Perfect for everyday use
                and stylish lifestyle.
              </p>

            </div>

            {/* Quantity */}
            <div className="mt-8">

              <h3 className="font-semibold mb-3">
                Quantity
              </h3>

              <div className="flex items-center gap-4">

                <button className="w-12 h-12 rounded-xl border text-2xl">
                  -
                </button>

                <span className="text-xl font-semibold">
                  1
                </span>

                <button className="w-12 h-12 rounded-xl border text-2xl">
                  +
                </button>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-10">

              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition">

                <FiShoppingCart size={22} />

                Add To Cart

              </button>

              <button className="flex-1 border border-gray-300 hover:border-red-500 hover:text-red-500 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition">

                <FiHeart size={22} />

                Wishlist

              </button>

            </div>

          </div>

        </div>

        {/* Related Products */}
        <div className="mt-16">

          <ProductSection
            title="Related Products"
            products={relatedProducts}
          />

        </div>

      </Container>

    </main>
  );
}