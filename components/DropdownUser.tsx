"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaHeart,
  FaQuestionCircle,
  FaRegUser,
} from "react-icons/fa";
import {
  FaArrowRightFromBracket,
  FaClipboardCheck,
  FaMapLocationDot,
  FaUser,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";

export default function DropdownUser() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  const handleLinkClick = () => setOpen(false);

  const handleLogout = () => {
    logout(); 
    setOpen(false);
    router.push("/login");
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* user button */}
      <div
        className="flex items-center gap-3 bg-gray-100 text-gray-700 cursor-pointer p-2 rounded"
        onClick={() => setOpen(!open)}
      >
        <FaRegUser size={20} />
        <div className="hidden2 flex-col">
          <p>
            أهلاً ,<span> {user}</span>
          </p>
          <p>حسابي</p>
        </div>
        <FaAngleDown className="hidden2" />
      </div>

      {/* dropdown menu */}
      <div
        className={`absolute top-[4.1rem] end-0 bg-white shadow-2xl rounded-xl p-2 z-50 w-47 flex flex-col transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <Link href="/myAccount" onClick={handleLinkClick}>
          <div className="flex items-center gap-3 hover:bg-blue-100 cursor-pointer p-2 rounded">
            <FaUser size={18} className="text-pro" />
            <p>حسابي</p>
          </div>
        </Link>

        <Link href="/orders" onClick={handleLinkClick}>
          <div className="flex items-center gap-3 hover:bg-blue-100 cursor-pointer p-2 rounded">
            <FaClipboardCheck size={18} className="text-pro" />
            <p>طلباتي</p>
          </div>
        </Link>

        <Link href="/favorites" onClick={handleLinkClick}>
          <div className="flex items-center gap-3 hover:bg-blue-100 cursor-pointer p-2 rounded">
            <FaHeart size={18} className="text-pro" />
            <p>منتجاتي المفضلة</p>
          </div>
        </Link>

        <Link href="/addresses" onClick={handleLinkClick}>
          <div className="flex items-center gap-3 hover:bg-blue-100 cursor-pointer p-2 rounded">
            <FaMapLocationDot size={18} className="text-pro" />
            <p>إدارة العناوين</p>
          </div>
        </Link>

        <Link href="/help" onClick={handleLinkClick}>
          <div className="flex items-center gap-3 hover:bg-blue-100 cursor-pointer p-2 rounded">
            <FaQuestionCircle size={18} className="text-pro" />
            <p>مركز المساعدة</p>
          </div>
        </Link>

        {/* ✅ تسجيل الخروج */}
        <div
          onClick={handleLogout}
          className="flex items-center gap-3 hover:bg-blue-100 cursor-pointer text-gray-400 p-2 rounded"
        >
          <FaArrowRightFromBracket size={18} className="text-gray-400" />
          <p>تسجيل الخروج</p>
        </div>
      </div>
    </div>
  );
}
