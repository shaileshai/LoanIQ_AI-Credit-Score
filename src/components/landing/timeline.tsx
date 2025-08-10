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

const Timeline = () => {
    return (
        <section id="timeline" className="py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Roadmap to Revolutionize Credit</h2>
                </div>
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="relative grid gap-y-12 after:absolute after:inset-y-0 after:w-1 after:bg-primary/20 after:left-4 md:after:left-1/2 md:after:-translate-x-1/2">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className={`relative pl-12 md:pl-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                                <div className={`absolute left-4 top-1 w-6 h-6 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2`}></div>
                                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <h3 className="text-xl font-bold text-accent">{event.quarter}</h3>
                                    <p className="font-semibold text-lg mt-1">{event.title}</p>
                                    <p className="text-foreground/70 mt-1">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
