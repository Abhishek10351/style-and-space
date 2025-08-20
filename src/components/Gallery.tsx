"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Calendar, MapPin } from "lucide-react";
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

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter((project) => project.category === filter);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Button
                                variant="ghost"
                                className="gap-2 cursor-pointer"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-serif font-bold text-foreground">
                            Project Gallery
                        </h1>
                        <div className="w-24" /> {/* Spacer for balance */}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={
                                filter === category.id ? "default" : "outline"
                            }
                            onClick={() => setFilter(category.id)}
                            className="rounded-full px-6 cursor-pointer"
                        >
                            {category.label}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="group overflow-hidden hover:shadow-elegant transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Link href={`/project/${project.id}`}>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>

                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <Calendar className="h-4 w-4" />
                                    {project.year}
                                    <span>•</span>
                                    <MapPin className="h-4 w-4" />
                                    {project.location}
                                </div>

                                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="inline-block px-3 py-1 bg-accent-muted text-accent-foreground text-sm rounded-full capitalize">
                                        {project.category}
                                    </span>
                                    <Link href={`/project/${project.id}`}>
                                        <Button variant="ghost" size="sm">
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-muted-foreground text-lg">
                            No projects found for the selected category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
