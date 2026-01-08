import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-32 px-4 md:px-8 pb-20 min-h-[80vh] flex flex-col justify-between">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-20 leading-[0.8]">Contact</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
           <div className="space-y-12">
              <div>
                 <h2 className="text-sm uppercase tracking-widest text-concrete mb-4">General Inquiries</h2>
                 <a href="mailto:hello@hyehouse.nyc" className="text-2xl md:text-4xl font-bold uppercase hover:text-concrete transition-colors">hello@hyehouse.nyc</a>
              </div>
              
              <div>
                 <h2 className="text-sm uppercase tracking-widest text-concrete mb-4">Social</h2>
                 <div className="flex flex-col gap-2">
                    <a href="#" className="text-xl uppercase font-bold hover:text-concrete transition-colors">Instagram ↗</a>
                    <a href="#" className="text-xl uppercase font-bold hover:text-concrete transition-colors">Twitter ↗</a>
                    <a href="#" className="text-xl uppercase font-bold hover:text-concrete transition-colors">SoundCloud ↗</a>
                 </div>
              </div>
           </div>

           <form className="space-y-8 w-full max-w-xl">
              <div className="group">
                 <label className="text-xs uppercase tracking-widest text-concrete mb-2 block group-focus-within:text-white transition-colors">Name</label>
                 <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-xl uppercase font-bold focus:border-white transition-colors placeholder:text-neutral-800" />
              </div>
              <div className="group">
                 <label className="text-xs uppercase tracking-widest text-concrete mb-2 block group-focus-within:text-white transition-colors">Email</label>
                 <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-xl uppercase font-bold focus:border-white transition-colors placeholder:text-neutral-800" />
              </div>
              <div className="group">
                 <label className="text-xs uppercase tracking-widest text-concrete mb-2 block group-focus-within:text-white transition-colors">Message</label>
                 <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-xl uppercase font-bold focus:border-white transition-colors resize-none placeholder:text-neutral-800" />
              </div>
              
              <button type="submit" className="w-full py-4 bg-white text-black uppercase font-bold tracking-widest hover:bg-concrete transition-colors mt-8">
                Send Message
              </button>
           </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}
