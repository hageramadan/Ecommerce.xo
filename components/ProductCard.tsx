"use client";
import { useState, useEffect } from "react";
import HearComponent from "./HearComponent";
import { ProductIn } from "@/Types/ProductIn";
import PriceComponent from "./PriceComponent";
import ImageComponent from "./ImageComponent";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";

import Toast from "./Toaster";
import { useCart } from "@/src/context/CartContext";

interface ProductCardProps extends ProductIn {
  className?: string;
  className2?: string;
  className3?: string;
  onFavoriteChange?: () => void;
}

export default function ProductCard({
  id,
  img,
  title,
  price,
  oldPrice,
  discount,
  stock = 0,
  className,
  className2,
  className3,
  onFavoriteChange,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [toast, setToast] = useState<{ msg: string; img?: string; type: "success" | "warning" | "error" } | null>(null);

  const { cart, addToCart } = useCart();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
    setIsFavorite(favorites.includes(id.toString()));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
    let updatedFavorites: string[];

    if (isFavorite) {
      updatedFavorites = favorites.filter((favId) => favId !== id.toString());
    } else {
      updatedFavorites = [...favorites, id.toString()];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
    onFavoriteChange?.();
  };

  const handleAddToCart = () => {
    const existing = cart.find(item => item.id === id);

    if (existing) {
      addToCart({ id, title, price, img, quantity: (existing.quantity || 0) + 1 });
    } else {
      addToCart({ id, title, price, img, quantity: 1 });
    }
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
  if (favorites.includes(id.toString())) {
    const updatedFavorites = favorites.filter(favId => favId !== id.toString());
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(false);
    onFavoriteChange?.(); // لتحديث أي state خارجي لو موجود
  }
    setToast({ msg: "تمت إضافة المنتج إلى العربة بنجاح!", type: "success", img });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="flex flex-col border rounded-xl border-gray-200 pb-1 overflow-hidden gap-3 hover:shadow-md transition-shadow duration-300">
      {toast && <Toast message={toast.msg} type={toast.type} img={toast.img} />}

      <div className="relative w-full h-[290px] md:h-[220px]">
        <Link aria-label="product image" href={`/product/${id}`} className="block w-full h-full overflow-hidden">
          <ImageComponent image={img} />
        </Link>

        <HearComponent liked={isFavorite} onToggleLike={toggleFavorite} />

        {stock > 0 && (
          <div className={`bottom-1 start-0 text-white bg-[#62bd7c] rounded text-sm w-fit px-1.5 ${className}`}>
            <p>متوفر</p>
          </div>
        )}
      </div>

      <div className="p-2">
        <Link href={`/product/${id}`}>
          <p className="text-[14px] text-[#252525] mb-2 hover:text-[#08b63d] transition">{title}</p>
        </Link>

        <div className="flex gap-1 items-center">
          <PriceComponent price={price} />
          {oldPrice && <p className="text-gray-700 line-through text-[0.8rem] mx-1">{oldPrice}</p>}
          {discount && (
            <div className={`font-bold text-[1rem] flex text-[#08b63d] ${className3}`}>
              <span className="me-1">%</span>
              <p>{discount}</p>
              <span>-</span>
            </div>
          )}
        </div>

        <button  onClick={handleAddToCart} className={`${className2} mb-0 mt-2 text-end cursor-pointer w-full`}>
          <div className="flex text-pro rounded justify-center border-pro p-2 items-center border gap-2">
            <p className="text-pro">أضف الي العربة</p>
            <BsCartPlus className="text-pro" />
          </div>
        </button>
      </div>
    </div>
  );
}
