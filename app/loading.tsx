"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      {/* <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 border-pro-max border-t-transparent rounded-full"
      /> */}
      <span className="loader"></span>
    </div>
  );
}
