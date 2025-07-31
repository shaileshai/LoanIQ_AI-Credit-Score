import { HandCoins, Server, Archive, BrainCircuit, Plug } from 'lucide-react';
import React from 'react';

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
        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          {offerings.map((offering) => (
            <div key={offering.title} className="flex items-start gap-6 md:gap-8">
              <div className="flex-shrink-0">{offering.icon}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-headline">
                  {offering.title}
                </h3>
                <p className="mt-2 text-lg text-foreground/70">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
