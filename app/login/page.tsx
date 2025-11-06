"use client";
import React, { useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import { useRouter } from "next/navigation";

export default function Page() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // ✅ دالة التحقق
  const validateInput = (input: string) => {
    const trimmed = input.trim();

    // ممنوع يكون فاضي
    if (!trimmed) return "من فضلك أدخل البريد الإلكتروني أو رقم الهاتف";

    // تحقق من الإيميل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(trimmed)) return "";

    // تحقق من رقم الهاتف (مثلاً المصري 01xxxxxxxxx أو 00201xxxxxxxxx)
    const phoneRegex = /^(?:\+?20|0)?1[0-9]{9}$/;
    if (phoneRegex.test(trimmed)) return "";

    return "من فضلك أدخل بريد إلكتروني أو رقم هاتف صالح";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateInput(value);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(""); // ✅ لو مفيش خطأ نحذف الرسالة
    localStorage.setItem("userEmail", value.trim());
    router.push("/signup");
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 px-4 py-10">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          تسجيل الدخول أو إنشاء حساب جديد
        </h1>
        <p className="text-gray-500 mb-6 text-sm">
          أدخل بريدك الإلكتروني أو رقم الهاتف لتسجيل الدخول أو إنشاء حساب
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <input
              id="userInput"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`peer w-full border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-lg px-3 pt-4 pb-2 text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500 transition-all`}
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

         
          {error && (
            <p className="text-red-500 text-sm text-right -mt-3">{error}</p>
          )}

          <ButtonComponent
            title="تسجيل الدخول"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
