import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, Clock, Users, DollarSign, Zap, Eye, Bot, ShieldCheck, TrendingDown, TrendingUp, Brain } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Credit decisions are broken
            <span className="block text-2xl md:text-3xl font-light text-foreground/70 mt-2">
              We're fixing the $400B problem
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Legacy systems reject 45% of qualified borrowers. That's not risk management—it's missed opportunity.
          </p>
        </div>
        {/* Simple Market Opportunity */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">$400B</div>
              <div className="text-xl font-medium text-foreground/80 mb-6">Lost annually to legacy credit systems</div>
              <div className="space-y-3 text-foreground/60">
                <div className="flex items-center justify-center font-light md:justify-start space-x-2">
                  <div className="w-2 h-2 bg-red-400 font-light rounded-full"></div>
                  <span>45% of qualified borrowers rejected</span>
                </div>
                <div className="flex items-center justify-center font-light md:justify-start space-x-2">
                  <div className="w-2 h-2 bg-orange-400 font-light rounded-full"></div>
                  <span>$2,400 cost per delayed application</span>
                </div>
                <div className="flex items-center justify-center font-light md:justify-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 font-light rounded-full"></div>
                  <span>3-4 weeks vs 60 seconds processing</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold font-headline text-foreground mb-4">The solution is simple</div>
              <p className="text-foreground/70 mb-6">
                AI that sees what legacy systems miss. Faster decisions, better outcomes, 
                and the ability to serve customers others can't.
              </p>
              <div className="inline-flex items-center space-x-4 text-sm text-slate-500">
                <span>99.7% accuracy</span>
                <span>•</span>
                <span>60 second decisions</span>
                <span>•</span>
                <span>Transparent AI</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Simple Problem-Solution Flow */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-headline text-foreground mb-6">The problem</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-red-400 pl-4">
                  <div className="text-sm text-foreground/60 mb-1">Data limitations</div>
                  <div className="text-foreground/70">Historical reports only, missing real-time behavior</div>
                </div>
                <div className="border-l-2 border-orange-400 pl-4">
                  <div className="text-sm text-foreground/60 mb-1">Access barriers</div>
                  <div className="text-foreground/70">68% of thin-file applicants unfairly penalized</div>
                </div>
                <div className="border-l-2 border-blue-400 pl-4">
                  <div className="text-sm text-foreground/60 mb-1">Process inefficiency</div>
                  <div className="text-foreground/70">3-4 week delays, $2,400 cost per application</div>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-headline text-foreground mb-6">Our approach</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-green-400 pl-4">
                  <div className="text-sm text-foreground/60 mb-1">Intelligent assessment</div>
                  <div className="text-foreground/70">Multi-agent AI working together seamlessly</div>
                </div>
                <div className="border-l-2 border-purple-400 pl-4">
                  <div className="text-sm text-foreground/60 mb-1">Complete transparency</div>
                  <div className="text-foreground/70">Every decision explained and auditable</div>
                </div>
                <div className="border-l-2 border-indigo-400 pl-4">
                  <div className="text-sm text-foreground/60 mb-1">Instant results</div>
                  <div className="text-foreground/70">60-second decisions with 99.7% accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
