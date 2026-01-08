import { merch } from "@/data/merch";
import Link from "next/link";

export function MerchGrid() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Shop Merch</h2>
        <Link href="/merch" className="hidden md:block text-sm uppercase tracking-widest text-concrete hover:text-white transition-colors">View All</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {merch.slice(0, 3).map((item) => (
          <Link key={item.id} href={`/merch/${item.id}`} className="group block">
            <div className="aspect-[3/4] bg-neutral-900 mb-6 relative overflow-hidden">
               {/* Placeholder for image - using a subtle gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
               <div className="absolute inset-0 flex items-center justify-center text-white/10 uppercase tracking-widest text-xs font-bold">
                 Product Shot
               </div>
               
               {item.status === "sold out" && (
                 <div className="absolute top-4 right-4 bg-white text-black text-xs uppercase px-2 py-1 font-bold tracking-widest">
                   Sold Out
                 </div>
               )}
            </div>
            
            <div className="flex justify-between items-start">
              <h3 className="text-lg uppercase font-bold tracking-tight text-white group-hover:text-concrete transition-colors">
                {item.name}
              </h3>
              <span className="text-concrete font-mono text-sm">{item.price}</span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 md:hidden">
         <Link href="/merch" className="block text-center w-full py-4 border border-white/20 text-sm uppercase tracking-widest text-concrete hover:text-white transition-colors">View Shop</Link>
      </div>
    </section>
  );
}
