import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import Link from "next/link";
import {
    SiInstagram,
    SiFacebook,
    SiYoutube,
    SiWhatsapp,
} from "@icons-pack/react-simple-icons";

const socialLinks = [
    {
        icon: SiInstagram,
        href: "https://www.instagram.com/style_and_space_",
        label: "Instagram",
    },
    {
        icon: SiYoutube,
        href: "https://youtube.com/@styleandspace-v7i",
        label: "YouTube",
    },
    {
        icon: SiFacebook,
        href: "https://www.facebook.com/share/1Bxe6Bzmot/",
        label: "Facebook",
    },
    {
        icon: SiWhatsapp,
        href: "https://wa.me/8638595545",
        label: "WhatsApp",
    },
];

const contactInfo = [
    {
        icon: Phone,
        href: "tel:8638595545",
        label: "86385 95545",
    },
    {
        icon: MapPin,
        href: "https://maps.app.goo.gl/5sn41nKSAx5rNrun9?g_st=awb",
        label: "Style & Space, 123 Design Avenue, Creative District, MC 12345",
    },
];

const quickLinks = [
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
];

const services = [
    "Custom Interior Design",
    "Modular Kitchens & Wardrobes",
    "Space Planning & Renovation",
    "Furniture Selection & Styling",
    "Residential & Commercial Projects",
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground rounded-b-md">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="md:col-span-2 lg:col-span-2 pr-0 lg:pr-8">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-accent rounded-md"></div>
                            <span className="text-2xl font-serif font-semibold">
                                Style &#38; Space
                            </span>
                        </div>
                        <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-lg">
                            Transforming spaces into extraordinary environments
                            through premium interior design and architecture.
                            Creating beautiful, functional spaces for over 12
                            years.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3"
                                >
                                    <Link
                                        href={info.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary-foreground/80"
                                    >
                                        <info.icon className="w-4 h-4 text-accent" />
                                    </Link>

                                    <span className="text-sm text-primary-foreground/80 font-semibold">
                                        {info.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1 pl-0 lg:pl-4">
                        <h3 className="text-lg font-semibold mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-1 pl-0 lg:pl-4">
                        <h3 className="text-lg font-semibold mb-6">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-primary-foreground/80 text-sm">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <Button
                                variant="accent"
                                size="sm"
                                className="w-full cursor-pointer"
                            >
                                Get Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-foreground/20">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
                        <div>
                            © {currentYear} Style &#38; Space. All rights
                            reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
