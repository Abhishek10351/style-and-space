import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        question: "How long does a typical interior design project take?",
        answer: "Project timelines vary depending on scope and complexity. Residential projects typically take 8-16 weeks from initial consultation to completion, while commercial projects may take 12-24 weeks. We provide detailed timelines during the planning phase.",
    },
    {
        question: "What is included in your design consultation?",
        answer: "Our initial consultation includes a comprehensive assessment of your space, discussion of your vision and requirements, preliminary design concepts, budget planning, and a detailed project proposal. This 2-3 hour session is the foundation of your project.",
    },
    {
        question: "Do you work with existing furniture and decor?",
        answer: "Absolutely! We love incorporating meaningful pieces that our clients already own. Our designers are skilled at blending existing furniture with new elements to create cohesive, personalized spaces that reflect your style and history.",
    },
    {
        question: "What is your design fee structure?",
        answer: "We offer flexible pricing models including flat fees for complete projects, hourly consultation rates, and design-only packages. After our initial consultation, we provide a detailed proposal outlining all costs with no hidden fees.",
    },
    {
        question: "Can you work within my budget?",
        answer: "Yes! We work with various budget ranges and are transparent about costs from the beginning. We help prioritize spending on high-impact elements and can suggest alternatives to achieve your desired look within your budget constraints.",
    },
    {
        question: "Do you handle construction and contractor coordination?",
        answer: "We offer full project management services, working with trusted contractors and vendors. We can handle permits, coordinate all trades, and oversee construction to ensure quality and timeline adherence, or work with your preferred contractors.",
    },
    {
        question: "What areas do you serve?",
        answer: "We primarily serve the metropolitan area and surrounding regions within a 50-mile radius. For larger projects or special circumstances, we may consider travel to other locations. Contact us to discuss your specific location.",
    },
    {
        question: "How do you ensure the project stays on schedule?",
        answer: "We use detailed project management systems, regular progress meetings, and maintain close communication with all stakeholders. We build buffer time into our schedules and proactively address any potential delays to keep your project on track.",
    },
];

const FAQ = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Get answers to common questions about our design
                        process, pricing, and services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto animate-slide-up">
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors py-5 px-6 cursor-pointer">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
