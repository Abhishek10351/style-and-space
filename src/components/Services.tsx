import { Button } from "@/components/ui/button";
import { Home, Building2, Palette, Lightbulb, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Residential Design",
        description:
            "Transform your home into a personalized sanctuary with our premium residential interior design services.",
        features: [
            "Custom Interior Design",
            "Modular Kitchens & Wardrobes",
            "Space Planning & Renovation",
            "Furniture Selection & Styling",
        ],
    },
    {
        icon: Building2,
        title: "Commercial Spaces",
        description:
            "Create inspiring work environments and educational spaces that enhance productivity and learning.",
        features: [
            "Office Design",
            "School Interiors",
            "Institution Spaces",
            "Retail Environments",
        ],
    },
    {
        icon: Palette,
        title: "Architecture & Construction",
        description:
            "Complete architectural solutions from concept to completion, blending functionality with aesthetic appeal.",
        features: [
            "Architectural Planning",
            "Space Optimization",
            "Construction Management",
            "Building Renovation",
        ],
    },
    {
        icon: Lightbulb,
        title: "Design Consultation",
        description:
            "Expert guidance and personalized recommendations to bring your vision to life within your budget.",
        features: [
            "3D Visualization",
            "Smart Home Integration",
            "Color Consultation",
            "Project Management",
        ],
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/30"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6">
                        Comprehensive Turnkey Solutions
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        Experts in luxury construction and bespoke interior
                        design. We seamlessly integrate architecture, interiors,
                        engineering, and technology to create elegant,
                        functional, and future-ready environments.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-border/50 hover:border-primary/30 transition-all duration-300 animate-scale-in group cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-4">
                                <div className="p-3 bg-(image:--gradient-primary) rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0">
                                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                                </div>
                                <div className="flex-1 w-full">
                                    <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                                        {service.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-center text-xs sm:text-sm text-muted-foreground"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 sm:mr-3 shrink-0"></div>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <Button
                                        variant="ghost"
                                        className="group/button text-primary hover:text-primary-foreground p-2 h-auto text-sm sm:text-base"
                                    >
                                        Learn More
                                        <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center animate-fade-in px-4">
                    <div className="bg-(image:--gradient-primary) rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 text-center shadow-lg text-primary-foreground">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 sm:mb-4">
                            Let Your Space Tell Your Story
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-primary-foreground/95 mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Where vision meets transformation — Contact us today
                            to create environments that inspire.
                        </p>
                        <Button
                            size="lg"
                            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-full sm:w-auto text-sm sm:text-base"
                        >
                            Schedule Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
