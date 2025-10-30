"use client";
import React from "react";

interface SideBarProps {
  onSelect: (section: string) => void;
  active: string;
}

export default function SideBar({ onSelect, active }: SideBarProps) {
  const items = [
    { key: "account", label: "حسابي" },
    { key: "orders", label: "طلباتي" },
    { key: "favorites", label: "منتجاتي المفضلة" },
    { key: "addresses", label: "إدارة العناوين" },
  ];

  return (
    <div className="shadow bg-gray-50 p-5 rounded-xl">
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item.key}
            onClick={() => onSelect(item.key)}
            className={`cursor-pointer px-4 py-2 rounded-md transition 
              ${active === item.key ? "bg-pro text-white" : "hover:bg-gray-300"}`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
