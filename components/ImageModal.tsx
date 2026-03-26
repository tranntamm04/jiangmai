'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '@/lib/gallery-data';

interface ImageModalProps {
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ImageModal({ image, isOpen, onClose, onPrevious, onNext }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-200"
          aria-label="Close"
        >
          <X size={24} className="text-black" />
        </button>

        {/* Image Container */}
        <div className="relative flex-1 flex items-center justify-center bg-black">
          <Image
            src={image.image}
            alt={image.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} className="text-black" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-200"
          aria-label="Next image"
        >
          <ChevronRight size={24} className="text-black" />
        </button>

        {/* Image Info */}
        <div className="bg-white p-6 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-text-dark mb-2">{image.title}</h2>
          <p className="text-muted-foreground mb-4">{image.description}</p>
          <div className="flex flex-wrap gap-2">
            {image.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-warm-beige text-text-dark text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
