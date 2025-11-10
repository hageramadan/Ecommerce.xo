"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useSession, signOut as nextAuthSignOut } from "next-auth/react";

interface AuthContextType {
  userName: string | null;
  userEmail: string | null;
  userImage: string | null;
  login: (name: string, email?: string, image?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (session?.user?.name) {
      setUserName(session.user.name);
      setUserEmail(session.user.email || null);
      setUserImage(session.user.image || null);

      localStorage.setItem("userName", session.user.name);
      if (session.user.email) localStorage.setItem("userEmail", session.user.email);
      if (session.user.image) localStorage.setItem("userImage", session.user.image);
    } else {
      const storedName = localStorage.getItem("userName");
      const storedEmail = localStorage.getItem("userEmail");
      const storedImage = localStorage.getItem("userImage");

      if (storedName) setUserName(storedName);
      if (storedEmail) setUserEmail(storedEmail);
      if (storedImage) setUserImage(storedImage);
    }
  }, [session]);

  const login = (name: string, email?: string, image?: string) => {
    setUserName(name);
    setUserEmail(email || null);
    setUserImage(image || null);

    localStorage.setItem("userName", name);
    if (email) localStorage.setItem("userEmail", email);
    if (image) localStorage.setItem("userImage", image);
  };

  const logout = () => {
    setUserName(null);
    setUserEmail(null);
    setUserImage(null);

    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userImage");

    nextAuthSignOut({ callbackUrl: "/login" }); 
  };

  return (
    <AuthContext.Provider value={{ userName, userEmail, userImage, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
