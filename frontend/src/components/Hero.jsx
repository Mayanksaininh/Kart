import React from "react";
import { First_slide } from "../utils/constant";
import { Craft1 ,Craft2 , Craft3 } from "../utils/constant";
import {Art1 , Art2, Art3} from "../utils/constant"; 



const Hero = () =>{
    return(
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
        
             <div className="px-6 md:px-16 py-10">
          {/* Text - full width */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Our Craft Works division celebrates the artistry of handmade creation, blending time-honored techniques with a contemporary eye for design.
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
              {" "}From wood and bamboo to clay and paper
            </span>, each piece is shaped by skilled hands using carefully sourced, eco-conscious materials. The result is functional art that brings warmth, character, and craftsmanship into everyday spaces.
          </p>
        
          {/* Images - below text, side by side on larger screens, stacked on mobile */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={Craft3}
            alt="Craft 3"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src={Craft2}
            alt="Craft 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src={Craft1}
            alt="Craft 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        </div>
        
        <div className="px-6 md:px-16 py-10">
          {/* Heading
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
            Art Work
          </h2> */}
        
          {/* Text - full width */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Our Art Work collection captures originality, skill, and artistic depth across paintings, drawings, sculptures, and mixed media.
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
              {" "}Blending traditional technique with a modern perspective
            </span>, every piece is crafted with quality and meticulous attention to detail. More than decoration, each artwork is an experience designed to inspire, elevate spaces, and leave a lasting impression.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={Art2}
            alt="Art 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src={Art1}
            alt="Art 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src={Art3}
            alt="Art3"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        </div>
        
                </div>
    )
}


export default Hero