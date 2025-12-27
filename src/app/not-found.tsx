import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background">
            <div className="text-center px-4 animate-fade-in">
                <div className="mb-8">
                    <h1 className="text-8xl sm:text-9xl font-serif font-bold text-primary/20 mb-4">
                        404
                    </h1>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto mb-8">
                        Oops! The page you&apos;re looking for doesn&apos;t
                        exist or has been moved.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button
                            size="lg"
                            variant="default"
                            className="w-full sm:w-auto"
                        >
                            <Home className="mr-2 h-4 w-4" />
                            Go to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
