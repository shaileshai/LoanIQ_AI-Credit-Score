import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import ProblemSolution from '@/components/landing/problem-solution';
import HowItWorks from '@/components/landing/how-it-works';
import Features from '@/components/landing/features';
import WhoWeServe from '@/components/landing/who-we-serve';
import Compliance from '@/components/landing/compliance';
import Timeline from '@/components/landing/timeline';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';
import DashboardDemo from '@/components/landing/dashboard-demo';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/40">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <DashboardDemo />
        <Features />
        <WhoWeServe />
        <Compliance />
        <Timeline />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
