import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import TestSession from "./test";
import Profile from "./test";

export default function Footer() {
  const Links = [
    {
      title: "معلومات عنا",
      href: "/about",
    },
    {
      title: "الشروط و الاحكام",
      href: "/terms",
    },
    {
      title: "سياسة الأسترجاع",
      href: "/policy",
    },
    {
      title: "سياسة الخصوصية",
      href: "/policy",
    },
    {
      title: "الضمان",
      href: "/warranty",
    },
    {
      title: "أنضم كشريك",
      href: "/contactUs",
    },
    {
      title: "كودأكس للشركات",
      href: "/contactUs",
    },
    {
      title: "تواصل معانا",
      href: "/contactUs",
    },
    {
      title: "مركز المساعدة",
      href: "/help-center",
    },
  ];
  const locations = [
    { title: "التجمع الخامس" },
    { title: "مدينة نصر" },
    { title: "زهراء المعادي" },
    { title: "أكتوبر" },
    { title: "الإسكندرية" },
  ];
  return (
    <>
    <Profile/>
    <div className="text-white bg-pro px-5 lg:px-[18%] pb-20 pt-10 gap-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div>
          <h4 className="font-semibold  mt-5 lg:mt-0">الشركة</h4>
          <div className="flex flex-col gap-3 mt-4">
            {Links.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.title}
              </Link>
            )).slice(0, 3)}
          </div>
        </div>
        <div>
          <h4 className="font-semibold  mt-5 lg:mt-0">روابط مهمة</h4>
          <div className="flex flex-col gap-3 mt-4">
            {Links.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.title}
              </Link>
            )).slice(3, 7)}
          </div>
        </div>
        <div>
          <h4 className="font-semibold  mt-5 lg:mt-0">تريد مساعده؟</h4>
          <div className="flex flex-col gap-3 mt-4">
            {Links.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.title}
              </Link>
            )).slice(7)}
            <p>hello@codexx.com</p>
            <p>رقم الدعم: 15829</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mt-5 lg:mt-0">الموقع</h4>
          <div className="flex flex-col gap-3 mt-4">
            {locations.map((link, index) => (
              <div key={index} className="flex gap-1 items-center">
                <IoLocationSharp size={22} />
                <Link href="/" className=" underline ">{link.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center mt-15">Ⓒ جميع الحقوق محفوظة 2025</p>
    </div>
  
    </>
  );
}
