"use client"
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

const Hero = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 py-24 md:py-40">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              🚀 Trusted by 500+ Financial Institutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-headline leading-tight">
              AI That Thinks Like Your
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Best Underwriter
              </span>
            </h1>
            
            <p className="mt-8 text-xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Replace months of manual review with AI decisions in seconds. Get transparent scoring, 
              real-time policy updates, and risk assessments that actually improve over time.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg font-semibold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '/Dashboard'}
              >
                Request Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg font-semibold border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                onClick={() => window.location.href = '/Features'}
              >
                Explore Features
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>99.7% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Real-time Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Transparent AI</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border border-primary/20 p-8 shadow-2xl shadow-primary/20">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl">
                <Brain className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-2xl mb-1">Live Credit Analysis</h3>
                  <p className="text-sm text-foreground/70">AI-powered real-time assessment</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium text-foreground/80">Smart Score</span>
                      <p className="text-xs text-foreground/60">Excellent Risk</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-primary">742</span>
                      <p className="text-xs text-green-600 font-medium">+12 pts</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-full bg-muted/50 rounded-full h-3">
                      <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{width: '74%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs text-foreground/60">
                      <span>300</span>
                      <span>850</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-primary/10">
                    <div className="text-center">
                      <p className="text-xs text-foreground/60">Payment</p>
                      <p className="text-sm font-bold text-green-600">98%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-foreground/60">Utilization</p>
                      <p className="text-sm font-bold text-blue-600">23%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-foreground/60">History</p>
                      <p className="text-sm font-bold text-purple-600">7.2 yrs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
