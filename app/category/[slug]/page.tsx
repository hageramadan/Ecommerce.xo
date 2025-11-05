"use client";
import { use } from "react";
import Discount from "@/components/Discount";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import { categoryNames, products } from "@/Types/data";
import { FaSquare } from "react-icons/fa";
import { PiLineVerticalBold } from "react-icons/pi";
import SortMenu from "@/components/SortMenu";
import { useState, useMemo } from "react";
import { ProductIn } from "@/Types/ProductIn";
import { FiFilter } from "react-icons/fi";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: Props) {
  const { slug } = use(params);
 const [showFilter, setShowFilter] = useState(false);
  const filteredProducts = products.filter((p) => p.categorySlug === slug);
  const categoryTitle = categoryNames[slug] || "قسم المنتجات";
  const [columns, setColumns] = useState(2);
  const [sort, setSort] = useState<
    "featured" | "price-asc" | "price-desc" | "newest"
  >("featured");
  const gridClass =
    columns === 1
      ? "grid grid-cols-1 gap-4"
      : columns === 2
      ? "grid grid-cols-2 gap-4"
      : columns === 3
      ? "grid grid-cols-3 gap-4"
      : "grid grid-cols-4 gap-4";
  const sorted = useMemo(() => {
    const copy = [...filteredProducts];
    if (sort === "price-asc") {
      copy.sort(
        (a: ProductIn, b: ProductIn) => Number(a.price) - Number(b.price)
      );
    } else if (sort === "price-desc") {
      copy.sort(
        (a: ProductIn, b: ProductIn) => Number(b.price) - Number(a.price)
      );
    } else if (sort === "newest") {
    } else {
      copy.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    }
    return copy;
  }, [filteredProducts, sort]);

  return (
    <section className="px-6 lg:px-[18%] py-5 grid grid-col-1 md:grid-cols-4 gap-5">
      <div className="hidden lg:block lg:col-span-1 shadow-xl ">
        <ProductFilter />
      </div>

      <div className="lg:col-span-3 col-span-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            لا توجد منتجات في هذا القسم.
          </p>
        ) : (
          <div>
            <p className="font-bold text-[20px]">{categoryTitle}</p>
            <div className="my-4 mb-9">
              <Discount src="/images/d2.jpg" href={`/category`} />
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-[16px] lg:text-[22px] font-semibold">
                عرض
                <span className="mx-2">22</span>
                نتيجة
              </p>
              <div className="text-gray-500 flex">
                <button
                  onClick={() => setColumns(4)}
                  className={`hidden lg:flex cursor-pointer ${
                    columns === 4 ? "text-pro" : "text-gray-500"
                  }`}
                >
                  <div className="flex">
                    <PiLineVerticalBold />
                    <FaSquare size={20} />
                    <FaSquare size={20} />
                    <FaSquare size={20} />
                    <FaSquare size={20} />
                    <PiLineVerticalBold />
                  </div>
                </button>
                <button
                  onClick={() => setColumns(3)}
                  className={`hidden lg:flex cursor-pointer ${
                    columns === 3 ? "text-pro" : "text-gray-500"
                  }`}
                >
                  <div className="flex">
                    <PiLineVerticalBold />
                    <FaSquare size={20} />
                    <FaSquare size={20} />
                    <FaSquare size={20} />
                    <PiLineVerticalBold />
                  </div>
                </button>
                <button
                  onClick={() => setColumns(2)}
                  className={` cursor-pointer ${
                    columns === 2 ? "text-pro" : "text-gray-500"
                  }`}
                >
                  <div className="flex">
                    <PiLineVerticalBold />
                    <FaSquare size={20} />
                    <FaSquare size={20} />
                    <PiLineVerticalBold />
                  </div>
                </button>
                <button
                  onClick={() => setColumns(1)}
                  className={`lg:hidden flex cursor-pointer ${
                    columns === 1 ? "text-pro" : "text-gray-500"
                  }`}
                >
                  <div className="flex">
                    <PiLineVerticalBold />
                    <FaSquare size={20} />

                    <PiLineVerticalBold />
                  </div>
                </button>
              </div>
            </div>

            <div className="mb-5 text-end">
              <SortMenu value={sort} onChange={setSort} />
            </div>

            <button onClick={() => setShowFilter(true)}>
        <div className="flex items-center gap-2 lg:hidden mb-4">
          <FiFilter size={22} />
          <p className="font-bold text-[1.1rem]">تصفية</p>
        </div>
      </button>

      {showFilter && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setShowFilter(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white  z-50 transform transition-transform duration-300 ${
          showFilter ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <p className="font-bold text-lg">تصفية</p>
          <button
            className="text-gray-500 hover:text-gray-700 text-xl"
            onClick={() => setShowFilter(false)}
          >
            ✕
          </button>
        </div>

        <div className="p-4 overflow-y-auto">
          <ProductFilter />
        </div>
      </div>

            <div className={gridClass}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  className="hidden"
                  className2="hidden"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
