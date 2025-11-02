import { useState, ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";
import { inStock2, ordersData } from "@/Types/data";
import NoOrders from "./NoOrders";
import Image from "next/image";
import CustomSelect from "./CustomSelect";
import InStockSlider from "./InStockSlider";
import ProductCard from "./ProductCard";
export default function Orders() {
  const years = ["اخر 3 شهور", "اخر 6 شهور", "2022", "2023", "2024", "2025"];
  const [search, setSearch] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<string>("");

  const filteredOrders = ordersData.filter(
    (order) =>
      (order.id.includes(search) || order.product.includes(search)) &&
      (yearFilter === "" || order.year === parseInt(yearFilter))
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {ordersData.length > 0 ? (
        <div className="p-5">
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
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-xl p-4 flex justify-between items-center hover:shadow-md transition-shadow"
                >
                  <span>رقم الطلب: {order.id}</span>
                  <span>المنتج: {order.product}</span>
                  <span>السنة: {order.year}</span>
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
