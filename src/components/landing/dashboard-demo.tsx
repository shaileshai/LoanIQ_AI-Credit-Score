"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, LayoutGrid, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const dashboardFeatures = [
    {
        icon: <BarChart3 className="w-8 h-8 text-accent" />,
        title: 'Real-Time Analytics',
        description: 'Access live data streams and visualizations to make informed decisions instantly.',
    },
    {
        icon: <Eye className="w-8 h-8 text-accent" />,
        title: 'Explainable AI Insights',
        description: "Understand the 'why' behind every AI-powered recommendation with transparent, easy-to-digest explanations.",
    },
    {
        icon: <LayoutGrid className="w-8 h-8 text-accent" />,
        title: 'Customizable Views',
        description: 'Tailor dashboards to your specific needs with drag-and-drop widgets and configurable layouts.',
    },
]

const DashboardDemo = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="dashboard-demo" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">No-Code Dashboards for Underwriters</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/70">
                    Intuitive, real-time dashboards that empower your team to understand the 'why' behind every decision without writing a single line of code.
                </p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dashboardFeatures.map((feature) => (
                        <Card key={feature.title} className="bg-background/40 border-primary/20 text-center flex flex-col items-center hover:bg-background/60 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-lg shadow-primary/5 hover:shadow-accent/20">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-4">
                                    {feature.icon}
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/70">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="mt-12">
                    <Button size="lg" className="font-bold text-lg shadow-lg shadow-accent/50" onClick={() => scrollTo('cta')}>
                        Request an Interactive Demo
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default DashboardDemo;
