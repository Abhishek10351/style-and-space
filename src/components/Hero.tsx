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
                    src="/images/hero-interior.jpg"
                    alt="Luxury Interior Design"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-(image:--gradient-hero)"></div>
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
            <div className="relative z-10 container mx-auto px-6 py-32">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        Design that speaks your
                        <span className="block text-accent mt-2">Style</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-up"
                        style={{ animationDelay: "0.2s" }}
                    >
                        Architecture, Interior and Construction. We don&apos;t
                        just design interiors — we create environments that
                        inspire.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <Button
                            size="xl"
                            className="group bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl transition-all duration-300"
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
                            className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 cursor-pointer"
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
                        className="grid grid-cols-3 gap-6 md:gap-12 mt-16 max-w-3xl mx-auto animate-fade-in"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                150+
                            </div>
                            <div className="text-white/90 text-sm md:text-base font-medium">
                                Projects
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                12+
                            </div>
                            <div className="text-white/90 text-sm md:text-base font-medium">
                                Years
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                98%
                            </div>
                            <div className="text-white/90 text-sm md:text-base font-medium">
                                Satisfaction
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
