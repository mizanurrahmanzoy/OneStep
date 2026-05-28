"use client";

import Image from "next/image";

import Container from "@/components/shared/Container";

import {
  FiCreditCard,
  FiMapPin,
  FiPhone,
  FiUser,
} from "react-icons/fi";

import { useCartStore } from "@/store/cartStore";

const CheckoutPage = () => {

  const cart = useCartStore((state) => state.cart);

  const subtotal = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );
  useCartStore.getState().closeCart();

  const shipping = 120;

  const total = subtotal + shipping;

  return (
    <main className="bg-[#f5f7fa] min-h-screen py-10">

      <Container>

        {/* Page Header */}
        <div className="mb-10">

          <h1 className="text-4xl font-extrabold text-gray-900">
            Checkout
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your order information
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            {/* Billing Information */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200">

              <h2 className="text-2xl font-bold mb-6">
                Billing Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Name */}
                <div>

                  <label className="text-sm font-medium mb-2 block">
                    Full Name
                  </label>

                  <div className="flex items-center border rounded-2xl px-4 h-14">

                    <FiUser className="text-gray-400" />

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-3 outline-none bg-transparent"
                    />

                  </div>

                </div>

                {/* Phone */}
                <div>

                  <label className="text-sm font-medium mb-2 block">
                    Phone Number
                  </label>

                  <div className="flex items-center border rounded-2xl px-4 h-14">

                    <FiPhone className="text-gray-400" />

                    <input
                      type="text"
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 outline-none bg-transparent"
                    />

                  </div>

                </div>

                {/* Address */}
                <div className="md:col-span-2">

                  <label className="text-sm font-medium mb-2 block">
                    Delivery Address
                  </label>

                  <div className="flex items-start border rounded-2xl px-4 py-4">

                    <FiMapPin className="text-gray-400 mt-1" />

                    <textarea
                      placeholder="Enter full delivery address"
                      className="w-full px-3 outline-none bg-transparent resize-none"
                      rows={4}
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200">

              <h2 className="text-2xl font-bold mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">

                {/* Cash On Delivery */}
                <label className="border rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-blue-500 transition">

                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                  />

                  <FiCreditCard size={22} />

                  <div>

                    <h3 className="font-semibold">
                      Cash On Delivery
                    </h3>

                    <p className="text-sm text-gray-500">
                      Pay when you receive the order
                    </p>

                  </div>

                </label>

                {/* Online Payment */}
                <label className="border rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-blue-500 transition">

                  <input
                    type="radio"
                    name="payment"
                  />

                  <FiCreditCard size={22} />

                  <div>

                    <h3 className="font-semibold">
                      Online Payment
                    </h3>

                    <p className="text-sm text-gray-500">
                      Pay using card or mobile banking
                    </p>

                  </div>

                </label>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-white rounded-3xl border border-gray-200 p-6 sticky top-24">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-5">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-4"
                  >

                    {/* Image */}
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 shrink-0">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />

                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      <h3 className="font-medium line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Qty: {item.quantity}
                      </p>

                      <p className="font-bold text-blue-600 mt-2">
                        ৳ {item.price * item.quantity}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* Divider */}
              <div className="border-t my-6" />

              {/* Pricing */}
              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-gray-600">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ৳ {subtotal}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-600">
                    Shipping
                  </span>

                  <span className="font-semibold">
                    ৳ {shipping}
                  </span>

                </div>

                <div className="border-t pt-4 flex items-center justify-between">

                  <span className="text-xl font-bold">
                    Total
                  </span>

                  <span className="text-2xl font-extrabold text-blue-600">
                    ৳ {total}
                  </span>

                </div>

              </div>

              {/* Place Order */}
              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition text-lg">

                Place Order

              </button>

            </div>

          </div>

        </div>

      </Container>

    </main>
  );
};

export default CheckoutPage;