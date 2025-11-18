"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function WhyWorkWithUs() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 400], [0, -80]);
  const y2 = useTransform(scrollY, [0, 400], [0, -80]);
  const y3 = useTransform(scrollY, [0, 400], [0, -80]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full mt-10  min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Parallax Header */}
      <motion.div style={{ y: y1 }} className="pt-32 pb-10 text-center">
        <motion.h4
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          style={{ letterSpacing: '5px' }}
          className="text-sm text-gray-500 uppercase"
        >
          About Us
        </motion.h4>

        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-5xl font-semibold mt-2"
        >
          Why Work With Us
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl text-xl mt-10 mb-10 mx-auto text-black leading-relaxed"
        >
          At <span className="font-semibold">Heartland General Trading</span>, we take
          pride in offering more than just quality products — we deliver trust,
          consistency, and a commitment to excellence in every partnership.
          Here’s what makes us stand out in Sri Lanka’s food industry.
        </motion.p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-20">
        {/* CARD 1 */}
        <motion.div
          style={{ y: y1 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-8 bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl transition-shadow cursor-pointer"
        >
<div className="relative flex items-center">
  <div className="w-14 h-14 rounded-full bg-[#071440]/10 absolute left-0"></div>
  <span className="text-[#071440] text-3xl font-bold -ml-4">
    01
  </span>
</div>          <h3 className="font-semibold text-[#071440] text-lg mb-2 mt-5">Quality Certified Product</h3>
          <p className="text-[#071440] text-sm leading-relaxed">
            Every product we deliver undergoes rigorous quality checks and adheres to
            international food-safety standards. From sourcing top‑tier ingredients
            to final packaging, we prioritize trust, freshness, authenticity, and
            reliability in every batch.
          </p>
          <button className="mt-9 text-[#071440] font-semibold text-sm hover:underline">
            Explore more →
          </button>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          style={{ y: y2 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-8 bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl transition-shadow cursor-pointer"
        > 
         <div className="relative flex items-center">
  <div className="w-14 h-14 rounded-full bg-[#EE2A52]/10 absolute left-0"></div>
  <span className="text-[#071440] text-3xl font-bold -ml-4">
    02
  </span>
</div>


          <h3 className="font-semibold text-[#071440] text-lg mt-5 mb-2">Strong Supplier Network</h3>
          <p className="text-[#071440] text-sm leading-relaxed">
            With connections across Sri Lanka’s trusted suppliers, growers,
            manufacturers, and distributors, we guarantee a steady supply of premium
            products. Our long‑term partnerships ensure transparency, ethical
            sourcing, and better growth for local producers.
          </p>
          <button className="mt-4 text-[#071440] font-semibold text-sm hover:underline">
            Explore more →
          </button>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          style={{ y: y3 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-8 bg-white shadow-lg rounded-2xl border border-gray-100 hover:shadow-2xl transition-shadow cursor-pointer"
        >
<div className="relative flex items-center">
  <div className="w-14 h-14 rounded-full bg-[#FAB33F]/10 absolute left-0"></div>
  <span className="text-[#071440] text-3xl font-bold -ml-4">
    03
  </span>
</div>          <h3 className="font-semibold text-[#071440] text-lg mt-5 mb-2">Efficient UAE Distribution</h3>
          <p className="text-[#071440] text-sm leading-relaxed">
            With advanced logistics networks, we ensure timely delivery across
            Sri Lanka and international markets. Our efficient distribution channels
            maintain product freshness while ensuring every customer receives the
            best.
          </p>
          <button className="mt-10 text-[#071440] font-semibold text-sm hover:underline">
            Explore more →
          </button>
        </motion.div>
      </div>
    </div>
  );
}
