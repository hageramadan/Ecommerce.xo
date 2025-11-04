import { categories } from "@/Types/data"
import Link from "next/link"


export default function CateNavbar() {
  const cate=categories
  return (
    <>
    <div className="hidden1 justify-between  py-2.5 px-[5%]  xl:px-[18%] shadow">
      {
        cate.map((cat,index)=>(
          <Link key={index} href={`/category/${cat.slug}`} className="text-[0.9rem] text-pro-hover px-2" aria-label={cat.title}>
            {cat.title}
            </Link>
        ))
      }
    </div>
    </>
  )
}
