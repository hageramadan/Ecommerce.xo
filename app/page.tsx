'use client'
import CategoriesSlider from "@/components/CategoriesC";
import Discount from "@/components/Discount";
import InStockCard from "@/components/InstockCard";
import InStockSlider from "@/components/InStockSlider";
import ProductCard from "@/components/ProductCard";
import ShowAll from "@/components/ShowAll";
import SliderComponent from "@/components/SliderComponent";
import { cates2, inStock, pro, sliderImages, sliderLinks , Ess , Desc, sliderImages2, inStock2} from "@/Types/data";


export default function Home() {

 

  return (
    <>
      <div className="mx-5 lg:mx-[18%] rounded-2xl py-6   flex flex-col gap-5">
        <SliderComponent src={sliderImages} href={sliderLinks} />
        <Discount src="/images/discount.jpg" href="/" />
        <CategoriesSlider categories={cates2} />
        <Discount src="/images/d3.jpg" href="/" />
        <Discount src="/images/d2.jpg" href="/" />
        <h2 className="text-xl md:text-4xl font-bold text-pro text-center py-7">
          غرفة سفرة و مطبخ
        </h2>
        <Discount src="/images/k1.jpg" href="/" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {Desc.map((des, index) => (
            <div className="flex" key={index}>
              <Discount src={des.img} href={des.href} />
            </div>
          ))}
        </div>
        <h2 className="text-xl md:text-4xl font-bold text-pro text-center py-7">
          أساسيات غرفة السفرة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
          {Ess.map((des, index) => (
            <div className="flex" key={index}>
              <Discount src={des.img} href={des.href} />
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {Ess.map((des, index) => (
            <div className="flex" key={index}>
              <Discount src={des.img} href={des.href} />
            </div>
          ))}
        </div>
        <h2 className="text-xl md:text-4xl font-bold text-pro text-center py-7">
          أجهزة هتسهل عليك حياتك
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {pro.map((des, index) => (
            <div className="flex" key={index}>
              <Discount src={des.img} href={des.href} />
            </div>
          ))}
        </div>
        <ShowAll title="جدد مطبخك بأحدث الأجهزة" Anchor="مشاهدة المزيد"link="/"/>

        {/* products in stock */}

       <InStockSlider inStock={inStock} CardComponent={InStockCard}/>
       <SliderComponent src={sliderImages2} href={sliderLinks} />
       <Discount src="/images/d4.jpg" href="/" />
        <ShowAll title="اكتشف مجموعتنا من الترابيزات" Anchor="مشاهدة المزيد"link="/"/>
       <InStockSlider inStock={inStock2} CardComponent={ProductCard}/>

      </div>
    </>
  );
}
