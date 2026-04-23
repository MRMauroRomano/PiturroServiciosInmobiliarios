import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Heart, Award, Users, TrendingUp, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Matías Piturro",
    role: "Director General",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    description: "Más de 15 años de experiencia en el mercado inmobiliario de Córdoba.",
  },
  
];

const values = [
  {
    icon: Heart,
    title: "Compromiso",
    description: "Nos comprometemos con cada cliente para encontrar la propiedad perfecta.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Buscamos la excelencia en cada transacción y servicio que brindamos.",
  },
  {
    icon: Users,
    title: "Confianza",
    description: "Construimos relaciones duraderas basadas en la confianza y transparencia.",
  },
  {
    icon: TrendingUp,
    title: "Resultados",
    description: "Nos enfocamos en conseguir los mejores resultados para nuestros clientes.",
  },
];

export default function AboutPage() {
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
            Sobre Nosotros
          </h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Conocé la historia y el equipo detrás de Matías Piturro Servicios Inmobiliarios
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#10b981] font-semibold mb-4 block">Nuestra Historia</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-6 text-balance">
                Donde tus sueños toman forma
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p> 🏠El mercado inmobiliario cambió, y la forma de atenderte también. </p>
                 <p>   ¡Hola! Soy Matias Piturro, Martillero Público y Corredor Inmobiliario CPI7831, la cara visible detrás de este proyecto. <br /> Me dedico a la gestión inmobiliaria integral porque es lo que me apasiona y entiendo que en cada inversión, hay un proyecto de vida o sueño que cumplir.
Mi objetivo es acompañarte durante todo el proceso para que vos te enfoques en disfrutar de los resultados. Me especializo en: </p>
<p>
✅ Alquileres y ventas de casas y departamentos. <br />
✅ Locales comerciales estratégicos para tu marca. <br />
✅ Terrenos en diferentes puntos para que puedas disfrutar o iniciar tu proyecto. <br />
✅ Gestión y asesoramiento de inicio a fin. <br />
Inauguro este espacio para compartir no sólo propiedades, sino consejos y actualidades del rubro, para que tu inversión y sueños tomen forma.
¿Estás buscando alquilar, vender o comprar? Escríbeme un mensaje directo o hacé clic en el link de mi biografía para conocer tu sueño a cumplir.
</p> 

                
                
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Oficina de Matías Piturro Servicios Inmobiliarios"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#10b981] text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-white/90">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-[#d1fae5] rounded-xl flex items-center justify-center mb-6">
                <Target className="text-[#064e3b]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#064e3b] mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Facilitar el proceso de compra, venta y alquiler de propiedades, brindando un servicio de excelencia que supere las expectativas de nuestros clientes. Nos comprometemos a guiar a cada persona en cada paso del camino, asegurando transparencia, profesionalismo y resultados.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-[#d1fae5] rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-[#064e3b]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#064e3b] mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la inmobiliaria líder en Córdoba, reconocida por nuestra integridad, innovación y compromiso con la satisfacción del cliente. Aspiramos a ser el primer referente cuando alguien piense en bienes raíces, creando relaciones duraderas basadas en la confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#10b981] font-semibold mb-4 block">Nuestros Valores</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4 text-balance">
              Lo que nos define
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Estos son los pilares que guían cada una de nuestras acciones y decisiones
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-white border border-border hover:shadow-lg hover:border-[#10b981] transition-all group"
              >
                <div className="w-16 h-16 bg-[#d1fae5] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#10b981] transition-colors">
                  <value.icon className="text-[#064e3b] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#064e3b] mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#10b981] font-semibold mb-4 block">Nuestro Equipo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#064e3b] mb-4 text-balance">
              Profesionales a tu servicio
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Un equipo comprometido con brindarte la mejor experiencia inmobiliaria
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-[#064e3b]">{member.name}</h3>
                  <p className="text-[#10b981] text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#064e3b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            ¿Listo para encontrar tu propiedad ideal?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Nuestro equipo está preparado para ayudarte en cada paso del camino
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/propiedades"
              className="inline-flex items-center justify-center gap-2 bg-[#10b981] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#059669] transition-all hover:shadow-xl"
            >
              Ver Propiedades
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
