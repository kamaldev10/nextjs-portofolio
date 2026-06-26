// components/sections/CertificateSection.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';
import { featuredCertificates } from '@/lib/data/certificates-data';
import MotionCarousel from '../MotionCarousel';
import FeaturedCertificateCard from '../certificates/FeaturedCertificateCard';

export default function CertificatesSection() {
  return (
    <section id='certificates' className='py-24 md:py-32 overflow-hidden'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14'>
          <div>
            <p className={cn(typography.overline, 'mb-3 text-primary')}>
              Credentials
            </p>
            <h2 className={cn(typography.h1, 'text-foreground')}>
              Certifications
            </h2>
            <div className='mt-4 w-12 h-0.5 bg-primary rounded-full' />
            <p className={cn(typography.body, 'mt-4 max-w-md')}>
              Verified professional qualifications from recognized programs.
            </p>
          </div>
          <Link
            href='/certificates'
            className={cn(
              typography.button,
              'inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 flex-shrink-0 group',
            )}
          >
            All certificates
            <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1' />
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div className='w-full'>
        <MotionCarousel
          className='max-w-6xl mx-auto px-6'
          itemClassName='flex-shrink-0 w-72 md:w-80'
        >
          {featuredCertificates.map((cert) => (
            <FeaturedCertificateCard key={cert.title} certificate={cert} />
          ))}
        </MotionCarousel>
      </div>
    </section>
  );
}
