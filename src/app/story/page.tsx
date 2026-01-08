import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-32 px-4 md:px-8 pb-20">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-20 leading-[0.8]">Story</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
           <div className="text-2xl md:text-4xl font-bold uppercase leading-tight tracking-tight sticky top-32 h-fit">
             Hye House is an Armenian-led creative community bridging heritage with the underground.
           </div>
           
           <div className="space-y-12 text-concrete text-lg md:text-xl leading-relaxed max-w-xl">
             <p>
               Born from a desire to see our culture represented in the spaces we frequent, Hye House began as a series of intimate gatherings in Brooklyn. It has since evolved into a global movement, connecting the Armenian diaspora through sound, design, and shared experience.
             </p>
             <p>
               We are DJs, designers, artists, and curators. We are not just preserving culture—we are evolving it. Our events are safe spaces for expression, experimentation, and joy.
             </p>
             <p>
               From warehouse raves in New York to rooftop sessions in Yerevan, Hye House is wherever we are. We operate at the intersection of tradition and futurism, creating environments where the ancient soul meets the modern pulse.
             </p>
             <p>
                Our mission is simple: To build the house we want to live in. A house built on rhythm, respect, and radical creativity.
             </p>
           </div>
        </div>

        <div className="mt-32 border-t border-white/10 pt-20">
           <h2 className="text-sm uppercase tracking-widest text-concrete mb-12">Team & Collaborators</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group">
                  <div className="aspect-square bg-neutral-900 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 relative overflow-hidden">
                     <div className="absolute inset-0 flex items-center justify-center text-white/10 uppercase tracking-widest text-xs">Portrait</div>
                  </div>
                  <h3 className="text-lg font-bold uppercase">Creative Name</h3>
                  <p className="text-xs uppercase tracking-widest text-concrete">Role / Title</p>
                </div>
              ))}
           </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
