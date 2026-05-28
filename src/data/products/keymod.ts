import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface KeyMod Series",
  slogan: "Convierte tu Teléfono en un Teclado Inteligente",
  subtitle: "Control de teclado y ratón programable para técnicos, profesionales y gaming.",
  status: 'pre-launch',
  description:
    "Un emulador HID USB + Bluetooth compacto y programable que convierte tu teléfono en una consola de teclado y trackpad portátil. Basado en el núcleo HID probado del Openterface Mini-KVM: conectar y usar, 100% código abierto.",
  seoDescription:
    "La KeyMod Series convierte tu teléfono en un teclado y trackpad portátil. Emulador HID USB + Bluetooth, código abierto, perfecto para quioscos y atajos de flujo de trabajo.",
  keywords:
    "KeyMod, emulador HID, teclado para teléfono, teclado Bluetooth, teclado USB, código abierto",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "Apóyanos AHORA",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Llevar un teclado completo para configurar un quiosco o TV es poco práctico",
    "Los atajos de flujo de trabajo necesitan macros programables sobre la marcha",
    "Muchas herramientas HID son de código cerrado con personalización limitada",
  ],
  solutions: [
    "Usa tu teléfono como un teclado y trackpad portátil",
    "HID USB y Bluetooth en un solo dispositivo compacto",
    "100% código abierto con soporte de la aplicación Openterface",
  ],
  hwFeatures: [
    { title: "Formato compacto", description: "Cabe en tu bolsillo para trabajo de campo y viajes." },
    { title: "USB + Bluetooth", description: "Doble conectividad para máxima compatibilidad de dispositivos." },
    { title: "Hardware abierto", description: "Diseño transparente basado en el núcleo HID probado de Openterface." },
  ],
  swFeatures: [
    { title: "App KeyMod", description: "Configura macros, diseños y perfiles de gamepad desde tu teléfono." },
    { title: "Multiplataforma", description: "Funciona con Android, iPadOS y hosts de escritorio a través de las aplicaciones de Openterface." },
    { title: "Código abierto", description: "Stack completo disponible en GitHub para contribuciones de la comunidad." },
  ],
  specs: [
    { label: "Conectividad", value: "USB-C + Bluetooth LE" },
    { label: "Modos HID", value: "Teclado, ratón, gamepad" },
    { label: "Licencia", value: "Hardware y software de código abierto" },
  ],
  useCases: [
    "Entrada para Smart TV y quioscos",
    "Macros de flujo de trabajo móvil",
    "Configuraciones de gaming y accesibilidad",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Características", href: docsPath("/product/keymod/features/") },
    { label: "Contenido de la Caja", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Cómo Conectar", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "Preguntas Frecuentes", href: docsPath("/product/keymod/faq/") },
    { label: "Descargar App KeyMod", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
