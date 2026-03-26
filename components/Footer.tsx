'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="w-full bg-text-dark text-white">
      {/* CTA Section */}
      <div className="bg-forest-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with us for inquiries, licensing, or custom gallery solutions.
            </p>
            <a
              href="mailto:contact@gallery.com"
              className="inline-block px-8 py-3 bg-text-light text-forest-green font-medium rounded-sm hover:bg-warm-beige transition-all duration-300"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-sm bg-forest-green flex items-center justify-center text-text-light font-serif text-xl font-bold">
                G
              </div>
              <span className="font-serif text-2xl font-bold text-text-light">Gallery</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium image gallery showcasing the finest in visual storytelling across multiple categories.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-white/10 hover:bg-forest-green flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-white/10 hover:bg-forest-green flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-white/10 hover:bg-forest-green flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-sm bg-white/10 hover:bg-forest-green flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('collections')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Mail size={20} className="text-forest-green mt-1 flex-shrink-0" />
                <a href="mailto:contact@gallery.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  contact@gallery.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Phone size={20} className="text-forest-green mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={20} className="text-forest-green mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Gallery Street<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on new collections.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-white/10 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-forest-green"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-forest-green text-text-light rounded-sm font-medium hover:opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2024 Gallery. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
