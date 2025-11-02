"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductIn } from "@/Types/ProductIn";
import { allProducts } from "@/Types/data";
import NoOrders from "./NoOrders";

export default function Favorite() {
  const [favoriteProducts, setFavoriteProducts] = useState<ProductIn[]>([]);

  const loadFavorites = () => {
    const favorites: string[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    const filtered = allProducts.filter((prod) => favorites.includes(prod.id.toString()));
    setFavoriteProducts(filtered);
  };

  useEffect(() => {
    loadFavorites();
    const handleStorageChange = () => loadFavorites();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (favoriteProducts.length === 0) {
    return     <NoOrders title="لا يوجد منتجات مفضلة ." />;
  }

  return (
    <div className="p-0">
      <h2 className="text-2xl mb-3 font-bold">منتجاتي المفضلة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
        {favoriteProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            className3="hidden"
            onFavoriteChange={loadFavorites}
          />
        ))}
      </div>
    </div>
  );
}
