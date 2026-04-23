"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/properties";
import { cn } from "@/lib/utils";

const operationTypes = [
  { value: "comprar", label: "Comprar" },
  { value: "vender", label: "Vender" },
  { value: "alquilar", label: "Alquilar" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "General Deheza 342, Córdoba, Argentina",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: (
  <>
    Administración: 351-3416380 <br />
    Alquileres: 351-8062200 <br />
    Ventas: 351-7562763
  </>
),
   
    href: `tel:+${3513416380}`,
  },
  {
    icon: Mail,
    title: "Email",
    content: "matiaspiturroinmuebles@gmail.com",
    href: "mailto:matiaspiturroinmuebles@gmail.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 9:00 - 15:00",
  },
];

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  operacion: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  operacion?: string;
  mensaje?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    operacion: "",
    mensaje: "",
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresá un email válido";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^[\d\s\-+()]{8,}$/.test(formData.telefono)) {
      newErrors.telefono = "Ingresá un teléfono válido";
    }

    if (!formData.operacion) {
      newErrors.operacion = "Seleccioná un tipo de operación";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For demo purposes, always succeed
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      operacion: "",
      mensaje: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-[#064e3b] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6ee7b7] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center animate-fade-in-up">
            Contactanos
          </h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Estamos acá para ayudarte. Completá el formulario o contactanos directamente
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#064e3b] mb-4">
                  Información de Contacto
                </h2>
                <p className="text-muted-foreground">
                  Elegí la forma que más te convenga para comunicarte con nosotros
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[#d1fae5] rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="text-[#064e3b]" size={22} />
                      </div>
                      <div>
                        <p className="font-semibold text-[#064e3b]">{info.title}</p>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  );

                  if (info.href) {
                    return (
                      <a
                        key={info.title}
                        href={info.href}
                        className="block hover:bg-[#f0fdf4] p-3 -m-3 rounded-xl transition-colors"
                      >
                        {content}
                      </a>
                    );
                  }
                  return <div key={info.title}>{content}</div>;
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#f0fdf4] rounded-2xl p-6 border border-[#d1fae5]">
                <h3 className="font-semibold text-[#064e3b] mb-2">
                  ¿Preferís WhatsApp?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Escribinos directamente y te respondemos al instante
                </p>
                <a
                  href={`https://wa.me/${ 3518062200}?text=${encodeURIComponent("Hola, quiero comunicarme con ustedes.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1da851] transition-colors"
                >
                  <MessageCircle size={20} />
                  Chatear por WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
                <h2 className="text-2xl font-bold text-[#064e3b] mb-6">
                  Envianos un mensaje
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-[#064e3b] mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all",
                        errors.nombre ? "border-red-400" : "border-border"
                      )}
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#064e3b] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all",
                          errors.email ? "border-red-400" : "border-border"
                        )}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-[#064e3b] mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all",
                          errors.telefono ? "border-red-400" : "border-border"
                        )}
                        placeholder="+54 9 351 123-4567"
                      />
                      {errors.telefono && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.telefono}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Operation Type */}
                  <div>
                    <label htmlFor="operacion" className="block text-sm font-medium text-[#064e3b] mb-2">
                      Tipo de operación *
                    </label>
                    <select
                      id="operacion"
                      name="operacion"
                      value={formData.operacion}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all",
                        errors.operacion ? "border-red-400" : "border-border"
                      )}
                    >
                      <option value="">Seleccioná una opción</option>
                      {operationTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.operacion && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.operacion}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-[#064e3b] mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={5}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all resize-none",
                        errors.mensaje ? "border-red-400" : "border-border"
                      )}
                      placeholder="Contanos en qué podemos ayudarte..."
                    />
                    {errors.mensaje && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.mensaje}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-lg transition-all",
                      isSubmitting
                        ? "bg-[#064e3b]/70 text-white cursor-not-allowed"
                        : "bg-[#064e3b] text-white hover:bg-[#053f30] hover:shadow-lg"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-[#d1fae5] rounded-xl text-[#064e3b]">
                      <CheckCircle size={24} />
                      <div>
                        <p className="font-semibold">¡Mensaje enviado!</p>
                        <p className="text-sm">Te responderemos a la brevedad.</p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 relative">
  <iframe
    src="https://www.google.com/maps?q=General+Deheza+342+C%C3%B3rdoba&output=embed"
    className="absolute inset-0 w-full h-full"
    style={{ border: 0 }}
    loading="lazy"
  ></iframe>

  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center">
      <MapPin className="mx-auto text-[#10b981] mb-4" size={48} />
      <p className="text-[#064e3b] font-semibold text-lg">General Deheza 342</p>
      <p className="text-muted-foreground">Córdoba Capital, Argentina</p>
    </div>
  </div>
</section>
    </>
  );
}
