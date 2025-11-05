'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', name: '홈' },
    { href: '/aptitude', name: '관심사 및 소질 파악' },
    { href: '/guide', name: '맞춤형 진로 가이드' },
    { href: '/interview', name: '인터뷰 연습' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">AI 커리어 코치</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-4 px-2 border-b-4 ${
                  pathname === link.href
                    ? 'border-indigo-500 text-indigo-500'
                    : 'border-transparent text-gray-500 hover:text-indigo-500'
                } font-semibold`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
