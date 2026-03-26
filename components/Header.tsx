'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-md border-b border-border-light/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-15 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-forest-green to-emerald-700 flex items-center justify-center text-white font-serif text-2xl font-bold shadow-inner group-hover:scale-105 transition-all duration-300">
            GM
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-forest-green">TQPay</span>
            <p className="text-[10px] text-text-dark/60 -mt-1 tracking-[2px]">PREMIUM</p>
          </div>
        </Link>

        {/* Navigation - Hiển thị trên mọi thiết bị */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 text-sm sm:text-base font-medium">
          <button
            onClick={() => scrollToSection('home')}
            className="text-text-dark hover:text-forest-green relative py-1 px-2 transition-all duration-200 group"
          >
            Home
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-forest-green group-hover:w-4/5 transition-all duration-300"></span>
          </button>

          <button
            onClick={() => scrollToSection('gallery')}
            className="text-text-dark hover:text-forest-green relative py-1 px-2 transition-all duration-200 group"
          >
            Ảnh
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-forest-green group-hover:w-4/5 transition-all duration-300"></span>
          </button>

          <button
            onClick={() => scrollToSection('collections')}
            className="text-text-dark hover:text-forest-green relative py-1 px-2 transition-all duration-200 group"
          >
            Mục
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-forest-green group-hover:w-4/5 transition-all duration-300"></span>
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="text-text-dark hover:text-forest-green relative py-1 px-2 transition-all duration-200 group"
          >
            About
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-forest-green group-hover:w-4/5 transition-all duration-300"></span>
          </button>
        </div>

        {/* CTA Button - Ẩn trên mobile nhỏ, hiện từ sm trở lên */}
        <div className="hidden sm:block">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="px-5 py-2.5 bg-forest-green hover:bg-emerald-800 text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/30 whitespace-nowrap"
          >
            Liên hệ ngay
          </button>
        </div>
      </nav>
    </header>
  );
}