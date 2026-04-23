"use client";

import Image from "next/image";
import { Bed, Bath, Maximize, MapPin, MessageCircle, Eye } from "lucide-react";
import { Property, formatPrice, getWhatsAppLink } from "@/lib/properties";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
  className?: string;
}

export function PropertyCard({ property, onViewDetails, className }: PropertyCardProps) {
  const typeLabels = {
    casa: "Casa",
    departamento: "Departamento",
    terreno: "Terreno",
  };

  return (
    <div
      className={cn(
        "group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Type Badge */}
<div className="absolute top-4 left-4 flex flex-col gap-2">
  <span className="bg-[#064e3b] text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md">
    {typeLabels[property.type]}
  </span>

  {/* 🔥 NUEVO BADGE */}
  <span
    className={`px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md text-white ${
      property.operation === "venta"
        ? "bg-blue-500"
        : "bg-emerald-500"
    }`}
  >
    {property.operation === "venta" ? "En Venta" : "En Alquiler"}
  </span>
</div>
   
        
        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-[#10b981] text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md">
              Destacada
            </span>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-[#064e3b] mb-2 line-clamp-1">
          {property.name}
        </h3>

        {/* Price */}
<p className="text-2xl font-bold text-[#10b981] mb-2">
  {formatPrice(property)}
</p>

{property.operation === "alquiler" && property.expenses && (
  <p className="text-sm text-gray-500 mb-4">
    Expensas: ${property.expenses.toLocaleString()}
  </p>
)}

        {/* Features */}
        {property.type !== "terreno" && (
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-5">
            <div className="flex items-center gap-1.5">
              <Bed size={16} />
              <span>{property.bedrooms} hab.</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath size={16} />
              <span>{property.bathrooms} baños</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize size={16} />
              <span>{property.area} m²</span>
            </div>
          </div>
        )}

        {property.type === "terreno" && (
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-5">
            <div className="flex items-center gap-1.5">
              <Maximize size={16} />
              <span>{property.area} m²</span>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onViewDetails(property)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#064e3b] text-white py-2.5 rounded-xl font-medium hover:bg-[#053f30] transition-colors"
          >
            <Eye size={18} />
            <span>Ver más</span>
          </button>
          <a
            href={getWhatsAppLink(property.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-xl font-medium hover:bg-[#1da851] transition-colors"
            aria-label={`Contactar por WhatsApp sobre ${property.name}`}
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
