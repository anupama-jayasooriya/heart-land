"use client";

import { useState } from "react";
import { Nunito, Open_Sans } from "next/font/google";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function GeneralFaqs() {
  const faqs = [
    {
      question: "Do you deliver across the UAE?",
      answer: `Yes, we provide nationwide delivery across all seven emirates in the UAE.
      Our efficient logistics network ensures that products are transported safely
      and arrive fresh. Whether you’re in Dubai, Abu Dhabi, or other regions, we
      guarantee timely and reliable delivery right to your doorstep.`,
    },
    {
      question: "What payment method do you accept ?",
      answer: "We accept major credit cards, bank transfers, and cash on delivery.",
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery usually takes 2–5 business days depending on your location.",
    },
    {
      question: "What is your return policy?",
      answer: "Products can be returned within 7 days if unopened and in original condition.",
    },
    {
      question: "Do you deliver across the UAE?",
      answer: "Products can be returned within 7 days if unopened and in original condition.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-10 px-5 md:px-10">
      {/* Desktop Background Image */}
      <div className="absolute inset-0 opacity-5 mt-10 pointer-events-none hidden md:block">
        <Image
          src="/WRLD-EPS-02-4001 1.png"
          alt="World Map Background"
          width={1030}
          height={600}
          className="object-left"
        />
      </div>

      {/* Mobile background image */}
<div className="absolute inset-0 md:hidden opacity-6 pointer-events-none -z-10">
  <Image
    src="/WRLD-EPS-02-4001 1.png"
    alt="FAQ background"
    fill
    className="object-cover"
  />
</div>



      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        
        {/* LEFT SIDE */}
        <div className="ml-0 md:ml-32 text-center md:text-left">
          <h2 className={`text-[22px] md:text-[32px] font-bold text-black ${nunito.className}`}>
            General FAQs
          </h2>

          <p
            className={`text-[14px] md:text-[18px] mt-4 max-w-full md:max-w-[400px] text-[#333] leading-[26px] md:leading-[28px] ${nunito.className}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
        </div>

        {/* RIGHT SIDE: FAQ List */}
        <div className="
  space-y-5
  ml-0 md:-ml-20
  max-w-full md:max-w-[650px]
  border border-[#000000] md:border-none
  rounded-2xl md:rounded-none
  p-5 md:p-0
 
">

          {faqs.map((faq, index) => (
            <div key={index}>
              <p
                className={`text-[16px] md:text-[18px] py-2 cursor-pointer font-semibold ${openSans.className} ${
                  openIndex === index
                    ? "text-[#D11417]"
                    : "text-black border-b border-[#D11417]"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
              </p>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className={`text-[15px] md:text-[16px] text-[#333] leading-[24px] md:leading-[26px] mt-2 ${nunito.className}`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
