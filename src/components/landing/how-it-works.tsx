import React from 'react';
import { ArrowDown, Bot, Check, Search, BarChart, Users, FileText, Newspaper, Scale, Percent, BrainCircuit, UserCheck, UserX, CaseUpper } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">A Glimpse Into the Future of Credit Scoring</h2>
          <p className="mt-4 text-lg text-foreground/70">Our multi-agent system works in concert to deliver unprecedented speed, accuracy, and fairness to credit decisions.</p>
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-4 text-center font-sans">
          {/* Start/Input */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-48 p-4 bg-background border-2 border-primary/30 rounded-lg shadow-lg">
                <FileText className="w-6 h-6 mr-2 text-accent" />
                <span className="font-bold">Start/Input</span>
            </div>
          </div>
          
          <ArrowDown className="w-8 h-8 text-primary/50" />

          {/* Supervisor Bot */}
          <div className="flex items-center justify-center w-48 p-4 bg-background border-2 border-primary/30 rounded-lg shadow-lg">
            <Bot className="w-6 h-6 mr-2 text-accent" />
            <span className="font-bold">Supervisor Bot</span>
          </div>

          <ArrowDown className="w-8 h-8 text-primary/50" />

          {/* KYC, CIBIL, etc. */}
          <div className="p-4 bg-background border-2 border-primary/30 rounded-lg shadow-lg w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center justify-center p-2 bg-background/50 rounded-md"><Users className="w-5 h-5 mr-2 text-accent/80" /><span>KYC</span></div>
              <div className="flex items-center justify-center p-2 bg-background/50 rounded-md"><FileText className="w-5 h-5 mr-2 text-accent/80" /><span>CIBIL</span></div>
              <div className="flex items-center justify-center p-2 bg-background/50 rounded-md"><BarChart className="w-5 h-5 mr-2 text-accent/80" /><span>Alt-Data</span></div>
              <div className="flex items-center justify-center p-2 bg-background/50 rounded-md"><CaseUpper className="w-5 h-5 mr-2 text-accent/80" /><span>Income</span></div>
              <div className="flex items-center justify-center p-2 bg-background/50 rounded-md"><Scale className="w-5 h-5 mr-2 text-accent/80" /><span>Risk</span></div>
            </div>
          </div>

          <ArrowDown className="w-8 h-8 text-primary/50" />

          {/* SmartScore, Policy, News Bots */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center justify-center p-4 bg-background border-2 border-primary/30 rounded-lg shadow-lg">
              <BrainCircuit className="w-6 h-6 mr-2 text-accent" />
              <span className="font-bold">SmartScore Bot</span>
            </div>
            <div className="text-2xl font-bold text-accent mx-4 hidden md:block">→</div>
             <ArrowDown className="w-8 h-8 text-primary/50 md:hidden" />
            <div className="flex items-center justify-center p-4 bg-background border-2 border-primary/30 rounded-lg shadow-lg">
              <FileText className="w-6 h-6 mr-2 text-accent" />
              <span className="font-bold">Policy Bot</span>
              <span className="mx-2">+</span>
              <Newspaper className="w-6 h-6 mr-2 text-accent" />
              <span className="font-bold">News Bot</span>
            </div>
          </div>

          <ArrowDown className="w-8 h-8 text-primary/50" />

          {/* Interest Rate & Explainability Bots */}
           <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center justify-center p-4 bg-background border-2 border-primary/30 rounded-lg shadow-lg">
              <Percent className="w-6 h-6 mr-2 text-accent" />
              <span className="font-bold">Interest Rate Bot</span>
            </div>
            <div className="text-2xl font-bold text-accent mx-4 hidden md:block">→</div>
            <ArrowDown className="w-8 h-8 text-primary/50 md:hidden" />
            <div className="flex items-center justify-center p-4 bg-background border-2 border-primary/30 rounded-lg shadow-lg">
              <BrainCircuit className="w-6 h-6 mr-2 text-accent" />
              <span className="font-bold">Explainability Bot</span>
            </div>
          </div>

          <ArrowDown className="w-8 h-8 text-primary/50" />

          {/* Decision */}
          <div className="relative flex flex-col items-center">
            <div className="flex items-center justify-center p-4 bg-accent/10 border-2 border-accent rounded-lg shadow-lg shadow-accent/20">
              <span className="font-bold text-lg text-accent-foreground">Decision?</span>
            </div>

            {/* No Path */}
            <div className="absolute top-1/2 left-full flex items-center ml-4">
                <div className="w-16 h-0.5 bg-destructive/50"></div>
                <div className="text-destructive font-bold ml-2 hidden md:block">No</div>
                <ArrowDown className="w-6 h-6 text-destructive md:hidden" />
            </div>
             <div className="absolute top-full left-full flex flex-col md:flex-row items-center ml-4 md:ml-24 mt-4 md:mt-0">
                <div className="flex items-center justify-center p-4 bg-background border-2 border-destructive/30 rounded-lg shadow-lg">
                    <Users className="w-6 h-6 mr-2 text-destructive" />
                    <span className="font-bold">Human Officer</span>
                </div>
                <div className="text-2xl font-bold text-destructive/80 mx-4 hidden md:block">→</div>
                 <ArrowDown className="w-8 h-8 text-destructive/50 md:hidden my-2" />
                <div className="flex items-center justify-center p-4 bg-background border-2 border-destructive/30 rounded-lg shadow-lg">
                    <UserCheck className="w-6 h-6 mr-2 text-green-500" />
                    <span className="font-bold">Approve</span>
                    <span className="mx-1">/</span>
                    <UserX className="w-6 h-6 mr-2 text-red-500" />
                    <span className="font-bold">Deny</span>
                </div>
            </div>

            {/* Yes Path */}
             <div className="flex items-center mt-4">
                <div className="text-green-500 font-bold mr-2 hidden md:block">Yes</div>
                <ArrowDown className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="flex flex-col items-center mt-8 md:mt-4">
            <div className="flex items-center justify-center p-4 bg-background border-2 border-green-500/30 rounded-lg shadow-lg">
                <UserCheck className="w-6 h-6 mr-2 text-green-500" />
                <span className="font-bold">Approve</span>
            </div>
            <ArrowDown className="w-8 h-8 text-primary/50" />
            <div className="flex items-center justify-center p-4 bg-background border-2 border-primary/30 rounded-lg shadow-lg">
                <FileText className="w-6 h-6 mr-2 text-accent" />
                <span className="font-bold">Loan Issuance</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
