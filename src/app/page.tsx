import { Header, Hero, Services } from "@/components";
export default function Home() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background xl:px-32">
                <Hero />
                <Services />
            </main>
        </>
    );
}
