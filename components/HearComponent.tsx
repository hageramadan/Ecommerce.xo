"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { TfiHeart } from "react-icons/tfi";

export default function HearComponent() {
     const [liked, setLiked] = useState(false);
  return (
    <>
      <div
            onClick={() => setLiked(!liked)}
            className="absolute top-1 end-0 shadow rounded-full bg-white/50 w-fit px-2 py-1.5 cursor-pointer me-1"
          >
            <TfiHeart
              size={17}
              className={`transition-all duration-300 text-pro ${
                liked ? "hidden" : "text-pro"
              }`}
            />

            <FaHeart
              size={17}
              className={`transition-all duration-300 ${
                liked ? "text-pro block" : "hidden"
              }`}
            />
          </div>
    </>
  )
}
