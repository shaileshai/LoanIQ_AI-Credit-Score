import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div id="problem">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground">The Problem: An Outdated System</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Millions are excluded from traditional credit systems due to outdated, biased scoring models that fail to see the full picture. This stifles growth and perpetuates inequality.
            </p>
            <Card className="mt-8 bg-card/50 border-destructive/20 shadow-lg shadow-destructive/10">
              <CardHeader>
                <CardTitle className="text-destructive/80">Old Systems Fail</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center gap-2"><span>-</span> Static, historical data</li>
                  <li className="flex items-center gap-2"><span>-</span> Inherent biases</li>
                  <li className="flex items-center gap-2"><span>-</span> Slow, manual processes</li>
                  <li className="flex items-center gap-2"><span>-</span> High operational costs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div id="solution" className="relative">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <Card className="relative bg-background/80 backdrop-blur-sm">
                <CardHeader>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground">The Solution: Agentic AI</h2>
                    <p className="mt-4 text-lg text-foreground/70">
                    LoanIQ uses an Agentic AI workforce to provide a dynamic, fair, and real-time assessment of creditworthiness.
                    </p>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-center gap-2"><span className="text-accent">+</span> Dynamic, real-time signals</li>
                      <li className="flex items-center gap-2"><span className="text-accent">+</span> Explainable & transparent AI</li>
                      <li className="flex items-center gap-2"><span className="text-accent">+</span> Automated multi-agent workflows</li>
                      <li className="flex items-center gap-2"><span className="text-accent">+</span> Reduced risk, increased inclusion</li>
                    </ul>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
