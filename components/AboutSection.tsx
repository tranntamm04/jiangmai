'use client';

import { Award, Eye, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Eye,
      title: 'Curated Selection',
      description: 'Handpicked images showcasing the finest in visual storytelling and artistic expression.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Vision',
      description: 'Each photograph is selected for its unique perspective and compelling visual narrative.',
    },
    {
      icon: Award,
      title: 'Quality & Excellence',
      description: 'Professional-grade images that capture moments of beauty, emotion, and inspiration.',
    },
  ];

  return (
    <section id="about" className="w-full bg-cream py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="section-title">About Our Gallery</h2>
          <p className="section-subtitle mx-auto">
            Dedicated to showcasing extraordinary visual content from around the world
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="animate-slideUp">
            <h3 className="text-3xl font-serif font-bold text-forest-green mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We believe that every photograph has a story to tell. Our gallery is dedicated to celebrating the art of visual storytelling, bringing together exceptional images that inspire, move, and captivate audiences from all walks of life.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              From breathtaking landscapes to intimate portraits, from architectural marvels to cultural treasures, our collection spans diverse categories and perspectives. Each image is carefully selected to represent the finest in contemporary photography.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('gallery');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-forest-green text-text-light rounded-sm font-medium hover:opacity-90 transition-all"
              >
                Explore Gallery
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 border-2 border-forest-green text-forest-green rounded-sm font-medium hover:bg-forest-green hover:text-text-light transition-all"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Stats / Features */}
          <div className="space-y-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex gap-4 p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 animate-slideUp"
                  style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-forest-green/10 rounded-sm flex items-center justify-center">
                      <Icon className="text-forest-green" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-text-dark mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-16 border-t border-border-light">
          <div className="text-center animate-fadeIn">
            <p className="text-3xl sm:text-4xl font-serif font-bold text-forest-green mb-2">24+</p>
            <p className="text-gray-600 font-medium">Collections</p>
          </div>
          <div className="text-center animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-forest-green mb-2">1000+</p>
            <p className="text-gray-600 font-medium">Images</p>
          </div>
          <div className="text-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-forest-green mb-2">50K+</p>
            <p className="text-gray-600 font-medium">Visitors</p>
          </div>
        </div>
      </div>
    </section>
  );
}
