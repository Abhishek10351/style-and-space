import { MessageCircle, PenTool, Hammer, CheckCircle } from "lucide-react";

const Process = () => {
    const steps = [
        {
            icon: MessageCircle,
            title: "Discovery & Consultation",
            description:
                "We start with an in-depth consultation to understand your vision, needs, and budget. This helps us create a foundation for your perfect space.",
            duration: "1-2 weeks",
        },
        {
            icon: PenTool,
            title: "Design & Planning",
            description:
                "Our expert team creates detailed design concepts, 3D visualizations, and technical drawings. We refine every detail until it's perfect.",
            duration: "3-4 weeks",
        },
        {
            icon: Hammer,
            title: "Construction & Installation",
            description:
                "We manage the entire construction process with trusted contractors, ensuring quality workmanship and timely completion.",
            duration: "6-12 weeks",
        },
        {
            icon: CheckCircle,
            title: "Final Walkthrough",
            description:
                "We conduct a thorough final inspection and walkthrough to ensure every detail meets our high standards and your expectations.",
            duration: "1 week",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Our Design Process
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We follow a proven process to ensure your project is
                        delivered on time, within budget, and exceeds your
                        expectations.
                    </p>
                </div>

                <div className="relative">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative text-center animate-slide-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="mb-8">
                                    <div className="relative w-20 h-20 bg-(image:--gradient-primary) rounded-full flex items-center justify-center mx-auto shadow-elegant mb-6">
                                        <step.icon className="w-8 h-8 text-primary-foreground" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed mb-6 min-h-[80px]">
                                    {step.description}
                                </p>

                                <div className="inline-flex items-center bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
                                    {step.duration}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Connection Lines */}
                    <div className="hidden g:block absolute top-16 left-0 right-0 h-px">
                        <div className="flex justify-between items-center h-full max-w-4xl mx-auto px-10">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="flex-1 h-px bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 mx-8"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
