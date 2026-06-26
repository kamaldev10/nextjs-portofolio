// components/sections/AboutSection.tsx
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';
import ProfileCard from '../profile-card/ProfileCard';

const coreTech = [
  'MERN Stack & Next.js',
  'Automated Testing (BDD)',
  'RESTful API Design',
];
const extendedSkills = [
  'UI/UX Design (Figma)',
  'Social Media Design (Canva)',
  'Cloud Deployment (Docker)',
];

export default function AboutSection() {
  return (
    <section id='about' className='py-24 md:py-32 bg-card/30'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Section header */}
        <div className='mb-16'>
          <p className={cn(typography.overline, 'mb-3 text-primary')}>
            About me
          </p>
          <h2 className={cn(typography.h1, 'text-foreground')}>Who I am</h2>
          <div className='mt-4 w-12 h-0.5 bg-primary rounded-full' />
        </div>

        {/* Content grid */}
        <div className='grid md:grid-cols-5 gap-12 lg:gap-20 items-center'>
          {/* Profile card */}
          <div className='md:col-span-2 flex justify-center md:justify-start'>
            <div className='relative'>
              {/* Glow ring behind card */}
              <div
                aria-hidden
                className='absolute inset-0 rounded-2xl bg-primary/10 blur-2xl scale-105'
              />
              <ProfileCard
                imageSrc='/images/profile.jpg'
                altText='Ali Musthafa Kamal'
                captionText='Ali Musthafa Kamal'
                containerHeight='420px'
                containerWidth='300px'
                imageHeight='420px'
                imageWidth='300px'
                rotateAmplitude={8}
                scaleOnHover={1.04}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
              />
            </div>
          </div>

          {/* Text content */}
          <div className='md:col-span-3 space-y-6'>
            <p className={cn(typography.bodyLg)}>
              I&apos;m a{' '}
              <strong className='text-foreground font-semibold'>
                Full-Stack Developer
              </strong>{' '}
              and Computer Science Bachelor&apos;s Degree at{' '}
              <strong className='text-foreground font-semibold'>
                University of Riau
              </strong>
              , passionate about building scalable, user-centric digital
              solutions.
            </p>

            <p className={cn(typography.body)}>
              With hands-on experience from intensive bootcamps — including{' '}
              <span className='text-foreground/80'>
                Dicoding Full-Stack Developer (2026)
              </span>
              ,{' '}
              <span className='text-foreground/80'>
                Dicoding Full-Stack Developer (2025)
              </span>
              , and{' '}
              <span className='text-foreground/80'>
                Binar Academy Frontend Developer (2024)
              </span>{' '}
              — I have mastered the MERN stack and Next.js, specializing in
              applications that are functional, maintainable, and tested.
            </p>

            <p className={cn(typography.body)}>
              Beyond code, leadership in{' '}
              <strong className='text-foreground/80'>KPA EMC²</strong> and
              active involvement in{' '}
              <strong className='text-foreground/80'>
                Himalkom FMIPA UNRI
              </strong>{' '}
              and{' '}
              <strong className='text-foreground/80'>FORMADIKSI UNRI</strong>{' '}
              have sharpened my ability to deliver in collaborative, fast-paced
              environments.
            </p>

            {/* Skill lists */}
            <div className='grid grid-cols-2 gap-6 pt-4 border-t border-border'>
              <div>
                <h4 className={cn(typography.h4, 'text-foreground mb-3')}>
                  Core Tech
                </h4>
                <ul className='space-y-1.5'>
                  {coreTech.map((item) => (
                    <li
                      key={item}
                      className='flex items-center gap-2 text-sm text-muted-foreground'
                    >
                      <span className='w-1 h-1 rounded-full bg-primary flex-shrink-0' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={cn(typography.h4, 'text-foreground mb-3')}>
                  Extended Skills
                </h4>
                <ul className='space-y-1.5'>
                  {extendedSkills.map((item) => (
                    <li
                      key={item}
                      className='flex items-center gap-2 text-sm text-muted-foreground'
                    >
                      <span className='w-1 h-1 rounded-full bg-accent flex-shrink-0' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
