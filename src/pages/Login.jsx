import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [securityKey, setSecurityKey] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://egypt-game-jam-event-backend-production.up.railway.app/api/v1/attendee/login",
        { securityKey },
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="bg-background-light dark:bg-background-dark text-white min-h-screen flex flex-col selection:bg-primary/30">
        <main className="flex-1 flex items-center mt-16 justify-center px-4 relative z-10">
          <div className="w-full max-w-md bg-charcoal/40 border border-white/5 p-8 lg:p-12 rounded-xl backdrop-blur-xl shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
                <div className="pulse-lock flex items-center justify-center size-20 rounded-full border border-primary/20 bg-primary/5 text-primary">
                  <span className="material-symbols-outlined text-4xl">
                    lock_open
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center mb-10">
              <h1 className="text-white tracking-[0.3em] text-2xl font-bold leading-tight uppercase mb-2">
                Admin Access Required
              </h1>
              <p className="text-white/40 text-xs font-medium tracking-widest uppercase">
                Biometric or Security Key Verification
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-[10px] font-bold uppercase tracking-[0.15em] ml-1">
                  Identity Token
                </label>
                <div className="relative glow-border transition-all duration-300 rounded-lg overflow-hidden border border-white/10 bg-black/40">
                  <input
                    className="w-full bg-transparent border-none text-white focus:ring-0 h-14 px-5 placeholder:text-white/20 font-display text-sm tracking-widest"
                    placeholder="Enter Security Key..."
                    type="password"
                    name="securityKey"
                    value={securityKey}
                    onChange={(e) => setSecurityKey(e.target.value)}
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                    <span className="material-symbols-outlined text-xl">
                      key
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full h-14 rounded-lg bg-gradient-to-r from-primary to-amber-glow text-background-dark font-bold tracking-[0.1em] text-sm uppercase transition-all hover:brightness-110 active:scale-[0.98] shadow-[0_0_20px_rgba(255,191,0,0.2)] flex items-center justify-center gap-2 group"
                >
                  <span>Unlock QR Scanner</span>
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                    qr_code_scanner
                  </span>
                </button>
              </div>
            </form>
            <div className="mt-12 pt-8 border-t border-white/5 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                <div className="size-1.5 rounded-full bg-primary/40 animate-pulse"></div>
                <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">
                  Secure Encrypted Session // 256-bit
                </span>
              </div>
            </div>
          </div>
        </main>
        <footer className="relative z-10 py-8 px-6 flex justify-between items-end">
          <div className="hidden lg:block">
            <div className="text-[10px] text-white/20 font-mono">
              COORD: 30.0444° N, 31.2357° E<br />
              REF: EGJAM_AUTH_V2.0
            </div>
          </div>
          <div className="w-full lg:w-auto text-center lg:text-right">
            <p className="text-[10px] text-white/30 uppercase tracking-widest">
              © 2026 Game Jam Egypt. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
