import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What makes LoanIQ different from traditional credit scoring models?",
        answer: "LoanIQ utilizes a multi-agent AI system that analyzes real-time, alternative data sources beyond traditional credit reports. This provides a more holistic and current view of an applicant's creditworthiness, reducing bias and increasing accuracy."
    },
    {
        question: "Is the AI's decision-making process a 'black box'?",
        answer: "No. Our platform is built on the principle of Explainable AI (XAI). Every decision is accompanied by a clear, understandable explanation and a full audit trail, ensuring transparency for underwriters and compliance with regulatory requirements."
    },
    {
        question: "What kind of alternative data do you use?",
        answer: "We analyze a variety of data signals including transactional data, social sentiment analysis, and other behavioral analytics. All data is sourced and handled in strict compliance with privacy regulations like GDPR and CCPA."
    },
    {
        question: "How does LoanIQ integrate with our existing systems?",
        answer: "We provide robust and seamless API integrations that can connect with your existing Core Banking Systems (CBS), Loan Origination Systems (LOS), and other FinTech platforms with minimal disruption to your current workflows."
    },
    {
        question: "Is LoanIQ suitable for small to medium-sized lenders?",
        answer: "Absolutely. Our platform is designed to be scalable and accessible for Credit Unions, Community Banks, and Microfinance Institutions of all sizes. The no-code dashboards empower your existing team without requiring specialized data scientists."
    },
];

const Faq = () => {
    return (
        <section id="faq" className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Have questions? We have answers. Here are some of the most common queries we receive.
              </p>
            </div>
                <div className="mt-12 max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-foreground/70">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Faq;
