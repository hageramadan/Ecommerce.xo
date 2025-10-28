import HearComponent from "./HearComponent";
import { ProductIn } from "@/Types/ProductIn";
import PriceComponent from "./PriceComponent";
import ImageComponent from "./ImageComponent";

export default function ProductCard({ image, title, price, stock }: ProductIn) {
  return (

    <>
          <div className="flex flex-col border rounded-xl border-gray-200 pb-1 overflow-hidden gap-3">
            <div className="relative w-full h-[220px] md:h-[220px]">
             <ImageComponent image={image}/>
              <HearComponent />
            </div>  
            <div className="p-2">
                   <p className="text-[14px] text-[#252525] mb-2">{title}</p>
           <PriceComponent price={price}/>
            </div>
         
          </div>
        </>
  )
}
