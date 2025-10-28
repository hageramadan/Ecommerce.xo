"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderProps {
  src: string[];
  href: string[];
}

export default function SliderComponent({ src, href }: SliderProps) {

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full h-[200px] md:h-[400px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
 
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          // @ts-ignore
          swiper.params.pagination.el = paginationRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          swiper.pagination.init();
          swiper.pagination.update();
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 bg-orange-200 inline-block mx-1"></span>`,
        }}
        className="w-full h-full"
      >
        {src.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
              <Link href={href[index] || "/"} aria-label={`Go to slide ${index + 1}`}>
                <Image
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-3xl overflow-hidden"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}

        <div
          ref={prevRef}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-pro-hover hover:text-white bg-gray-100 text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div
          ref={nextRef}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-pro-hover hover:text-white bg-gray-100 text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <div
          ref={paginationRef}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-20"
        ></div>
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: var(--pro-max) !important;
          transform: scale(1.3);
          box-shadow: 0 0 6px rgba(255, 115, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
