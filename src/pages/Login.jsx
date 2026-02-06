
export default function Login() {
  return (
    <>
      <div class="bg-background-light dark:bg-background-dark text-white min-h-screen flex flex-col selection:bg-primary/30">
        <main class="flex-1 flex items-center mt-16 justify-center px-4 relative z-10">
          <div class="w-full max-w-md bg-charcoal/40 border border-white/5 p-8 lg:p-12 rounded-xl backdrop-blur-xl shadow-2xl">
            <div class="flex justify-center mb-8">
              <div class="relative">
                <div class="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
                <div class="pulse-lock flex items-center justify-center size-20 rounded-full border border-primary/20 bg-primary/5 text-primary">
                  <span class="material-symbols-outlined text-4xl">
                    lock_open
                  </span>
                </div>
              </div>
            </div>
            <div class="text-center mb-10">
              <h1 class="text-white tracking-[0.3em] text-2xl font-bold leading-tight uppercase mb-2">
                Admin Access Required
              </h1>
              <p class="text-white/40 text-xs font-medium tracking-widest uppercase">
                Biometric or Security Key Verification
              </p>
            </div>
            <form
              action="/api/v1/attendee/login"
              method="POST"
              class="space-y-6"
            >
              <div class="flex flex-col gap-2">
                <label class="text-white/60 text-[10px] font-bold uppercase tracking-[0.15em] ml-1">
                  Identity Token
                </label>
                <div class="relative glow-border transition-all duration-300 rounded-lg overflow-hidden border border-white/10 bg-black/40">
                  <input
                    class="w-full bg-transparent border-none text-white focus:ring-0 h-14 px-5 placeholder:text-white/20 font-display text-sm tracking-widest"
                    placeholder="Enter Security Key..."
                    type="password"
                    name="securityKey"
                    required
                  />
                  <div class="absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                    <span class="material-symbols-outlined text-xl">key</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <button
                  type="submit"
                  class="w-full h-14 rounded-lg bg-gradient-to-r from-primary to-amber-glow text-background-dark font-bold tracking-[0.1em] text-sm uppercase transition-all hover:brightness-110 active:scale-[0.98] shadow-[0_0_20px_rgba(255,191,0,0.2)] flex items-center justify-center gap-2 group"
                >
                  <span>Unlock QR Scanner</span>
                  <span class="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                    qr_code_scanner
                  </span>
                </button>
              </div>
            </form>
            <div class="mt-12 pt-8 border-t border-white/5 text-center">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                <div class="size-1.5 rounded-full bg-primary/40 animate-pulse"></div>
                <span class="text-[9px] text-white/40 uppercase tracking-widest font-bold">
                  Secure Encrypted Session // 256-bit
                </span>
              </div>
            </div>
          </div>
        </main>
        <footer class="relative z-10 py-8 px-6 flex justify-between items-end">
          <div class="hidden lg:block">
            <div class="text-[10px] text-white/20 font-mono">
              COORD: 30.0444° N, 31.2357° E<br />
              REF: EGJAM_AUTH_V2.0
            </div>
          </div>
          <div class="w-full lg:w-auto text-center lg:text-right">
            <p class="text-[10px] text-white/30 uppercase tracking-widest">
              © 2026 Game Jam Egypt. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
