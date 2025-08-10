import React from 'react';
import Navbar from './navbar';
import Footer from '@/components/landing/footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/40">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;