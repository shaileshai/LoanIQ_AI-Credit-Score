"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LoanIQIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 text-accent"
  >
    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
    <path d="M2 17L12 22L22 17" />
    <path d="M2 12L12 17L22 12" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className={cn(
            "flex items-center space-x-3 group",
            pathname === '/' && "scale-105"
          )}>
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <LoanIQIcon />
            </div>
            <span className={cn(
              "font-bold text-2xl font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300",
              pathname === '/' && "font-extrabold"
            )}>LoanIQ</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/Features" className={cn(
              "text-sm font-medium transition-all duration-300 relative group",
              pathname === '/Features' 
                ? "text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold" 
                : "text-foreground/70 hover:text-primary"
            )}>
              Features
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                pathname === '/Features' 
                  ? "w-full bg-gradient-to-r from-primary to-accent rounded-full" 
                  : "w-0 bg-primary group-hover:w-full"
              )}></span>
            </Link>
            <Link href="/Product" className={cn(
              "text-sm font-medium transition-all duration-300 relative group",
              pathname === '/Product' 
                ? "text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold" 
                : "text-foreground/70 hover:text-primary"
            )}>
              Product
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                pathname === '/Product' 
                  ? "w-full bg-gradient-to-r from-primary to-accent rounded-full" 
                  : "w-0 bg-primary group-hover:w-full"
              )}></span>
            </Link>
            <Link href="/About" className={cn(
              "text-sm font-medium transition-all duration-300 relative group",
              pathname === '/About' 
                ? "text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold" 
                : "text-foreground/70 hover:text-primary"
            )}>
              About
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                pathname === '/About' 
                  ? "w-full bg-gradient-to-r from-primary to-accent rounded-full" 
                  : "w-0 bg-primary group-hover:w-full"
              )}></span>
            </Link>
            <Link href="/Contact" className={cn(
              "text-sm font-medium transition-all duration-300 relative group",
              pathname === '/Contact' 
                ? "text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-semibold" 
                : "text-foreground/70 hover:text-primary"
            )}>
              Contact
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                pathname === '/Contact' 
                  ? "w-full bg-gradient-to-r from-primary to-accent rounded-full" 
                  : "w-0 bg-primary group-hover:w-full"
              )}></span>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex"
              asChild>
              <Link href="/Contact">Contact Sales</Link>
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary/90 to-accent/90 hover:from-primary hover:to-accent text-white shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20"
              asChild>
              <Link href="/Dashboard">Request Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;