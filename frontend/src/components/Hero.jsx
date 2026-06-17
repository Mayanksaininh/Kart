import React, { useState, useEffect } from "react";
import { First_slide } from "../utils/constant";
import { Craft1, Craft2, Craft3, Craft4 } from "../utils/constant";
import { Art1, Art2, Art3 , Art4 } from "../utils/constant";

const AUTOPLAY_INTERVAL = 3000;

const ImageSlider = ({ images, altPrefix = "Slide" }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
      <img
        src={images[current]}
        alt={`${altPrefix} ${current + 1}`}
        className="w-full h-auto"
      />

      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl"
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="">
      <h1 className="text-4xl md:text-5xl font-extrabold mt-13 tracking-wide ml-4 sm:ml-8 md:ml-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Our Business
      </h1>

      <div className="px-6 md:px-16 py-10 flex flex-col md:flex-row gap-6 items-start">
        {/* Text column */}
        <div className="flex-1">
          <p className="text-gray-300 text-lg leading-relaxed">
            Our Business is a celebration of creativity, craftsmanship, and artistic expression—
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
              {" "}crafted with passion, inspired by art
            </span>.
            We bring together a diverse range of handmade crafts and fine art, designed to inspire and add beauty to everyday life.
          </p>

          <p className="text-gray-400 mt-8 text-lg leading-relaxed">
            Our craft collection features wood and bamboo creations that reflect natural elegance, along with clay and pottery crafted with tradition and skill. We also offer intricate paper crafts, decorative pieces, and painting-based crafts that add charm to any space. With a strong focus on sustainability, our recycled and eco-friendly creations promote a greener and more conscious lifestyle.
          </p>

          <p className="text-gray-400 mt-8 text-lg leading-relaxed">
            On the artistic side, we showcase a variety of art forms including painting, drawing, sculpture, and printmaking. Our collection also includes ceramics and glass art, each piece thoughtfully created with attention to detail and artistic excellence.
          </p>

          <p className="text-gray-400 mt-8 text-lg leading-relaxed">
            Every creation blends traditional techniques with modern aesthetics, making each piece unique and meaningful. Our mission is to support creativity, celebrate handmade artistry, and deliver work that truly stands out.
          </p>
        </div>

        {/* Image column */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end shrink-0">
          <img
            src={First_slide}
            alt="First slide"
            className="w-full max-w-sm h-88 md:h-[31rem] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Craft Works */}
      <div className="px-6 md:px-16 py-10">
        <p className="text-gray-300 text-lg leading-relaxed">
          Our Craft Works division celebrates the artistry of handmade creation, blending time-honored techniques with a contemporary eye for design.
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
            {" "}From wood and bamboo to clay and paper
          </span>, each piece is shaped by skilled hands using carefully sourced, eco-conscious materials. The result is functional art that brings warmth, character, and craftsmanship into everyday spaces.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <ImageSlider images={[Craft3, Craft2, Craft1 , Craft4]} altPrefix="Craft" />
        </div>
      </div>

      {/* Art Work */}
      <div className="px-6 md:px-16 py-10">
        <p className="text-gray-300 text-lg leading-relaxed">
          Our Art Work collection captures originality, skill, and artistic depth across paintings, drawings, sculptures, and mixed media.
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
            {" "}Blending traditional technique with a modern perspective
          </span>, every piece is crafted with quality and meticulous attention to detail. More than decoration, each artwork is an experience designed to inspire, elevate spaces, and leave a lasting impression.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <ImageSlider images={[Art2, Art1, Art3 , Art4]} altPrefix="Art" />
        </div>
      </div>
    </div>
  );
};

export default Hero;