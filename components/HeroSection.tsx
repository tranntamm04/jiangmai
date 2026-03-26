'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-cream">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/nature-mountains.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/90 to-cream"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-forest-green mb-6 text-balance">
            Giang Mai và những người bạn
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Không biết viết cái gì ở phần này cả thế nên tự lướt xuống và xem ảnh đi, chả có gì hay ho đâu :v
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={scrollToGallery}
              className="px-8 py-4 bg-forest-green text-text-light font-medium rounded-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Xem ảnh ngay
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('collections');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border-2 border-forest-green text-forest-green font-medium rounded-sm hover:bg-forest-green hover:text-text-light transition-all duration-300"
            >
              Bộ sưu tập
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-forest-green" />
        </div>
      </div>
    </section>
  );
}
