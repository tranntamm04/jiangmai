export interface GalleryImage {
  id: string;
  image: string;
  tags: string[];
  featured?: boolean;
}
export interface GalleryCollection {
  id: string;
  name: string;
  description: string;
  images: GalleryImage[];
  featured: boolean;
  coverImage: string;
}

export const galleryImages: GalleryImage[] = [
  // Giang Mai
  { id: 'Giang Mai-1', image: '/images/a.png', tags: ['Giang Mai'], featured: true },
  { id: 'Giang Mai-2', image: '/images/a1.png', tags: ['Trumpet'], featured: false },
  { id: 'Giang Mai-3', image: '/images/a2.png', tags: ['Giang Mai', 'Da Heo'], featured: false },
  { id: 'Giang Mai-4', image: '/images/a3.png', tags: ['Giang Mai'], featured: true },
  { id: 'Giang Mai-5', image: '/images/a4.png', tags: ['Giang Mai', 'Bắc Ninh 2.0'], featured: false },
  { id: 'Giang Mai-6', image: '/images/a5.png', tags: ['Giang Mai', 'Da Heo'], featured: true },

  { id: 'Da Heo-1', image: '/images/a6.png', tags: ['Giang Mai'], featured: true },
  { id: 'Da Heo-2', image: '/images/a7.png', tags: ['Giang Mai'], featured: false },
  { id: 'Da Heo-3', image: '/images/a8.png', tags: ['Giang Mai', 'Bắc Ninh 2.0'], featured: false },
  { id: 'Da Heo-4', image: '/images/a9.png', tags: ['Giang Mai'], featured: true },
  { id: 'Da Heo-5', image: '/images/a10.png', tags: ['Giang Mai'], featured: false },
  { id: 'Da Heo-6', image: '/images/a11.png', tags: ['Giang Mai'], featured: true },

  { id: 'Bắc Ninh 2.0-1', image: '/images/a12.png', tags: ['Giang Mai'], featured: true },
  { id: 'Bắc Ninh 2.0-2', image: '/images/a13.png', tags: ['Da Heo'], featured: false },
  { id: 'Bắc Ninh 2.0-3', image: '/images/a14.png', tags: ['Giang Mai', 'Bắc Ninh 2.0', 'Trumpet'], featured: false },
  { id: 'Bắc Ninh 2.0-4', image: '/images/a15.png', tags: ['Giang Mai', 'Bắc Ninh 2.0'], featured: true },
  { id: 'Bắc Ninh 2.0-5', image: '/images/a16.png', tags: ['Giang Mai'], featured: false },
  { id: 'Bắc Ninh 2.0-6', image: '/images/a17.png', tags: ['Giang Mai', 'Bắc Ninh 2.0'], featured: true },

  { id: 'LS 395-1', image: '/images/a18.png', tags: ['Giang Mai'], featured: true },
  { id: 'LS 395-2', image: '/images/a19.png', tags: ['Giang Mai'], featured: false },
  { id: 'LS 395-3', image: '/images/a20.png', tags: ['Giang Mai'], featured: false },
  { id: 'LS 395-4', image: '/images/a21.png', tags: ['Giang Mai'], featured: true },
  { id: 'LS 395-5', image: '/images/a22.png', tags: ['Giang Mai', 'Da Heo'], featured: false },
  { id: 'LS 395-6', image: '/images/a23.png', tags: ['Giang Mai'], featured: true },
];

export const tags = [
  { id: 'all', name: 'All', color: 'forest-green' },
  { id: 'Giang Mai', name: 'Giang Mai', color: 'green-600' },
  { id: 'Da Heo', name: 'Da Heo', color: 'slate-600' },
  { id: 'Bắc Ninh 2.0', name: 'Bắc Ninh 2.0', color: 'amber-600' },
  { id: 'LS 395', name: 'LS 395', color: 'rose-600' },
  { id: 'Trumpet', name: 'Trumpet', color: 'rose-600' },
];

export const collections: GalleryCollection[] = [
  {
    id: 'Giang Mai',
    name: 'Giang Mai Súc Lô',
    description:
      'Explore the breathtaking beauty of natural landscapes, from mountains and forests to oceans and deserts.',
    images: galleryImages.filter((img) => img.tags.includes('Giang Mai')),
    featured: true,
    coverImage: '/images/a.png',
  },
  {
    id: 'Da Heo',
    name: 'Ngoo Văn Gia Heo',
    description:
      'Discover stunning architectural masterpieces and modern design innovations from around the world.',
    images: galleryImages.filter((img) => img.tags.includes('Da Heo')),
    featured: true,
    coverImage: '/images/a6.png',
  },
  {
    id: 'Bắc Ninh 2.0',
    name: 'Bắc Ninh quê tôi',
    description:
      'Journey through vibrant cultures and discover hidden gems from destinations across the globe.',
    images: galleryImages.filter((img) => img.tags.includes('Bắc Ninh 2.0')),
    featured: true,
    coverImage: '/images/a12.png',
  },
  {
    id: 'LS 395',
    name: 'Mường Thanh Phù Vân',
    description:
      'Intimate LS 395s and compelling stories of people from different walks of life.',
    images: galleryImages.filter((img) => img.tags.includes('LS 395')),
    featured: true,
    coverImage: '/images/a18.png',
  },
];

export const featuredImages = galleryImages.filter((img) => img.featured);