import {
    Header,
    Hero,
    Services,
    About,
    Process,
    Testimonial,
    Faq,
    Footer,
} from "@/components";

export default function Home() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-background xl:px-32">
                <main>
                    <Hero />
                    <Services />
                    <About />
                    <Process />
                    <Testimonial />
                    <Faq />
                </main>
                <Footer />
            </div>
        </>
    );
}
