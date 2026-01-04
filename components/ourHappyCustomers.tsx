"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Kweku Annan", role: "Shop Owner", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper" },
    { name: "Ama Ampomah", role: "Supermarket Owner", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper " },
    { name: "Sarah Annan", role: "Shop Owner", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper " },
    { name: "Ama Mensah", role: "Restaurant Owner", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper " },
    { name: "Kojo Badu", role: "Food Distributor", image: "/Owner.png", text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper " },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children.item(index) as HTMLElement | null;
    if (!card) return;

    const scrollLeft = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  // Adjust scroll on resize
  useEffect(() => {
    const handleResize = () => scrollToIndex(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  // Parallax background
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AUTO-SCROLL
 useEffect(() => {
  const interval = setInterval(() => {
    requestAnimationFrame(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollToIndex(next);
        return next;
      });
    });
  }, 3000);

  return () => clearInterval(interval);
}, [testimonials.length]);  


  return (
    <section className="relative py-10 md:py-20 bg-[#F5F5F5] overflow-hidden">
      <div ref={bgRef} className="absolute left-0 bottom-72 w-200 h-200 pointer-events-none opacity-50 md:opacity-100 hidden sm:block">
        <Image src="/shopping cart.png" alt="background" fill className="object-contain object-left" priority />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <p className="uppercase text-gray-400 tracking-[0.3em] sm:tracking-[0.5em] text-xs sm:text-sm mb-4 sm:mb-5">Testimonials</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Happy Customers</h2>
        <p className="text-[#5C6574] text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-11 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>

        <div ref={containerRef} className="flex gap-8 sm:gap-16 md:gap-36 overflow-x-hidden scroll-snap-x scroll-snap-mandatory px-4 sm:px-6 md:px-0">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="shrink-0 relative bg-white/95 shadow-xl mb-6 sm:mb-10 p-8 sm:p-12 md:p-20 mt-12 sm:mt-16 md:mt-20 w-[280px] sm:w-[400px] md:w-[550px] min-h-[300px] sm:h-[320px] md:h-[351px] text-center backdrop-blur-sm scroll-snap-align-center hover:scale-105 transition-transform duration-300"
              style={{
                borderTopLeftRadius: "60px",
                borderBottomRightRadius: "60px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "20px",
              }}
            >
              <div className="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md">
                <Image src={t.image} alt={t.name} width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <div className="pt-6 sm:pt-8 md:pt-10">
                <p className="text-[#5C6574] mx-2 sm:mx-6 md:mx-10 text-xs sm:text-sm leading-relaxed mb-2">{t.text}</p>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base mt-4 sm:mt-6">{t.name}</h4>
                <p className="text-[#5C6574] text-xs sm:text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 gap-3 sm:gap-4 md:gap-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                idx === activeIndex ? "bg-red-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
