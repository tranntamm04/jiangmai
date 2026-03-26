# Premium Image Gallery Website

A stunning, fully responsive image gallery website built with Next.js 16, React 19, Tailwind CSS, and beautiful modern design optimized for both mobile and desktop.

## Features

✨ **Premium Design**
- Elegant cream and forest green color scheme
- Smooth animations and transitions
- Professional typography with serif headings
- Mobile-first responsive design

🖼️ **Gallery Features**
- 24 curated images across 4 collections:
  - Nature & Landscapes
  - Architecture & Design
  - Travel & Culture
  - Portraits & People
- Advanced filtering by category
- Full-screen lightbox modal with image navigation
- Smooth hover effects and transitions
- Lazy loading for optimal performance

🎯 **User Experience**
- Sticky navigation header with smooth scrolling
- Hero section with compelling CTAs
- Featured collections showcase
- About section with mission statement
- Complete footer with contact information
- Keyboard navigation support (ESC to close modal, arrows to navigate)

📱 **Responsive Features**
- Single column on mobile, grid layout on desktop
- Touch-friendly mobile navigation
- Optimized images using Next.js Image component
- Mobile-optimized modal lightbox
- Hamburger menu for mobile devices

## Tech Stack

- **Framework**: Next.js 16.2.0
- **React**: 19.2.4
- **Styling**: Tailwind CSS 4.2.0
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist (sans), Crimson Text (serif)
- **Image Optimization**: Next.js Image Component

## Project Structure

```
/app
  /layout.tsx          # Root layout with metadata
  /globals.css         # Global styles and color system
  /page.tsx            # Main landing page
/components
  /Header.tsx          # Navigation header
  /HeroSection.tsx     # Hero banner
  /GalleryGrid.tsx     # Main gallery with filtering
  /ImageModal.tsx      # Lightbox modal
  /FeaturedCollections.tsx  # Collections showcase
  /AboutSection.tsx    # About section
  /Footer.tsx          # Footer with contact
/lib
  /gallery-data.ts     # Hardcoded gallery data
/public/images/       # 24 curated gallery images
```

## Color System

- **Primary Background**: Cream (#F5F0E8)
- **Primary Accent**: Forest Green (#2D5A3D)
- **Secondary**: Warm Beige (#E8D5C4)
- **Gold Accent**: #8B6F47
- **Text Dark**: #1A1A1A
- **Border Light**: #E0D5CA

## Getting Started

### Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically:
   - Build your project
   - Optimize images
   - Deploy to a global CDN
   - Set up automatic deployments on new pushes

### One-Click Deploy

You can also deploy directly using this button (if connected to a git repo):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Key Features Explained

### Gallery Filtering
Click category buttons to filter images by type. Smooth transitions between views with staggered animations.

### Lightbox Modal
- Click any image to open full-screen view
- Navigate with arrow buttons or keyboard arrows
- Close with X button or ESC key
- View image metadata and tags

### Smooth Scrolling
All navigation links use smooth scroll behavior to section IDs for seamless page navigation.

### Responsive Design
- **Mobile**: Single column layout, hamburger menu
- **Tablet**: 2-column grid
- **Desktop**: 3-4 column masonry-style grid

### Performance Optimizations
- Next.js Image component with automatic optimization
- Lazy loading for off-screen images
- CSS animations instead of JavaScript
- Optimized fonts loaded from Google Fonts
- Proper semantic HTML

## Customization

### Adding More Images

Edit `/lib/gallery-data.ts` to add new images:

```typescript
{
  id: 'unique-id',
  title: 'Image Title',
  description: 'Image description',
  category: 'nature', // nature, architecture, travel, or portrait
  image: '/images/your-image.jpg',
  tags: ['tag1', 'tag2'],
  featured: true, // Show in featured sections
}
```

### Changing Colors

Edit `/app/globals.css` CSS variables:
```css
:root {
  --background: #F5F0E8;
  --primary: #2D5A3D;
  /* ... other colors ... */
}
```

Or modify the Tailwind config in `tailwind.config.ts`.

### Updating Content

- **Hero Section**: Edit `components/HeroSection.tsx`
- **About Section**: Edit `components/AboutSection.tsx`
- **Footer Info**: Edit `components/Footer.tsx`
- **Navigation Links**: Edit `components/Header.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

- Fast page loads with Next.js optimization
- Lighthouse scores optimized
- Mobile-friendly design
- Excellent Core Web Vitals

## License

This project is created for personal or commercial use. Feel free to customize and deploy!

## Support

For issues or questions:
1. Check the code comments
2. Review the Next.js documentation
3. Consult the Tailwind CSS docs
4. Visit the shadcn/ui component library

---

Built with ❤️ using Next.js and modern web technologies.
