"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaPhoneAlt } from "react-icons/fa";

import SubIcon from "./subIcon";
import { link } from "@/Types/data";

export default function LangNavbar() {
  const pathname = usePathname();

  const links = link

  return (
    <div className="flex justify-between px-[5%]  xl:px-[10%] py-2 bg-[#f0f0f0] text-[0.9rem]">
      <div className="hidden1  gap-5">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div
              key={index}
              className={`${
                isActive ? "text-pro" : "text-black text-pro-hover"
              } transition-colors duration-200`}
            >
              <Link href={link.href}>{link.title}</Link>
            </div>
          );
        })}
      </div>
      <div className="flex1 justify-between">
        <div className="flex items-center gap-2">
          <FaPhoneAlt size={17} strokeWidth={1.3}/>
          <p>+966114097500</p>
        </div>
      </div>
      <div className="flex gap-6">
        <SubIcon className="flex1 gap-3"/>
        <p className="text-end text-gray-500">ENGLISH</p>
      </div>
    </div>
  );
}
