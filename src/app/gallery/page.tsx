import Gallery from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Gallery | Style & Space Interior Design",
    description:
        "Explore our portfolio of premium interior design projects including residential, commercial, and educational spaces. Discover elegant design solutions and sophisticated styling.",
    keywords: [
        "interior design",
        "portfolio",
        "luxury homes",
        "commercial design",
        "educational spaces",
        "style and space",
    ],
    openGraph: {
        title: "Project Gallery | Style & Space Interior Design",
        description:
            "Explore our portfolio of premium interior design projects including residential, commercial, and educational spaces.",
        type: "website",
    },
};

export default function GalleryPage() {
    return (
        <main className="min-h-screen">
            <Gallery />
        </main>
    );
}
