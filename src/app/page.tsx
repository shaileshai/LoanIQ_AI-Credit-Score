import Navbar from '@/components/navigation/navbar';
import Hero from '@/components/landing/hero';
import ProblemSolution from '@/components/landing/problem-solution';
import WhoWeServe from '@/components/landing/who-we-serve';
import Compliance from '@/components/landing/compliance';
import Faq from '@/components/landing/faq';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';
import Offerings from '@/components/landing/offerings';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/40">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div id="problem-solution">
          <ProblemSolution />
        </div>
        <Offerings />
        <WhoWeServe />
        <Compliance />
        <Faq />
        <div id="cta">
          <Cta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
