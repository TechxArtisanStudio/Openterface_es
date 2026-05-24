import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Productos',
    href: '#',
    children: [
      { label: 'KeyMod Series', href: '/products/keymod/' },
      { label: 'KVM-GO Series', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'Extensión KVM para uConsole', href: '/products/uconsole-kvm-extension/' },
      { label: 'Accesorios', href: '/products/accessories/' },
    ],
  },
  { label: 'Videos', href: '/videos/' },
  { label: 'Casos de Uso', href: '/use-cases/' },
  { label: 'Acerca de', href: '/about/' },
  { label: 'Documentación', href: docsPath(), external: true },
  { label: 'Noticias', href: newsPath(), external: true },
  { label: 'Tienda', href: siteConfig.links.shop, external: true },
];
