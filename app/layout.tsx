import type { Metadata } from "next";
import "./globals.css";
import "@/styles/screen.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Ecommerce",
  description: "make your life easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}

      
  
      </body>
    </html>
  );
}
