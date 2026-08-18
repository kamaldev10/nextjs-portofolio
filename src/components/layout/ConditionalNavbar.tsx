'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import HomeNav from '@/components/layout/HomeNav';

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (pathname === '/') {
    return <HomeNav />;
  } else {
    return <Navbar />;
  }
}
