import { MasonryItem } from '@/components/Masonry';

/**
 * Provide intrinsicWidth & intrinsicHeight matching the actual image dimensions.
 *
 * Screenshot (browser/app SS):  typically 1920×1080  → 16:9 landscape
 * Portrait photo:                typically 1080×1350  → 4:5 portrait
 * Square photo:                  typically 1080×1080  → 1:1
 * Full-page SS:                  typically 1440×2560  → tall portrait
 *
 * Adjust each item below to match your real images.
 */
export const galleryItems: MasonryItem[] = [
  {
    id: '1',
    img: '/images/gallery/1.png',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1080,
    caption: 'Meeting screenshot',
  },
  {
    id: '2',
    img: '/images/gallery/2.jpeg',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1080,
    caption: 'Meeting screenshot',
  },
  {
    id: '3',
    img: '/images/gallery/3.png',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1080,
    caption: 'Meeting screenshot',
  },
  {
    id: '4',

    img: '/images/gallery/identity.png',
    url: '',
    intrinsicWidth: 1440,
    intrinsicHeight: 2960,
    caption: 'coding camp identity',
  },

  {
    id: '5',
    img: '/images/gallery/progress 2.png',
    url: '',
    intrinsicWidth: 1280,
    intrinsicHeight: 960,
    caption: 'Softskills attendance',
  },
  {
    id: '6',
    img: '/images/gallery/progress 1.png',
    url: '',
    intrinsicWidth: 1080,
    intrinsicHeight: 1350,
    caption: 'Modul progress',
  },
  {
    id: '7',
    img: '/images/gallery/4.png',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1080,
    caption: 'Meeting screenshot',
  },
  {
    id: '8',
    img: '/images/gallery/financial.png',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1080,
    caption: '',
  },
  {
    id: '9',
    img: '/images/gallery/9.png',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1280,
    caption: '',
  },
  {
    id: '10',

    img: '/images/gallery/kompre.jpg',
    url: '',
    intrinsicWidth: 1440,
    intrinsicHeight: 2560,
    caption: 'Kompre',
  },
  {
    id: '11',
    img: '/images/gallery/11.jpeg',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1280,
    caption: 'Meeting screenshot',
  },
  {
    id: '12',
    img: '/images/gallery/6.png',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1080,
    caption: 'Meeting screenshot',
  },
  {
    id: '13',
    img: '/images/gallery/kompre2.jpg',
    url: '',
    intrinsicWidth: 1080,
    intrinsicHeight: 1350,
    caption: 'Kompre',
  },
  {
    id: '14',
    img: '/images/gallery/10.jpg',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1080,
    caption: 'Meeting screenshot',
  },
  {
    id: '15',
    img: '/images/gallery/purnama.jpg',
    url: '',
    intrinsicWidth: 1920,
    intrinsicHeight: 1080,
    caption: 'Meeting screenshot',
  },
];
