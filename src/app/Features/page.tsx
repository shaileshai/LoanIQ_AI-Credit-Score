import React from 'react';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/landing/footer';
import { Bot, BrainCircuit, Search, BarChart, Users, FileText, Newspaper, Scale, Percent, UserCheck, UserX, CaseUpper, ArrowDown } from 'lucide-react';

const Features = () => {
  const workflowSteps = [
    {
      icon: Search,
      title: "Data Collection Agent",
      description: "Aggregates real-time data from 500+ alternative sources including transactional data, social signals, and behavioral patterns.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BrainCircuit,
      title: "Credit Analysis Agent",
      description: "Processes complex datasets using advanced machine learning models to generate comprehensive risk assessments.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Underwriter Agent",
      description: "Simulates expert human underwriter decision-making with explainable AI insights and recommendations.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart,
      title: "Risk Scoring Agent",
      description: "Calculates dynamic risk scores using real-time market conditions and predictive analytics.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Scale,
      title: "Compliance Agent",
      description: "Ensures all decisions meet regulatory standards including Fair Lending, GDPR, and CCPA requirements.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Report Generation Agent",
      description: "Creates comprehensive audit trails and detailed reports for regulatory compliance and internal review.",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const features = [
    {
      icon: Bot,
      title: "Multi-Agent AI System",
      description: "Six specialized AI agents working in concert to deliver unprecedented accuracy and speed in credit decisions."
    },
    {
      icon: Search,
      title: "Real-Time Data Analysis",
      description: "Continuous monitoring of 500+ alternative data sources for the most current risk assessments."
    },
    {
      icon: BrainCircuit,
      title: "Explainable AI",
      description: "Every decision comes with clear, understandable explanations and full audit trails."
    },
    {
      icon: BarChart,
      title: "Dynamic Risk Scoring",
      description: "Adaptive scoring that evolves with market conditions and individual behavior patterns."
    },
    {
      icon: Users,
      title: "No-Code Dashboards",
      description: "Intuitive interfaces that empower underwriters without requiring technical expertise."
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "Built-in compliance checks for Fair Lending, GDPR, CCPA, and other regulatory requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 leading-normal">
              <span className="inline-block pb-2">Advanced Credit Intelligence</span>
            </h1>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Experience the power of agentic AI that thinks like your best underwriter, delivering faster, fairer, and more accurate credit decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Agentic AI Workflow Section */}
        <section id="workflow" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Agentic AI Workflow
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Our multi-agent system works in concert to deliver unprecedented speed, accuracy, and fairness to credit decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {workflowSteps.map((step, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <ArrowDown className="w-6 h-6 text-foreground/40 mx-auto mt-6 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Core Features
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Built with cutting-edge technology to revolutionize credit decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;