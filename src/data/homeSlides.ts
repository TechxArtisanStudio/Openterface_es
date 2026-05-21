import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: 'Convierte tu Teléfono en un Mini Teclado',
    description:
      'Un emulador HID USB + Bluetooth compacto que convierte tu teléfono en un teclado y trackpad portátil. Conectar y usar, 100% código abierto. Perfecto para quioscos, smart TVs y atajos rápidos de flujo de trabajo.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'Apóyanos AHORA', href: siteConfig.links.keymodCrowdsupply, external: true },
    secondaryCta: { label: 'Ver Producto', href: '/products/keymod/' },
    progressSmall: 'KeyMod Series',
    progressLarge: 'Convierte tu Teléfono en un Mini Teclado',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: 'El KVM Ultracompacto que Cabe en tu Llavero',
    description:
      'Diseñado para caber en tu llavero y salvarte el día en un instante, este gadget KVM-over-USB de próxima generación está diseñado para operaciones rápidas de TI en el campo.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'Reserva AHORA', href: siteConfig.links.kvmgoPurchase, external: true },
    secondaryCta: { label: 'Ver Producto', href: '/products/kvm-go/' },
    funding: { amount: '$101,548', date: 'Financiado el 30 de dic. de 2025', backers: '478' },
    progressSmall: 'KVM-GO Series',
    progressLarge: 'El KVM Ultracompacto que Cabe en tu Llavero',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: 'La Solución KVM Compacta para Profesionales',
    description:
      'Una solución KVM-over-USB compacta, repleta de funciones y de código abierto que simplifica tu vida técnica con tareas de TI y resolución de problemas sobre la marcha.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'Pide AHORA', href: siteConfig.links.minikvmPurchase, external: true },
    secondaryCta: { label: 'Ver Producto', href: '/products/minikvm/' },
    funding: { amount: '$505,471', date: 'Financiado el 13 de jun. de 2024', backers: '3,775' },
    progressSmall: 'Mini-KVM Series',
    progressLarge: 'La Solución KVM Compacta para Profesionales',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: 'Completa tu Configuración con Accesorios Premium',
    description:
      'Explora nuestra gama de accesorios esenciales que incluyen adaptadores de video, cables de alta velocidad y soluciones de almacenamiento. Mejora tu experiencia Openterface con accesorios de calidad diseñados para profesionales.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'Accesorios TxA Shop',
    primaryCta: { label: 'Comprar AHORA', href: siteConfig.links.shop, external: true },
    secondaryCta: { label: 'Ver Accesorios', href: '/products/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: 'Completa tu Configuración con Accesorios Premium',
  },
];

export const homeSeo = {
  title: 'Openterface | Soluciones KVM Ultracompactas para Profesionales de TI',
  description:
    'Descubre Openterface - Soluciones KVM-over-USB ultracompactas que incluyen la KVM-GO Series (tamaño llavero), Mini-KVM Series y la Extensión KVM para uConsole.',
  keywords:
    'KVM-over-USB, conmutador KVM, KVM portátil, KVM USB, gestión de servidores sin monitor, KVM-GO, Mini-KVM, KeyMod',
};
