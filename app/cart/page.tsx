"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // تحميل المنتجات من localStorage عند دخول الصفحة
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // تحديث localStorage عند تغير المنتجات
  const updateCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  // حذف منتج من الكارت
  const removeItem = (id: string) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
  };

  // تغيير الكمية
  const changeQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    updateCart(updated);
  };

  // حساب الإجمالي
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-500">{item.price} ريال</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                onClick={() =>
                  changeQuantity(item.id, item.quantity - 1)
                }
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                onClick={() =>
                  changeQuantity(item.id, item.quantity + 1)
                }
              >
                +
              </button>

              <button
                className="px-2 py-1 text-red-500 hover:text-red-700 transition"
                onClick={() => removeItem(item.id)}
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center text-xl font-bold">
        <p>الإجمالي: {total} ريال</p>
        <button className="bg-pro text-white px-6 py-2 rounded hover:bg-pro-max transition">
          متابعة الدفع
        </button>
      </div>
    </div>
  );
}
