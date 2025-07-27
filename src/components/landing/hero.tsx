"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Starfield from '@/components/landing/starfield';

const Hero = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="hero" className="relative h-screen min-h-[800px] w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Starfield />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-primary-foreground to-primary-foreground/70">
          Smarter Credit Decisions.
          <br />
          Powered by Agentic AI.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
          We help Credit Unions, Community Banks, and Microfinance firms evaluate creditworthiness using real-time, explainable AI agents trained on alternative credit signals and domain-specific data.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => scrollTo('cta')} size="lg" className="font-bold text-lg shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300">
            Get Started
          </Button>
          <Button onClick={() => scrollTo('cta')} size="lg" variant="ghost" className="font-bold text-lg border-accent/50 text-accent hover:bg-accent/10 hover:text-accent hover:border-accent transition-all duration-300">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
