import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-4 md:px-8 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest text-concrete">Connect</h3>
          <div className="flex flex-col gap-2">
            <Link href="https://instagram.com" className="text-2xl font-bold hover:text-concrete transition-colors">Instagram</Link>
            <Link href="mailto:hello@hyehouse.nyc" className="text-2xl font-bold hover:text-concrete transition-colors">Email</Link>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest text-concrete">Navigate</h3>
          <div className="flex flex-col gap-2">
            <Link href="/events" className="hover:text-concrete transition-colors">Upcoming Events</Link>
            <Link href="/merch" className="hover:text-concrete transition-colors">Shop Merch</Link>
            <Link href="/story" className="hover:text-concrete transition-colors">Our Story</Link>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-sm uppercase tracking-widest text-concrete">Join the List</h3>
          <p className="text-concrete max-w-md">
            Be the first to know about secret locations, ticket drops, and limited merch releases.
          </p>
          <form className="flex border-b border-white pb-2 max-w-md">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent w-full outline-none placeholder:text-neutral-600 uppercase tracking-widest"
            />
            <button type="submit" className="uppercase text-sm tracking-widest hover:text-concrete">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-between items-end border-t border-white/10 pt-8 text-xs uppercase text-concrete tracking-widest">
        <span>© 2026 Hye House</span>
        <span className="hidden md:block">Brooklyn / Los Angeles / Yerevan</span>
        <span>Site by Ari</span>
      </div>
    </footer>
  );
}
