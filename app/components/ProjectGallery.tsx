"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type Props = {
  images: string[];
  projectTitle: string;
  labels: {
    viewImage: string;
    closePreview: string;
    previousImage: string;
    nextImage: string;
  };
  layout?: "mixed" | "wideGrid" | "widePairs";
};

export default function ProjectGallery({
  images,
  projectTitle,
  labels,
  layout = "mixed",
}: Props) {
  const [current, setCurrent] = useState<number | null>(null);

  const imageAlt = (index: number) => `${projectTitle} — image ${index + 1}`;
  const closePreview = useCallback(() => setCurrent(null), []);
  const showNext = useCallback(
    () => setCurrent((index) => (index === null ? 0 : (index + 1) % images.length)),
    [images.length]
  );
  const showPrevious = useCallback(
    () =>
      setCurrent((index) =>
        index === null ? 0 : (index - 1 + images.length) % images.length
      ),
    [images.length]
  );

  return (
    <>
      <div className="space-y-8">

        {layout === "wideGrid" && (
          <>
            {images[0] && (
              <GalleryButton
                image={images[0]}
                alt={imageAlt(0)}
                label={`${labels.viewImage}: ${imageAlt(0)}`}
                className="aspect-[16/9] rounded-[18px]"
                priority
                onClick={() => setCurrent(0)}
              />
            )}

            {images[1] && (
              <GalleryButton
                image={images[1]}
                alt={imageAlt(1)}
                label={`${labels.viewImage}: ${imageAlt(1)}`}
                className="aspect-[16/9] rounded-[18px]"
                onClick={() => setCurrent(1)}
              />
            )}

            <div className="grid gap-8 md:grid-cols-2">
              {images.slice(2).map((image, index) => {
                const imageIndex = index + 2;

                return (
                  <GalleryButton
                    key={image}
                    image={image}
                    alt={imageAlt(imageIndex)}
                    label={`${labels.viewImage}: ${imageAlt(imageIndex)}`}
                    className="aspect-[16/9] rounded-[16px]"
                    onClick={() => setCurrent(imageIndex)}
                  />
                );
              })}
            </div>
          </>
        )}

        {layout === "widePairs" && (
          <div className="grid gap-8 md:grid-cols-2">
            {images.map((image, index) => (
              <GalleryButton
                key={image}
                image={image}
                alt={imageAlt(index)}
                label={`${labels.viewImage}: ${imageAlt(index)}`}
                className="aspect-[16/9] rounded-[16px]"
                priority={index === 0}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        )}

        {layout === "mixed" && (
          <>

        {images[0] && (
          <button
            type="button"
            onClick={() => setCurrent(0)}
            aria-label={`${labels.viewImage}: ${imageAlt(0)}`}
            className="group relative block aspect-[16/9] w-full overflow-hidden rounded-[18px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
          >
            <Image
              src={images[0]}
              alt={imageAlt(0)}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </button>
        )}

        <div className="grid gap-8 md:grid-cols-2">

          {images[1] && (
            <button
              type="button"
              onClick={() => setCurrent(1)}
              aria-label={`${labels.viewImage}: ${imageAlt(1)}`}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[16px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            >
              <Image
                src={images[1]}
                alt={imageAlt(1)}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </button>
          )}

          {images[2] && (
            <button
              type="button"
              onClick={() => setCurrent(2)}
              aria-label={`${labels.viewImage}: ${imageAlt(2)}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-[16px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
            >
              <Image
                src={images[2]}
                alt={imageAlt(2)}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </button>
          )}

        </div>

        {images[3] && (
          <button
            type="button"
            onClick={() => setCurrent(3)}
            aria-label={`${labels.viewImage}: ${imageAlt(3)}`}
            className="group relative block aspect-[21/9] w-full overflow-hidden rounded-[18px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
          >
            <Image
              src={images[3]}
              alt={imageAlt(3)}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </button>
        )}

          </>
        )}

      </div>

      {current !== null && (
        <Lightbox
          images={images}
          current={current}
          imageAlt={imageAlt(current)}
          labels={labels}
          onClose={closePreview}
          onNext={showNext}
          onPrev={showPrevious}
        />
      )}
    </>
  );
}

function GalleryButton({
  image,
  alt,
  label,
  className,
  priority = false,
  onClick,
}: {
  image: string;
  alt: string;
  label: string;
  className: string;
  priority?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group relative block w-full overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)] ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </button>
  );
}
