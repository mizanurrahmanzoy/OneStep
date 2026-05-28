import { create } from "zustand";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
};

type CartItem = Product & {
    quantity: number;
};

type CartStore = {
    cart: CartItem[];
    isOpen: boolean;

    openCart: () => void;

    closeCart: () => void;

    addToCart: (product: Product) => void;

    removeFromCart: (id: number) => void;

    increaseQuantity: (id: number) => void;

    decreaseQuantity: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({



    cart: [],
    isOpen: false,
    openCart: () => set({ isOpen: true }),

    closeCart: () => set({ isOpen: false }),
    addToCart: (product) =>
        set((state) => {

            const existing = state.cart.find(
                (item) => item.id === product.id
            );

            if (existing) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                            : item
                    ),
                };
            }

            return {
                cart: [
                    ...state.cart,
                    {
                        ...product,
                        quantity: 1,
                    },
                ],
            };
        }),

    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter(
                (item) => item.id !== id
            ),
        })),

    increaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            ),
        })),

    decreaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity:
                            item.quantity > 1
                                ? item.quantity - 1
                                : 1,
                    }
                    : item
            ),
        })),
}));