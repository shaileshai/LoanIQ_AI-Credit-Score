import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, Clock, Users, DollarSign, ArrowRight, Zap, Eye, Bot, ShieldCheck } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Problem Card */}
          <div id="problem">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground/90">The Problem: An Outdated System</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Millions are excluded from traditional credit systems due to outdated, biased scoring models that fail to see the full picture. This stifles growth and perpetuates inequality.
            </p>
            <Card className="mt-8 bg-card/50 border-destructive/20 shadow-lg shadow-destructive/10">
              <CardHeader>
                <CardTitle className="text-destructive/80">Legacy Systems Fall Short</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 mt-1 text-destructive/70 shrink-0" />
                    <span><span className="font-semibold">Static Data:</span> Relies on historical, often incomplete credit reports.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 mt-1 text-destructive/70 shrink-0" />
                    <span><span className="font-semibold">Inherent Biases:</span> Perpetuates inequalities by penalizing thin-file applicants.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 text-destructive/70 shrink-0" />
                    <span><span className="font-semibold">Slow Processes:</span> Manual reviews lead to long waiting times and high operational friction.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 mt-1 text-destructive/70 shrink-0" />
                    <span><span className="font-semibold">High Costs:</span> Inefficient workflows increase operational overhead for lenders.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Solution Card */}
          <div id="solution" className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            <Card className="relative bg-background/90 backdrop-blur-sm shadow-2xl shadow-primary/10 border-primary/20">
                <CardHeader>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">The Solution: Agentic AI</h2>
                    <p className="mt-4 text-lg text-foreground/70">
                    LoanIQ uses an Agentic AI workforce to provide a dynamic, fair, and real-time assessment of creditworthiness.
                    </p>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4 text-foreground/80">
                      <li className="flex items-start gap-3">
                          <Zap className="w-5 h-5 mt-1 text-accent shrink-0" />
                          <span><span className="font-semibold">Dynamic Signals:</span> Analyzes real-time, alternative data for a holistic view.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Eye className="w-5 h-5 mt-1 text-accent shrink-0" />
                          <span><span className="font-semibold">Explainable AI:</span> Delivers transparent, understandable, and auditable decisions.</span>
                      </li>
                       <li className="flex items-start gap-3">
                          <Bot className="w-5 h-5 mt-1 text-accent shrink-0" />
                          <span><span className="font-semibold">Automated Workflows:</span> Boosts efficiency and reduces manual review burdens.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <ShieldCheck className="w-5 h-5 mt-1 text-accent shrink-0" />
                          <span><span className="font-semibold">Reduced Risk:</span> Increases financial inclusion while maintaining robust risk assessment.</span>
                      </li>
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
