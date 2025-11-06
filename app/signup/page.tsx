"use client";

import ButtonComponent from "@/components/ButtonComponent";
import React, { useEffect, useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail && storedEmail !== email) {
      setEmail(storedEmail);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) newErrors.firstName = "الاسم الأول مطلوب";
    if (!phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    if (!password.trim()) newErrors.password = "كلمة المرور مطلوبة";
    else if (password.length < 8)
      newErrors.password = "كلمة المرور يجب أن تكون 8 أحرف أو أرقام على الأقل";
    if (confirmPassword !== password)
      newErrors.confirmPassword = "كلمة المرور غير متطابقة";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem("firstName", firstName);
      router.push("/");
    }
  };

  const inputClasses = (hasError: boolean) =>
    `peer w-full border rounded-lg px-3 pt-4 pb-4 text-gray-800 placeholder-transparent focus:outline-none transition-all ${
      hasError ? "border-red-500" : "focus:border-orange-500 border-gray-300"
    }`;

  const labelClasses = (hasError: boolean) =>
    `absolute right-3 text-base bg-white px-1 text-gray-500 transition-all duration-200
     pointer-events-none 
     peer-placeholder-shown:top-1/2 mb-2 peer-placeholder-shown:-translate-y-1/2 
     peer-placeholder-shown:text-gray-400
     peer-focus:-top-2 peer-focus:text-sm peer-focus:text-orange-500
     ${hasError ? "text-red-500" : ""}`;

  return (
    <div className="flex flex-col items-center bg-gray-50 px-6 py-10 md:px-[13%] xl:px-[35%]">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800">تسجيل الدخول</h1>
        <p className="text-gray-700 font-semibold text-[20px] mt-3">
          انضم إلى آلاف العملاء السعداء الذين قاموا بفرش منازلهم معنا
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 my-5 relative"
        >
          {/* البريد */}
          <div className="text-gray-400 bg-gray-100 p-2 rounded-md text-lg">
            <div className="flex items-center justify-between">
              <p>{email}</p>
              <p className="text-orange-500 underline font-semibold cursor-pointer">
                تغيير
              </p>
            </div>
          </div>

          {/* الاسم */}
          <div className="relative w-full">
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (errors.firstName) {
                  setErrors((prev) => ({ ...prev, firstName: "" }));
                }
              }}
              className={inputClasses(!!errors.firstName)}
              placeholder="الاسم الأول"
            />
            <label className={labelClasses(!!errors.firstName)}>
              الاسم الأول
            </label>
            {errors.firstName && (
              <p className="text-red-500 text-sm text-right mt-1">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* رقم الهاتف */}
          <div className="relative w-full">
            <input
              type="text"
              value={phone}
            //   onChange={(e) => setPhone(e.target.value)}
               onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) {
                  setErrors((prev) => ({ ...prev, phone: "" }));
                }
              }}
              className={inputClasses(!!errors.phone)}
              placeholder="رقم الهاتف"
            />
            <label className={labelClasses(!!errors.phone)}>رقم الهاتف</label>
            {errors.phone && (
              <p className="text-red-500 text-sm text-right mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* كلمة المرور */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
            //   onChange={(e) => setPassword(e.target.value)}
             onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors((prev) => ({ ...prev, password: "" }));
                }
              }}
              className={inputClasses(!!errors.password)}
              placeholder="إنشاء كلمة مرور"
            />
            <label className={labelClasses(!!errors.password)}>
              إنشاء كلمة مرور
            </label>
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-700 cursor-pointer"
            >
              {showPassword ? (
                <BiSolidShow size={25} />
              ) : (
                <BiSolidHide size={25} />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm text-right">
                {errors.password}
              </p>
            )}
          </div>

          {/* تأكيد كلمة المرور */}
          <div className="relative w-full">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
            //   onChange={(e) => setConfirmPassword(e.target.value)}
                onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword) {
                  setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                }
              }}
              className={inputClasses(!!errors.confirmPassword)}
              placeholder="تأكيد كلمة المرور"
            />
            <label className={labelClasses(!!errors.confirmPassword)}>
              تأكيد كلمة المرور
            </label>
            <div
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-700 cursor-pointer"
            >
              {showConfirm ? (
                <BiSolidShow size={25} />
              ) : (
                <BiSolidHide size={25} />
              )}
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm text-right mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <ButtonComponent title="تسجيل الدخول" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}
