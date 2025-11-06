"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedUser = localStorage.getItem("userEmail");
    if (storedUser) {
      requestAnimationFrame(() => setUser(storedUser));
    }
  }, []);

  const login = (email: string) => {
    localStorage.setItem("userEmail", email);
    setUser(email);
  };

  const logout = () => {
    localStorage.removeItem("userEmail");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
