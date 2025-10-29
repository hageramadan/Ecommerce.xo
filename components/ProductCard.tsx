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
  className
}: ProductCardProps ) {
  return (
    <>
     <Link
     aria-label="product"
      href={`/product/${id}`}
      className={`block hover:shadow-md transition-shadow duration-300 ` }
    >
<div className="flex flex-col border rounded-xl border-gray-200 pb-1 overflow-hidden gap-3">
        <div className="relative w-full h-[220px] md:h-[220px]">
          <ImageComponent image={img} />
          <HearComponent />
          <div className={` ${className}`}>
            {stock > 0 && (
              <div className="absolute bottom-1 start-0 text-white bg-[#62bd7c] rounded text-sm w-fit px-1.5">
                <p>متوفر</p>
              </div>
            )}
          </div>
        </div>
        <div className="p-2">
          <p className="text-[14px] text-[#252525] mb-2">{title}</p>
          <div className="flex gap-1">
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

    </Link>
      
    </>
  );
}
