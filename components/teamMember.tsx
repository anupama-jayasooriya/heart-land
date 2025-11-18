"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Inter, Nunito } from "next/font/google";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

const team = [
  { name: "Tharindu Senanayake", role: "Export Logistics Coordinator", img: "/tharindu.png", offset: 0, size: 380 },
  { name: "Hashan Madushanka", role: "Business Development Executive", img: "/hashan.png", offset: -40, size: 350 },
  { name: "Shalini Perera", role: "Quality Assurance Officer", img: "/shalini.png", offset: 0, size: 400 },
  { name: "Hansi Hettiarachchi", role: "Digital Marketing Specialist", img: "/hansi.png", offset: -40, size: 380 },
  { name: "Lakshani Wanigathunga", role: "Customer Relations Manager", img: "/lakshani.png", offset: 0, size: 400 },
];

export default function TeamMembers() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0 });
        } else {
          scrollRef.current.scrollBy({ left: 1 });
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="w-full flex flex-col items-center py-20 px-6">
      {/* Heading */}
      <motion.div
        style={{ y }}
        className={`text-center text-2xl max-w-4xl mb-16 ${nunito.className}`}
      >
        <h2 className="text-4xl font-bold mb-8">Our Team Members</h2>
        <p>
          Our diverse team of professionals brings together expertise in food technology, marketing, logistics, and sustainability — all united by a common purpose:
        </p>
      </motion.div>

      {/* Arrows + scrollable container */}
      <div className="relative w-full max-w-10xl">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute -top-12 right-24 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-gray-400"
        >
          &#8592;
        </button>
        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute -top-12 right-7 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-gray-400"
        >
          &#8594;
        </button>

        {/* Scrollable Team Grid */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-4 pt-20 gap-0 no-scrollbar"
        >
          <div className="flex" style={{ minWidth: "100%" }}>
            {team.map((person, i) => (
              <motion.div
                key={i}
                style={{ y }}
                className="shrink-0 flex flex-col items-center p-0 rounded-2xl"
              >
                <div
                  className="relative mb-0"
                  style={{
                    width: `${person.size}px`,
                    height: `${person.size}px`,
                    marginTop: person.offset,
                  }}
                >
                  <Image src={person.img} alt={person.name} fill className="object-contain" />
                </div>
                <h3
                  className={`${inter.className} font-semibold w-52 text-2xl text-[#564F4F] text-left`}
                   
                >
                  {person.name}
                </h3>
                <p className={`${inter.className} text-lg w-52 font-semibold text-[#ADADAD] text-left`}>
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
