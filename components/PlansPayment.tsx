"use client";

import QuantityCounter from "@/components/QuantityCounter";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

export default function PlansPayment() {

  return (
    <div>
      <div className="flex flex-col gap-5 p-5 rounded-xl border border-gray-200 shadow pb-10">
        <ImageComponent image="/images/b1.jpg" />
        <ImageComponent image="/images/b2.jpg" />
        <QuantityCounter />
       <ButtonComponent title="أضف الي العربة"/>
      </div>
    </div>
  );
}
