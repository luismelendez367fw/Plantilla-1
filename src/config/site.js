/**
 * ARCHIVO DE CONFIGURACION CENTRAL
 * Luis Melendez · Wellness & Fullness
 */

export const siteConfig = {
  name: "Luis Meléndez",
  tagline: "wellness & fullness",
  description:
    "Coach y Terapeuta Corporal en Chihuahua. Cursos, talleres y terapias de inteligencia emocional para sanar el cuerpo gestionando las emociones.",

  brand: {
    dividerImage: "/brand/lm_elementos-10.png",
  },

  hero: {
    backgroundImage:
      "/encabezado/textura-degradado-abstracto-luces-suaves-cosmicas.jpg",
    brandingImage: "/encabezado/lm_elementos-01.png",
    ctaPanelImage: "/encabezado/espalda.jpg",
    subtitle:
      "Coach y Terapeuta Corporal en Chihuahua - Terapia individual, cursos y talleres de salud física y sanación integral desde la inteligencia emocional.",
    ctaPrimary: "Reserva tu lugar",
    ctaSecondary: "Conoce los servicios",
    ctaPrimaryUrl: "#booking",
    ctaSecondaryUrl: "#features",
  },

  about: {
    heading: "Quién soy",
    subheading: "Cuerpo, emoción y presencia sagrada",
    image: "/sobre mi/uno-8.jpg",
    paragraphs: [
      "Soy Luis Meléndez, coach y terapeuta corporal. Acompaño a personas que cargan estrés, fatiga o malestar en el cuerpo a encontrar un camino de sanación que no separa lo emocional de lo físico.",
      "Mi trabajo nace de la convicción de que el cuerpo guarda la memoria de lo que la mente no puede decir. A través de la inteligencia emocional, el movimiento consciente y espacios de ritual contemporáneo, abrimos puertas hacia el descanso, la confianza y la plenitud.",
      "En Chihuahua ofrezco terapias individuales, talleres grupales y cursos — algunos también en línea — para quienes buscan una alternativa profunda, intensa y humana, lejos de la frialdad clínica y del wellness superficial.",
    ],
  },

  features: {
    heading: "Servicios",
    subheading:
      "Terapias, talleres y cursos diseñados para que tu cuerpo respire y tu alma encuentre silencio.",
    iconImage: "/brand/lm_elementos-09.png",
    items: [
      {
        title: "Terapias Individuales",
        description:
          "Sesiones uno a uno de terapia corporal e inteligencia emocional. Un espacio seguro, intenso y confidencial para liberar tensiones y reconectar contigo.",
      },
      {
        title: "Talleres Grupales",
        description:
          "Experiencias colectivas en Chihuahua donde el cuerpo, el grupo y el ritual se encuentran. Ideal para procesos de estrés, duelo o transición.",
      },
      {
        title: "Cursos Online",
        description:
          "Formación a distancia en inteligencia emocional y sanación corporal. Aprende a tu ritmo con acompañamiento directo.",
      },
    ],
  },

  brandGallery: {
    items: [
      {
        src: "/brand/post1-07.png",
        alt: "Wellness — terapia corporal",
      },
      {
        src: "/brand/post1-08.png",
        alt: "Tu cuerpo es un canal de trascendencia",
      },
      {
        src: "/brand/post1-01.png",
        alt: "Mueve tu cuerpo, sana tu alma",
      },
    ],
  },

  pricing: {
    heading: "Tu inversión",
    subheading:
      "Elige el camino que resuene contigo. Cada nivel es una puerta hacia mayor presencia y bienestar.",
    priceLabel: "Inversión",
    plans: [
      {
        name: "Masaje para el Alma",
        price: "$1,250",
        period: " MXN",
        description: "Terapia de Salud integral personalizada",
        features: [
          "Sesión de 90 minutos",
          "Evaluación corporal inicial",
          "Seguimiento por mensaje",
          "Atiende cuerpo, emoción, mente y alma.",
        ],
        cta: "Reservar sesión",
        highlighted: false,
      },
      {
        name: "Masaje Relajante",
        price: "$800",
        period: " MXN",
        description: "Descanso, disfrute y bienestar",
        features: [
          "Sesión de 60 minutos",
          "Cuerpo completo",
          "Musicoterapia y Aromaterapia",
          "Relajación total",
        ],
        cta: "Inscribirme",
        highlighted: true,
      },
      {
        name: "Talleres Online",
        price: "$500",
        period: " MXN",
        priceLabel: "Anticipo",
        description: "Sanación profunda y aprendizaje.",
        features: [
          "Acceso a módulos en video",
          "Seguimiento personalizado",
          "Sesión individual personalizada",
        ],
        cta: "Comenzar curso",
        highlighted: false,
      },
    ],
  },

  events: {
    heading: "Calendario de eventos",
    subheading: "Encuentros, talleres y ceremonias del año",
    items: [
      {
        day: "15",
        month: "MAR",
        title: "Ritual de equinoccio corporal",
        description:
          "Taller de un día para soltar el invierno emocional y abrir el cuerpo a la luz del nuevo ciclo.",
        cta: "Inscribirme",
        ctaUrl: "#contact",
      },
      {
        day: "22",
        month: "ABR",
        title: "Inteligencia emocional y descanso",
        description:
          "Sesión grupal para quienes viven con fatiga crónica o insomnio emocional.",
        cta: "Reservar lugar",
        ctaUrl: "#contact",
      },
      {
        day: "10",
        month: "JUN",
        title: "Cuerpo sagrado · retiro de fin de semana",
        description:
          "Dos días de inmersión en Chihuahua: movimiento, silencio y terapia grupal.",
        cta: "Más información",
        ctaUrl: "#contact",
      },
    ],
  },

  store: {
    heading: "Tienda",
    subheading: "Artículos especiales para tu ritual personal",
    items: [
      {
        name: "Aceite ritual de copal",
        description:
          "Mezcla artesanal para masaje y ceremonia. Notas cálidas, textura sedosa.",
        price: "$450 MXN",
        cta: "Pedir por WhatsApp",
        ctaUrl: "https://wa.me/message/CJ5JMAVYULOWK1",
        imageGradient: "from-teal-dark to-carbon",
      },
      {
        name: "Vela de presencia",
        description:
          "Cera natural con esencia de sándalo. Para espacios de meditación y descanso.",
        price: "$280 MXN",
        cta: "Pedir por WhatsApp",
        ctaUrl: "https://wa.me/message/CJ5JMAVYULOWK1",
        imageGradient: "from-crimson/40 to-carbon",
      },
      {
        name: "Cuaderno de cuerpo y alma",
        description:
          "Diario guiado para registrar emociones, sensaciones y rituales diarios.",
        price: "$320 MXN",
        cta: "Pedir por WhatsApp",
        ctaUrl: "https://wa.me/message/CJ5JMAVYULOWK1",
        imageGradient: "from-orange/30 to-teal-dark",
      },
    ],
  },

  booking: {
    heading: "Reserva tu cita",
    subheading:
      "Agenda tu sesión o taller y asegura tu lugar con un anticipo. Tu cuerpo ya sabe que es momento.",
    schedulingCta: "Ver disponibilidad",
    schedulingUrl: "https://calendar.app.google/Sx3izVd9wZYsSHax9",
    depositNote: "Anticipo requerido para confirmar tu reserva",
  },

  testimonials: {
    heading: "Testimonios",
    subheading: "Voces de quienes han caminado este proceso",
    items: [
      {
        name: "Mary T.",
        text: "Desde que vengo aquí he aprendido muchas cosas, por eso cada que puedo vengo a cursos, meditaciones porque me han ayudado mucho en conocerme a mí misma.",
        role: "Cursos y Talleres",
      },
      {
        name: "Carlos R.",
        text: "El taller grupal fue un antes y un después. El espacio que Luis crea se siente sagrado sin ser dogmático. Recomiendo su trabajo con el corazón.",
        role: "Taller intensivo",
      },
      {
        name: "Eli L.",
        text: "He aprendido mucho a conocerme, a saber qué quiero, a saber que tipo de vida quiero. Me han enseñado muchas herramientas que me han hecho ya no sentir que sobrevivo, sino que voy cumpliendo y viendo cómo lo puedo solucionar. Ha sido un crecimiento muy grande",
        role: "Coaching y Talleres",
      },
    ],
  },

  blog: {
    heading: "Blog",
    subheading: "Reflexiones para nutrir cuerpo y alma",
    items: [
      {
        category: "Inteligencia emocional",
        title: "Por qué el cuerpo guarda lo que no decimos",
        excerpt:
          "Las emociones no desaparecen: se instalan en la postura, la respiración y el silencio. Aprende a escucharlas.",
        cta: "Leer más",
        url: "#contact",
      },
      {
        category: "Ritual contemporáneo",
        title: "Crear tu espacio sagrado en casa",
        excerpt:
          "No necesitas un templo: necesitas intención, luz tenue y unos minutos de presencia corporal.",
        cta: "Leer más",
        url: "#contact",
      },
      {
        category: "Bienestar",
        title: "Descanso profundo más allá del sueño",
        excerpt:
          "El descanso verdadero empieza cuando el sistema nervioso siente que puede soltar la guardia.",
        cta: "Leer más",
        url: "#contact",
      },
    ],
  },

  faq: {
    heading: "Preguntas frecuentes",
    subheading: "Lo que suele preguntarse antes del primer encuentro",
    items: [
      {
        question: "¿Necesito experiencia previa en terapia corporal?",
        answer:
          "No. Cada proceso se adapta a tu ritmo y a tu historia. Lo único necesario es la disposición de escuchar a tu cuerpo.",
      },
      {
        question: "¿Las sesiones son solo presenciales?",
        answer:
          "Las terapias individuales y talleres principales son en Chihuahua. Los cursos y algunas consultas de seguimiento pueden ser en línea.",
      },
      {
        question: "¿Cómo reservo y pago el anticipo?",
        answer:
          "Usa el botón de reserva para ver disponibilidad. El anticipo se puede cubrir con PayPal para confirmar tu lugar.",
      },
      {
        question: "¿Qué debo traer a un taller?",
        answer:
          "Ropa cómoda, una botella de agua y, si lo deseas, una manta. Te enviaré indicaciones específicas al confirmar tu inscripción.",
      },
      {
        question: "¿Ofreces sesiones para parejas o grupos?",
        answer:
          "Sí. Consulta por talleres privados o procesos grupales personalizados a través del formulario de contacto.",
      },
    ],
  },

  contact: {
    heading: "Contacto",
    subheading:
      "Escríbeme y te responderé lo antes posible. Tu mensaje es el primer paso.",
    schedulingUrl: "",
    schedulingCta: "Agendar una llamada",
    form: {
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      phonePlaceholder: "Tu teléfono (opcional)",
      phoneRequired: false,
      messagePlaceholder: "Cuéntame qué buscas o cómo puedo acompañarte...",
      submitButton: "Enviar mensaje",
      sendingButton: "Enviando...",
      successMessage:
        "Mensaje recibido. Revisa tu correo; pronto me pondré en contacto contigo.",
      errorMessage:
        "No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos.",
    },
    email: "luismelendez367@gmail.com",
    phone: "+52 614 610 9270",
    whatsapp: "https://wa.me/message/CJ5JMAVYULOWK1",
    address: "Chihuahua, Chihuahua, México",
  },

  nav: {
    logoImage: "/brand/ICONO LM (2).png",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Servicios", href: "#features" },
      { label: "Eventos", href: "#events" },
      { label: "Tienda", href: "#store" },
      { label: "Blog", href: "#blog" },
      { label: "Testimonios", href: "#testimonials" },
      { label: "Contacto", href: "#contact" },
    ],
    ctaLabel: "Reservar",
    ctaHref: "#booking",
  },

  footer: {
    logoImage: "/brand/lm_elementos-02.png",
    tagline: "wellness & fullness",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Servicios", href: "#features" },
      { label: "Inversión", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
    copyright: "Todos los derechos reservados.",
    social: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/luismelendezfw?igsh=MXZtY3doMmo3b25n&utm_source=qr",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/1CcYxHQLzF/?mibextid=wwXIfr",
      },
      { label: "WhatsApp", href: "https://wa.me/message/CJ5JMAVYULOWK1" },
    ],
  },

  email: {
    subject: "Recibimos tu mensaje — Luis Meléndez",
    teamSignature: "Luis Meléndez · Wellness & Fullness",
    from: "onboarding@resend.dev",
  },

  colors: {
    crimson: "#D6183E",
    tealDark: "#12404F",
    orange: "#E96C1A",
    tealMid: "#318B89",
    carbon: "#231F20",
    parchment: "#E8E0D4",
    ivory: "#F5F0EB",
    sand: "#A89F96",
  },

  payment: {
    enabled: true,
    paypalMeUsername: "luismelendezibarra",
    defaultAmount: 0,
    currency: "MXN",
    buttonText: "Pagar con PayPal",
  },

  metadata: {
    title: "Luis Meléndez · Wellness & Fullness | Coach y Terapeuta Corporal",
    description:
      "Coach y Terapeuta Corporal en Chihuahua. Terapias individuales, talleres y cursos de inteligencia emocional para sanar el cuerpo y el alma.",
  },
};
