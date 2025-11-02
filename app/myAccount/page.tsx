"use client";
import React, { useState } from "react";
import SideBar from "@/components/SideBar";
import Orders from "@/components/Orders";
import MangeAccount from "@/components/MangeAccount";
import Favorite from "@/components/Favorite";

export default function Page() {
  const [section, setSection] = useState("account");

  const renderContent = () => {
    switch (section) {
      case "account":
        return (
          <>
          <MangeAccount/>
          </>
        );
      case "orders":
        return <Orders/>;
      case "favorites":
        return <Favorite/>;
      case "addresses":
        return <h2 className="text-xl">إدارة العناوين</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="px-5 xl:px-[10%] lg:px-[5%] py-6 grid grid-cols-12 gap-1 lg:gap-5">
      <div className=" col-span-12 lg:col-span-4 xl:col-span-2 ">
        <SideBar onSelect={setSection} active={section} />
      </div>
      <div className="col-span-12 lg:col-span-8 xl:col-span-10  rounded-2xl  lg:px-2 mb-16 w-full">
        {renderContent()}
      </div>
    </div>
  );
}
