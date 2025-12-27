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

const About = () => {
    return (
        <section id="about" className="py-24 bg-(image:--gradient-secondary)">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        About <span className="">Style &#38; Space</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Architecture, Interior and Construction. With over 12
                        years of experience, we create environments that inspire
                        — transforming your vision into functional, elegant
                        spaces.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="animate-slide-up">
                        <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
                            Design. Build. Elevate.
                        </h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                            <p>
                                Founded in 2012, Style & Space has established
                                itself as a premier firm specializing in luxury
                                construction and bespoke interior design. We
                                don&apos;t just construct spaces; we craft
                                transformative experiences that elevate your
                                lifestyle.
                            </p>
                            <p>
                                Our comprehensive approach seamlessly integrates
                                architecture, interiors, engineering, and
                                technology to create elegant, functional, and
                                future-ready environments. From concept to
                                completion, we provide full turnkey solutions
                                including architectural planning, 3D
                                visualization, smart home integration, project
                                management, full construction, and interior
                                styling.
                            </p>
                            <p>
                                With a steadfast commitment to quality and
                                detail, we ensure every project reflects
                                timeless design and lasting value. Whether
                                it&apos;s a high-end residence, a cutting-edge
                                office, or a premium retail space, we bring your
                                vision to life with precision, creativity, and
                                sophistication.
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
                        <div className="bg-(image:--gradient-primary) rounded-3xl p-8 text-primary-foreground shadow-lg">
                            <h4 className="text-2xl font-serif font-bold mb-6">
                                Our Philosophy
                            </h4>
                            <blockquote className="text-lg italic leading-relaxed mb-6 text-primary-foreground/95">
                                &quot;Design. Build. Elevate. We craft
                                transformative experiences that elevate your
                                lifestyle. From concept to completion, we
                                empower you to bring your vision to life, both
                                inside and out — creating environments that
                                inspire and uplift.&quot;
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
                                className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300 animate-scale-in group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-12 h-12 bg-(image:--gradient-primary) rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
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
