"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  current: number;
  imageAlt: string;
  labels: {
    closePreview: string;
    previousImage: string;
    nextImage: string;
  };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  images,
  current,
  imageAlt,
  labels,
  onClose,
  onNext,
  onPrev,
}: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md sm:p-8"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-3xl leading-none text-white transition hover:bg-white hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:top-8"
        aria-label={labels.closePreview}
      >
        ×
      </button>

      {images.length > 1 && (
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-4xl leading-none text-white transition hover:bg-white hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-8"
        aria-label={labels.previousImage}
      >
        ‹
      </button>
      )}

      <div className="relative h-[85vh] w-full max-w-7xl">
        <Image
          src={images[current]}
          alt={imageAlt}
          fill
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
      <button
        type="button"
        onClick={onNext}
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-4xl leading-none text-white transition hover:bg-white hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8"
        aria-label={labels.nextImage}
      >
        ›
      </button>
      )}
    </div>
  );
}
