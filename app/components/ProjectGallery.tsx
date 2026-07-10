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
};

export default function ProjectGallery({ images, projectTitle, labels }: Props) {
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

        {images[0] && (
          <button
            type="button"
            onClick={() => setCurrent(0)}
            aria-label={`${labels.viewImage}: ${imageAlt(0)}`}
            className="group relative block aspect-[16/9] w-full overflow-hidden rounded-[36px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
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
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[32px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
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
              className="group relative block aspect-square w-full overflow-hidden rounded-[32px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
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
            className="group relative block aspect-[21/9] w-full overflow-hidden rounded-[36px] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
          >
            <Image
              src={images[3]}
              alt={imageAlt(3)}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </button>
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
