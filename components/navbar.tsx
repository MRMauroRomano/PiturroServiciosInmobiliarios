"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Building2, Users, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/propiedades", label: "Propiedades", icon: Building2 },
  { href: "/nosotros", label: "Nosotros", icon: Users },
  { href: "/contacto", label: "Contacto", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group"
        >
          <Image
            src="/images/logo-white.png"
            alt="Matías Piturro Servicios Inmobiliarios"
            width={240}
            height={80}
            className={cn(
              "h-16 sm:h-20 w-auto transition-all duration-300",
              scrolled ? "brightness-0 opacity-80" : "brightness-100"
            )}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-all duration-200 hover:scale-105",
                scrolled
                  ? "text-[#064e3b] hover:text-[#10b981]"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="bg-[#10b981] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#059669] transition-all hover:shadow-lg hover:scale-105"
          >
            Contactanos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            scrolled
              ? "text-[#064e3b] hover:bg-[#064e3b]/10"
              : "text-white hover:bg-white/10"
          )}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 glass shadow-xl transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#064e3b] hover:bg-[#10b981]/10 transition-colors"
              >
                <Icon size={20} />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-[#10b981] text-white px-4 py-3 rounded-xl font-medium text-center hover:bg-[#059669] transition-colors"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </header>
  );
}
