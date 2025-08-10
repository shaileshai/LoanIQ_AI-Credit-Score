import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, GitBranch, ShieldCheck, Zap, Cog, Users, GitCommit, BarChart3, Eye } from 'lucide-react';

const featuresList = [
  { icon: <GitBranch className="w-8 h-8" />, title: 'Multi-Agent Architecture', description: 'Leverages four specialized AI bots for a comprehensive credit assessment.' },
  { icon: <Bot className="w-8 h-8" />, title: 'Fine-Tuned LLM', description: 'Trained on vast, domain-specific financial and behavioral datasets for unparalleled accuracy.' },
  { icon: <GitCommit className="w-8 h-8" />, title: 'Transparent Decisions', description: 'Provides clear, explainable outcomes with a full audit trail for every evaluation.' },
  { icon: <Zap className="w-8 h-8" />, title: 'Real-Time Evaluations', description: 'Utilizes alternate signals like social and transactional data for instant, up-to-date scoring.' },
  { icon: <Cog className="w-8 h-8" />, title: 'Seamless API Integrations', description: 'Easily integrates with your existing core banking systems and FinTech platforms.' },
  { icon: <ShieldCheck className="w-8 h-8" />, title: 'Compliance-Ready', description: 'Built with Fair Lending, GDPR, and CCPA compliance at its core.' },
  { icon: <Users className="w-8 h-8" />, title: 'Adaptive Feedback Loop', description: 'Continuously retrains and improves models based on performance and new data.' },
  { icon: <BarChart3 className="w-8 h-8" />, title: 'Real-Time Analytics', description: 'Access live data streams and visualizations to make informed decisions instantly.' },
  { icon: <Eye className="w-8 h-8" />, title: 'Explainable AI Insights', description: "Understand the 'why' behind every AI-powered recommendation with transparent, easy-to-digest explanations." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Intelligent Credit Decisions
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Transform your lending with AI that thinks like your best underwriter—only faster, more accurate, and always learning.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuresList.map((feature, index) => (
            <Card key={index} className="p-8 border-primary/10 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/20 hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
