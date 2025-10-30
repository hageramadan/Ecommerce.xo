"use client";
import React, { useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";

export default function Page() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center bg-gray-50 px-4 py-10">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          تسجيل الدخول أو إنشاء حساب جديد
        </h1>
        <p className="text-gray-500 mb-6 text-sm">
          أدخل بريدك الإلكتروني أو رقم الهاتف لتسجيل الدخول أو إنشاء حساب
        </p>

        <form className="space-y-6">
          {/* input مع label يطلع على الحدود */}
          <div className="relative w-full">
            <input
              id="userInput"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="peer w-full border border-gray-300 rounded-lg px-3 pt-4 pb-2 text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all"
              placeholder="أدخل بريدك الإلكتروني أو رقم الهاتف"
            />
            <label
              htmlFor="userInput"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 text-base transition-all duration-200
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
                peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 peer-focus:px-1"
            >
              أدخل بريدك الإلكتروني أو رقم الهاتف
            </label>
          </div>

          <ButtonComponent title="تسجيل الدخول" />
        </form>
      </div>
    </div>
  );
}
