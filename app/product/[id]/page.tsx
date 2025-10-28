import Image from "next/image";
import { inStock, inStock2, inStock3, inStock4, inStock5 } from "@/Types/data";

const allProducts = [...inStock, ...inStock2, ...inStock3, ...inStock4, ...inStock5];

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

// لاحظي إننا استخدمنا async عند تعريف params مباشرة
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // نفك الـ Promise بالكامل هنا
  const { id } = await params;

  const product = allProducts.find((p) => p.id.toString() === id);

  if (!product) {
    return <p className="p-10 text-center text-red-600">المنتج غير موجود ❌</p>;
  }

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="w-full max-w-md mb-4">
        <Image
          src={product.img}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <p className="text-lg font-semibold">السعر: {product.price} جنيه</p>
     
      {product.stock === 0 ? (
        <p className="text-red-600 mt-3 font-semibold">غير متوفر حالياً</p>
      ) : (
        <p className="text-green-600 mt-3 font-semibold">متوفر في المخزون ✅</p>
      )}
    </div>
  );
}
