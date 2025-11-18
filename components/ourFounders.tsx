"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function Founders() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const offset = rect.top * 0.15; // parallax amount
        const img = card.querySelector(".parallax-img");
        img.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const founders = [
    {
      name: "Mr. Aravinda Perera",
      title: "Director",
      img: "/founder 1.png",
    },
    {
      name: "Ms. Dulani Fernando",
      title: "Co-Founder & Director of Operations",
      img: "/founder 2.png",
    },
    {
      name: "Mr. Nuwan Jayasuriya",
      title: "HR Manager",
      img: "/founder 3.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Meet Our Founders
        </h2>
        <p className="text-gray-700 text-xl leading-relaxed">
          At <span className="font-semibold">Heartland General Trading</span>, 
          we take pride in offering more than just quality products —
          we deliver trust, consistency, and a commitment to excellence in every partnership.
          Here’s what makes us stand out in Sri Lanka’s food industry.
        </p>
      </div>

      {/* Founders Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-9">
        {founders.map((founder, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative overflow-hidden bg-white group"
          >
            {/* Image*/}
            <div className="h-[420px] w-full overflow-hidden">
              <Image
                src={founder.img}
                alt={founder.name}
                width={1000}
                height={1200}
                className="parallax-img object-cover w-full h-full transition-transform duration-300 ease-out"
              />
            </div>
{/* Info box */}
<div className="
  px-4 py-5 
  mx-auto w-[80%]
  text-center
  border-t-4 border-red-600
  bg-white 
  relative 
  -mt-10       
  z-20        
  h-30
">
  <h3 className="text-xl font-bold">{founder.name}</h3>
  <p className="text-black font-semibold mt-1">{founder.title}</p>
</div>


          </div>
        ))}
      </div>
    </section>
  );
}
