import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { merch } from "@/data/merch";
import Link from "next/link";

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-32 px-4 md:px-8 pb-20">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-20 leading-[0.8]">Shop</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {merch.map((item) => (
            <Link key={item.id} href={`/merch/${item.id}`} className="group block">
              <div className="aspect-[3/4] bg-neutral-900 mb-6 relative overflow-hidden">
                 <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                 <div className="absolute inset-0 flex items-center justify-center text-white/20 uppercase tracking-widest text-xs font-bold">
                   {item.name} Image
                 </div>
                 
                 {item.status === "sold out" && (
                   <div className="absolute top-4 right-4 bg-white text-black text-xs uppercase px-2 py-1 font-bold tracking-widest z-10">
                     Sold Out
                   </div>
                 )}
              </div>
              
              <div className="flex justify-between items-start border-t border-white/10 pt-4">
                <h3 className="text-xl uppercase font-bold tracking-tight text-white group-hover:text-concrete transition-colors max-w-[70%]">
                  {item.name}
                </h3>
                <span className="text-concrete font-mono text-sm">{item.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
