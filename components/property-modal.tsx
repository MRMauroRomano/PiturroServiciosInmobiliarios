"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Bed, Bath, Maximize, MapPin, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Property, formatPrice, getWhatsAppLink } from "@/lib/properties";
import { cn } from "@/lib/utils";

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!property) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const typeLabels = {
    casa: "Casa",
    departamento: "Departamento",
    terreno: "Terreno",
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className={cn(
          "relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300",
          isOpen ? "animate-scale-in" : "scale-95"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
          aria-label="Cerrar modal"
        >
          <X size={20} className="text-[#064e3b]" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Gallery */}
          <div className="relative h-64 md:h-full min-h-[400px]">
            <Image
              src={property.images[currentImageIndex]}
              alt={`${property.name} - Imagen ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Navigation Arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={20} className="text-[#064e3b]" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight size={20} className="text-[#064e3b]" />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {property.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all",
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    )}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Type Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-[#064e3b] text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md">
                {typeLabels[property.type]}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
            {/* Location */}
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
              <MapPin size={14} />
              <span>{property.location}</span>
            </div>

            {/* Title */}
            <h2 id="modal-title" className="text-2xl font-bold text-[#064e3b] mb-4">
              {property.name}
            </h2>

            {/* Price */}
            <p className="text-3xl font-bold text-[#10b981] mb-6">
              {formatPrice(property)}
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {property.type !== "terreno" && (
                <>
                  <div className="bg-[#d1fae5] rounded-xl p-4 text-center">
                    <Bed className="mx-auto mb-2 text-[#064e3b]" size={24} />
                    <p className="text-lg font-semibold text-[#064e3b]">{property.bedrooms}</p>
                    <p className="text-xs text-[#064e3b]/70">Habitaciones</p>
                  </div>
                  <div className="bg-[#d1fae5] rounded-xl p-4 text-center">
                    <Bath className="mx-auto mb-2 text-[#064e3b]" size={24} />
                    <p className="text-lg font-semibold text-[#064e3b]">{property.bathrooms}</p>
                    <p className="text-xs text-[#064e3b]/70">Baños</p>
                  </div>
                </>
              )}
              <div className={cn(
                "bg-[#d1fae5] rounded-xl p-4 text-center",
                property.type === "terreno" && "col-span-3"
              )}>
                <Maximize className="mx-auto mb-2 text-[#064e3b]" size={24} />
                <p className="text-lg font-semibold text-[#064e3b]">{property.area}</p>
                <p className="text-xs text-[#064e3b]/70">Metros²</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#064e3b] mb-2">Descripción</h3>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            {/* WhatsApp Button */}
            <a
              href={getWhatsAppLink(property.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#1da851] transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
