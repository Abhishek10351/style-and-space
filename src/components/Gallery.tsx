"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Calendar, MapPin, X } from "lucide-react";
import Link from "next/link";

const heroInterior = "/images/hero-interior.jpg";

const projects = [
    {
        id: 1,
        title: "Modern Executive Office",
        category: "commercial",
        image: heroInterior,
        location: "Downtown Business District",
        year: "2024",
        description:
            "Contemporary office design with emphasis on natural light and collaborative spaces.",
        features: ["Open floor plan", "Natural lighting", "Smart technology"],
        size: "2,500 sq ft",
    },
    {
        id: 2,
        title: "Elementary School Renovation",
        category: "educational",
        image: heroInterior,
        location: "Westside Elementary",
        year: "2023",
        description:
            "Complete renovation of learning spaces with modern educational design principles.",
        features: ["Interactive spaces", "Flexible seating", "Bright colors"],
        size: "15,000 sq ft",
    },
    {
        id: 3,
        title: "Luxury Family Home",
        category: "residential",
        image: heroInterior,
        location: "Hillside Estates",
        year: "2024",
        description:
            "Elegant residential interior combining comfort with sophisticated design elements.",
        features: ["Custom furniture", "Premium materials", "Smart home"],
        size: "3,200 sq ft",
    },
    {
        id: 4,
        title: "Heritage Home Restoration",
        category: "residential",
        image: heroInterior,
        location: "Historic District",
        year: "2023",
        description:
            "Careful restoration preserving original character while adding modern functionality.",
        features: [
            "Period details",
            "Modern amenities",
            "Sustainable materials",
        ],
        size: "2,800 sq ft",
    },
    {
        id: 5,
        title: "Boutique Hotel Lobby",
        category: "commercial",
        image: heroInterior,
        location: "Arts District",
        year: "2024",
        description:
            "Luxurious hotel lobby design creating an unforgettable first impression.",
        features: ["Statement lighting", "Custom art", "Premium finishes"],
        size: "1,800 sq ft",
    },
    {
        id: 6,
        title: "University Library",
        category: "educational",
        image: heroInterior,
        location: "City University",
        year: "2023",
        description:
            "Modern library space encouraging collaboration and focused study.",
        features: ["Quiet zones", "Tech integration", "Flexible furniture"],
        size: "8,500 sq ft",
    },
];

const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "educational", label: "Educational" },
];

const Gallery = () => {
    const [filter, setFilter] = useState("all");
    const [lightboxImage, setLightboxImage] = useState<
        (typeof projects)[0] | null
    >(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const filteredProjects = projects.filter((project) => {
        const matchesFilter = filter === "all" || project.category === filter;
        return matchesFilter;
    });

    const handleFilterChange = (newFilter: string) => {
        if (newFilter === filter) return;
        setIsAnimating(true);
        setTimeout(() => {
            setFilter(newFilter);
            setTimeout(() => setIsAnimating(false), 100);
        }, 150);
    };

    const openLightbox = (project: (typeof projects)[0]) => {
        setLightboxImage(project);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        document.body.style.overflow = "unset";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
            {/* Enhanced Header */}
            <div className="border-b bg-card/80 backdrop-blur-lg sticky top-0 z-30 shadow-soft">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Button
                                variant="ghost"
                                className="gap-2 hover:bg-primary/10 transition-all duration-300 group"
                            >
                                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Enhanced Filter Section */}
                <div className="mb-12">
                    {/* Enhanced Filter Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={
                                    filter === category.id
                                        ? "default"
                                        : "outline"
                                }
                                onClick={() => handleFilterChange(category.id)}
                                className={`
                                    rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105
                                    ${
                                        filter === category.id
                                            ? "bg-gradient-primary text-white shadow-glow"
                                            : "hover:bg-primary/5 hover:border-primary/30"
                                    }
                                `}
                            >
                                {category.label}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Enhanced Projects Grid */}
                <div
                    className={`
                        transition-all duration-500 transform
                        ${
                            isAnimating
                                ? "opacity-0 scale-95"
                                : "opacity-100 scale-100"
                        }
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                    `}
                >
                    {filteredProjects.map((project, index) => (
                        <Card
                            key={`${project.id}-${filter}`}
                            className="group overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:shadow-elegant bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => openLightbox(project)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transition-all duration-700 ease-elegant group-hover:scale-110 group-hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                {/* Floating Category Badge */}
                                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-foreground text-sm rounded-full capitalize font-medium shadow-soft">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    {project.year}
                                    <span>•</span>
                                    <MapPin className="h-4 w-4" />
                                    {project.location}
                                </div>

                                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Project Features */}
                                <div className="flex flex-wrap gap-2">
                                    {project.features
                                        .slice(0, 2)
                                        .map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 bg-accent-muted text-accent-foreground rounded-md"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    {project.features.length > 2 && (
                                        <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                                            +{project.features.length - 2} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-sm font-medium text-primary">
                                        {project.size}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openLightbox(project);
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Enhanced Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 animate-fade-in">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-primary opacity-20"></div>
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                            No projects found
                        </h3>
                        <p className="text-muted-foreground text-lg mb-6">
                            Try adjusting your filter criteria
                        </p>
                        <Button
                            onClick={() => setFilter("all")}
                            variant="outline"
                            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>

            {/* Enhanced Lightbox Modal */}
            {lightboxImage && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-elegant animate-scale-in">
                        {/* Close Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full"
                        >
                            <X className="h-4 w-4" />
                        </Button>

                        <div className="grid md:grid-cols-2 h-full">
                            {/* Image Section */}
                            <div className="relative">
                                <img
                                    src={lightboxImage.image}
                                    alt={lightboxImage.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="p-8 space-y-6 overflow-y-auto">
                                <div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                        <Calendar className="h-4 w-4" />
                                        {lightboxImage.year}
                                        <span>•</span>
                                        <MapPin className="h-4 w-4" />
                                        {lightboxImage.location}
                                    </div>

                                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                                        {lightboxImage.title}
                                    </h2>

                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {lightboxImage.description}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">
                                            Project Features
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {lightboxImage.features.map(
                                                (feature, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-accent-muted text-accent-foreground rounded-full text-sm"
                                                    >
                                                        {feature}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                                        <div>
                                            <h5 className="font-medium text-foreground">
                                                Category
                                            </h5>
                                            <p className="text-muted-foreground capitalize">
                                                {lightboxImage.category}
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-foreground">
                                                Size
                                            </h5>
                                            <p className="text-muted-foreground">
                                                {lightboxImage.size}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Link href={`/project/${lightboxImage.id}`}>
                                        <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                                            View Full Project Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
