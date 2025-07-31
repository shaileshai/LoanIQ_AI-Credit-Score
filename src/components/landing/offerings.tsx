import { HandCoins, Server, Archive, BrainCircuit, Plug } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const offerings = [
  {
    icon: <HandCoins className="w-10 h-10 text-accent" />,
    title: 'Loan Origination Software',
    description: 'Flexible loan application flow',
  },
  {
    icon: <Server className="w-10 h-10 text-accent" />,
    title: 'Loan Management Software',
    description: 'Automated payments and loan servicing',
  },
  {
    icon: <Archive className="w-10 h-10 text-accent" />,
    title: 'Debt Collection Software',
    description: 'Efficient strategies for all collection phases',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-accent" />,
    title: 'Credit Scoring & Decisioning',
    description: 'AI-based consumer and commercial credit scoring',
  },
  {
    icon: <Plug className="w-10 h-10 text-accent" />,
    title: 'API / Integrations',
    description: 'Use third-party data and tools you love.',
  },
];

const Offerings = () => {
  return (
    <section id="offerings" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our Offerings
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            A comprehensive suite of tools to automate and streamline your
            entire lending lifecycle.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <Card key={offering.title} className="bg-background/40 border-primary/20 hover:border-accent/40 hover:bg-background/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-lg shadow-primary/5 hover:shadow-accent/20 flex flex-col items-center text-center lg:col-span-1 even:lg:col-start-2 odd:lg:last:col-start-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-2">
                  {offering.icon}
                </div>
                <CardTitle className="font-headline text-xl">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{offering.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
