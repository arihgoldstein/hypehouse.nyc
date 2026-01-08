import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { events } from "@/data/events";
import Link from "next/link";

export default function EventsPage() {
  const upcoming = events.filter(e => e.status === "upcoming");
  const past = events.filter(e => e.status === "past");

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-32 px-4 md:px-8 pb-20">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-20 break-words leading-[0.8]">Events</h1>
        
        {/* Upcoming */}
        <div className="mb-32">
           <h2 className="text-sm uppercase tracking-widest mb-8 border-b border-white/20 pb-4 text-concrete sticky top-24 bg-black z-10">Upcoming</h2>
           <div className="flex flex-col border-t border-white/10">
              {upcoming.map(event => (
                <div key={event.id} className="border-b border-white/10 py-12 hover:bg-neutral-900 transition-colors group flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                   <div className="w-full">
                     <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                       <span className="text-white uppercase tracking-widest text-sm font-bold">{event.date}</span>
                       <span className="hidden md:inline text-white/20">|</span>
                       <span className="text-concrete uppercase tracking-widest text-sm">{event.location}</span>
                     </div>
                     <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter group-hover:indent-4 transition-all duration-300">
                       {event.title}
                     </h3>
                   </div>
                   <Link 
                     href={event.ticketLink || "#"} 
                     className="px-8 py-4 bg-white text-black hover:bg-concrete transition-colors uppercase tracking-widest text-sm font-bold whitespace-nowrap"
                   >
                     Get Tickets
                   </Link>
                </div>
              ))}
           </div>
        </div>

        {/* Past */}
        <div>
           <h2 className="text-sm uppercase tracking-widest mb-8 border-b border-white/20 pb-4 text-concrete">Archive</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {past.map(event => (
                <div key={event.id} className="group cursor-pointer">
                   <div className="aspect-[4/3] bg-neutral-900 mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                      <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center text-concrete text-xs uppercase tracking-widest">
                         [Archive Photo]
                      </div>
                   </div>
                   <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">{event.title}</h3>
                   <div className="flex justify-between items-baseline border-t border-white/10 pt-2">
                     <p className="text-xs text-concrete uppercase tracking-widest">{event.date}</p>
                     <p className="text-xs text-concrete uppercase tracking-widest">{event.location}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
