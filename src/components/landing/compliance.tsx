import { ShieldCheck } from 'lucide-react';

const compliancePoints = [
  'Fair Lending Act',
  'GDPR Compliant',
  'CCPA Ready',
  'Full Data Encryption',
  'SOC 2 Type II (In Progress)',
];

const Compliance = () => {
  return (
    <section id="compliance" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center items-center">
            <div className="relative">
              <ShieldCheck className="w-48 h-48 md:w-64 md:h-64 text-primary opacity-20" />
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Compliance & Security First</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Our platform is engineered with the highest standards of security and regulatory compliance to protect you and your customers.
            </p>
            <ul className="mt-8 space-y-4">
              {compliancePoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                  <span className="text-lg text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
