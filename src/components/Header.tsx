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
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/0 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto md:w-screen px-4 md:px-0 lg:px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    
                    {/* <div className="w-8 h-8 bg-gradient-primary rounded-md"></div> */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-purple-800 rounded-md w-8 aspect-square"></div>
                        <span className="text-xl font-serif font-semibold text-foreground">
                            Style &#38; Space
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-foreground hover:text-primary transition-colors duration-300 font-semibold"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            variant="premium"
                            size="lg"
                            className="cursor-pointer shadow-medium"
                        >
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
                    <nav className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Button
                                variant="premium"
                                size="lg"
                                className="mt-4 cursor-pointer"
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
