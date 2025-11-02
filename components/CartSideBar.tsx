"use client";
import { useState, useRef, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";


export default function CartSidebar() {
  const [cartOpen, setCartOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // استخدام الـ context
  const { cart, removeFromCart } = useCart();

  // إخفاء الـ sidebar عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setCartOpen(false);
      }
    };
    if (cartOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cartOpen]);

  return (
    <>
      {/* أيقونة العربة */}
      <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
        <div className="flex relative gap-3">
          <HiOutlineShoppingBag size={25} strokeWidth={1.3} />
          <span className="absolute -top-2 -end-2 xl:end-10 lg:end-9 bg-red-500 rounded-full w-6 h-6 p-2 text-[0.9rem] flex items-center justify-center text-white">
            {cart.length}
          </span>
          <p className="hidden2">العربة</p>
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-80 md:w-96 h-full bg-white z-50 shadow-lg p-5 flex flex-col"
            >
              {/* Close button */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-5">عربة التسوق</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="self-end text-gray-600 hover:text-gray-800 mb-5 cursor-pointer"
                >
                  <AiOutlineClose size={20} />
                </button>
              </div>

              {/* قائمة المنتجات */}
              <div className="flex-1 overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-center text-gray-500 mt-10">العربة فارغة</p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center mb-3 border-b pb-2"
                    >
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          {item.price} × {item.quantity}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        حذف
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* زر الذهاب للكارت */}
              <Link
                href="/cart"
                className="bg-pro text-white py-2 rounded text-center mt-5 hover:bg-pro-max transition"
                onClick={() => setCartOpen(false)}
              >
                اذهب إلى العربة
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
