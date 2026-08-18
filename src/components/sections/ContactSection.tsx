'use client';

// components/sections/ContactSection.tsx
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/typography';
import { Send, MapPin, Github } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const contactMeta = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pekanbaru, Riau — Indonesia',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kamaldev10',
    href: 'https://github.com/kamaldev10',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'alimusthafakamal',
    href: 'https://linkedin.com/in/alimusthafakamal',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputBase = cn(
    'w-full px-4 py-3 rounded-md bg-muted/40 border border-border text-foreground placeholder:text-muted-foreground/60',
    'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/60',
    'transition-all duration-200 text-sm',
  );

  return (
    <section id='contact' className='py-24 md:py-32 bg-card/30'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='mb-16'>
          <p className={cn(typography.overline, 'mb-3 text-primary')}>
            Contact
          </p>
          <h2 className={cn(typography.h1, 'text-foreground')}>Get in touch</h2>
          <div className='mt-4 w-12 h-0.5 bg-primary rounded-full' />
        </div>

        {/* Two-column grid */}
        <div className='grid md:grid-cols-2 gap-12 lg:gap-20'>
          {/* Left — meta */}
          <div className='space-y-8'>
            <p className={cn(typography.bodyLg)}>
              Have a project in mind or want to collaborate? I&apos;m open to
              full-time roles, freelance work, and interesting conversations.
            </p>

            <div className='space-y-5 pt-2'>
              {contactMeta.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className='flex items-start gap-4'>
                  <div className='mt-0.5 p-2 rounded-md border border-border bg-muted/30 text-muted-foreground'>
                    <Icon className='w-4 h-4' />
                  </div>
                  <div>
                    <p className={cn(typography.caption, 'mb-0.5')}>{label}</p>
                    {href ? (
                      <Link
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-sm text-foreground hover:text-primary transition-colors duration-200'
                      >
                        {value}
                      </Link>
                    ) : (
                      <p className='text-sm text-foreground'>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className='space-y-4' noValidate>
            <div>
              <label
                htmlFor='name'
                className={cn(typography.caption, 'block mb-1.5')}
              >
                Name
              </label>
              <input
                id='name'
                type='text'
                name='name'
                placeholder='Your name'
                value={formData.name}
                onChange={handleChange}
                required
                className={inputBase}
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className={cn(typography.caption, 'block mb-1.5')}
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='you@example.com'
                value={formData.email}
                onChange={handleChange}
                required
                className={inputBase}
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className={cn(typography.caption, 'block mb-1.5')}
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={5}
                placeholder='Tell me about your project...'
                value={formData.message}
                onChange={handleChange}
                required
                className={cn(inputBase, 'resize-none')}
              />
            </div>

            <button
              type='submit'
              disabled={status === 'submitting'}
              className={cn(
                typography.button,
                'w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md',
                'bg-primary text-primary-foreground hover:bg-primary/90',
                'transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed glow-indigo',
              )}
            >
              <Send className='w-4 h-4' />
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className='text-sm text-green-400 text-center'>
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className='text-sm text-red-400 text-center'>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
