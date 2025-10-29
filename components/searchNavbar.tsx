"use client";
import Image from "next/image";
import { CgSearch } from "react-icons/cg";
import { FaBars, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import { cates, link } from "@/Types/data";
import SubIcon from "./subIcon";
import CategoriesDropdown from "./DropdownComponent";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import SearchComponent from "./SearchComponent";

export default function SearchNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const categories = link;
  const links2 = cates;

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center px-[5%]  xl:px-[10%] py-6 shadow lg:shadow-none justify-between lg:gap-10 border-b border-gray-200">
        <div className="flex items-center gap-2 lg:gap-10 lg:flex-1">
          {/* Bars Icon */}
          <div className="flex1 items-center">
            <div
              onClick={() => setMenuOpen(true)}
              className="bg-[#4a4a4a] rounded-full p-2 text-white cursor-pointer"
            >
              <FaBars size={15} />
            </div>
          </div>

          {/* Logo */}
          <div className="relative w-20 lg:w-[110px] h-11 me-2 lg:me-0">
            <Image
              src="/images/zeejlogo.png"
              alt="logo"
              fill
              loading="eager"
              className="object-contain"
            />
          </div>

          {/* Search Input */}
          <SearchComponent className="hidden1" />
        </div>

        {/* Right Section */}
        <div className="flex items-center lg:gap-5 gap-3 relative">
          {/* Phone */}
          <div className="hidden2 flex-col text-sm">
            <p>أي استفسار؟</p>
            <div className="flex items-center gap-2 cursor-pointer text-pro-hover">
              <LuPhone size={20} strokeWidth={1.3} />
              <p> +966114097500</p>
            </div>
          </div>

          {/* Icons */}
          <div>
            <SubIcon
              className="flex lg:gap-5"
              className2="hidden2"
              className3="hidden1"
            />
          </div>

          <CgSearch
            size={25}
            className="flex1 cursor-pointer text-pro-hover"
            strokeWidth={0.1}
            onClick={() => setSearchOpen((prev) => !prev)}
          />

          <div className="flex gap-1 cursor-pointer text-pro-hover">
            <HiOutlineShoppingBag size={25} strokeWidth={1.3} />
            <p className="hidden2">العربة</p>
          </div>

          <div className="flex1 gap-4 items-center">
            <div className="bg-[#4a4a4a] rounded-full p-2 text-white cursor-pointer">
              <FaRegUser size={15} />
            </div>

            <CategoriesDropdown
              categories={categories}
              trigger={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.29"
                  height="23.983"
                  viewBox="0 0 26.29 23.983"
                >
                  <ellipse cx="2.244" cy="2.253" rx="2.244" ry="2.253" />
                  <ellipse cx="12.965" cy="2.253" rx="2.244" ry="2.253" />
                  <ellipse cx="23.885" cy="2.253" rx="2.244" ry="2.253" />
                  <ellipse cx="2.244" cy="11.911" rx="2.244" ry="2.253" />
                  <ellipse
                    cx="12.965"
                    cy="11.911"
                    rx="2.244"
                    ry="2.253"
                    fill="#735cfc"
                  />
                  <ellipse cx="23.885" cy="11.911" rx="2.244" ry="2.253" />
                  <ellipse cx="2.244" cy="21.729" rx="2.244" ry="2.253" />
                  <ellipse cx="13.145" cy="21.729" rx="2.244" ry="2.253" />
                  <ellipse
                    cx="24.046"
                    cy="21.729"
                    rx="2.244"
                    ry="2.253"
                    fill="#735cfc"
                  />
                </svg>
              }
            />
          </div>

          {/* Login */}
          <div className="hidden1 gap-1 items-center rounded-4xl bg-pro text-white py-3 text-[0.9rem] px-4 cursor-pointer">
            <FaRegUser size={15} />
            <Link href="login">تسجيل دخول</Link>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="shadow-md border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 md:px-10 py-4">
              <SearchComponent className="flex1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Fullscreen Overlay with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center pt-4 text-white overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 end-1 text-white hover:text-gray-300 transition"
            >
              <div className="cursor-pointer ">
                <AiOutlineCloseCircle size={30} />
              </div>
            </button>

            {/* Links */}
            <nav className="flex flex-col items-center gap-8 text-[16px] font-medium mt-10">
              {links2.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-pro transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
