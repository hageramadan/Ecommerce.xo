'use client'
import { useState, ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";
import { ordersData } from "@/Types/data";
import NoOrders from "./NoOrders";
import Image from "next/image";
import CustomSelect from "./CustomSelect";
import Link from "next/link";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Orders() {
  const years = ["اخر 3 شهور", "اخر 6 شهور", "2022", "2023", "2024", "2025"];
  const [search, setSearch] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<string>("");

  const filteredOrders = ordersData.filter(
    (order) =>
      (String(order.id).includes(search) || order.title.includes(search)) &&
      (yearFilter === "" || order.years === parseInt(yearFilter))
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {ordersData.length > 0 ? (
        <div>
          <div className="border border-gray-200 rounded-xl p-4 mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h2 className="text-lg font-semibold">طلباتي</h2>

            <div className="flex flex-col md:flex-row gap-3 w-full">
              <div className="relative flex-1">
                <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="رقم الطلب , اسم المنتج"
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <CustomSelect
                options={years}
                value={yearFilter}
                onChange={setYearFilter}
                placeholder="الكل"
              />
            </div>
          </div>

          {filteredOrders.length > 0 ? (
            <div className="grid gap-4">
              {filteredOrders.map((order) => (
                <div key={order.id}>
                  <div className="rounded-2xl shadow border border-gray-100 overflow-hidden ">
                    <div className="bg-blue-50  flex items-center justify-between p-4">
                      <div className="text-[#475569] font-semibold gap-1 flex flex-col">
                        <p>
                          رقم الطلب :
                          <span className="font-bold mx-1">{order.id}#</span>
                        </p>
                        <p>
                          الإجمالي :
                          <span className="font-bold mx-1">{order.price} جنيه</span>
                        </p>
                      </div>

                      <div className="gap-1 flex flex-col">
                        <Link href={`/myAccount/${order.id}`}>
                          <div className="flex items-center cursor-pointer ">
                            <p className="text-[#475569] font-semibold border-b border-[#475569] pb-0 mb-1">
                              عرض التفاصيل
                            </p>
                            <MdOutlineKeyboardArrowLeft className="text-[#898989]" />
                          </div>
                        </Link>

                        <p className="text-[#43454cb3] font-bold">
                          {order.date}
                        </p>
                      </div>
                    </div>
                    <div className="border border-gray-100 rounded-2xl m-4  ">
                      <div className="flex gap-5 ps-4 pt-4 relative ">
                        <Image
                          src="/images/o1.jpg"
                          alt={order.title}
                          width={90}
                          height={97}
                          className="rounded-xl"
                        />

                        <span className=" absolute rounded-full w-6 h-6 text-white bg-pro text-center top-2 start-24">
                          1
                        </span>
                        <div className="flex flex-col gap-1">
                          <p className="text-[#475569] my-2 font-semibold">
                          {order.title}
                          </p>
                          <p className="text-[#43454cb2]">
                            سعر المنتج:
                            <span className="font-semibold mx-1">{order.price}</span>
                            جنيه
                          </p>
                          <p className="text-[#43454cb2]">
                            رقم المنتج:
                            <span className="font-semibold mx-1">{order.pId}#</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 mt-4 mb-2 pb-4 items-center  border-b border-gray-200 ps-4">
                        <FaTruckFast size={20} className=" scale-x-[-1] " />
                        <p className="text-[#696969e6] font-semibold text-[0.9rem]">
                          التوصيل خلال الفترة من
                          <span className=" font-bold text-[#43454c] mx-1">
                            ٢٢ نوفمبر - ٢٥ نوفمبر
                          </span>
                          باستثناء الإجازات.
                        </p>
                      </div>
                      <div className="ms-4 my-3 px-3 rounded-md bg-[#fef1df] text-[#a35e00] w-fit  text-[0.95rem] py-1 ">
                        <p>جاري التنفيذ</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NoOrders title="ليس لديك أي طلبات " />
          )}
        </div>
      ) : (
        <div className="flex items-center flex-col">
          <Image
            src="/images/noOrders.svg"
            width={330}
            height={220}
            alt="notfound"
          />
          <NoOrders title="ليس لديك أي طلبات حتى الآن." />
        </div>
      )}
    </div>
  );
}
