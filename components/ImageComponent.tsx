
import Image from "next/image";
import Link from "next/link";
interface ImgProp{
  image:string
}
export default function ImageComponent({image}:ImgProp) {
  return (
    <>
     <Link href={"/"} aria-label={`اذهب إلى المنتج`}>
                <Image
                  src={image}
                  alt="صورة المنتج"
                  fill
                  className="object-cover  "
                  loading="lazy"
                  decoding="async"
                />
    </Link>
    </>
  )
}
