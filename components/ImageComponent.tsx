import Image from "next/image";
import Link from "next/link";
interface ImgProp {
  image: string;
}
export default function ImageComponent({ image }: ImgProp) {
  return (
    <>
      <Link href={"/"} aria-label={`اذهب إلى المنتج`}>
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt="صورة المنتج"
            fill
            className="object-cover"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </Link>
    </>
  );
}
