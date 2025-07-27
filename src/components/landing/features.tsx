import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, GitBranch, ShieldCheck, Zap, Cog, Users, GitCommit, LayoutDashboard } from 'lucide-react';

const featuresList = [
  { icon: <GitBranch />, title: 'Multi-Agent Architecture', description: 'Leverages four specialized AI bots for a comprehensive credit assessment.' },
  { icon: <Bot />, title: 'Fine-Tuned LLM', description: 'Trained on vast, domain-specific financial and behavioral datasets for unparalleled accuracy.' },
  { icon: <GitCommit />, title: 'Transparent Decisions', description: 'Provides clear, explainable outcomes with a full audit trail for every evaluation.' },
  { icon: <Zap />, title: 'Real-Time Evaluations', description: 'Utilizes alternate signals like social and transactional data for instant, up-to-date scoring.' },
  { icon: <Cog />, title: 'Seamless API Integrations', description: 'Easily integrates with your existing core banking systems and FinTech platforms.' },
  { icon: <ShieldCheck />, title: 'Compliance-Ready', description: 'Built with Fair Lending, GDPR, and CCPA compliance at its core.' },
  { icon: <Users />, title: 'Adaptive Feedback Loop', description: 'Continuously retrains and improves models based on performance and new data.' },
  { icon: <LayoutDashboard />, title: 'No-Code Dashboards', description: 'Empowers underwriters with intuitive, powerful tools for decision analysis.' },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">An AI Platform Built for the Future of Finance</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature) => (
            <Card key={feature.title} className="bg-background/40 border-primary/20 hover:border-primary/40 hover:bg-background/60 transition-all duration-300 transform hover:-translate-y-2 shadow-lg shadow-primary/5 hover:shadow-primary/10">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4 text-primary">
                  {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-accent' })}
                </div>
                <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-foreground/70 px-6 pb-6">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
