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
      "Soy Luis Meléndez, Coach y Terapeuta Corporal.",
      "El cuerpo es una constante fuente de sabiduría, sanación y libertad.",
      "Soy un coach y terapeuta corporal apasionado por guiar y sostener procesos que liberen, sanen y conecten las emociones a tu vehículo más preciado: tu cuerpo.",
      "¿Cómo lo hago?",
      "A través de diferentes experiencias como terapias, talleres, retiros y acompañamiento personal.",
      "«Que la conexión con tu cuerpo sea tu super poder.»",
    ],
  },

  features: {
    heading: "Servicios",
    subheading:
      "Terapias, talleres y cursos diseñados para que tu cuerpo respire y tu alma encuentre silencio.",
    backgroundImage:
      "/fondos/textura-degradada-abstracta-tonos-azules-cian.jpg",
    iconImage: "/brand/lm_elementos-09.png",
    detailsPageUrl: "/servicios",
    scheduleCta: "Agendar por WhatsApp",
    trustImage: "/servicios/luis-sesion-naturaleza.jpg",
    trustImageAlt:
      "Luis Meléndez, coach y terapeuta corporal, en un entorno natural durante una sesión de conexión corporal",
    trustCaption:
      "Cada proceso es personal. Te acompaño con presencia, escucha y técnicas que integran cuerpo, emoción y consciencia.",
    items: [
      {
        title: "Terapias Individuales",
        description:
          "Sesiones uno a uno de terapia corporal e inteligencia emocional. Un espacio seguro, intenso y confidencial para liberar tensiones y reconectar contigo.",
        detailedDescription:
          "Sesiones personalizadas de terapia corporal e inteligencia emocional. Elige la modalidad que mejor se adapte a tu proceso:",
        options: [
          {
            title: "Masaje para el Alma",
            description:
              "Técnica terapéutica que atiende lesión/enfermedad desde la gestión de emociones, liberación emocional y reprogramación de pensamientos negativos. Así como situaciones repetitivas que causan malestar no solo físico sino mental, emocional y espiritual. Equilibras cuerpo, mente, emoción y espíritu.",
            price: "$1,250",
            duration: "90 min",
            whatsappMessage:
              "Hola Luis, me interesa agendar Masaje para el Alma. ¿Tienes disponibilidad?",
          },
          {
            title: "Masaje relajante",
            description:
              "Enfocado a una experiencia de descanso físico, técnica tradicional de masaje y cuerpo completo para relajación total, antiestrés, disfrute y regeneración celular.",
            price: "$800",
            duration: "60 a 75 min",
            variants: [
              { name: "Piedras calientes", price: "$950" },
              { name: "Bambuterapia", price: "$950" },
            ],
            whatsappMessage:
              "Hola Luis, me interesa agendar un Masaje relajante. ¿Tienes disponibilidad?",
          },
          {
            title: "Masaje Energético",
            description:
              "Igual que el relajante + técnica de liberación de fatiga mental con una meditación guiada enfocada en descanso mental y liberación de ansiedad.",
            price: "$900",
            duration: "75 min",
            whatsappMessage:
              "Hola Luis, me interesa agendar un Masaje Energético. ¿Tienes disponibilidad?",
          },
          {
            title: "Coaching (Niños, Adolescentes y Adultos)",
            description:
              "Técnica terapéutica de autoconocimiento que te permite crear consciencia y adquirir herramientas para obtener resultados claros en tu salud, relaciones personales, laborales, financieras y de vida en general.",
            price: "$750",
            duration: "60 min",
            whatsappMessage:
              "Hola Luis, me interesa agendar una sesión de Coaching. ¿Tienes disponibilidad?",
          },
          {
            title: "Barras Access",
            description:
              "Técnica de 32 puntos energéticos ubicados en la cabeza. Su estimulación libera carga electromagnética de pensamientos, emociones y creencias limitantes acumuladas, facilitando una profunda relajación y apertura a nuevas posibilidades en tu vida.",
            price: "$750",
            duration: "45 a 60 min",
            whatsappMessage:
              "Hola Luis, me interesa agendar una sesión de Barras Access. ¿Tienes disponibilidad?",
          },
          {
            title: "Kinesiotaping - Vendaje Neuromuscular",
            description:
              "Técnica terapéutica para tratar lesiones y aliviar el dolor. Este vendaje, a comparación de la técnica tradicional, acompaña el movimiento estimulando el sistema nervioso y favoreciendo la circulación y el drenaje linfático.",
            price: "$450",
            duration: null,
            whatsappMessage:
              "Hola Luis, me interesa agendar Kinesiotaping (Vendaje Neuromuscular). ¿Tienes disponibilidad?",
          },
        ],
      },
      {
        title: "Talleres Grupales",
        description:
          "Experiencias colectivas en Chihuahua donde el cuerpo, el grupo y el ritual se encuentran. Ideal para procesos de estrés, duelo o transición.",
        detailedDescription:
          "Encuentros presenciales en Chihuahua donde el cuerpo, el grupo y el ritual se encuentran. Trabajamos estrés, duelo, transiciones y reconexión emocional con dinámicas corporales, meditación y espacios de compartir. Ideal si buscas sanar en comunidad y sentirte sostenido.",
        price: "Consultar",
        period: " según taller y fecha",
        whatsappMessage:
          "Hola Luis, me interesa inscribirme a un Taller Grupal. ¿Cuáles son las próximas fechas?",
      },
      {
        title: "Cursos Online",
        description:
          "Formación a distancia en inteligencia emocional y sanación corporal. Aprende a tu ritmo con acompañamiento directo.",
        detailedDescription:
          "Formación a distancia en inteligencia emocional y sanación corporal. Accede a módulos en video, material de apoyo y seguimiento directo conmigo. Incluye una sesión individual personalizada para integrar lo aprendido a tu ritmo y desde tu casa.",
        price: "$500",
        period: " MXN · anticipo",
        whatsappMessage:
          "Hola Luis, me interesa el Curso Online. ¿Me puedes dar más información?",
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
    backgroundImage:
      "/fondos/textura-degradada-abstracta-tonos-azules-cian.jpg",
    items: [
      {
        dateRange: "Todos los martes",
        time: "7:00 pm",
        title: "Meditación",
        description: "Un espacio de conexión con tu consciencia superior",
        cta: "Inscribirme",
        ctaUrl: "https://wa.me/message/CJ5JMAVYULOWK1",
      },
      {
        dateRange: "20 jul – 14 ago",
        title: "Summer Camp 2026 - Soy humano, Soy esencia.",
        description:
          "Campamento de Verano para niños de 6 a 11 años de edad y Adolescentes de 12 a 17 años. Un lugar para conectar con su cuerpo, mente, emoción y alma para conocer la mejor versión de sí mismos.",
        cta: "Inscribirme",
        ctaUrl: "https://wa.me/message/CJ5JMAVYULOWK1",
      },
    ],
  },

  store: {
    heading: "Tienda",
    subheading: "Artículos especiales para tu ritual personal",
    items: [
      {
        name: "Aceite ritualizado",
        description:
          "Mezcla artesanal para masaje y uso diario. Distintas notas enfocadas en atender tu necesidad: Regeneración Celular, Descanso Profundo, Sanación Física, Liberación Emocional, Paz Mental y Conexión Profunda.",
        price: "$500 MXN",
        cta: "Pedir por WhatsApp",
        ctaUrl: "https://wa.me/message/CJ5JMAVYULOWK1",
        image: "/tiendita/Aceite ritual.png",
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
    backgroundImage:
      "/fondos/textura-degradada-abstracta-tonos-azules-cian.jpg",
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
