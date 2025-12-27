import { Star, Quote } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    location: string;
    content: string;
    rating: number;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Daisy Kalita",
        role: "Homeowner",
        location: "Guwahati",
        content:
            "Working with Style & Space was an absolute dream. They transformed our outdated home into a modern masterpiece while respecting our family's needs. The attention to detail is extraordinary.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
        name: "Rajesh Kumar",
        role: "Business Owner",
        location: "Guwahati",
        content:
            "The commercial space design exceeded all expectations. Customer foot traffic increased by 40% since the renovation. The team understood our vision perfectly and delivered beyond our dreams.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
        name: "Priya Sharma",
        role: "Hotel Owner",
        location: "Guwahati",
        content:
            "The educational facility design created an inspiring learning environment. Students and teachers love the new spaces. The project was completed on time and within budget.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    },
];

const TestimonialCard = ({
    name,
    role,
    location,
    content,
    rating,
    image,
}: Testimonial) => {
    return (
        <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl border border-border/50 hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center mb-4">
                {[...Array(rating)].map((_, i) => (
                    <Star
                        key={i}
                        className="w-5 h-5 text-accent fill-current"
                    />
                ))}
            </div>

            <Quote className="w-8 h-8 text-primary mb-4" />

            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                &ldquo;{content}&rdquo;
            </p>

            <div className="flex items-center gap-4 mt-auto">
                <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div className="flex flex-col">
                    <h4 className="font-semibold text-foreground leading-tight">
                        {name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-tight mt-0.5">
                        {role} • {location}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Testimonial = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Don&apos;t just take our word for it. Here&apos;s what
                        our satisfied clients have to say about their experience
                        working with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            {...testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
