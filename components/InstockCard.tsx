import HearComponent from "./HearComponent";
import { ProductIn } from "@/Types/ProductIn";
import PriceComponent from "./PriceComponent";
import ImageComponent from "./ImageComponent";

export default function InStockCard({ img, title, price }: ProductIn) {
  return (
    <>
      <div className="flex flex-col border rounded-xl border-gray-200 pb-2 px-2 gap-3">
        <div className="relative w-full h-[260px] md:h-[250px]">
          <ImageComponent image={img} />
          <HearComponent />
          <div className="absolute bottom-1 start-0 text-white bg-[#62bd7c] rounded text-sm w-fit px-1.5">
            <p>متوفر</p>
          </div>
        </div>
        <div className="p-2">
          <p className="text-[14px] text-[#252525] mb-1">{title}</p>
          <PriceComponent price={price} />
        </div>
      </div>
    </>
  );
}
