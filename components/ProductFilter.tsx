import { FiFilter } from "react-icons/fi";
import SelectBoxComponent from "./SelectBoxComponent";

import CustomizedSlider from "./PriceRange";

export default function ProductFilter() {
  return (
    <>
      <div className="px-4 rounded h-screen">
        <div className="flex items-center gap-2">
          <FiFilter size={22} />
          <p className="font-bold text-[1.1rem]">تصفية</p>
        </div>
        <div className=" border-b border-gray-300 pb-3">
          <SelectBoxComponent title="المتوفر">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-900 cursor-pointer rounded"
              />
              <p className="text-gray-700">إخفاء غير المتوفر</p>
            </label>
          </SelectBoxComponent>
        </div>
        <div className=" border-b border-gray-300 pb-3">
          <SelectBoxComponent title="السعر">
            <CustomizedSlider />
          </SelectBoxComponent>
        </div>
        <div className=" border-b border-gray-300 pb-3">
          <SelectBoxComponent title="فئات المنتج">
            <label className="flex items-center gap-2 cursor-pointer select-none mt-4">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-900 cursor-pointer rounded"
              />
              <p className="text-gray-700">أضاءات اسقف</p>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none my-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-900 cursor-pointer rounded"
              />
              <p className="text-gray-700">اباجورات اباليك</p>
            </label>
          </SelectBoxComponent>
        </div>
        <div className=" border-b border-gray-300 pb-3">
          <SelectBoxComponent title="العلامه التجارية">
            <label className="flex items-center gap-2 cursor-pointer select-none mt-4">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-900 cursor-pointer rounded"
              />
              <p className="text-gray-700">Generic</p>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none my-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-900 cursor-pointer rounded"
              />
              <p className="text-gray-700"> Aiax</p>
            </label>
          </SelectBoxComponent>
        </div>
        <div className=" border-b border-gray-300 pb-3">
          <SelectBoxComponent title="الخامات المستخدمة">
            <label className="flex items-center gap-2 cursor-pointer select-none mt-4">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-900 cursor-pointer rounded"
              />
              <p className="text-gray-700">معدن</p>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none my-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-900 cursor-pointer rounded"
              />
              <p className="text-gray-700"> خشب</p>
            </label>
          </SelectBoxComponent>
        </div>
        <div className=" border-b border-gray-300 pb-3">
          <SelectBoxComponent title="اللون ">
            <label className="flex items-center gap-2 cursor-pointer select-none mt-4">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-900 cursor-pointer rounded"
              />
               <span className="w-5 h-5 rounded-full bg-black border border-gray-300 mx-2"></span>
              <p className="text-gray-700">أسود</p>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none my-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-900 cursor-pointer rounded"
              />
              <span className="w-5 h-5 rounded-full bg-[#f5deb3] border border-gray-300 mx-2"></span>
              <p className="text-gray-700">بيج</p>
            </label>
          </SelectBoxComponent>
        </div>
      </div>
    </>
  );
}
