import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";

export default function page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:px-[18%]">
        <ProductFilter />
        <div className="grid lg:grid-cols-3 flex-1 md:grid-cols-2 grid-cols-1 gap-5 w-full h-fit">
        <ProductCard id={6} img="/images/s4.jpg" title="" price="200" />
        <ProductCard id={6} img="/images/s4.jpg" title="" price="200" />
        <ProductCard id={6} img="/images/s4.jpg" title="" price="200" />
        <ProductCard id={6} img="/images/s4.jpg" title="" price="200" />

        </div>
      </div>
    </>
  );
}
