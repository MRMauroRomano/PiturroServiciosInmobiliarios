export interface Property {
  id: number;
  name: string;
  type: 'casa' | 'departamento' | 'terreno';
  operation: 'venta' | 'alquiler'; // 👈 CLAVE
  price?: number;
  rentPrice?: number;
  expenses?: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  featured: boolean;
  images: string[];
}
export const properties: Property[] = [
  {
    id: 1,
    name: "Casa familiar con Garage",
    type: "casa",
    operation: 'venta',
    price: 90000,
    location: "Colectora Este 333, Justiniano Posse",
    bedrooms: 2,
    bathrooms: 1,
    area: 700,
    description: "Espaciosa casa familiar ideal para familias grandes. Cuenta con amplios jardines y múltiples áreas de entretenimiento.",
    featured: true,
    images: [
      "/images/propiedades/CASA-2.png"
      
    ]
  },
  
  {
    id: 3,
    name: "Casa familiar con Garage",
    type: "casa",
     operation: 'venta',
    price: 34000,
    location: "Dean Funes 631, Justiniano Posse",
    bedrooms: 1,
    bathrooms: 1,
    area: 100,
    description:  "Casa familiar ubicada en excelente ubicación, cuenta con doble garage y patio amplio.",
    featured: true,
    images: [
      "/images/propiedades/CASA 5 (1).png"
    ]
  },
  {
    id: 4,
    name: "Casa Familiar con Local Comercial",
    type: "casa",
     operation: 'venta',
    price: 140000,
    location: "9 de Julio 459, Justiniano Posse",
    bedrooms: 2,
    bathrooms: 1,
    area: 625,
    description: "Casa familiar con excelente ubicación y patio, con local comercial c/baño y excelente ubicación. Ideal para familias grandes.",
    featured: true,
    images: [
      "/images/propiedades/CASA 6 (1).png"
    ]
  },
 
  {
    id: 7,
    name: "Casa familair con Piscina",
    type: "casa",
     operation: 'venta',
    price: 170000,
    location: "San Lorenzo, Esq. Walter Luján, Luque",
    bedrooms: 3,
    bathrooms: 2,
    area: 500,
    description: "Casa familiar con amplio patio y piscina, Ideal para familias grandes, cuenta con quincho y patio espacioso.",
    featured: true,
    images: [
      "/images/propiedades/oliva.png"
    ]
  },
  {
    id: 8,
    name: "Casa Familiar en Zona Urbana",
    type: "casa",
     operation: 'venta',
    price: 120000,
    location: "Armengol Tecera 261 (barrio alberdi), Córdoba Capital",
    bedrooms: 4,
    bathrooms: 2,
    area: 500,
    description: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande.",
    featured: false,
    images: [
      "/images/propiedades/CASA 10.png"
    ]
  },
 
   {
    id: 12,
    name: "Terreno en Venta",
    type: "terreno",
     operation: 'venta',
    price: 58000,
    location: "Belgrano 683 - Justiniano Posse",
    bedrooms: 0,
    bathrooms: 0,
    area: 825,
    description: "El terrreno cuenta con servicios y con escritura en mano.",
    featured: true,
    images: [
      "/images/propiedades/terreno.png",
      "/images/propiedades/terreno65mil 2.jpg",
      "/images/propiedades/terreno65mil 3.jpg",
      "/images/propiedades/terreno65mil4.jpg",
      
    ]
  },
   {
    id: 13,
    name: "Terrenos en Venta",
    type: "terreno",
     operation: 'venta',
    price: 50000,
    location: "Raúl Alfonsin, Juan Manuel de Rosas - Justiniano Posse",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    description: "Lote dividido en 3, ubicado en una zona muy tranquila, a metros de rotonda principal y colectora. Cada terreno cuenta con servicios, escritura en mano",
    featured: true,
    images: [
      "/images/propiedades/terrenox31.png",
        "/images/propiedades/terrenox32.png",
          "/images/propiedades/terrenox33.png",
            
    ]
  },
  
   {
    id: 15,
    name: "Departamento En Venta B° Jardín",
    type: "departamento",
     operation: 'venta',
    price: 47000,
    location: "Rimini 829 Barrio Jardín Hipodromo - Córdoba Capital",
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    description: "este hermoso departamento ubicado sobre calle Rimini 829, a metros de Circunvalación y Shopping Paseo del Jockey. El mismo posee acceso por escalera y cuenta con 2 dormitorios, baño completo, living, comedor y cocina integrada con lavadero. Excelente oportunidad de inversión!!!! Apto Crédito Hipotecario!!!!",
    featured: true,
    images: [
      "/images/propiedades/depto-1.jpg",
       "/images/propiedades/depto-2.jpg",
        "/images/propiedades/depto-3.jpg",
         "/images/propiedades/depto-4.jpg",
          "/images/propiedades/depto 5.jpg",
           "/images/propiedades/depto 6.jpg",
            "/images/propiedades/depto 7.jpg",
    ]
  },
  {
    id: 17,
    name: "Casa Familiar",
    type: "casa",
     operation: 'venta',
    price: 49000,
    location: "Pasaje 1 de Marzo de 1911, Justiniano Posse",
    bedrooms: 3,
    bathrooms: 1,
    area: 269,
    description: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande. Superficie cubierta 92m2, patio, cocina, comedor, living. garaje, lavadero",
    featured: true,
    images: [
      "/images/propiedades/casa pasaje.jpg",
    
    ]
  },
   {
    id: 18,
    name: "Casa Familiar con Amplio Patio",
    type: "casa",
     operation: 'venta',
    price: 90000,
    location: "Av. Tablada 747 , Justiniano Posse",
    bedrooms: 2,
    bathrooms: 1,
    area: 606,
    description: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande. Superficie cubierta 129m2, patios, cocina, comedor, caraje, living, lavadero",
    featured: true,
    images: [
      "/images/propiedades/casa tablada.jpg",
      
    ]
  },
 
  {
    id: 20,
    name: "Local Comercial Ideal para Emprendimiento",
    type: "casa",
     operation: 'venta',
    price: 28000,
    location: "9 de Julio 246 - Córdoba Capital",
    bedrooms: 0,
    bathrooms: 0,
    area: 26,
    description: "LOCAL COMERCIAL SOBRE CALLE 9 DE JULIO, GALERIA SHOPPING CENTER PLANETA. MEDIDAS 3,5M DE FRENTE X 3,5M DE FONDO, CON COCHERA Y VIGILANCIA.",
    featured: true,
    images: [
      "/images/propiedades/local-comercial-1.jpg",
      "/images/propiedades/local-comercial-3.jpg",
      "/images/propiedades/local-comercial-4.jpg",
      "/images/propiedades/local-comercial-5.jpg",
      
    ]
  },
  {
    id: 21,
    name: "Lotes en Venta Potrero de Garay",
    type: "terreno",
     operation: 'venta',
    price: 18000,
    location: "Potrero de Garay - Prov. Córdoba",
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    description: "LOCALIZADO EN UNA ZONA TRANQUILA Y CON GRANDES VISTAS. CUENTA CONX50), SERVICIOS DE AGUA POTABLE Y ENERGIA ELECTRICA. POSEE ESCRITURA.",
    featured: true,
    images: [
      "/images/propiedades/potrero1.jpg",
      "/images/propiedades/potrero2.jpg",
      "/images/propiedades/potrero3.jpg",
      "/images/propiedades/potrero4.jpg",
      
    ]
  },
  {
    id: 22,
    name: "Lotes en Venta Barrio Privado",
    type: "terreno",
     operation: 'venta',
    price: 18000,
    location: "Potrero de Garay, camino a San Clemente",
    bedrooms: 0,
    bathrooms: 0,
    area: 3000,
    description: "LOCALIZADO EN UNA ZONA TRANQUILA Y CON GRANDES VISTAS, BARRIO PRIVADO, EXPENSAS ECONÓMICAS,SERVICIOS DE ENERGIA ELECTRICA, AGUA POTABLE Y SEGURIDAD 24HS, AMENITIES: RESTAURANTE, PISCINA, ETC",
    featured: true,
    images: [
      "/images/propiedades/terreno-1.jpg",
      "/images/propiedades/terreno-2.jpg",
      "/images/propiedades/terreno-3.jpg",
      "/images/propiedades/terreno-4.jpg",
      "/images/propiedades/terreno-5.jpg",
      "/images/propiedades/terreno-6.jpg",
      
    ]
  },
   {
    id: 23,
    name: "Departamento en Ciudad de Cosquin",
    type: "departamento",
     operation: 'venta',
    price: 35000,
    location: "Corriente 674 - Cosquín, Córdoba",
    bedrooms: 2,
    bathrooms: 2,
    area: 65,
    description: "Cuenta con 2 habitaciones amplias y luminosas, living, comedor, cocina separada, balcon con vista a las montañas, patio con lavadero, terraza de 64m2 con asador. A solo una cuadra de la Plaza Prospero Molinna",
    featured: true,
    images: [
      "/images/propiedades/dpto cosquin 1.webp",
      "/images/propiedades/dpto cosquin 2.webp",
      "/images/propiedades/dpto cosquin 3.webp",
      "/images/propiedades/dpto cosquin 4.webp",
      "/images/propiedades/dpto cosquin 5.webp",
      "/images/propiedades/dpto cosquin 6.webp",
      "/images/propiedades/dpto cosquin 7.webp",
      
      
    ]
  },
 {
    id: 24,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
     operation: 'venta',
    price: 70000,
    location: "Independencia 368 - Nueva Córdoba",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE INDEPENDENCIA 368 ENTRE CALLES CORRIENTES Y BV ILLIA. CUENTA CON UN DORMITORIO. COCINA SEPARADA, AMPLIO LIVING COMEDOR CON ACCESO A BALCON. ESCRITURA.",
    featured: true,
    images: [
      "/images/propiedades/dpto independencia 1.webp",
      "/images/propiedades/dpto independencia 2.webp",
      "/images/propiedades/dpto independencia 3.webp",
      "/images/propiedades/dpto independencia 4.webp",
      
      
      
    ]
  },
  {
    id: 25,
    name: "Casa Comercial / Residencial",
    type: "casa",
    operation: 'alquiler',
    rentPrice: 1500000,
    expenses: 0,
    location: "Pasaje Scabuzzo 35 - Centro de Córdoba",
    bedrooms: 9,
    bathrooms: 5,
    area: 600,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE PASAJE SCABUZZO 35. ENTRE CALLES SARMIENTO Y ONCATIVO. LA MISMA CUENTA CON DOS PLANTAS. PLANTA BAJA: 5 DORMITORIOS, 3 BAÑOS Y COCINA. PLANTA ALTA: TERRAZA. 4 DORMITORIOS, 2 BAÑOS Y COCINA COMPLETA. DESTINO USO RESIDENCIAL O COMERCIAL.",
    featured: true,
    images: [
      "/images/propiedades/casa grande 1.webp",
      "/images/propiedades/casa grande 2.webp",
      "/images/propiedades/casa grande 3.webp",
      "/images/propiedades/casa grande 4.webp",
      "/images/propiedades/casa grande 5.webp",
      "/images/propiedades/casa grande 6.webp",
      "/images/propiedades/casa grande 7.webp",
      "/images/propiedades/casa grande 8.webp",
      "/images/propiedades/casa grande 9.webp",
      "/images/propiedades/casa grande 10.webp",
      "/images/propiedades/casa grande 11.webp",
      "/images/propiedades/casa grande 12.webp",
      
      
      
    ]
  },

   {
    id: 26,
    name: "Departamento en Barrio Guemes",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 550000,
    expenses:120000,
    location: "Marcelo T Alvear 940 - Córdoba Capital",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE DEPARTAMENTO EN ALQUILER: UBICADO EN CALLE MARCELO T ALVEAR 940, BARRIO GUEMESFRENTE A LA CAÑADA, CON UN INGRESO DE DOBLE PUERTA CON MAGNETICOS, EL EDIFICIO CUENTA CON CAMARAS DE SEGURIDAD Y ASCENSORES DE ULTIMA GENERACION. EL INMUEBLE ESTA EN EL PISO 6 CUENTA CON UNA COCINA COMEDOR MUY AMPLIO Y LUMINOSO ,UN BAÑO, UN DORMITORIO AMPLIO, BALCON QUE DA VISTA AL FRENTE DE LA CAÑADA.REQUISITOS: 3 GARANTES CON RECIBO DE SUELDO, GARANTIA PROPIETARIA O CERTIFICACION DE INGRESOS.",
    featured: true,
    images: [
      "/images/propiedades/dpto t 1.webp",
      "/images/propiedades/dpto t 2.webp",
      "/images/propiedades/dpto t 3.webp",
      "/images/propiedades/dpto t 4.webp",
      "/images/propiedades/dpto t 5.webp",
      "/images/propiedades/dpto t 6.webp",
      "/images/propiedades/dpto t 7.webp",
      "/images/propiedades/dpto t 8.webp",
      
      
      
      
    ]
  },

   {
    id: 27,
    name: "Casa a demoler en San Vicente",
    type: "casa",
     operation: 'venta',
    price: 45000,
    location: "LEON 1495 Bº San Vicente - Córdoba Capital",
    bedrooms: 2,
    bathrooms: 2,
    area: 169,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE LEON ESQUINA ZARAGOZA. EXCELENTE ESQUINA CON FINES COMERCIALES, A METROS DE AV. REVOLUCION DE MAYO E INSTITUTO NUESTRA SEÑORA DEL SAGRADO CORAZON. EXCELENTE OPORTUNIDAD DE INVERSION!!!",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-db14e427-afb4-4259-b111-6f8473794d15.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-3f622503-9da9-4d53-90a4-002e4c58481e.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-b5daf8ad-bd52-4a31-9ab3-074b72e24fd9.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-81989c8f-38f7-40c9-ac9f-122595baf41d.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-176c1a8b-c9de-49f9-b67a-364506976ab7.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-ead1d6be-ea8b-4f0f-9c62-ffe3162c5248.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-d73f60e3-5c95-4a84-a9bd-5733425312b3.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-9f3715f6-ed89-4471-9c2d-a778a14cc8d1.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-5b962cb2-9e30-42d6-afee-b6cd4ee11b49.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-f13d185f-ef11-4479-ae9d-769dca554230.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-a833448f-d6f1-4823-a688-e1cf731d521f.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-cd64b560-7522-4a0e-b38e-7dde9db907a9.webp",
      
      
      
      
    ]
  },

   {
    id: 28,
    name: "Terreno en Alta Gracia",
    type: "terreno",
     operation: 'venta',
    price: 20000,
    location: "Los Alerces 100 - Alta Gracia , Córdoba ",
    bedrooms: 0,
    bathrooms: 0,
    area: 360,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO EN LA CIUDAD DE ALTA GRACIA CAMINO A FALDA DEL CARMEN. EL MISMO ESTA UBICADO EN EL BARRIO TRES GRACIAS. CUENTA CON 12 X 30 Y TODOS SUS SERVICIOS DE ENERGIA ELECTRICA, AGUA POTABLE, CORDON CUNETA, ASFALTO.",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-0b63c8d2-2b6c-4fba-a133-85401395c15a.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-6144c8b0-6915-4c57-89c1-5f20acf268d3.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-226ac49a-d0cc-4798-910c-bd9edf1cc465.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-65eb0662-17c5-4057-9bfc-a052ea6db192.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-3b3d31b0-f3cc-47f8-8c69-539bd5b7a443.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-a1346a0b-a78a-471a-a722-5322ec248911.webp",
      
      
      
      
      
    ]
  },

  {
    id: 29,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 720000,
    expenses: 120000,
    location: "PASAJE CARLUCCI 63 - Nueva Córdoba",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE PASAJE CARLUCCI N°63, PLANTA BAJA, A METROS DE ESTRADA, B° NUEVA CORDOBA. POSEE UN DORMITORIO, COCINA SEPARADA, BAÑO COMPLETO CON BAÑERA. LIVING COMEDOR MUY AMPLIO CON PATIO. ADEMAS POSEE PATIO EXCLUSIVO CON QUINCHO Y ASADOR. REQUISITOS: 3 GARANTES CON RECIBO DE SUELDO O BIEN 2 GARANTES Y 1 GARANTIA PROPIETARIA.ALQUILER: $720000.-EXPENSAS: $120000 APROX. .",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-1f2c56c8-a82f-4dd2-bb9b-7b9d23adae14.webp",
     "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-073fdc5c-e92f-4134-acab-5aa4614814d3.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-ec243ca5-19a6-48fc-b6fc-f3db3cbf8f90.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-1f2c56c8-a82f-4dd2-bb9b-7b9d23adae14.webp",
        "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-82bb4eff-661e-44eb-a76e-615e6f46d3a5.webp", 
         "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-26a10faf-7ed0-4dc1-9867-9185d945963b.webp",

         "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-8b43f573-a084-407a-a2b8-3ebcb1ee1dc0.webp",

         "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-b82789af-e003-43e5-9c54-d3508c852a51.webp",
      
      
      
      
      
    ]
  },
  
  {
    id: 30,
    name: "Galpón a metros de Av. Patria",
    type: "terreno",
     operation: 'venta',
    price: 85000,
    location: "Charcas 2113 Bº Pueyrredon - Córdoba Capital",
    bedrooms: 2,
    bathrooms: 2,
    area: 315,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EXCELENTE GALPON UBICADO A METROS DE AV. PATRIA. CUENTA CON 200 M2 CUBIERTOS - 100 M2 DESCUBIERTOS, OFICINA, CON COCINA MAS DOS CUARTOS, BAÑOS, LUZ TRIFASICA, PERSIANA DE ENROLLAR METALICA AUTOMATICA.",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_galpon/4253601/inmuebles-galpon-alquileres-4253601-32938f77-6073-4a1c-b167-07662f02db9f.webp",
     "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350239.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350240.webp",
       "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350241.webp",
        "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inhttps://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350242.webp", 
         "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350243.webp",

         "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350244.webp",

         "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350245.webp",
      
      
      
      
      
    ]
  },



  {
    id: 32,
    name: "Departamento en Carlos Paz",
    type: "departamento",
     operation: 'venta',
    price: 105000,
    location: "Juan B. Justo 210 - Villa Carlos Paz",
    bedrooms: 2,
    bathrooms: 2,
    area: 90,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO EN VILLA CARLOS PAZ!!! 2 DORMITORIOS, 2 BAÑOS, COCHERA, AMENITIES CINE, GYM, ASADORES,!!!! EXCELENTE OPORTUNIDAD.",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-19080632-c6bc-4402-90aa-4b8583207c8e.webp",
     "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-e70b9e35-22b5-4f4b-a93d-0ec30c4df915.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-0ef19b16-5db6-434d-b61a-f89fab555fcf.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-e333d565-cb09-4eaf-b9e4-480742446e12.webp",
        "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-2f0837e0-00ee-48f8-a410-0a0a89630a9f.webp", 
         "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-006da610-130d-45de-9be9-6f638a78acd0.webp",

         "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-c99c55cc-a62a-4f9a-9ada-a3cba191bb21.webp",

         "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-cf8ea92f-5362-40b5-97d4-8a1e9df9a645.webp",
      
      
      
      
      
    ]
  },

  
  {
    id: 33,
    name: "Departamento en Barrio Alberdi",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 550000, // 👈 solo alquiler
    expenses: 85000,
    location: "La Rioja 1092, Barrio Alberdi - Córdoba Capital",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    description: " MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE LA RIOJA. CUENTA CON UN DORMITORIO CON PLACARD, BAÑO COMPLETO, BALCON, COCINA COMEDOR CON MUEBLES BAJO MESADA, ALACENAS Y BARRA. HERMOSO POR DONDE LO MIRES!!!!",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-fe0af458-0e58-44ea-bbe4-ecc5351d1a6d.webp",
     "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-f32a7a2e-3aaa-4edc-8761-fd1e86e1313e.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-d1bd3b6d-eda6-41d2-b6df-18ad1aba406c.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-b78e43c0-e8b3-42e9-8869-3406e60845ed.webp",
        "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-3516ca05-5998-4670-b873-57aa7579ed62.webp", 
         "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-91501d40-7cf8-43ed-a862-4f35a9e02773.webpp",

         "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-06f7f1a1-9888-4683-b8fd-325889e9bf06.webp",

         "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-8b3050b4-3523-4972-8be8-10390775e176.webp",
      
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-679b85ab-7608-49fb-8300-64ecb70258e7.webp"
      
      
      
    ]
  },

  {
    id: 34,
    name: "Departamento Monoambiente",
    type: "departamento",
    operation: 'alquiler',
    rentPrice:400000,
    expenses: 25980,
    location: "CALAZANS 381 - Córdoba Capital",
    bedrooms: 0,
    bathrooms: 1,
    area: 24,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS ESTE PRESENTA ESTE HERMOSO MONOAMBIENTE. COCINA ZONIFICADA, MUY LUMINOSOS Y EN UNA PERFECTA UBICACION CENTRICA.",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4945863/inmuebles-departamento-alquileres-4945863-8d13df48-8c71-45a5-8b51-2ca67113cda9.webp",
     "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4945863/inmuebles-departamento-alquileres-4945863-d090bfa2-28d0-4f6d-9f0b-b7159e4cc568.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4945863/inmuebles-departamento-alquileres-4945863-49b8dadf-14dc-4542-8ed1-36d070718915.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4945863/inmuebles-departamento-alquileres-4945863-1e1d8ad4-48f5-4d45-931d-6a6a6a1de908.webp",
        
      
      
      
    ]
  },

  {
    id: 35,
    name: "Departamento B° Gral Paz c/cochera",
    type: "departamento",
     operation: 'venta',
    price: 85000,
    location: "CATAMARCA 1052 - Córdoba Capital",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description: " MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE PARA LA VENTA UBICADO SOBRE CALLE CATAMARCA 1052. CUENTA CON UN DORMITORIO CON PLACARD, ANTE BAÑO Y BAÑO. AMPLIO LIVING COMEDOR CON SALIDA BALCON. COCINA INTEGRADA AMOBLADA. COCHERA CUBIERTA CON CONTROL AUTOMATICO DE INGRESO. HERMOSA OPORTUNIDAD DE COMPRA!!!",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-c0306018-6152-480f-a583-1b6b932e5790.webp",
     "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-153b46ee-40f2-4df8-9f62-865e178087f4.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-161963d7-0be0-4836-84d3-551d52b2ebd1.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-24989aba-a870-44a1-8dda-93033275440f.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-4a41949d-ce25-405a-8a84-9f0f46550961.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-6ea9ae2d-f0fa-4753-9439-40479d44827e.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-c6d82f24-a573-4b29-b05b-5b6f971a397c.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-667ef824-e6ed-46ed-ab37-712af46b9e69.webp",
        
      
      
      
    ]
  },

  {
    id: 36,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
     operation: 'venta',
    price: 75000,
    location: "Paraná 353 - Córdoba Capital",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description: " MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE DEPARTAMENTO UBICADO SOBRE CALLE PARANA 353. CUENTA CON 1 DORMITORIO, BALCON, PISCINA, QUINCHO CON ASADORES Y POSIBILIDAD DE ADQUIRIR COCHERA TAMBIEN DENTRO DEL EDIFICIO.",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento--5140269.webp",
     "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento--5140271.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158070.webp",
       "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158064.webp",
       "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158065.webp",
       "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158065.webp",
       "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158067.webp",
       "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158068.webp",
       "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158071.webp",
       "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158072.webp",
       "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158073.webp",
        
      
      
      
    ]
  },

  {
    id: 37,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
     operation: 'venta',
    price: 85000,
    location: "Obispo Salguero 599 - Córdoba Capital",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS  EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE OBISPO SALGUERO ESQUINA SAN LORENZO, BARRIO NUEVA CBA!! CUENTA CON 1 DORMITORIO CON PLACARD EMPOTRADO, RADIADORES, PUERTA VENTANA CON SALIDA A BALCON. LIVING COMEDOR AMPLIO CON SALIDA A BALCON. COCINA INTEGRADA. BAÑO COMPLETO. CALDERA CON RADIADORES EN TODOS SUS AMBIENTES. INMEJORABLE OPORTUNIDAD!!!",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-bf0846fc-ee17-4be3-bffe-1f6c245bf47e.webp",
     "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-ac778aa7-9d4a-4a8b-aa05-b0e874bfcb14.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-4eedbc11-d322-4f07-a28e-403f80d0df83.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-cef32904-84f3-4a9f-8ae1-800a784a5a9f.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-1553ba37-1c1a-40f7-a5a9-bb6603baee9a.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-a8db0d5f-e5a7-4811-8347-2c40c370feba.webp",
       
        
      
      
      
    ]
  },

   {
    id: 38,
    name: "Departamento en Complejo Cerrado",
    type: "departamento",
     operation: 'venta',
    price: 55000,
    location: "Av. Monseñor Pablo Cabrera 1980 - Córdoba Capital",
    bedrooms: 3,
    bathrooms: 1,
    area: 70,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE: DEPARTAMENTO UBICADO SOBRE AV. MONSEÑOR PABLO CABRERA 1980, LOMAS DE SAN MARTIN. CUENTA CON 3 DORMITORIOS CON PLACARES, AIRE ACONDICIONADOS Y PERSIANAS DE ENROLLAR. BAÑO COMPLETO. ANTE BAÑO. COCINA SEPARADA CON MUEBLES BAJO MESADA Y ALACENAS. ESPACIO PARA LAVARROPAS. AMPLIO LIVING COMEDOR CON AIRE ACONDICIONADO. APTO A CREDITO!!!!",
    featured: true,
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-18be141f-8495-4cba-9bf6-8bd97b69a4ee.webp",
     "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-0d3db1b4-05bf-43ca-9c12-43cb4f19e719.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-f0e4becd-b070-4c81-b90b-5b41e619b68c.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-b67c77a6-8be9-4319-af98-a1a9e1b42980.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-c6b311a7-6bab-47ed-a63d-ba691a28e51b.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-1ee56bca-fb74-4dd9-8b57-6ad4ee403afc.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-1ee56bca-fb74-4dd9-8b57-6ad4ee403afc.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-f377e4f1-ff9a-4e59-b458-2804e0184300.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-1d464c48-d0be-47a5-a3ec-b9d05e5fda55.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-63d24f4b-3056-4890-b729-9c83dd8304ee.webp",
       "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-805623d9-4bc4-4370-add9-2f9b64b04f02.webp",
       
        
      
      
      
    ]
  },

   {
    id: 39,
    name: "Casa Familiar en Venta",
    type: "casa",
     operation: 'venta',
    price: 55000,
    location: "Santa Fe 414 - Luque",
    bedrooms: 2,
    bathrooms: 1,
    area: 480,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE: DEPARTAMENTO UBICADO SOBRE LA CALLE SANTA FE EN LUQUE, CÓRDOBA, CUENTA CON 2 HABITACIONES, 1 BAÑO, COCINA Y COMEDOR, 2 GARAGE, QUINCHO Y DOBLE ACCESO",
    featured: true,
    images: [
      "/images/propiedades/santa fe luque.jpeg",
     
       
        
      
      
      
    ]
  },
];

export const WHATSAPP_NUMBER = "5493512345678";

 export function formatPrice(property: Property): string {
  if (property.operation === 'venta') {
    return `USD ${property.price?.toLocaleString()}`;
  }

  if (property.operation === 'alquiler') {
    return `$${property.rentPrice?.toLocaleString()}`;
  }

  return '';
}

export function getWhatsAppLink(propertyName: string): string {
  const message = encodeURIComponent(`Hola, quiero consultar por la propiedad: ${propertyName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
