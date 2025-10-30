"use client";
import React, { useState } from "react";
import SideBar from "@/components/SideBar";

export default function Page() {
  const [section, setSection] = useState("account");

  const renderContent = () => {
    switch (section) {
      case "account":
        return (
          <>
            <h2 className="text-2xl font-semibold text-pro mb-6">حسابي</h2>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-1 font-medium">الإسم الأول</label>
                <input
                  type="text"
                  placeholder="أدخل الاسم الأول"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-pro focus:ring-1 focus:ring-pro"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium">الإسم الأخير</label>
                <input
                  type="text"
                  placeholder="أدخل الاسم الأخير"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-pro focus:ring-1 focus:ring-pro"
                />
              </div>
            </form>
          </>
        );
      case "orders":
        return <h2 className="text-xl">طلباتي</h2>;
      case "favorites":
        return <h2 className="text-xl">منتجاتي المفضلة</h2>;
      case "addresses":
        return <h2 className="text-xl">إدارة العناوين</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="px-5 lg:px-[18%] py-6 grid grid-cols-12  gap-5">
      <div className=" col-span-12 md:col-span-2 ">
        <SideBar onSelect={setSection} active={section} />
      </div>
      <div  className="col-span-12 md:col-span-10 bg-white rounded-2xl shadow p-8 md:p-12 mb-16 w-full">
        {renderContent()}
      </div>
    </div>
  );
}
