import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Convierte tu Portátil en una Consola KVM",
  subtitle: "Simplifica tu Vida Técnica.",
  status: 'shipping',
  description:
    "Una solución KVM-over-USB conectar y usar. Controla una computadora cercana sin monitor desde tu portátil usando USB e HDMI: sin periféricos adicionales ni red requerida.",
  seoDescription:
    "Openterface Mini-KVM: KVM-over-USB conectar y usar con HDMI. Controla computadoras sin monitor desde tu portátil sin red.",
  keywords:
    "Mini-KVM, KVM sobre USB, control sin monitor, HDMI KVM, KVM conectar y usar",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "Pide AHORA",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "Financiado el 13 de jun. de 2024", backers: "3,775" },
  painPoints: [
    "Cargar con un monitor y un teclado para cada reparación de servidor es poco práctico",
    "El KVM de red requiere configuración y conectividad",
    "Los profesionales de TI necesitan un KVM de bolsillo confiable a diario",
  ],
  solutions: [
    "Usa tu portátil actual como consola KVM",
    "Captura HDMI + USB HID en un solo dispositivo compacto",
    "Avalado por más de 5,000 miembros de la comunidad desde 2024",
  ],
  hwFeatures: [
    { title: "Captura HDMI", description: "Video completo desde la máquina objetivo a tu portátil host." },
    { title: "Interruptor USB", description: "Alterna dispositivos USB entre el host y el objetivo." },
    { title: "Pines de extensión", description: "Opciones de hacking de hardware e integración personalizada." },
  ],
  swFeatures: [
    { title: "Apps Qt / macOS / Android", description: "Aplicaciones nativas para cada plataforma host principal." },
    { title: "Código abierto", description: "Ecosistema de hardware y software totalmente abierto." },
    { title: "Comunidad activa", description: "Discord, GitHub y actualizaciones regulares de firmware." },
  ],
  specs: [
    { label: "Entrada de video", value: "HDMI" },
    { label: "USB", value: "USB-C con puerto conmutable" },
    { label: "Estado", value: "Enviando — Crowd Supply" },
  ],
  useCases: [
    "Gestión de homelabs",
    "Control de estaciones de trabajo de desarrolladores",
    "Resolución de problemas en bancos de TI",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Características", href: docsPath("/product/minikvm/features/") },
    { label: "Interruptor USB", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Soporte Técnico", href: docsPath("/product/minikvm/support/") },
    { label: "Preguntas Frecuentes", href: docsPath("/product/minikvm/faq/") },
    { label: "Descargar App", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
