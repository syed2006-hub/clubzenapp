import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-r from-black via-[#1c0a33] to-black animate-gradient-x text-white selection:bg-purple-500/30">
      
      {/* AMBIENT GLOW EFFECTS */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-700/20 rounded-full blur-[120px] pointer-events-none" />

      {/* NAVBAR */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-purple-500/10 backdrop-blur-md bg-black/20">
        <div className="flex items-center gap-3">
          <Image
            src="/favicon.ico"
            alt="ClubZen Logo"
            width={34}
            height={34}
            className="drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"
          />
          <h1 className="text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            ClubZen
          </h1>
        </div>

        <a
          href="https://drive.usercontent.google.com/download?id=1Gun4GVRHYNiQ0gq3VJk8tTKChnirlwCe&export=download&authuser=0"
          className="px-5 py-2 rounded-full bg-white text-purple-950 text-sm font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
        >
          Download App
        </a>
      </header>

      {/* HERO */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
        
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Manage Your College Clubs <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500">
            Smarter & Faster
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-purple-100/70 text-lg md:text-xl font-light leading-relaxed">
          ClubZen is a modern club & event management platform that helps students
          discover events, register instantly, and stay updated — all in one place.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="https://drive.usercontent.google.com/download?id=1Gun4GVRHYNiQ0gq3VJk8tTKChnirlwCe&export=download&authuser=0"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(192,38,211,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="group-hover:animate-bounce">⬇</span> Download Now
          </a>

          <a
            href="/event/AXdQFjds8q9Zx95RZEWh"
            className="px-8 py-4 rounded-xl border border-purple-400/20 backdrop-blur-sm bg-purple-950/20 hover:bg-purple-900/30 hover:-translate-y-1 transition-all duration-300 font-medium text-purple-50"
          >
            View Demo Event
          </a>
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl w-full">
          
          <div className="p-8 rounded-2xl bg-[#1c0a33]/40 border border-purple-500/10 backdrop-blur-lg hover:bg-[#2d0b54]/50 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="font-semibold text-xl text-white">Event Management</h3>
            <p className="text-sm text-purple-200/60 mt-3 leading-relaxed">
              Create, manage, and share events instantly with dynamic, customizable pages.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#1c0a33]/40 border border-purple-500/10 backdrop-blur-lg hover:bg-[#2d0b54]/50 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,70,239,0.2)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-xl text-white">Instant Registration</h3>
            <p className="text-sm text-purple-200/60 mt-3 leading-relaxed">
              Students can register in one click with smart forms and instant ticketing.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#1c0a33]/40 border border-purple-500/10 backdrop-blur-lg hover:bg-[#2d0b54]/50 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="font-semibold text-xl text-white">Smart Sharing</h3>
            <p className="text-sm text-purple-200/60 mt-3 leading-relaxed">
              Every event has WhatsApp-ready preview links tailored with beautiful OG tags.
            </p>
          </div>
          
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 text-center text-sm text-purple-300/50 py-8 border-t border-purple-500/10 backdrop-blur-md bg-black/20">
        © {new Date().getFullYear()} ClubZen. Built for campus communities.
      </footer>
    </div>
  );
}
