import DashboardClient from './client';

import PageLayout from '@/components/navigation/page-layout';

export default function DashboardPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-headline font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Live Dashboard Simulation</h1>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Experience the power of LoanIQ AI in real-time. Enter mock loan details below and watch our AI agents analyze the risk and determine a SmartScore instantly.
          </p>
        </div>
        <DashboardClient />
      </div>
    </PageLayout>
  );
}
