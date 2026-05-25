export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Guías de productos, preguntas frecuentes, tutoriales y descargas de apps están en docs.openterface.com.",
    "homeMessage": "Tutoriales, preguntas frecuentes, descargas de apps y guías de productos están en docs.openterface.com.",
    "linkLabel": "Abrir documentación ↗",
    "productMessage": "Especificaciones detalladas, guías de configuración y preguntas frecuentes están en docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "Mantente informado",
    "heading": "Recibe primero las novedades de KVM-GO, KeyMod y Mini-KVM",
    "description": "Lanzamientos de productos, firmware y consejos IT prácticos — como máximo una vez al mes. Sin spam, solo noticias útiles del equipo Openterface.",
    "benefitCrowdfunding": "Acceso anticipado a crowdfunding y ventanas de reserva",
    "benefitGuides": "Guías de configuración y notas de versión de la app",
    "benefitUnsubscribe": "Cancela la suscripción cuando quieras con un clic",
    "submitLabel": "Suscribirse a actualizaciones",
    "namePlaceholder": "Nombre (opcional)",
    "emailPlaceholder": "Correo electrónico *",
    "footnote": "Como máximo un correo al mes. Cancela cuando quieras. Consultas: info@openterface.com"
  },
  "siteFooter": {
    "tagline": "Soluciones KVM-over-USB ultracompactas para profesionales de TI.",
    "productsHeading": "Productos",
    "keymodSeries": "KeyMod Series",
    "kvmGoSeries": "KVM-GO Series",
    "miniKvm": "Mini-KVM",
    "accessories": "Accesorios",
    "resourcesHeading": "Recursos",
    "videos": "Videos",
    "faqs": "Preguntas frecuentes",
    "apps": "Apps",
    "support": "Soporte",
    "newsletterTitle": "Boletín",
    "newsletterDescription": "Actualizaciones mensuales sobre productos, firmware y consejos KVM.",
    "newsletterSubmit": "Suscribirse",
    "newsletterNamePlaceholder": "Nombre",
    "newsletterEmailPlaceholder": "Correo *",
    "newsletterFootnote": "Cancela cuando quieras.",
    "copyright": "Openterface. KVM-over-USB de código abierto.",
    "privacy": "Privacidad",
    "terms": "Términos"
  },
  "productLanding": {
    "downloadApp": "Descargar app",
    "backers": "Patrocinadores",
    "theProblem": "El problema",
    "theSolution": "La solución",
    "hwSoftwareTitle": "Hardware + Software",
    "hwSoftwareSubtitle": "Los productos Openterface funcionan mejor con nuestras apps host de código abierto.",
    "hardware": "Hardware",
    "software": "Software",
    "swFallback": "Consulte TxA Shop para detalles de compatibilidad de accesorios.",
    "keySpecs": "Especificaciones clave",
    "useCases": "Casos de uso",
    "documentation": "Documentación",
    "ctaTitle": "¿Listo para empezar?",
    "ctaSubtitle": "Pide el hardware y descarga la app Openterface para tu plataforma."
  }
};
