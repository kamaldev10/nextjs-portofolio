// components/sections/SkillsSection.tsx
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';
import LogoLoop, { LogoItem } from '../LogoLoop';

const skills: LogoItem[] = [
  { alt: 'HTML5', src: '/images/skills/html5.svg', width: 70, height: 70 },
  { alt: 'CSS3', src: '/images/skills/css3.svg', width: 70, height: 70 },
  {
    alt: 'JavaScript',
    src: '/images/skills/javascript.svg',
    width: 70,
    height: 70,
  },
  {
    alt: 'TypeScript',
    src: '/images/skills/typescript.svg',
    width: 70,
    height: 70,
  },
  { alt: 'React.js', src: '/images/skills/react.svg', width: 70, height: 70 },
  { alt: 'Next.js', src: '/images/skills/nextjs.svg', width: 70, height: 70 },
  { alt: 'Node.js', src: '/images/skills/nodejs.svg', width: 70, height: 70 },
  {
    alt: 'Express.js',
    src: '/images/skills/express.svg',
    width: 70,
    height: 70,
  },
  {
    alt: 'Nest.js',
    src: '/images/skills/nestjs.svg',
    width: 70,
    height: 70,
  },
  {
    alt: 'Tailwind CSS',
    src: '/images/skills/tailwindcss.svg',
    width: 70,
    height: 70,
  },
  {
    alt: 'Bootstrap',
    src: '/images/skills/bootstrap.svg',
    width: 70,
    height: 70,
  },
  { alt: 'Figma', src: '/images/skills/figma.svg', width: 70, height: 70 },
  { alt: 'Shadcn UI', src: '/images/skills/shadcn.svg', width: 70, height: 70 },
  { alt: 'Prisma', src: '/images/skills/prisma.svg', width: 70, height: 70 },
  {
    alt: 'Supabase',
    src: '/images/skills/supabase.svg',
    width: 70,
    height: 70,
  },
  {
    alt: 'PostgreSQL',
    src: '/images/skills/postgresql.svg',
    width: 70,
    height: 70,
  },
  { alt: 'MongoDB', src: '/images/skills/mongodb.svg', width: 70, height: 70 },
  { alt: 'Git', src: '/images/skills/git.svg', width: 70, height: 70 },
  { alt: 'GitHub', src: '/images/skills/github.svg', width: 70, height: 70 },
  { alt: 'Docker', src: '/images/skills/docker.svg', width: 70, height: 70 },
  { alt: 'vercel', src: '/images/skills/vercel.svg', width: 70, height: 70 },
  { alt: 'Leaflet', src: '/images/skills/leaflet.svg', width: 70, height: 70 },
];

export default function SkillsSection() {
  return (
    <section id='skills' className='py-24 md:py-32 overflow-hidden'>
      <div className='max-w-6xl mx-auto px-6 mb-12'>
        <p className={cn(typography.overline, 'mb-3 text-primary')}>
          Tech stack
        </p>
        <h2 className={cn(typography.h1, 'text-foreground')}>
          Skills &amp; Tools
        </h2>
        <div className='mt-4 w-12 h-0.5 bg-primary rounded-full' />
      </div>

      {/* Marquee with fade edges */}
      <div className='relative max-w-6xl mx-auto px-6 overflow-hidden'>
        {/* Left fade */}
        <div
          aria-hidden
          className='pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent'
        />
        {/* Right fade */}
        <div
          aria-hidden
          className='pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent'
        />

        <LogoLoop
          logos={skills}
          speed={50}
          direction='left'
          logoHeight={70}
          gap={48}
          pauseOnHover
          scaleOnHover
          ariaLabel='Skill logo'
          className='py-2 sm:py-4 bg-gray-50'
        />
      </div>
    </section>
  );
}
