import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/properties";

export function Footer() {
  return (
    <footer className="bg-[#064e3b] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/images/logo-white.png"
              alt="Matías Piturro Servicios Inmobiliarios"
              width={280}
              height={100}
              className="h-24 w-auto"
            />
            <p className="text-white/70 leading-relaxed">
              Tu aliado de confianza en el mercado inmobiliario. Encontrá la propiedad perfecta con nosotros.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/inmopiturro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#10b981] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/propiedades", label: "Propiedades" },
                { href: "/nosotros", label: "Sobre Nosotros" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#6ee7b7] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Propiedades</h3>
            <ul className="space-y-3">
              {[
                { href: "/propiedades?tipo=casa", label: "Casas" },
                { href: "/propiedades?tipo=departamento", label: "Departamentos" },
                { href: "/propiedades?tipo=terreno", label: "Terrenos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#6ee7b7] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#6ee7b7] mt-0.5 shrink-0" />
                <span className="text-white/70">
                 General Deheza 342, Córdoba Capital, Argentina
                </span>
              </li>
  
<div className="flex flex-col gap-2">

  {/* Administración */}
  <a
    href="tel:+543513416380"
    className="flex items-center gap-3 text-white/70 hover:text-[#6ee7b7] transition-colors"
  >
    <Phone size={20} className="text-[#6ee7b7] shrink-0" />
    <span>Administración: +54 9 351-3416380</span>
  </a>

  {/* Ventas */}
  <a
    href="tel:+543517562763"
    className="flex items-center gap-3 text-white/70 hover:text-[#6ee7b7] transition-colors"
  >
    <div className="w-[20px]" /> {/* espacio del icono */}
    <span>Ventas: +54 9 351-7562763</span>
  </a>

  {/* Alquileres */}
  <a
    href="tel:+543518062200"
    className="flex items-center gap-3 text-white/70 hover:text-[#6ee7b7] transition-colors"
  >
    <div className="w-[20px]" /> {/* espacio del icono */}
    <span>Alquileres: +54 9 351-8062200</span>
  </a>

</div>


              <li>
                <a
                  href="mailto:matiaspiturroinmuebles@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-[#6ee7b7] transition-colors"
                >
                  <Mail size={20} className="text-[#6ee7b7] shrink-0" />
                  <span>matiaspiturroinmuebles@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2026 Matías Piturro Servicios Inmobiliarios. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacidad" className="text-white/60 hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-white/60 hover:text-white transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
