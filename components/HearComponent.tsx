"use client";
import { FaHeart } from "react-icons/fa";
import { TfiHeart } from "react-icons/tfi";

interface HearComponentProps {
  liked?: boolean;
  onToggleLike?: () => void;
}

export default function HearComponent({ liked = false, onToggleLike }: HearComponentProps) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onToggleLike?.();
      }}
      className="absolute top-1 end-1 shadow rounded-full bg-white/70 w-fit px-2 py-1.5 cursor-pointer transition-transform hover:scale-110"
    >
      {liked ? (
        <FaHeart size={17} className="text-pro transition-all duration-300" />
      ) : (
        <TfiHeart size={17} className="text-pro transition-all duration-300" />
      )}
    </div>
  );
}
