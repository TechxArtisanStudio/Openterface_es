import { legacyPath } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
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
  { label: 'Preguntas Frecuentes', href: legacyPath('/faq/'), external: true },
  { label: 'App', href: legacyPath('/app/overview/'), external: true },
  { label: 'Tutorial', href: legacyPath('/tutorial/'), external: true },
  { label: 'Soporte', href: legacyPath('/support/'), external: true },
  { label: 'Acerca de', href: '/about/' },
];
