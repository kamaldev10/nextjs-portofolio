// components/sections/GallerySection.tsx
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';
import Masonry from '@/components/Masonry';
import { galleryItems } from '@/lib/data/gallery-data';

export default function GallerySection() {
  return (
    <section id='gallery' className='py-24 md:py-32'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Section header */}
        <div className='mb-14'>
          <p className={cn(typography.overline, 'mb-3 text-primary')}>
            Gallery
          </p>
          <h2 className={cn(typography.h1, 'text-foreground')}>
            Moments &amp; Work
          </h2>
          <div className='mt-4 w-12 h-0.5 bg-primary rounded-full' />
          <p className={cn(typography.body, 'mt-4 max-w-md')}>
            Screenshots, projects, and behind-the-scenes moments.
          </p>
        </div>

        {/* Masonry grid */}
        <Masonry
          items={galleryItems}
          ease='power3.out'
          duration={0.3}
          stagger={0.06}
          animateFrom='bottom'
          scaleOnHover
          hoverScale={0.97}
          blurToFocus
          colorShiftOnHover={false}
          gap={12}
        />
      </div>
    </section>
  );
}
