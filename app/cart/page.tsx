"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductIn } from "@/Types/ProductIn";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<ProductIn[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const updateCart = (items: ProductIn[]) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const removeItem = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const changeQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    updateCart(updated);
  };

  const total = cartItems.reduce((acc, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0
        : item.price || 0;
    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0);

  const formattedTotal = total.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">العربة فارغة</h2>
        <Link
          href="/"
          className="bg-pro text-white py-2 px-6 rounded hover:bg-pro-max transition"
        >
          العودة للتسوق
        </Link>
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">عربة التسوق</h2>

      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center border-b pb-4 gap-4"
          >
            <div className="flex gap-4 items-center flex-1">
              <div className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                )}
              </div>
              <div>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.price} جنيه</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                onClick={() =>
                  changeQuantity(item.id, (item.quantity || 1) - 1)
                }
              >
                -
              </button>
              <span className="px-4 py-1 border rounded text-center w-12">
                {item.quantity || 1}
              </span>
              <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                onClick={() =>
                  changeQuantity(item.id, (item.quantity || 1) + 1)
                }
              >
                +
              </button>
            </div>

            <button
              className="px-3 py-1 text-red-500 hover:text-red-700 transition"
              onClick={() => removeItem(item.id)}
            >
              حذف
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t pt-6 gap-4">
        <p className="text-xl font-bold">الإجمالي: {formattedTotal} جنيه</p>
        <button className="bg-pro text-white px-6 py-2 rounded hover:bg-pro-max transition">
          متابعة الدفع
        </button>
      </div>
    </div>
  );
}
