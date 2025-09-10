"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {

  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={400}
        height={400}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div key={image} onClick={() => setCurrent(index)} className={cn("cursor-pointer border mr-2 hover:border-orange-600", current === index && "border-orange-500")}>
            <Image src={image} alt="image" width={70} height={70} />
          </div>
        ))}  
      </div>
    </div>
  );
};

export default ProductImages;
