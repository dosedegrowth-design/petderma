"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Photo = { src: string; alt: string };

export function PhotoCarousel({
  photos,
  options,
  className,
  slidesPerView = { base: 1.2, sm: 2.2, lg: 3.2 },
  aspectRatio = "aspect-[4/5]",
  autoplay = true,
  showControls = true,
  showDots = true,
  rounded = "rounded-[1.5rem]",
}: {
  photos: Photo[];
  options?: Parameters<typeof useEmblaCarousel>[0];
  className?: string;
  slidesPerView?: { base: number; sm?: number; lg?: number };
  aspectRatio?: string;
  autoplay?: boolean;
  showControls?: boolean;
  showDots?: boolean;
  rounded?: string;
}) {
  const plugins = autoplay
    ? [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
      ...options,
    },
    plugins
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Build CSS variable based slide widths
  const slideStyle: React.CSSProperties = {
    flex: "0 0 var(--slide-width)",
  };

  return (
    <div className={cn("relative", className)}>
      <style>{`
        .embla-pd { --slide-width: ${(100 / slidesPerView.base).toFixed(2)}%; }
        @media (min-width: 640px) {
          .embla-pd { --slide-width: ${(100 / (slidesPerView.sm ?? slidesPerView.base)).toFixed(2)}%; }
        }
        @media (min-width: 1024px) {
          .embla-pd { --slide-width: ${(100 / (slidesPerView.lg ?? slidesPerView.sm ?? slidesPerView.base)).toFixed(2)}%; }
        }
      `}</style>

      <div className="embla-pd overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-5">
          {photos.map((photo, i) => (
            <div key={i} style={slideStyle} className="min-w-0">
              <div
                className={cn(
                  "group relative w-full overflow-hidden ring-1 ring-brand-primary/5 shadow-soft transition-shadow hover:shadow-card",
                  aspectRatio,
                  rounded
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <div className="mt-6 flex items-center justify-between gap-4">
          {showDots && (
            <div className="flex gap-1.5">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-pill transition-all duration-500",
                    i === selectedIndex
                      ? "w-8 bg-brand-accent"
                      : "w-1.5 bg-brand-primary/20 hover:bg-brand-primary/40"
                  )}
                />
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Slide anterior"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary/15 bg-white text-brand-primary transition-all hover:-translate-x-0.5 hover:border-brand-accent hover:bg-brand-accent active:scale-95"
            >
              <ChevronLeft className="size-5" strokeWidth={2.5} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary/15 bg-white text-brand-primary transition-all hover:translate-x-0.5 hover:border-brand-accent hover:bg-brand-accent active:scale-95"
            >
              <ChevronRight className="size-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/** Variant for dark backgrounds */
export function PhotoCarouselDark(props: Parameters<typeof PhotoCarousel>[0]) {
  return (
    <PhotoCarousel
      {...props}
      className={cn("[&_button]:bg-white/10 [&_button]:border-white/20 [&_button]:text-white [&_button:hover]:bg-brand-accent [&_button:hover]:text-brand-primary [&_button:hover]:border-brand-accent", props.className)}
    />
  );
}
