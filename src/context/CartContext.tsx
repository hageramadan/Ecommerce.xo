// src/context/CartContext.tsx
"use client";
import { ProductIn } from "@/Types/ProductIn";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// export interface ProductIn {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
// }

interface CartContextType {
  cart: ProductIn[];
  addToCart: (item: ProductIn) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductIn[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const saveCart = (newCart: ProductIn[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

 const addToCart = (item: ProductIn) => {
  const exists = cart.find((c) => c.id === item.id);

  if (exists) {

    const updatedCart = cart.map(c =>
      c.id === item.id ? { ...c, quantity: (c.quantity || 1) + (item.quantity || 1) } : c
    );
    saveCart(updatedCart);
  } else {
   
    saveCart([...cart, { ...item, quantity: item.quantity || 1 }]);
  }
};

  const removeFromCart = (id: number) => {
    saveCart(cart.filter((c) => c.id !== id));
  };

  const clearCart = () => {
    saveCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
