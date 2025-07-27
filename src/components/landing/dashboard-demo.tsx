"use client"

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

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
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
                    Intuitive, real-time dashboards that empower your team to understand the 'why' behind every decision without writing a single line of code.
                </p>
                <Card className="mt-12 p-2 lg:p-4 bg-background/30 border-2 border-primary/20 shadow-2xl shadow-primary/10">
                    <div className="relative group overflow-hidden rounded-lg">
                         <Image
                            src="https://firebasestudio-hosting.web.app/images/credit-intel/dashboard.png"
                            width={1200}
                            height={700}
                            alt="CreditIntel.AI Dashboard"
                            className="rounded-lg transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint="holographic dashboard futuristic"
                         />
                         <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button size="lg" className="font-bold text-lg shadow-lg shadow-accent/50" onClick={() => scrollTo('cta')}>
                                <PlayCircle className="mr-2 h-6 w-6" />
                                Request an Interactive Demo
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default DashboardDemo;
