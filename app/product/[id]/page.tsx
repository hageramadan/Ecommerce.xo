import { inStock, inStock2, inStock3, inStock4, inStock5 } from "@/Types/data";
import FreeDeliver from "@/components/FreeDeliver";
import ImageComponent from "@/components/ImageComponent";
import PlansPayment from "@/components/PlansPayment";
import PriceComponent from "@/components/PriceComponent";
import ProductNotFound from "@/components/ProductNotFound";


import { FaTruckFast } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";



const allProducts = [
  ...inStock,
  ...inStock2,
  ...inStock3,
  ...inStock4,
  ...inStock5,
];

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = allProducts.find((p) => p.id.toString() === id);
     
  
  if (!product) {
    return (
      <>
        <ProductNotFound/>
      </>
    );
  }

  return (
    <>
      <div className="mx-5 lg:mx-[18%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <ImageComponent image={product.img} />
        {/* */}
        <div>
          <h2 className="text-[#43454c] mb-3 text-xl font-bold">
            {product.title}
          </h2>
          <div className="flex gap-3">
            <div className="flex gap-1 text-pro-max items-center">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
            <p className="   text-[#43454c] text-lg ">4.7</p>
            <span className="text-[#646464] text-lg">|</span>
            <p className=" underline cursor-pointer text-[#43454c] text-lg ">
              (تقييمات)
            </p>
          </div>
          {/* free  */}
         <FreeDeliver/>
          {product.discount && (
            <div className="flex gap-1 mt-5">
              <PriceComponent price={product.price} />
              <p className="text-gray-400 line-through text-[1rem] mx-1 ">
                {product.oldPrice}
              </p>
              <div className="font-bold text-[1rem] flex text-[#08b63d] bg-[#d2ecda] rounded py-0.5 px-3">
                <span className="me-1">%</span>
                <p>{product.discount}</p>
                <span>-</span>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 mt-3">
            <p className="text-[#898989] text-[13px] ">
              السعر يشمل ضريبة القيمة المضافة
            </p>

            {product.oldPrice && product.price && (
              <p className="text-green-600 font-semibold text-[12px] ">
                لقد وفرت {" "}
                {(
                  parseFloat(product.oldPrice.replace(/[^\d.]/g, "")) -
                  parseFloat(product.price.replace(/[^\d.]/g, ""))
                ).toLocaleString("en-US")}{" "}
                جنيه
              </p>
            )}
          </div>
          <div className="mt-3 flex gap-1 ">
            <FaTruckFast className=" h-5 w-8  text-pro mt-1 scale-x-[-1] "/>
            <p className="text-gray-600 text-[0.95rem]">التوصيل خلال الفترة من <span className=" font-bold text-gray-700 ">06 نوفمبر - 16 نوفمبر </span>باستثناء الإجازات</p>
          </div>
        
        </div>
       <PlansPayment product={product} />
      </div>
    </>
  );
}
