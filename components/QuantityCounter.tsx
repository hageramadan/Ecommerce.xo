"use client";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ButtonComponent from "@/components/ButtonComponent";

export default function QuantityCounter() {
  const [quant, setQuant] = useState(1);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "warning" } | null>(null);

  const increase = () => {
    if (quant < 10) {
      setQuant((prev) => prev + 1);
      if (quant + 1 === 10) {
        showToast("⚠️ تواصل مع الدعم لطلب الكمية", "warning");
      }
    }
  };

  const decrease = () => {
    if (quant > 1) setQuant((prev) => prev - 1);
    if (quant  === 1) {
        showToast(" أقل كميه واحد منتج ", "warning");
      }
  };

  const showToast = (msg: string, type: "success" | "warning") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  const handleAddToCart = () => {
    showToast("✅ تم إضافة المنتج إلى العربة", "success");
  };

  return (
    <div className="relative w-full">
      {/* ✅ Toast الرسومي */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl shadow-lg text-white text-sm font-semibold backdrop-blur-md border 
              ${toast.type === "success" ? "bg-green-500/90 border-green-400/60" : "bg-orange-500/90 border-orange-400/60"}`}
          >
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔢 العداد */}
      <div className="flex items-center justify-between flex-wrap mt-3">
        <h3 className="mt-2 me-2 text-gray-700 font-semibold">الكمية:</h3>
        <div className="flex items-center gap-3 mt-4 h-fit">
          <button
          aria-label="increase "
            onClick={decrease}
            className={`bg-gray-200 rounded w-8 h-8 flex items-center justify-center transition 
              ${quant === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-800 hover:bg-gray-300 cursor-pointer"}`}
          >
            <FiMinus size={19} />
          </button>

          <span className="text-lg font-semibold w-8 text-center">{quant}</span>

          <button
          aria-label="decrease"
            onClick={increase}
            className={`bg-gray-200 rounded w-8 h-8 flex items-center justify-center transition 
              ${quant === 10
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-800 hover:bg-gray-300 cursor-pointer"}`}
          >
            <FiPlus size={19} />
          </button>
        </div>
      </div>

      {/* 🛒 زر الإضافة */}
      <div className="mt-4">
        <ButtonComponent title="أضف إلى العربة" onClick={handleAddToCart} />
      </div>
    </div>
  );
}
