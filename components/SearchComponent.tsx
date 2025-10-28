import React from "react";
import { CgSearch } from "react-icons/cg";
interface classProps {
  className?: string;
}

export default function SearchComponent({ className }: classProps) {
  return (
    <>
      <div className={`relative w-full xl:w-[60%]  ${className}`}>
        <input
          type="text"
          placeholder="ابحث عن منتج..."
          className="w-full border border-gray-300 rounded-md py-2 pe-10 ps-2 text-[1rem]
                    focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-all duration-200"
        />
        <CgSearch
          size={20}
          className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
        />
      </div>
    </>
  );
}
