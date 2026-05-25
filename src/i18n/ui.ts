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
  }
};
