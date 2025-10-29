"use client";
import HearComponent from "./HearComponent";
import { ProductIn } from "@/Types/ProductIn";
import PriceComponent from "./PriceComponent";
import ImageComponent from "./ImageComponent";
import Link from "next/link";

interface ProductCardProps extends ProductIn {
  className?: string;
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
}: ProductCardProps) {
  return (
    <div className="flex flex-col border rounded-xl border-gray-200 pb-1 overflow-hidden gap-3 hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-[220px] md:h-[220px]">
        <Link
          aria-label="product image"
          href={`/product/${id}`}
          className="block w-full h-full"
        >
          <ImageComponent image={img} />
        </Link>
        <HearComponent />
        {stock > 0 && (
          <div
            className={` bottom-1 start-0 text-white bg-[#62bd7c] rounded text-sm w-fit px-1.5 ${className}`}
          >
            <p>متوفر</p>
          </div>
        )}
      </div>
      <div className="p-2">
        <Link href={`/product/${id}`}>
          <p className="text-[14px] text-[#252525] mb-2 hover:text-[#08b63d] transition">
            {title}
          </p>
        </Link>
        <div className="flex gap-1 items-center">
          <PriceComponent price={price} />
          <p className="text-gray-700 line-through text-[0.8rem] mx-1">
            {oldPrice}
          </p>
          <div className="font-bold text-[1rem] flex text-[#08b63d]">
            <span className="me-1">%</span>
            <p>{discount}</p>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
}
