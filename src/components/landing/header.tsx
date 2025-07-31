"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Bot } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary-foreground">
          <Bot className="w-7 h-7 text-accent"/>
          LoanIQ
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button onClick={() => scrollTo('problem-solution')} className="text-foreground/80 hover:text-foreground transition-colors">Solution</button>
          <button onClick={() => scrollTo('features')} className="text-foreground/80 hover:text-foreground transition-colors">Features</button>
          <button onClick={() => scrollTo('timeline')} className="text-foreground/80 hover:text-foreground transition-colors">Roadmap</button>
          <button onClick={() => scrollTo('who-we-are')} className="text-foreground/80 hover:text-foreground transition-colors">About</button>
        </nav>
        <Button
          onClick={() => scrollTo('cta')}
          className="shadow-sm shadow-accent/50 hover:shadow-lg hover:shadow-accent/50 transition-shadow"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
