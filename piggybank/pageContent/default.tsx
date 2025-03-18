import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Content() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 bg-neutral-50 min-h-screen">
      {/* Header Section */}
      <h1 className="text-4xl lg:text-6xl font-extrabold text-neutral-800 text-center py-10 mb-12 bg-gradient-to-r from-neutral-700 to-neutral-500 bg-clip-text animate-fade-in">
        Default Page
      </h1>

      {/* Main Content Section */}
      <div className="mb-20 animate-slide-up delay-400 pt-2">
        <div className="flex flex-col justify-center max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-neutral-100 rounded-2xl shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] flex-shrink-0">
              <Image
                src="/piggywin.svg"
                fill={true}
                alt="piggy"
                className="object-contain transform hover:scale-110 hover:rotate-3 transition-transform duration-400 ease-out"
              />
            </div>
            <div className="flex flex-col items-center gap-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 tracking-tight border-b-4 border-neutral-400 pb-3">
                Welcome
              </h2>
              <p className="text-neutral-600 leading-relaxed max-w-[330px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                gravida, urna ullamcorper rutrum auctor, augue tortor luctus
                dui, sed auctor neque tortor sed ex. Quisque semper turpis
                turpis, id condimentum ligula tincidunt non.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-white to-neutral-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-800 mb-10 tracking-tight border-b-4 border-indigo-400 pb-4 flex items-center gap-4">
          Additional Content
        </h1>
        <Carousel className="relative w-full">
          <CarouselContent className="flex gap-6">
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">📌</span> Header
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                gravida, urna ullamcorper rutrum auctor, augue tortor luctus
                dui, sed auctor neque tortor sed ex.
              </p>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center p-6 bg-neutral-100 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 basis-full md:basis-1/2 lg:basis-1/3">
              <h2 className="text-xl font-semibold text-neutral-700 mb-3 flex items-center gap-3">
                <span className="text-2xl">✨</span> Header2
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                gravida, urna ullamcorper rutrum auctor, augue tortor luctus
                dui, sed auctor neque tortor sed ex.
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-300">
            <span className="text-xl">←</span>
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-indigo-500 text-white p-2 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-300">
            <span className="text-xl">→</span>
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}
