import { Banknote, Building, Handshake, Landmark } from 'lucide-react';

const clients = [
    { icon: <Landmark className="w-10 h-10 text-accent" />, name: 'Credit Unions' },
    { icon: <Building className="w-10 h-10 text-accent" />, name: 'Community Banks' },
    { icon: <Banknote className="w-10 h-10 text-accent" />, name: 'Microfinance Firms' },
    { icon: <Handshake className="w-10 h-10 text-accent" />, name: 'FinTech Partners' },
];

const WhoWeServe = () => {
    return (
        <section id="who-we-serve" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Empowering the Financial Ecosystem</h2>
                    <p className="mt-4 text-lg text-foreground/70">We partner with forward-thinking institutions dedicated to expanding financial access and inclusion.</p>
                </div>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {clients.map(client => (
                        <div key={client.name} className="flex flex-col items-center text-center gap-4 p-6 rounded-lg bg-background/30 hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/20 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-accent/10">
                            {client.icon}
                            <h3 className="text-xl font-semibold">{client.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;
