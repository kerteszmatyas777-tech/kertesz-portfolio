"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type Props = {
  images: string[];
};

export default function ProjectGallery({ images }: Props) {
  const [current, setCurrent] = useState<number | null>(null);

  return (
    <>
      <div className="space-y-8">

        {images[0] && (
          <div
            onClick={() => setCurrent(0)}
            className="relative aspect-[16/9] overflow-hidden rounded-[36px] cursor-pointer group"
          >
            <Image
              src={images[0]}
              alt=""
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2">

          {images[1] && (
            <div
              onClick={() => setCurrent(1)}
              className="relative aspect-[4/5] overflow-hidden rounded-[32px] cursor-pointer group"
            >
              <Image
                src={images[1]}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {images[2] && (
            <div
              onClick={() => setCurrent(2)}
              className="relative aspect-square overflow-hidden rounded-[32px] cursor-pointer group"
            >
              <Image
                src={images[2]}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          )}

        </div>

        {images[3] && (
          <div
            onClick={() => setCurrent(3)}
            className="relative aspect-[21/9] overflow-hidden rounded-[36px] cursor-pointer group"
          >
            <Image
              src={images[3]}
              alt=""
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        )}

      </div>

      {current !== null && (
        <Lightbox
          images={images}
          current={current}
          onClose={() => setCurrent(null)}
          onNext={() => setCurrent((current + 1) % images.length)}
          onPrev={() =>
            setCurrent((current - 1 + images.length) % images.length)
          }
        />
      )}
    </>
  );
}