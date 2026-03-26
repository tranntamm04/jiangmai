'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-cream border-b border-border-light shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-sm bg-forest-green flex items-center justify-center text-text-light font-serif text-xl font-bold group-hover:opacity-90 transition-all">
            GM
          </div>
          <span className="hidden sm:inline font-serif text-2xl font-bold text-forest-green">TQPay</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-text-dark hover:text-forest-green transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('Ảnh')}
            className="text-text-dark hover:text-forest-green transition-colors font-medium"
          >
            Ảnh
          </button>
          <button
            onClick={() => scrollToSection('Mục')}
            className="text-text-dark hover:text-forest-green transition-colors font-medium"
          >
            Mục
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-text-dark hover:text-forest-green transition-colors font-medium"
          >
            About
          </button>
        </div>
      </nav>
    </header>
  );
}
