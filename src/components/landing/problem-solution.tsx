import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, Clock, Users, DollarSign, Zap, Eye, Bot, ShieldCheck, TrendingDown, TrendingUp, Brain } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-normal overflow-visible">
              <span className="inline-block pb-2">Breaking Barriers in Credit Access</span>
            </h2>
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Traditional credit systems create unnecessary barriers for millions of qualified borrowers. 
            Our AI-driven approach sees the full financial picture, unlocking opportunities for both lenders and borrowers.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Problem Analysis */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold font-headline mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">The Challenge</h3>
              <p className="text-foreground/70">
                Legacy systems miss 45% of creditworthy borrowers due to outdated scoring models.
              </p>
            </div>
            
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                  <span className="text-destructive/90">Legacy Limitations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 mt-1 text-destructive/70 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Static Data Sources</span>
                    <p className="text-sm text-foreground/70">Limited to historical credit reports, missing real-time financial behavior</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 mt-1 text-destructive/70 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Inclusion Gaps</span>
                    <p className="text-sm text-foreground/70">68% of thin-file applicants unfairly penalized despite strong financial profiles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 text-destructive/70 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Processing Delays</span>
                    <p className="text-sm text-foreground/70">Average 3-4 weeks for loan decisions, costing lenders $2,400 per application</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Solution Overview */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold font-headline mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">Our Solution</h3>
              <p className="text-foreground/70">
                AI that learns like your best underwriter, processing decisions in minutes, not weeks.
              </p>
            </div>
            
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">Agentic AI Advantage</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 mt-1 text-primary shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Multi-Agent Intelligence</span>
                    <p className="text-sm text-foreground/70">Four specialized AI agents work together for comprehensive credit assessment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 mt-1 text-primary shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Transparent Decisions</span>
                    <p className="text-sm text-foreground/70">Every recommendation comes with clear, auditable explanations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 mt-1 text-primary shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Real-Time Processing</span>
                    <p className="text-sm text-foreground/70">Decisions delivered in under 60 seconds with 99.7% accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
