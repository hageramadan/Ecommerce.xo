"use client";
import React, { useState } from "react";

interface Category {
  id: number;
  name: string;
}

interface Brand {
  id: number;
  name: string;
}

interface Color {
  id: number;
  name: string;
  hex: string;
}

const categories: Category[] = [
  { id: 1, name: "براويز" },
  { id: 2, name: "المرايا" },
  { id: 3, name: "مكرمية وديكور حائط" },
  { id: 4, name: "سجاد" },
  { id: 5, name: "تحف و أنتيكات" },
  { id: 6, name: "إضاءة" },
  { id: 7, name: "خداديات" },
];

const brands: Brand[] = [
  { id: 1, name: "IKEA" },
  { id: 2, name: "Home Center" },
  { id: 3, name: "Zara Home" },
  { id: 4, name: "H&M Home" },
  { id: 5, name: "Local Art" },
];

const colors: Color[] = [
  { id: 1, name: "أبيض", hex: "#FFFFFF" },
  { id: 2, name: "أسود", hex: "#000000" },
  { id: 3, name: "ذهبي", hex: "#D4AF37" },
  { id: 4, name: "فضي", hex: "#C0C0C0" },
  { id: 5, name: "بيج", hex: "#F5F5DC" },
];

export default function ProductFilter() {
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 49500]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<number[]>([]);

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 5);

  const toggleItem = (
    id: number,
    list: number[],
    setList: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    setList((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full md:w-72 bg-white shadow rounded-2xl p-4 space-y-6 border border-gray-200">
      {/* إخفاء غير المتوفر */}
      <div className="flex items-center justify-between">
        <label className="text-gray-700 font-medium">إخفاء غير المتوفر</label>
        <input
          type="checkbox"
          checked={showUnavailable}
          onChange={(e) => setShowUnavailable(e.target.checked)}
          className="w-5 h-5 text-pro"
        />
      </div>

      {/* السعر */}
      <div>
        <p className="text-gray-700 font-medium mb-2">السعر</p>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>من</span>
          <input
            type="number"
            min={0}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-20 border rounded px-2 py-1"
          />
          <span>إلى</span>
          <input
            type="number"
            min={priceRange[0]}
            max={49500}
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-20 border rounded px-2 py-1"
          />
          <span>جنيه</span>
        </div>

        {/* سلايدر السعر */}
        <input
          type="range"
          min={0}
          max={49500}
          step={500}
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
          className="w-full accent-blue-600"
        />
        <input
          type="range"
          min={0}
          max={49500}
          step={500}
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="w-full accent-blue-600 mt-1"
        />
      </div>

      {/* التصنيفات */}
      <div>
        <p className="text-gray-700 font-medium mb-2">التصنيفات</p>
        <div className="space-y-2 max-h-60 overflow-hidden">
          {visibleCategories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() =>
                  toggleItem(cat.id, selectedCategories, setSelectedCategories)
                }
                className="accent-blue-600"
              />
              {cat.name}
            </label>
          ))}
        </div>
        {!showAllCategories && categories.length > 5 && (
          <button
            className="text-pro text-sm font-medium mt-1 hover:underline"
            onClick={() => setShowAllCategories(true)}
          >
            عرض المزيد
          </button>
        )}
      </div>

      {/* الماركات */}
      <div>
        <p className="text-gray-700 font-medium mb-2">الماركات</p>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand.id} className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.id)}
                onChange={() =>
                  toggleItem(brand.id, selectedBrands, setSelectedBrands)
                }
                className="accent-blue-600"
              />
              {brand.name}
            </label>
          ))}
        </div>
      </div>

      {/* الألوان */}
      <div>
        <p className="text-gray-700 font-medium mb-2">الألوان</p>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <div
              key={color.id}
              onClick={() =>
                toggleItem(color.id, selectedColors, setSelectedColors)
              }
              className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-transform ${
                selectedColors.includes(color.id)
                  ? "border-pro scale-110"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* زر التصفية */}
      <button
        className="w-full bg-pro text-white py-2 rounded-lg bg-pro-hover transition"
        onClick={() => {
          console.log({
            showUnavailable,
            priceRange,
            selectedCategories,
            selectedBrands,
            selectedColors,
          });
        }}
      >
        تصفية
      </button>
    </div>
  );
}
