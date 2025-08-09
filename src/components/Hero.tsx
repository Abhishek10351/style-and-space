import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-light"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Luxury Interior Design"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-tor bg-(image:--gradient-hero) from-primary/80 via-primary-light/60 to-transparent opacity-60"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
            <div
                className="absolute bottom-32 left-16 w-6 h-6 bg-accent/50 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
            ></div>
            <div
                className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-float"
                style={{ animationDelay: "4s" }}
            ></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-32">
                <div className="max-w-3xl animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-18 text-center">
                        Transforming
                        <span className="block text-accent">Spaces</span>
                        Into Dreams
                    </h1>

                    <p
                        className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up text-center"
                        style={{ animationDelay: "0.3s" }}
                    >
                        Premium interior design and architecture for residential
                        homes and commercial institutions. Creating
                        sophisticated spaces that inspire and elevate.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 animate-slide-up"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <Button
                            variant="premium"
                            size="xl"
                            className="group cursor-pointer"
                        >
                            Start Your Project
                            <ArrowRight
                                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                size={20}
                            />
                        </Button>

                        <Button
                            variant="elegant"
                            size="xl"
                            className="group cursor-pointer"
                        >
                            <Play
                                className="mr-2 group-hover:scale-110 transition-transform duration-300"
                                size={20}
                            />
                            View Portfolio
                        </Button>
                    </div>

                    {/* Stats */}
                    <div
                        className="grid grid-cols-3 gap-8 mt-16 animate-fade-in"
                        style={{ animationDelay: "0.9s" }}
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                150+
                            </div>
                            <div className="text-white/80 font-medium">
                                Projects Completed
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                12+
                            </div>
                            <div className="text-white/80 font-medium">
                                Years Experience
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                98%
                            </div>
                            <div className="text-white/80 font-medium">
                                Client Satisfaction
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
