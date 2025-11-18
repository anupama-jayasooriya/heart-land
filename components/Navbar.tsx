"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Products", href: "/products" },
    { name: "CSR", href: "/csr" },
    { name: "Resources & Insights", href: "/resources" },
    { name: "FAQ & Support", href: "/faq" },
  ];

  const [active, setActive] = useState("Home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="max-w-7xl mx-auto px-6 pt-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center ml-14">
        <Image
          src="/logo.png"
          alt="logo"
          width={90}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      {mounted && (
        <nav className="hidden md:flex gap-12 items-center text-xl font-semibold leading-10 tracking-[-1px] font-sans">
          {links.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                onClick={() => setActive(link.name)}
                className="cursor-pointer inline-block"
              >
                {link.name}
              </Link>

              <span
                className={`absolute left-0 -bottom-1 h-[3px] transition-all duration-300 ${
                  active === link.name
                    ? "w-full bg-[#D11417]"
                    : "w-0 bg-black group-hover:w-full"
                }`}
              ></span>
            </div>
          ))}
        </nav>
      )}

      {/* Contact Button */}
      <div className="hidden md:block">
        <Link href="#">
          <Image
            src="/contact-button.png"
            alt="Contact button"
            width={160}
            height={130}
            className="object-contain mr-3.5"
          />
        </Link>
      </div>
    </header>
  );
}
