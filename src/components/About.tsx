import { Award, Users, Target, Heart } from "lucide-react";

const values = [
    {
        icon: Award,
        title: "Excellence",
        description:
            "Pursuing the highest standards in every project we undertake.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Working closely with clients to bring their unique vision to life.",
    },
    {
        icon: Target,
        title: "Innovation",
        description:
            "Incorporating cutting-edge design trends and sustainable practices.",
    },
    {
        icon: Heart,
        title: "Passion",
        description:
            "Driven by love for creating beautiful, functional spaces.",
    },
];

const team = [
    {
        name: "Sarah Martinez",
        role: "Lead Interior Designer",
        specialty: "Residential Luxury",
    },
    {
        name: "David Chen",
        role: "Principal Architect",
        specialty: "Commercial Spaces",
    },
    {
        name: "Elena Rodriguez",
        role: "Design Consultant",
        specialty: "Educational Environments",
    },
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-(image:--gradient-secondary)">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        About <span className="">Style &#38; Space</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        With over 12 years of experience, we are passionate
                        about creating extraordinary spaces that reflect your
                        personality and enhance your lifestyle.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="animate-slide-up">
                        <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
                            Crafting Spaces That Inspire
                        </h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                            <p>
                                Founded in 2012, ArchVision Studio has
                                established itself as a premier design firm
                                specializing in both residential and commercial
                                interior design. Our expertise extends from
                                intimate home environments to inspiring
                                educational institutions and small-scale
                                commercial spaces.
                            </p>
                            <p>
                                We believe that great design is not just about
                                aesthetics—it&apos;s about creating functional,
                                sustainable spaces that enhance the lives of
                                those who inhabit them. Every project we
                                undertake is approached with meticulous
                                attention to detail and a deep understanding of
                                our clients&apos; unique needs.
                            </p>
                            <p>
                                Our multidisciplinary team combines creativity
                                with technical expertise, ensuring that every
                                design decision is both beautiful and practical.
                                From concept to completion, we guide our clients
                                through a seamless design journey.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                                <div className="text-2xl font-bold text-primary mb-1">
                                    150+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Completed Projects
                                </div>
                            </div>
                            <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                                <div className="text-2xl font-bold text-primary mb-1">
                                    12+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Years Experience
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="animate-scale-in"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="bg-(image:--gradient-primary) rounded-3xl p-8 text-primary-foreground shadow-elegant">
                            <h4 className="text-2xl font-serif font-bold mb-6">
                                Our Design Philosophy
                            </h4>
                            <blockquote className="text-lg italic leading-relaxed mb-6">
                                &quot;We believe that exceptional design emerges
                                from the perfect harmony between functionality,
                                aesthetics, and the unique story of each client.
                                Every space should be a reflection of the dreams
                                and aspirations of those who call it home.&quot;
                            </blockquote>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                                    S&#38;S
                                </div>
                                <div>
                                    <div className="font-semibold">
                                        Style &#38; Space
                                    </div>
                                    <div className="text-primary-foreground/80 text-sm">
                                        Design Team
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-20">
                    <h3 className="text-3xl font-serif font-bold text-center text-foreground mb-12 animate-fade-in">
                        Our Core Values
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-12 h-12 bg-(image:--gradient-primary) rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">
                                    {value.title}
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
