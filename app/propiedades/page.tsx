"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, Home, Building2, Trees } from "lucide-react";
import { properties, type Property } from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";
import { PropertyModal } from "@/components/property-modal";
import { cn } from "@/lib/utils";

const propertyTypes = [
  { value: "all", label: "Todas", icon: null },
  { value: "casa", label: "Casas", icon: Home },
  { value: "departamento", label: "Departamentos", icon: Building2 },
  { value: "terreno", label: "Terrenos", icon: Trees },
];

const locations = [
  "Todas las ubicaciones",
  "Córdoba Capital",
  "Nueva Córdoba",
  "Villa Allende",
  "Las Delicias",
  "Centro Histórico",
  "Arguello",
  "Cerro de las Rosas",
  "La Calera",
  "Alto Alberdi",
  "Mendiolaza",
];

function PropertiesContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("tipo") || "all";

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filters
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedLocation, setSelectedLocation] = useState("Todas las ubicaciones");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const tipo = searchParams.get("tipo");
    if (tipo) {
      setSelectedType(tipo);
    }
  }, [searchParams]);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Type filter
      if (selectedType !== "all" && property.type !== selectedType) {
        return false;
      }

      // Location filter
      if (selectedLocation !== "Todas las ubicaciones" && property.location !== selectedLocation) {
        return false;
      }

      // Price filters
      if (minPrice && property.price < parseInt(minPrice)) {
        return false;
      }
      if (maxPrice && property.price > parseInt(maxPrice)) {
        return false;
      }

      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = property.name.toLowerCase().includes(query);
        const matchesLocation = property.location.toLowerCase().includes(query);
        const matchesDescription = property.description.toLowerCase().includes(query);
        if (!matchesName && !matchesLocation && !matchesDescription) {
          return false;
        }
      }

      return true;
    });
  }, [selectedType, selectedLocation, minPrice, maxPrice, searchQuery]);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setSelectedType("all");
    setSelectedLocation("Todas las ubicaciones");
    setMinPrice("");
    setMaxPrice("");
    setSearchQuery("");
  };

  const hasActiveFilters = 
    selectedType !== "all" || 
    selectedLocation !== "Todas las ubicaciones" || 
    minPrice !== "" || 
    maxPrice !== "" ||
    searchQuery !== "";

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[#064e3b] pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center animate-fade-in-up">
            Nuestras Propiedades
          </h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Explorá nuestra selección de propiedades y encontrá la ideal para vos
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b sticky top-[72px] z-40">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Buscar por nombre, ubicación..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all",
                showFilters
                  ? "bg-[#064e3b] text-white"
                  : "bg-muted hover:bg-[#d1fae5] text-[#064e3b]"
              )}
            >
              <SlidersHorizontal size={20} />
              <span className="hidden sm:inline">Filtros</span>
            </button>
          </div>

          {/* Property Type Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {propertyTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all",
                    selectedType === type.value
                      ? "bg-[#064e3b] text-white shadow-md"
                      : "bg-muted hover:bg-[#d1fae5] text-[#064e3b]"
                  )}
                >
                  {Icon && <Icon size={18} />}
                  <span>{type.label}</span>
                </button>
              );
            })}
          </div>

          {/* Expanded Filters */}
          <div
            className={cn(
              "grid md:grid-cols-3 gap-4 overflow-hidden transition-all duration-300",
              showFilters ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-[#064e3b] mb-2">
                Ubicación
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="block text-sm font-medium text-[#064e3b] mb-2">
                Precio mínimo (USD)
              </label>
              <input
                type="number"
                placeholder="Ej: 50000"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-sm font-medium text-[#064e3b] mb-2">
                Precio máximo (USD)
              </label>
              <input
                type="number"
                placeholder="Ej: 500000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Active Filters & Clear */}
          {hasActiveFilters && (
            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <span className="text-sm text-muted-foreground">Filtros activos:</span>
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-medium hover:bg-red-200 transition-colors"
              >
                <X size={14} />
                Limpiar todo
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Mostrando <span className="font-semibold text-[#064e3b]">{filteredProperties.length}</span> propiedades
            </p>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                >
                  <PropertyCard
                    property={property}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-[#d1fae5] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-[#10b981]" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-[#064e3b] mb-2">
                No encontramos propiedades
              </h3>
              <p className="text-muted-foreground mb-6">
                Intentá ajustar los filtros o buscar con otros términos
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-[#10b981] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#059669] transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}
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

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#10b981] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <PropertiesContent />
    </Suspense>
  );
}
