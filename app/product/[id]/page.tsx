import { inStock, inStock2, inStock3, inStock4, inStock5 } from "@/Types/data";
import ImageComponent from "@/components/ImageComponent";
import PriceComponent from "@/components/PriceComponent";
import Link from "next/link";
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
        <div className="p-10 text-center text-2xl">
          <p>هذا المنتج غير متوفر! </p>
          <button className="text-white bg-pro px-7 py-2 rounded-4xl mt-5 text-xl pb-3">
            <Link href="/">متابعة التسوق</Link>
          </button>
        </div>
        ;
      </>
    );
  }

  return (
    <>
      <div className="mx-5 lg:mx-[18%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <ImageComponent image={product.img} />
        {/* */}
        <div>
          <h2 className="text-[#43454c] mb-3 text-xl font-bold">{product.title}</h2>
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
            <p className=" underline cursor-pointer text-[#43454c] text-lg ">(تقييمات)</p>
          </div>
          {product.discount &&(
                <div className="flex gap-1 mt-5">
                        <PriceComponent price={product.price} />
                        <p className="text-gray-400 line-through text-[1rem] mx-1 ">
                          {product.oldPrice}
                        </p>
                        <div className="font-bold text-[1rem] flex text-[#08b63d] bg-[#d2ecda] rounded py-0.5 px-3">
                          <span className="me-1">%</span>
                          <p >{product.discount}</p>
                          <span>-</span>
                        </div>
                      </div>
          )}
        </div>
      </div>
    </>
  );
}
