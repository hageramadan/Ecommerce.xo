"use client";

import { useState } from "react";
import SideBar from "./SideBar";
import Orders from "@/components/Orders";
import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import OrderProgress from "./OrderProgress";
import { GoChecklist } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
interface Props {
  orderId: string;
}

export default function OrderDetailsPage({ orderId }: Props) {
  const [section, setSection] = useState("orders");
  const steps = ["تم الطلب", "جاري التنفيذ", "جاري التوصيل", "تم التوصيل"];
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="px-5 xl:px-[14%] lg:px-[5%] py-6 grid grid-cols-12 gap-1 lg:gap-5">
      <div className=" col-span-12 lg:col-span-4 xl:col-span-2 ">
        <SideBar onSelect={setSection} active={section} />
      </div>
      <div className="col-span-12 lg:col-span-8 xl:col-span-10  rounded-2xl  lg:px-2 mb-16 w-full">
        <div className="shadow rounded-xl p-3 bg-white text-[#475569] font-semibold pb-4 mb-3">
          <h3 className="text-pro text-[1.6rem] font-bold mb-1">
            تفاصيل الطلب
          </h3>
          <p className="mb-1">
            رقم الطلب:
            <span className="font-bold ms-1">1632214#</span>
          </p>

          <p>
            تاريخ الطلب:
            <span className="font-bold ms-1">٣ نوفمبر ٢٠٢٥</span>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="shadow rounded-2xl pt-3 lg:col-span-2 bg-white h-fit">
            <h3 className="text-pro-max font-bold ps-4 mb-2 text-lg">
              رقم المنتج:
              <span>278365</span>
            </h3>
            <div className="flex gap-4 ps-4">
              <Image
                src="/images/o1.jpg"
                alt="order"
                width={120}
                height={120}
              />
              <div className="flex flex-col gap-1">
                <p className="text-[#323d4b] my-2 font-semibold">كرسي بذراعين خشب زان و قطيفه - بيج و أخضر</p>
                <p className="text-[#383a41b2]">
                  الكمية:
                  <span className="font-semibold mx-1 text-[#475569]">
                    1 منتج
                  </span>
                </p>
                <p className="text-[#475569]">
                  سعر المنتج:
                  <span className="font-semibold mx-1 text-[#475569]">
                    2300جنيه
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-1 mt-4 mb-2 pb-4 items-center  border-b border-gray-200 ps-4">
              <FaTruckFast size={20} className=" scale-x-[-1] " />
              <p className="text-[#696969e6] font-semibold text-[1rem]">
                التوصيل خلال الفترة من
                <span className=" font-bold text-[#43454c] mx-1">
                  ٢٢ نوفمبر - ٢٥ نوفمبر
                </span>
                باستثناء الإجازات.
              </p>
            </div>

            <div className="p-6 ps-4">
              <OrderProgress steps={steps} currentStep={currentStep} />
            </div>
            <div className="pb-3 border-t border-gray-200">
              <div className="ms-4 my-3 px-3 rounded-md bg-[#fef1df] text-[#a35e00] w-fit  text-[0.95rem] py-1 ">
                <p>جاري التنفيذ</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="shadow rounded-2xl pt-3 lg:col-span-1 bg-white h-fit p-4">
              <div className="flex gap-4 pb-4 border-b border-gray-200 items-center">
                <GoChecklist className="w-9 h-10 p-1.5 rounded bg-blue-50 text-blue-900" />
                <p className="text-[#1f2a4a] font-semibold text-lg ">
                  ملخص الطلب
                </p>
              </div>
              <div className=" mt-4 text-[#696969] gap-2.5 font-semibold flex flex-col">
                <div className="flex items-center justify-between">
                  <p>المجموع الفرعي:</p>
                  <p className="font-bold text-[1rem]">5363 جنيه</p>
                </div>

                <div className="flex items-center justify-between">
                  <p>اجمالي رسوم الشحن:</p>
                  <p className="font-bold text-[1rem]">50 جنيه </p>
                </div>

                <div className="flex items-center justify-between">
                  <p>رسوم الدفع عند الاستلام:</p>
                  <p className="font-bold text-[1rem]">50 جنيه</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl">الإجمالي</p>
                  <p className="font-bold text-black text-xl">
                    309
                    <span className="text-sm font-normal">جنيه</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow rounded-2xl pt-3 bg-white h-fit p-4 flex items-center gap-4">
              <IoWalletOutline className="w-9 h-10 p-1.5 rounded bg-blue-50 text-blue-900" />
              <div>
                <h5 className="text-xl text-[#696969] font-semibold mb-1.5">
                  طريقة الدفع:
                </h5>
                <p className="text-[#475569] text-[1rem]">
                  Cash On Delivery (COD)
                </p>
              </div>
            </div>
            <div className="shadow rounded-2xl pt-3 bg-white h-fit p-4 flex items-center gap-4">
              <SlLocationPin className="w-9 h-10 p-1.5 rounded bg-blue-50 text-blue-900" />

              <div>
                <h5 className="text-xl text-[#696969] font-semibold mb-1.5">
                  عنوان الطلب
                </h5>
                <p className="text-[#475569] font-semibold  text-[1rem]">
                  الجيزه الجيزه
                </p>
                <p className="text-[#475569] font-semibold  text-[1rem]">
                  حي الجيزة, الجيزة
                </p>
                <p className="text-[#475569] font-semibold  text-[1rem]">
                  a1, 2, 21
                </p>
                <p className="text-[#475569] font-semibold  text-[1rem]">
                  No. 1102034678
                </p>
              </div>
            </div>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
