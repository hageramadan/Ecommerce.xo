import type { Metadata } from "next";
import "./globals.css";
import "@/styles/screen.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/src/context/CartContext";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/src/context/AuthContext";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "make your life easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white text-gray-900">
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Toaster position="top-center" />
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
