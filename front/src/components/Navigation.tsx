'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Works' },
    { href: '/skills', label: 'Skill' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full flex justify-center gap-16 p-6">
      {links.map((link) =>
        pathname === link.href ? (
          <span
            key={link.href}
            className="text-[#2b0934] font-bold underline cursor-default"
          >
            {link.label}
          </span>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#2b0934] font-bold hover:underline"
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}
