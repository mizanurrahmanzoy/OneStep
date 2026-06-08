import type { Metadata } from "next";

import "./globals.css";

import { AuthProvider } from "@/context/AuthProvider";

import CartDrawer from "@/components/cart/CartDrawer";

import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "OneStep",
  description: "Modern Ecommerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        <AuthProvider>

          {children}

          <CartDrawer />

          <Toaster position="top-right" />

          <Footer />

        </AuthProvider>
      </body>

    </html>
  );
}