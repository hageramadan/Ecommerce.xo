import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import React from "react";

export default function page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ProductFilter />
        
        <ProductCard id={6} img="/images/s4.jpg" title="" price="200" />
      </div>
    </>
  );
}
