"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FiMinus,
    FiPlus,
    FiShoppingBag,
    FiTrash2,
    FiX,
} from "react-icons/fi";

import { useCartStore } from "@/store/cartStore";

const CartDrawer = () => {

    const {
        cart,
        isOpen,
        closeCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCartStore();

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <>
            {/* Overlay */}
            <div
                onClick={closeCart}
                className={`fixed inset-0 bg-black/40 z-40 transition duration-300 ${isOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-white z-50 shadow-2xl transition duration-300 flex flex-col ${isOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                    }`}
            >

                {/* Header */}
                <div className="p-5 border-b flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <FiShoppingBag size={24} />

                        <h2 className="text-2xl font-bold">
                            Shopping Cart
                        </h2>

                    </div>

                    <button
                        onClick={closeCart}
                        className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
                    >
                        <FiX size={22} />
                    </button>

                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-5 space-y-5">

                    {cart.length === 0 ? (

                        <div className="h-full flex flex-col items-center justify-center text-center">

                            <FiShoppingBag
                                size={80}
                                className="text-gray-300 mb-5"
                            />

                            <h3 className="text-2xl font-bold mb-2">
                                Your cart is empty
                            </h3>

                            <p className="text-gray-500">
                                Add products to your cart
                            </p>

                        </div>

                    ) : (

                        cart.map((item) => (

                            <div
                                key={item.id}
                                className="flex gap-4 border rounded-2xl p-4"
                            >

                                {/* Image */}
                                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />

                                </div>

                                {/* Content */}
                                <div className="flex-1">

                                    <h3 className="font-semibold line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-blue-600 font-bold mt-2">
                                        ৳ {item.price}
                                    </p>

                                    {/* Quantity */}
                                    <div className="flex items-center justify-between mt-4">

                                        <div className="flex items-center gap-2">

                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                className="w-8 h-8 rounded-lg border flex items-center justify-center"
                                            >
                                                <FiMinus />
                                            </button>

                                            <span className="font-semibold">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                className="w-8 h-8 rounded-lg border flex items-center justify-center"
                                            >
                                                <FiPlus />
                                            </button>

                                        </div>

                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="text-red-500 hover:text-red-600"
                                        >
                                            <FiTrash2 size={20} />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))

                    )}

                </div>

                {/* Footer */}
                {cart.length > 0 && (

                    <div className="border-t p-5">

                        <div className="flex items-center justify-between mb-5">

                            <h3 className="text-xl font-bold">
                                Subtotal
                            </h3>

                            <h3 className="text-2xl font-bold text-blue-600">
                                ৳ {subtotal}
                            </h3>

                        </div>

                        <Link
                            href="/checkout" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl font-semibold transition">
                            Proceed To Checkout
                        </Link>

                    </div>

                )}

            </div>
        </>
    );
};

export default CartDrawer;