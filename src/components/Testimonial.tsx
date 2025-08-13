import { Star, Quote } from "lucide-react";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Homeowner",
            location: "Beverly Hills",
            content:
                "Working with ArchVision was an absolute dream. They transformed our outdated home into a modern masterpiece while respecting our family's needs. The attention to detail is extraordinary.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
        },
        {
            name: "Michael Chen",
            role: "Restaurant Owner",
            location: "Downtown",
            content:
                "The commercial space design exceeded all expectations. Customer foot traffic increased by 40% since the renovation. The team understood our vision perfectly and delivered beyond our dreams.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
        },
        {
            name: "Dr. Emily Rodriguez",
            role: "Principal",
            location: "Westside Academy",
            content:
                "The educational facility design created an inspiring learning environment. Students and teachers love the new spaces. The project was completed on time and within budget.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
        },
    ];

    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what our
                        satisfied clients have to say about their experience
                        working with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-accent fill-current"
                                    />
                                ))}
                            </div>

                            <Quote className="w-8 h-8 text-primary mb-4" />

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-foreground">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role} •{" "}
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
