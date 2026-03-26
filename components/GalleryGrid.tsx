'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { galleryImages, tags, GalleryImage } from '@/lib/gallery-data';
import ImageModal from './ImageModal';

export default function GalleryGrid() {
  // ✅ đổi category -> tag
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ filter theo tags[]
  const filteredImages = useMemo(() => {
    if (selectedTag === 'all') return galleryImages;

    return galleryImages.filter((img) =>
      img.tags.includes(selectedTag)
    );
  }, [selectedTag]);

  const currentImageIndex = filteredImages.findIndex(
    (img) => img.id === selectedImage?.id
  );

  const handlePrevious = () => {
    const newIndex =
      (currentImageIndex - 1 + filteredImages.length) %
      filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <section id="gallery" className="w-full bg-cream py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="section-title">Gallery</h2>
        </div>

        <div
          className="flex flex-wrap gap-3 justify-center mb-12 animate-slideUp"
          style={{ animationDelay: '0.1s' }}
        >
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedTag === tag.id
                  ? 'bg-forest-green text-text-light shadow-md'
                  : 'bg-white text-text-dark border-2 border-border-light hover:border-forest-green'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-card group cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => handleImageClick(image)}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={image.image}
                  alt={`Image ${image.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-sm">
                      Click to view
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Empty */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              No images found with this tag.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
}