import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { EventGrid } from "@/components/events/EventGrid";
import { MerchGrid } from "@/components/merch/MerchGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <EventGrid />
      <div className="py-32 px-4 md:px-8 border-b border-white/10">
        <h2 className="text-2xl md:text-5xl font-bold uppercase tracking-tighter leading-[1.1] max-w-6xl">
          We do not view ourselves as just party promoters. <br/>
          <span className="text-concrete">We are a living platform for experimentation, connecting the diaspora through sound, design, and shared space.</span>
        </h2>
      </div>
      <MerchGrid />
      <Footer />
    </main>
  );
}
