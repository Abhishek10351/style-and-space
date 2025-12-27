"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
            <div className="container mx-auto px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-(image:--gradient-primary) rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300"></div>
                        <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            Style &#38; Space
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-md font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button variant="premium" size="lg">
                            Get Consultation
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 py-4 border-t border-border/50 animate-slide-up">
                        <div className="flex flex-col gap-2">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300 font-medium py-3 px-4 rounded-lg"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Button
                                variant="premium"
                                size="lg"
                                className="mt-4"
                            >
                                Get Consultation
                            </Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
