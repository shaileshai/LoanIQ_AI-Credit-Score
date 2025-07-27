import React from 'react';
import { Bot, Check, Search, BarChart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8 text-accent" />,
    title: 'Eligibility Bot',
    description: 'Autonomous agent gathers and verifies applicant data from diverse, alternative sources in real-time.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-accent" />,
    title: 'Analysis Bot',
    description: 'Fine-tuned LLM analyzes behavioral, transactional, and social data to build a holistic financial profile.',
  },
  {
    icon: <Bot className="w-8 h-8 text-accent" />,
    title: 'Risk Bot',
    description: 'Proprietary models assess risk and potential based on our adaptive, continuously learning framework.',
  },
  {
    icon: <Check className="w-8 h-8 text-accent" />,
    title: 'Recommendation Bot',
    description: 'Delivers a clear, compliant, and fully explainable credit decision with a complete audit trail.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">A Glimpse Into the Future of Credit Scoring</h2>
          <p className="mt-4 text-lg text-foreground/70">Our multi-agent system works in concert to deliver unprecedented speed, accuracy, and fairness to credit decisions.</p>
        </div>
        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg shadow-primary/5 border border-primary/10 transition-all duration-300 hover:shadow-accent/20 hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                <p className="mt-2 text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
