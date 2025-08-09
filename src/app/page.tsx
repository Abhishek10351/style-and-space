import Hero from "@/components/Hero";
import Header from "@/components/Header";
export default function Home() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background lg:px-32">
                <Hero />
            </main>
        </>
    );
}
