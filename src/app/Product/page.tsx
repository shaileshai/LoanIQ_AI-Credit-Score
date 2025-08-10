import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, DatabaseZap, Gauge, BadgePercent, CheckCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const workflowSteps = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Supervisor Bot',
    description: 'Initiates the credit assessment process, validating the initial application data for completeness and consistency.',
    tooltip: 'Step 1: The process starts here.'
  },
  {
    icon: <DatabaseZap className="h-10 w-10 text-primary" />,
    title: 'Data Enrichment Bot',
    description: 'Gathers and integrates data from multiple sources, including credit bureaus and alternative data providers, to create a holistic applicant profile.',
    tooltip: 'Step 2: Pulling in external data.'
  },
  {
    icon: <Gauge className="h-10 w-10 text-primary" />,
    title: 'Risk Assessment Bot',
    description: 'Analyzes the enriched data using advanced machine learning models to calculate the SmartScore, quantifying the applicant\'s credit risk.',
    tooltip: 'Step 3: Core risk calculation happens.'
  },
  {
    icon: <BadgePercent className="h-10 w-10 text-primary" />,
    title: 'Interest Rate Bot',
    description: 'Determines a personalized, risk-adjusted interest rate based on the SmartScore and current market conditions.',
    tooltip: 'Step 4: Setting the price for the loan.'
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: 'Final Decision Bot',
    description: 'Aggregates all analyses to make a final, data-driven credit decision (Approve, Deny, or Refer for manual review).',
    tooltip: 'Step 5: The final outcome is decided.'
  },
];

const timelineEvents = [
  {
      quarter: 'Q3 2025',
      title: 'Closed Pilot Program',
      description: 'Successful pilot with select Credit Union partners, validating model accuracy and multi-agent workflow efficiency.'
  },
  {
      quarter: 'Q4 2025',
      title: 'Public Launch',
      description: 'Official platform launch and opening of the waitlist for new partners across the US.'
  },
  {
      quarter: 'Q1 2026',
      title: 'International Expansion',
      description: 'Begin expansion into underserved markets in Latin America and Southeast Asia.'
  },
  {
      quarter: 'Q2 2026',
      title: 'Platform V2',
      description: 'Launch of enhanced no-code tools and advanced model retraining features.'
  }
];

import PageLayout from '@/components/navigation/page-layout';

export default function ProductPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our AI-Powered Workflow</h1>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Follow the journey of a loan application through our sophisticated five-bot system, where each agent performs a critical task to ensure a fast, smart, and fair outcome.
          </p>
        </div>

        <div className="mt-20">
          <TooltipProvider>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-accent/20" aria-hidden="true"></div>
              
              {workflowSteps.map((step, index) => (
                <div key={index} className={`flex items-center w-full my-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="w-full md:w-5/12">
                     <Tooltip>
                      <TooltipTrigger asChild>
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">{step.icon}</div>
                            <CardTitle className="text-2xl font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{step.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="text-muted-foreground font-light">
                            <p>{step.description}</p>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent side={index % 2 === 0 ? 'right' : 'left'}>
                        <p>{step.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
          </TooltipProvider>
        </div>
        
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">A Glimpse Into the Future of Credit Scoring</h2>
            <p className="mt-4 text-lg text-muted-foreground font-light">
              Our roadmap to revolutionize credit assessment and expand financial inclusion globally.
            </p>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative grid gap-y-12 after:absolute after:inset-y-0 after:w-1 after:bg-gradient-to-b after:from-primary/20 after:via-primary/50 after:to-accent/20 after:left-4 md:after:left-1/2 md:after:-translate-x-1/2">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative pl-12 md:pl-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <div className={`absolute left-4 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent ring-4 ring-background md:left-1/2 md:-translate-x-1/2`}></div>
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold text-accent">{event.quarter}</h3>
                    <p className="font-semibold text-lg mt-1 text-foreground">{event.title}</p>
                    <p className="text-foreground/70 mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
