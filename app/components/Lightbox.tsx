"use client";

import { useEffect } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  images,
  current,
  onClose,
  onNext,
  onPrev,
}: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-8"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-8 text-white text-5xl"
      >
        ‹
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-7xl h-[85vh]"
      >
        <Image
          src={images[current]}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-8 text-white text-5xl"
      >
        ›
      </button>
    </div>
  );
}