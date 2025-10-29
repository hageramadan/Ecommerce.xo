"use client";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";


export default function QuantityCounter() {
  const [quant, setQuant] = useState(1);
  const increase = () => setQuant((prev) => prev + 1);
  const decrease = () => {
    if (quant > 1) setQuant((prev) => prev - 1);
  };

  return (
    <>
    <div>
   <div className="flex items-center ">

           <h3 className="mt-2 me-2 text-gray-700 font-semibold">الكمية:</h3>
      <div className="flex items-center gap-3 mt-4 h-fit">
        <button
          onClick={decrease}
          className={`bg-gray-200  rounded w-8 h-8 flex items-center justify-center 
          transition ${quant===1?'text-gray-400 cursor-not-allowed':'text-gray-800 hover:bg-gray-300 cursor-pointer  '}`}
        >
          <FiMinus size={19} />
        </button>

        <span className="text-lg font-semibold w-8 text-center">{quant}</span>

        <button
          onClick={increase}
          className="bg-gray-200 cursor-pointer text-gray-800 rounded w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition"
        >
          <FiPlus size={19} />
         
        </button>
      </div>
    </div>
    </div>
 
 
    </>
  );
}
