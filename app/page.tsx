"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Building2, Trees, MessageCircle, ChevronRight } from "lucide-react";
import { properties, formatPrice, getWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";
import { PropertyModal } from "@/components/property-modal";
import type { Property } from "@/lib/properties";
import { Instagram } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Casas",
    description: "Encontrá tu hogar ideal entre nuestra selección de casas",
    href: "/propiedades?tipo=casa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Departamentos",
    description: "Departamentos modernos en las mejores ubicaciones",
    href: "/propiedades?tipo=departamento",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
  {
    icon: Trees,
    title: "Terrenos",
    description: "Lotes y terrenos para construir tu sueño",
    href: "/propiedades?tipo=terreno",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
  },
];

const instagramImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
];

export default function HomePage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 6);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Casa moderna de lujo"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/80 via-[#064e3b]/60 to-[#064e3b]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up text-balance">
            Donde tus sueños toman forma
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-100 text-pretty">
            Tu aliado de confianza en el mercado inmobiliario de Córdoba y alrededores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <Link
              href="/propiedades"
              className="inline-flex items-center justify-center gap-2 bg-[#10b981] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#059669] transition-all hover:shadow-xl hover:scale-105"
            >
              Ver Propiedades
              <ArrowRight size={20} />
            </Link>
            <a
              href={`https://wa.me/${3518062200}?text=${encodeURIComponent("Hola, me gustaría obtener asesoramiento sobre propiedades.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
            >
              <MessageCircle size={20} />
              Contactanos
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4 text-balance">
              ¿Qué estás buscando?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explorá nuestras categorías y encontrá la propiedad perfecta para vos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="w-14 h-14 bg-[#10b981] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                  <div className="mt-4 flex items-center text-[#6ee7b7] font-medium group-hover:gap-2 transition-all">
                    <span>Ver propiedades</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4 text-balance">
                Propiedades Destacadas
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Descubrí nuestra selección de propiedades más exclusivas del mercado
              </p>
            </div>
            <Link
              href="/propiedades"
              className="inline-flex items-center gap-2 text-[#10b981] font-semibold hover:gap-3 transition-all"
            >
              Ver todas
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <PropertyCard
                  property={property}
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#064e3b] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#10b981]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10b981]/10 rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                ¿Querés vender tu propiedad?
              </h2>
              <p className="text-white/80 max-w-lg">
                Trabajamos para conseguir el mejor precio para tu propiedad. Contactanos y te asesoramos sin compromiso.
              </p>
            </div>
            <a
              href={`https://wa.me/${3517562763}?text=${encodeURIComponent("Hola, quiero vender mi propiedad y me gustaría recibir asesoramiento.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#064e3b] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#6ee7b7] transition-all hover:shadow-xl hover:scale-105 shrink-0"
            >
              <MessageCircle size={24} />
              Contactanos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
<section className="py-20 bg-[#f0fdf4]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4 flex items-center justify-center gap-3">
  <Instagram size={32} className="text-[#067415]" />
  Seguinos en Instagram
</h2>

      <p className="text-3xl md:text-2xl text-muted-foreground mb-10">
        @inmopiturro
      </p>

      {/* BOTÓN SEGUINOS */}
      <a
        href="https://www.instagram.com/inmopiturro/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#02350a] text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-[#0a5c07] transition"
      >
        <Instagram size={20} />
        Seguinos
      </a>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {instagramImages.map((image, index) => (
        <a
          key={index}
          href="https://instagram.com/mpiturro.inmobiliaria"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square rounded-xl overflow-hidden"
        >
          <Image
            src={image}
            alt={`Instagram post ${index + 1}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 16vw"
          />
          <div className="absolute inset-0 bg-[#064e3b]/0 group-hover:bg-[#064e3b]/60 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <ChevronRight className="text-white" size={24} />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
