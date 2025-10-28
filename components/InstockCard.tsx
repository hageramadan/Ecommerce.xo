import Image from "next/image";
import Link from "next/link";
import HearComponent from "./HearComponent";
import { ProductIn } from "@/Types/ProductIn";

export default function InStockCard({ image, title, price, stock }: ProductIn) {
  return (
    <>
      <div className="flex flex-col border rounded-xl border-gray-200 pb-2 px-2 gap-3">
        <div className="relative w-full h-[260px] md:h-[250px]">
          <Link href={"/"} aria-label={`اذهب إلى المنتج`}>
            <Image
              src={image}
              alt="صورة المنتج"
              fill
              className="object-contain rounded-3xl"
              loading="lazy"
              decoding="async"
            />
          </Link>

          <HearComponent />

     
          {Number(stock ?? 0) > 0 &&(
            <div className="absolute bottom-1 start-0 text-white bg-[#62bd7c] rounded text-sm w-fit px-1.5">
              <p>متوفر</p>
            </div>
          )}
        </div>

        <p className="text-[14px] text-[#252525]">{title}</p>

        <div className="flex gap-1">
          <h3 className="font-bold text-xl">{price}</h3>
          <span className="mt-1.5">جنيه</span>
        </div>
      </div>
    </>
  );
}
