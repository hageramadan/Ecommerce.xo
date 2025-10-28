"use client";
import HearComponent from "./HearComponent";
import { ProductIn } from "@/Types/ProductIn";
import PriceComponent from "./PriceComponent";
import ImageComponent from "./ImageComponent";

export default function ProductCard({
  img,
  title,
  price,
  oldPrice,
  discount,
}: ProductIn) {
  return (
    <>
      <div className="flex flex-col border rounded-xl border-gray-200 pb-1 overflow-hidden gap-3">
        <div className="relative w-full h-[220px] md:h-[220px]">
          <ImageComponent image={img} />
          <HearComponent />
        </div>
        <div className="p-2">
          <p className="text-[14px] text-[#252525] mb-2">{title}</p>
          <div className="flex gap-1">
            <PriceComponent price={price} />
            <p className="text-gray-700 line-through text-[0.8rem] mx-1">{oldPrice}</p>
            <div className="font-bold text-[1rem] flex text-[#08b63d]">
                <span className="me-1">%</span>
               <p>{discount}</p> 
                <span>-</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
