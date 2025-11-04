
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import { products } from "@/Types/data";


interface Props {
  params: { slug: string };
}

export default async  function CategoryPage({ params }: Props) {
  const { slug } = await  params;

  const filteredProducts = products.filter(
    (p) => p.categorySlug === slug
  );

  return (
    <section className="px-6 lg:px-[18%] py-5 grid grid-col-1 md:grid-cols-4">
     <div className="col-span-1">
<ProductFilter/>
     </div>
       
     
     <div className="col-span-3">
   {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد منتجات في هذا القسم.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard 
             key={product.id}     {...product}              
              className="hidden"      
              className2="hidden"/>
          ))}
        </div>
      )}
     </div>
   


    </section>
  );
}
