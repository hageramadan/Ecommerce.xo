"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { TfiHeart } from "react-icons/tfi";

interface HearComponentProps {
  liked?: boolean;
  onToggleLike?: () => void;
}

export default function HearComponent({ liked: likedProp, onToggleLike }: HearComponentProps) {
  // لو ماجاش liked من بره، نستخدم state داخلي
  const [internalLiked, setInternalLiked] = useState(false);
  const liked = likedProp ?? internalLiked;

  const handleClick = () => {
    if (onToggleLike) {
      onToggleLike();
    } else {
      setInternalLiked(!internalLiked);
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation(); // تمنع الذهاب لصفحة التفاصيل
        handleClick();
      }}
      className="absolute top-1 end-0 shadow rounded-full bg-white/70 w-fit px-2 py-1.5 cursor-pointer me-1 transition hover:scale-110"
    >
      <TfiHeart
        size={17}
        className={`transition-all duration-300 ${
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
  );
}
