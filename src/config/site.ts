export const siteConfig = {
  name: 'Openterface',
  locale: 'es',
  url: 'https://es.openterface.com',
  legacyUrl: 'https://openterface.com',
  description:
    'Soluciones KVM-over-USB ultracompactas para profesionales de TI: KVM-GO, Mini-KVM, KeyMod y extensión KVM para uConsole.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  accent: '#ff6e42',
  links: {
    minikvmPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
    kvmgoPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
    keymodCrowdsupply: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
    shop: 'https://shop.techxartisan.com/',
    appOverview: 'https://openterface.com/app/overview/',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
      linkerDomains: [
        'openterface.com',
        'en.openterface.com',
        'de.openterface.com',
        'es.openterface.com',
        'fr.openterface.com',
        'it.openterface.com',
        'jp.openterface.com',
        'kr.openterface.com',
        'pt.openterface.com',
        'ro.openterface.com',
        'cn.openterface.com',
      ],
    },
    ahrefs: {
      dataKey: 'b3G5nUND8OglcZwfjfwixQ',
    },
    consent: {
      storageKey: 'openterface-cookie-consent',
      title: 'Consentimiento de cookies',
      description:
        'Utilizamos cookies para mejorar la calidad del contenido, analizar la efectividad del sitio y sus necesidades. Al consentir, nos ayuda a mejorar nuestro sitio web. ¡Gracias!',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Rechazar',
      cookieLabel: 'Cookie',
    },
  },
} as const;

/** Build a legacy openterface.com URL for doc-heavy pages not yet migrated. */
export function legacyPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.legacyUrl}${normalized}`;
}
