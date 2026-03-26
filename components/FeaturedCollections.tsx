'use client';

import Image from 'next/image';
import { collections } from '@/lib/gallery-data';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCollections() {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="collections" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="section-title">Bộ sưu tập</h2>
          <p className="section-subtitle mx-auto">
            Khám phá ngay
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={scrollToGallery}
            >
              {/* Collection Card */}
              <div className="relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 h-80">
                {/* Image */}
                <Image
                  src={collection.coverImage}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 group-hover:from-black/90 transition-colors duration-300">
                  {/* Content */}
                  <div className="transform group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                        {collection.name}
                      </h3>
                      <div className="p-2 bg-white/20 rounded-full group-hover:bg-forest-green transition-colors duration-300">
                        <ArrowRight size={20} className="text-white" />
                      </div>
                    </div>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {collection.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-white/70 text-sm font-medium">
                        {collection.images.length} images
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={scrollToGallery}
            className="px-8 py-4 bg-forest-green text-text-light font-medium rounded-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Explore All Collections
          </button>
        </div>
      </div>
    </section>
  );
}
