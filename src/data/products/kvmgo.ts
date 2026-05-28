import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface KVM-GO Series",
  slogan: "KVM Ultracompacto que Cabe en tu Llavero",
  subtitle: "Para Momentos Técnicos Críticos: Conecta. Controla. Listo.",
  status: 'pre-order',
  description:
    "La solución KVM-over-USB de próxima generación con conectores de video integrados (HDMI, DisplayPort o VGA). Ultracompacto, tamaño llavero y diseñado para operaciones rápidas de TI en centros de datos y salas de servidores.",
  seoDescription:
    "Controla computadoras sin monitor con Openterface KVM-Go. HDMI/DP/VGA integrado, tamaño llavero, KVM-over-USB 4K para profesionales de TI.",
  keywords:
    "KVM-Go, KVM sobre USB, KVM ultracompacto, KVM de llavero, KVM 4K, control sin monitor",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "Reserva AHORA",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "Financiado el 30 de dic. de 2025", backers: "478" },
  painPoints: [
    "El equipo KVM tradicional es voluminoso y requiere cables de video separados",
    "El acceso de emergencia a servidores en el campo necesita una herramienta de bolsillo",
    "La resolución de problemas sin monitor y sin acceso a la red es lenta",
  ],
  solutions: [
    "Los conectores de video integrados eliminan los cables adicionales",
    "Formato de llavero siempre al alcance de la mano",
    "KVM-over-USB: no requiere red ni controladores en el objetivo",
  ],
  hwFeatures: [
    { title: "Video integrado", description: "Modelos HDMI, DisplayPort o VGA: sin cables sueltos." },
    { title: "Tamaño llavero", description: "El KVM-over-USB más pequeño de la línea Openterface." },
    { title: "Soporte 4K", description: "Captura de alta resolución para monitores modernos." },
  ],
  swFeatures: [
    { title: "App Openterface Qt", description: "Control de host multiplataforma para Windows, macOS y Linux." },
    { title: "Interruptor MicroSD", description: "Almacenamiento conmutable para imágenes de SO y herramientas portátiles." },
    { title: "Stack de código abierto", description: "Firmware y aplicaciones de host impulsadas por la comunidad." },
  ],
  specs: [
    { label: "Video", value: "HDMI / DP / VGA (según el modelo)" },
    { label: "Resolución", value: "Hasta 4K" },
    { label: "Conexión", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Recorridos por centros de datos",
    "Configuración de dispositivos sin monitor",
    "TI de campo y rescate de homelabs",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Características", href: docsPath("/product/kvm-go/features/") },
    { label: "Inicio Rápido Beta", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Cómo Conectar", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "Preguntas Frecuentes", href: docsPath("/product/kvm-go/faq/") },
    { label: "Descargar App", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
