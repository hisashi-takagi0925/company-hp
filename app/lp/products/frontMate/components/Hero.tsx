import React from "react";
import Image from "next/image";
import { CTA } from "./CTA";

export const Hero = () => {
  return (
    <section className="pt-16 md:pt-20 overflow-hidden">
      <div className="w-full">
        <Image
          src="/docs_top.png"
          alt="Front Mate ドキュメントトップイメージ"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <CTA />
      </div>
    </section>
  );
};

