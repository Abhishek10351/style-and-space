import { Button } from "@/components/ui/button";
import { Home, Building2, Palette, Lightbulb, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Residential Design",
        description:
            "Transform your home into a personalized sanctuary with our premium residential interior design services.",
        features: [
            "Living Room Design",
            "Bedroom Styling",
            "Kitchen Renovation",
            "Bathroom Luxury",
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
        title: "Full Architecture",
        description:
            "Complete architectural solutions from concept to completion, blending functionality with aesthetic appeal.",
        features: [
            "Architectural Planning",
            "Space Optimization",
            "Structural Design",
            "Building Renovation",
        ],
    },
    {
        icon: Lightbulb,
        title: "Design Consultation",
        description:
            "Expert guidance and personalized recommendations to bring your vision to life within your budget.",
        features: [
            "Design Strategy",
            "Color Consultation",
            "Furniture Selection",
            "Project Management",
        ],
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="py-24 bg-(image:--gradient-secondary)"
        >
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Our Premium Services
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        From intimate residential spaces to inspiring commercial
                        environments, we deliver exceptional design solutions
                        tailored to your unique vision and requirements.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 animate-scale-in group cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-(image:--gradient-primary) rounded-xl group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 leading-relaxed text-left">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-center text-sm text-muted-foreground"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <Button
                                        variant="ghost"
                                        className="group/button text-primary hover:text-primary-foreground p-2 h-auto"
                                    >
                                        Learn More
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center animate-fade-in">
                    <div className="bg-(image:--gradient-primary) rounded-2xl p-12 text-center shadow-elegant">
                        <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
                            Ready to Transform Your Space?
                        </h3>
                        <p className="text-primary-foreground/90 mb-8 text-lg">
                            Let&apos;s discuss your project and create something
                            extraordinary together.
                        </p>
                        <Button
                            variant="accent"
                            size="xl"
                            className="shadow-medium cursor-pointer"
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
