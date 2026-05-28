import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "Extensión KVM para uConsole",
  slogan: "Potencia KVM para tu uConsole",
  subtitle: "Convierte la uConsole portátil en una terminal KVM completa.",
  status: 'oshwa',
  description:
    "Una extensión de hardware que añade capacidad KVM-over-USB a la Clockwork uConsole. Perfecta para trabajo de TI portátil con teclado y pantalla integrados.",
  seoDescription:
    "La extensión KVM para uConsole añade KVM-over-USB a la computadora portátil Clockwork uConsole.",
  keywords:
    "uConsole, extensión KVM, KVM portátil, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
  heroImages: [
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "Saber Más",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Las consolas portátiles carecen de KVM integrado para objetivos sin monitor",
    "Los técnicos de campo quieren un solo dispositivo para todo",
  ],
  solutions: [
    "Placa de extensión con factor de forma nativo de uConsole",
    "Stack completo de Openterface KVM en un dispositivo de bolsillo",
  ],
  hwFeatures: [
    { title: "Nativo de uConsole", description: "Diseñado específicamente para Clockwork uConsole." },
    { title: "PCB compacto", description: "Se instala dentro del chasis de la uConsole." },
  ],
  swFeatures: [
    { title: "Apps de Openterface", description: "El mismo software confiable que Mini-KVM y KVM-GO." },
    { title: "Guías de configuración", description: "Documentación paso a paso de instalación de hardware y software." },
  ],
  specs: [
    { label: "Compatibilidad", value: "Clockwork uConsole" },
    { label: "Certificación", value: "Certificado OSHWA" },
  ],
  useCases: [
    "Herramienta portátil para centros de datos",
    "Maker y homelab sobre la marcha",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Instalación de Hardware", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Configuración de Software", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Cómo Conectar", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "Preguntas Frecuentes", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
