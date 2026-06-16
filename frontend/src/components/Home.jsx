import React from "react";

const Home = () =>{
    return(
        <div className="">
            <h1 className="text-4xl md:text-5xl font-extrabold mt-16 tracking-wide ml-4 sm:ml-8 md:ml-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Our Business
            </h1>

           <div className="px-6 md:px-16 py-10">
  <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
    Our Business is a celebration of creativity, craftsmanship, and artistic expression—
    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text font-semibold">
      {" "}crafted with passion, inspired by art
    </span>.
    We bring together a diverse range of handmade crafts and fine art, designed to inspire and add beauty to everyday life.
  </p>

  <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-4xl">
    Our craft collection features wood and bamboo creations that reflect natural elegance, along with clay and pottery crafted with tradition and skill. We also offer intricate paper crafts, decorative pieces, and painting-based crafts that add charm to any space. With a strong focus on sustainability, our recycled and eco-friendly creations promote a greener and more conscious lifestyle.
  </p>

  <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-4xl">
    On the artistic side, we showcase a variety of art forms including painting, drawing, sculpture, and printmaking. Our collection also includes ceramics and glass art, each piece thoughtfully created with attention to detail and artistic excellence.
  </p>

  <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-4xl">
    Every creation blends traditional techniques with modern aesthetics, making each piece unique and meaningful. Our mission is to support creativity, celebrate handmade artistry, and deliver work that truly stands out.
  </p>
</div>

        </div>
    )
}

export default Home 
