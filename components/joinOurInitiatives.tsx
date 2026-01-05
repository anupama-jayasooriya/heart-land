"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Initiative() {
  const imageRef = React.useRef<HTMLDivElement>(null);

React.useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY;

    if (imageRef.current) {
      imageRef.current.style.transform = `translateY(${y * 0.06}px)`;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section className="py-10 md:py-16 lg:py-6 bg-white relative overflow-hidden">
      {/* Right side background image */}
      <div className="absolute right-0 -top-24 bottom-0 w-[400px] md:w-[700px] opacity-50 md:opacity-100 pointer-events-none">
        <Image
          src="/initiatives bg.png"
          alt="Background Shape"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Section - Images */}
        <div ref={imageRef} className="relative mx-auto md:ml-20 w-64 h-64 sm:w-80 sm:h-80 md:w-[430px] md:h-[430px] overflow-visible">
          <Image
            src="/Group 69.png"
            alt="Child Initiative"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="space-y-4 sm:space-y-6 md:-mt-40 text-center md:text-left px-4 md:px-0">
          <p className="uppercase text-gray-400 text-xs sm:text-sm tracking-widest">
            C S R
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Join our initiatives
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 pt-4 sm:pt-6">
            <button className="bg-black text-base sm:text-lg md:text-[20px] text-white cursor-pointer px-8 sm:px-12 md:px-16 py-3 rounded-full font-semibold border-2 border-black transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1 transform-gpu hover:bg-white hover:text-black">
              Learn More
            </button>

            <button className="group flex items-center justify-center gap-2 sm:gap-3 cursor-pointer border-2 sm:border-[3px] border-[#D11417] text-[#000000] font-nunito font-bold text-base sm:text-lg md:text-[20px] leading-[100%] px-4 sm:px-6 py-3 sm:py-4 rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:scale-[1.02] hover:-translate-y-1">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#000000] transition-all duration-300 group-hover:bg-white">
                <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-white transition-all duration-300 group-hover:fill-[#000000]" />
              </div>
              Watch Videos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
