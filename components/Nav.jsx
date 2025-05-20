"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const NavLinks = ({ onLinkClick, className = "" }) => {
  const pathname = usePathname();
  return (
    <nav className={`flex gap-8 ${className}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center">
      <NavLinks />
    </div>
  );
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <DesktopNav />
      {/* Mobile Nav */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white font-mono text-xl"
        >
          Menu
        </button>
        {isOpen && (
          <div className="absolute top-16 left-4 right-4 z-50">
            <NavLinks onLinkClick={() => setIsOpen(false)} className="flex-col gap-4 mt-4 bg-[#23232a] p-4 rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </>
  );
}
