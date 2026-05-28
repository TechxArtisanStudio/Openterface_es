import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Productos",
    href: '/products/',
    children: [
      { label: "Todos los productos", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Accesorios", href: '/accessories/' },
    ],
  },
  {
    label: "Apps",
    href: '/app/',
    children: [
      { label: "Todas las apps", href: '/app/' },
      { label: "Control KVM", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Medios", href: '/videos/' },
  { label: "Acerca de", href: '/about/' },
  { label: "Documentación", href: docsPath(), external: true },
  { label: "Noticias", href: newsPath(), external: true },
  { label: "Tienda", href: siteConfig.links.shop, external: true },
];
