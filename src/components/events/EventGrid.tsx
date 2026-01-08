import { events } from "@/data/events";
import Link from "next/link";

export function EventGrid() {
  const upcomingEvents = events.filter(e => e.status === "upcoming");
  
  return (
    <section className="py-20 px-4 md:px-8 border-b border-white/10">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">Upcoming Events</h2>
        <Link href="/events" className="hidden md:block text-sm uppercase tracking-widest text-concrete hover:text-white transition-colors">View All</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 border border-white/10">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="bg-black p-8 md:p-12 hover:bg-neutral-900 transition-colors group relative h-[50vh] flex flex-col justify-between">
            <div className="flex justify-between items-start">
               <span className="text-xs uppercase tracking-widest text-concrete border border-white/20 px-2 py-1 rounded-full">{event.status}</span>
               <span className="text-xs uppercase tracking-widest text-concrete">{event.date}</span>
            </div>
            
            <div>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                {event.title}
              </h3>
              <p className="text-concrete uppercase tracking-widest text-sm">{event.location}</p>
            </div>
            
            <div>
               <Link 
                 href={event.ticketLink || "#"} 
                 className="inline-block bg-white text-black px-6 py-3 uppercase tracking-widest text-sm hover:bg-concrete transition-colors"
               >
                 Get Tickets
               </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 md:hidden">
         <Link href="/events" className="block text-center w-full py-4 border border-white/20 text-sm uppercase tracking-widest text-concrete hover:text-white transition-colors">View All Events</Link>
      </div>
    </section>
  );
}
