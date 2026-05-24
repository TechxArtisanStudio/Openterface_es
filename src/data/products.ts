import { docsPath, siteConfig } from '../config/site';

export interface ProductDocLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  title: string;
  slogan: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  keywords: string;
  heroImage: string;
  heroImages: string[];
  buyLabel: string;
  buyHref: string;
  painPoints: string[];
  solutions: string[];
  hwFeatures: { title: string; description: string }[];
  swFeatures: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  funding?: { amount: string; date: string; backers: string };
  docLinks: ProductDocLink[];
  legacyBase: string;
}

export const products: Record<string, Product> = {
  keymod: {
    slug: 'keymod',
    title: 'Openterface KeyMod Series',
    slogan: 'Convierte tu Teléfono en un Teclado Inteligente',
    subtitle: 'Control de teclado y ratón programable para técnicos, profesionales y gaming.',
    description:
      'Un emulador HID USB + Bluetooth compacto y programable que convierte tu teléfono en una consola de teclado y trackpad portátil. Basado en el núcleo HID probado del Openterface Mini-KVM: conectar y usar, 100% código abierto.',
    seoDescription:
      'La KeyMod Series convierte tu teléfono en un teclado y trackpad portátil. Emulador HID USB + Bluetooth, código abierto, perfecto para quioscos y atajos de flujo de trabajo.',
    keywords: 'KeyMod, emulador HID, teclado para teléfono, teclado Bluetooth, teclado USB, código abierto',
    heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    heroImages: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    buyLabel: 'Apóyanos AHORA',
    buyHref: siteConfig.links.keymodCrowdsupply,
    painPoints: [
      'Llevar un teclado completo para configurar un quiosco o TV es poco práctico',
      'Los atajos de flujo de trabajo necesitan macros programables sobre la marcha',
      'Muchas herramientas HID son de código cerrado con personalización limitada',
    ],
    solutions: [
      'Usa tu teléfono como un teclado y trackpad portátil',
      'HID USB y Bluetooth en un solo dispositivo compacto',
      '100% código abierto con soporte de la aplicación Openterface',
    ],
    hwFeatures: [
      { title: 'Formato compacto', description: 'Cabe en tu bolsillo para trabajo de campo y viajes.' },
      { title: 'USB + Bluetooth', description: 'Doble conectividad para máxima compatibilidad de dispositivos.' },
      { title: 'Hardware abierto', description: 'Diseño transparente basado en el núcleo HID probado de Openterface.' },
    ],
    swFeatures: [
      { title: 'App KeyMod', description: 'Configura macros, diseños y perfiles de gamepad desde tu teléfono.' },
      { title: 'Multiplataforma', description: 'Funciona con Android, iPadOS y hosts de escritorio a través de las aplicaciones de Openterface.' },
      { title: 'Código abierto', description: 'Stack completo disponible en GitHub para contribuciones de la comunidad.' },
    ],
    specs: [
      { label: 'Conectividad', value: 'USB-C + Bluetooth LE' },
      { label: 'Modos HID', value: 'Teclado, ratón, gamepad' },
      { label: 'Licencia', value: 'Hardware y software de código abierto' },
    ],
    useCases: ['Entrada para Smart TV y quioscos', 'Macros de flujo de trabajo móvil', 'Configuraciones de gaming y accesibilidad'],
    docLinks: [
      { label: 'Características', href: docsPath('/product/keymod/features/') },
      { label: 'Contenido de la Caja', href: docsPath('/product/keymod/whats-in-the-box/') },
      { label: 'Cómo Conectar', href: docsPath('/product/keymod/how-to-connect/') },
      { label: 'Preguntas Frecuentes', href: docsPath('/product/keymod/faq/') },
      { label: 'Descargar App KeyMod', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/keymod/',
  },
  'kvm-go': {
    slug: 'kvm-go',
    title: 'Openterface KVM-GO Series',
    slogan: 'KVM Ultracompacto que Cabe en tu Llavero',
    subtitle: 'Para Momentos Técnicos Críticos: Conecta. Controla. Listo.',
    description:
      'La solución KVM-over-USB de próxima generación con conectores de video integrados (HDMI, DisplayPort o VGA). Ultracompacto, tamaño llavero y diseñado para operaciones rápidas de TI en centros de datos y salas de servidores.',
    seoDescription:
      'Controla computadoras sin monitor con Openterface KVM-Go. HDMI/DP/VGA integrado, tamaño llavero, KVM-over-USB 4K para profesionales de TI.',
    keywords: 'KVM-Go, KVM sobre USB, KVM ultracompacto, KVM de llavero, KVM 4K, control sin monitor',
    heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    buyLabel: 'Reserva AHORA',
    buyHref: siteConfig.links.kvmgoPurchase,
    funding: { amount: '$101,548', date: 'Financiado el 30 de dic. de 2025', backers: '478' },
    painPoints: [
      'El equipo KVM tradicional es voluminoso y requiere cables de video separados',
      'El acceso de emergencia a servidores en el campo necesita una herramienta de bolsillo',
      'La resolución de problemas sin monitor y sin acceso a la red es lenta',
    ],
    solutions: [
      'Los conectores de video integrados eliminan los cables adicionales',
      'Formato de llavero siempre al alcance de la mano',
      'KVM-over-USB: no requiere red ni controladores en el objetivo',
    ],
    hwFeatures: [
      { title: 'Video integrado', description: 'Modelos HDMI, DisplayPort o VGA: sin cables sueltos.' },
      { title: 'Tamaño llavero', description: 'El KVM-over-USB más pequeño de la línea Openterface.' },
      { title: 'Soporte 4K', description: 'Captura de alta resolución para monitores modernos.' },
    ],
    swFeatures: [
      { title: 'App Openterface Qt', description: 'Control de host multiplataforma para Windows, macOS y Linux.' },
      { title: 'Interruptor MicroSD', description: 'Almacenamiento conmutable para imágenes de SO y herramientas portátiles.' },
      { title: 'Stack de código abierto', description: 'Firmware y aplicaciones de host impulsadas por la comunidad.' },
    ],
    specs: [
      { label: 'Video', value: 'HDMI / DP / VGA (según el modelo)' },
      { label: 'Resolución', value: 'Hasta 4K' },
      { label: 'Conexión', value: 'USB-C KVM-over-USB' },
    ],
    useCases: ['Recorridos por centros de datos', 'Configuración de dispositivos sin monitor', 'TI de campo y rescate de homelabs'],
    docLinks: [
      { label: 'Características', href: docsPath('/product/kvm-go/features/') },
      { label: 'Inicio Rápido Beta', href: docsPath('/product/kvm-go/beta-quick-start/') },
      { label: 'Cómo Conectar', href: docsPath('/product/kvm-go/how-to-connect/') },
      { label: 'Preguntas Frecuentes', href: docsPath('/product/kvm-go/faq/') },
      { label: 'Descargar App', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/kvm-go/',
  },
  minikvm: {
    slug: 'minikvm',
    title: 'Openterface Mini-KVM',
    slogan: 'Convierte tu Portátil en una Consola KVM',
    subtitle: 'Simplifica tu Vida Técnica.',
    description:
      'Una solución KVM-over-USB conectar y usar. Controla una computadora cercana sin monitor desde tu portátil usando USB e HDMI: sin periféricos adicionales ni red requerida.',
    seoDescription:
      'Openterface Mini-KVM: KVM-over-USB conectar y usar con HDMI. Controla computadoras sin monitor desde tu portátil sin red.',
    keywords: 'Mini-KVM, KVM sobre USB, control sin monitor, HDMI KVM, KVM conectar y usar',
    heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    buyLabel: 'Pide AHORA',
    buyHref: siteConfig.links.minikvmPurchase,
    funding: { amount: '$505,471', date: 'Financiado el 13 de jun. de 2024', backers: '3,775' },
    painPoints: [
      'Cargar con un monitor y un teclado para cada reparación de servidor es poco práctico',
      'El KVM de red requiere configuración y conectividad',
      'Los profesionales de TI necesitan un KVM de bolsillo confiable a diario',
    ],
    solutions: [
      'Usa tu portátil actual como consola KVM',
      'Captura HDMI + USB HID en un solo dispositivo compacto',
      'Avalado por más de 5,000 miembros de la comunidad desde 2024',
    ],
    hwFeatures: [
      { title: 'Captura HDMI', description: 'Video completo desde la máquina objetivo a tu portátil host.' },
      { title: 'Interruptor USB', description: 'Alterna dispositivos USB entre el host y el objetivo.' },
      { title: 'Pines de extensión', description: 'Opciones de hacking de hardware e integración personalizada.' },
    ],
    swFeatures: [
      { title: 'Apps Qt / macOS / Android', description: 'Aplicaciones nativas para cada plataforma host principal.' },
      { title: 'Código abierto', description: 'Ecosistema de hardware y software totalmente abierto.' },
      { title: 'Comunidad activa', description: 'Discord, GitHub y actualizaciones regulares de firmware.' },
    ],
    specs: [
      { label: 'Entrada de video', value: 'HDMI' },
      { label: 'USB', value: 'USB-C con puerto conmutable' },
      { label: 'Estado', value: 'Enviando — Crowd Supply' },
    ],
    useCases: ['Gestión de homelabs', 'Control de estaciones de trabajo de desarrolladores', 'Resolución de problemas en bancos de TI'],
    docLinks: [
      { label: 'Características', href: docsPath('/product/minikvm/features/') },
      { label: 'Interruptor USB', href: docsPath('/product/minikvm/usb-switch/') },
      { label: 'Soporte Técnico', href: docsPath('/product/minikvm/support/') },
      { label: 'Preguntas Frecuentes', href: docsPath('/product/minikvm/faq/') },
      { label: 'Descargar App', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/minikvm/',
  },
  'uconsole-kvm-extension': {
    slug: 'uconsole-kvm-extension',
    title: 'Extensión KVM para uConsole',
    slogan: 'Potencia KVM para tu uConsole',
    subtitle: 'Convierte la uConsole portátil en una terminal KVM completa.',
    description:
      'Una extensión de hardware que añade capacidad KVM-over-USB a la Clockwork uConsole. Perfecta para trabajo de TI portátil con teclado y pantalla integrados.',
    seoDescription:
      'La extensión KVM para uConsole añade KVM-over-USB a la computadora portátil Clockwork uConsole.',
    keywords: 'uConsole, extensión KVM, KVM portátil, Clockwork uConsole',
    heroImage: 'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    heroImages: [
      'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    ],
    buyLabel: 'Saber Más',
    buyHref: docsPath('/product/uconsole-kvm-extension/'),
    painPoints: [
      'Las consolas portátiles carecen de KVM integrado para objetivos sin monitor',
      'Los técnicos de campo quieren un solo dispositivo para todo',
    ],
    solutions: [
      'Placa de extensión con factor de forma nativo de uConsole',
      'Stack completo de Openterface KVM en un dispositivo de bolsillo',
    ],
    hwFeatures: [
      { title: 'Nativo de uConsole', description: 'Diseñado específicamente para Clockwork uConsole.' },
      { title: 'PCB compacto', description: 'Se instala dentro del chasis de la uConsole.' },
    ],
    swFeatures: [
      { title: 'Apps de Openterface', description: 'El mismo software confiable que Mini-KVM y KVM-GO.' },
      { title: 'Guías de configuración', description: 'Documentación paso a paso de instalación de hardware y software.' },
    ],
    specs: [
      { label: 'Compatibilidad', value: 'Clockwork uConsole' },
      { label: 'Certificación', value: 'Certificado OSHWA' },
    ],
    useCases: ['Herramienta portátil para centros de datos', 'Maker y homelab sobre la marcha'],
    docLinks: [
      { label: 'Instalación de Hardware', href: docsPath('/product/uconsole-kvm-extension/hardware-installation/') },
      { label: 'Configuración de Software', href: docsPath('/product/uconsole-kvm-extension/software-setup/') },
      { label: 'Cómo Conectar', href: docsPath('/product/uconsole-kvm-extension/connect-to-target/') },
      { label: 'Preguntas Frecuentes', href: docsPath('/product/uconsole-kvm-extension/faq/') },
    ],
    legacyBase: '/product/uconsole-kvm-extension/',
  },
  accessories: {
    slug: 'accessories',
    title: 'Accesorios Openterface',
    slogan: 'Completa tu Configuración',
    subtitle: 'Cables premium, adaptadores y bolsas de herramientas para profesionales.',
    description:
      'Accesorios esenciales que incluyen adaptadores de video, cables de alta velocidad y soluciones de almacenamiento. Mejora tu experiencia Openterface con equipo de calidad de la tienda TxA Shop.',
    seoDescription: 'Accesorios Openterface: cables, adaptadores, bolsas de herramientas y conectores de video.',
    keywords: 'accesorios KVM, cable HDMI, cable USB-C, bolsa de herramientas',
    heroImage: 'https://assets.openterface.com/images/cover.webp',
    heroImages: ['https://assets.openterface.com/images/cover.webp'],
    buyLabel: 'Comprar AHORA',
    buyHref: siteConfig.links.shop,
    painPoints: ['No tener el cable adecuado en el campo retrasa cada reparación'],
    solutions: ['Accesorios seleccionados y probados con productos Openterface'],
    hwFeatures: [
      { title: 'Adaptadores de video', description: 'HDMI, VGA y conectores especializados.' },
      { title: 'Cables de alta velocidad', description: 'Cables USB-C y Tipo-A diseñados para cargas de trabajo KVM.' },
      { title: 'Bolsa de herramientas', description: 'Organiza tu kit completo de Openterface.' },
    ],
    swFeatures: [],
    specs: [],
    useCases: ['Organización de kits de campo', 'Conversión de formatos de video', 'Cables de repuesto para mochilas de TI'],
    docLinks: [
      { label: 'Todos los SKUs', href: docsPath('/product/accessories/') },
      { label: 'Tienda TxA', href: siteConfig.links.shop },
    ],
    legacyBase: '/product/accessories/',
  },
};

export const productSlugs = Object.keys(products);
