import { categories } from "@/Types/data";
import Link from "next/link";



export default function CategoriesPage() {
  return (
    <section className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">الأقسام</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat,index) => (
          <Link
            key={index}  
            href={`/category/${cat.slug}`}
            className="border rounded-xl p-6 text-center hover:bg-gray-50 shadow-sm"
          >
            {cat.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
