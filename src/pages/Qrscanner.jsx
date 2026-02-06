import { Scanner } from "@yudiel/react-qr-scanner";
import React, { useState } from "react";

export default function Qrscanner() {
  const [message, setMessage] = useState("");
  const [lastScanned, setLastScanned] = useState(null);

  const handleScan = async (result) => {
    if (!result) return;

    const qrData = result[0]?.rawValue;

    // Prevent multiple scans of same QR
    if (qrData === lastScanned) return;
    setLastScanned(qrData);

    try {
      const response = await fetch(
        `${qrData}`, // safer than full URL in QR
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Check-in successful");
      } else {
        setMessage("⚠️ " + data.message);
      }
    } catch (err) {
      setMessage("❌ Network error");
      console.log(err);
    }

    // Allow scanning again after 2 sec
    setTimeout(() => setLastScanned(null), 2000);
  };

  return (
    // <div style={{ textAlign: "center" }}>
    //   <h2>Event Check-in Scanner</h2>

    //   <Scanner
    //     onScan={handleScan}
    //     onError={(e) => console.error(e)}
    //     constraints={{ facingMode: { ideal: "environment" } }} // back camera
    //     styles={{ container: { width: 300, margin: "auto" } }}
    //   />

    //   <h3>{message}</h3>
    // </div>

    <>
      <div class="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white">
        <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <div class="layout-container flex h-full grow flex-col">
            {/* <div class="fixed top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <div class="bg-green-500/90 backdrop-blur shadow-lg text-white px-6 py-3 rounded-xl border border-white/20 flex items-center gap-3 animate-bounce">
                <span class="material-symbols-outlined">check_circle</span>
                <span class="font-bold">Check-in Successful</span>
              </div>
            </div> */}
            <main class="flex-1 flex flex-col items-center justify-start py-8 px-4 lg:px-40 gap-8">
              <div class="w-full max-w-[960px] flex flex-col items-center">
                <div class="w-full relative flex flex-col items-center">
                  <div class="w-full aspect-video md:aspect-[21/9] bg-black rounded-2xl overflow-hidden relative border-2 border-primary/20 scanner-frame group">
                    <div
                      class="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-80 transition-opacity"
                      data-alt="Crowded event audience perspective"
                      style={{
                        backgroundImage: 'url("/GDA_LOGO_THEME.png")',
                      }}
                    >
                      <Scanner
                        onScan={handleScan}
                        onError={(e) => console.error(e)}
                        constraints={{ facingMode: { ideal: "environment" } }} // back camera
                        styles={{ container: { width: "50%", margin: "auto" } }}
                      />
                    </div>
                  </div>
                  <div class="flex flex-col md:flex-row items-center justify-between w-full mt-6 gap-4">
                    <div class="flex bg-slate-200 dark:bg-primary/5 p-1 rounded-xl w-full md:w-auto">
                      <label class="flex cursor-pointer items-center justify-center gap-2 px-6 py-2 rounded-lg bg-primary text-background-dark shadow-lg transition-all font-bold">
                        <span class="material-symbols-outlined text-sm">
                          photo_camera_back
                        </span>
                        <span class="text-sm">Rear Camera</span>
                        <input
                          checked
                          class="hidden"
                          name="camera"
                          type="radio"
                        />
                      </label>
                      <label class="flex cursor-pointer items-center justify-center gap-2 px-6 py-2 rounded-lg text-slate-600 dark:text-primary/60 hover:text-primary transition-all font-bold">
                        <span class="material-symbols-outlined text-sm">
                          account_circle
                        </span>
                        <span class="text-sm">Front Camera</span>
                        <input class="hidden" name="camera" type="radio" />
                      </label>
                    </div>
                    <div class="flex gap-2 w-full md:w-auto">
                      <div class="relative flex-1">
                        <input
                          class="w-full bg-white dark:bg-background-dark border border-slate-300 dark:border-primary/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary dark:text-white text-sm"
                          placeholder="Enter Ticket ID Manualy..."
                          type="text"
                        />
                      </div>
                      <button class="bg-primary hover:bg-primary/80 text-background-dark font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                        <span class="material-symbols-outlined text-lg">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-full mt-12">
                  <div class="flex items-center justify-between mb-6 border-b border-primary/10 pb-2">
                    <h3 class="text-xl font-bold flex items-center gap-2">
                      <span class="material-symbols-outlined text-primary">
                        history
                      </span>
                      Recent Scans
                    </h3>
                    <button class="text-primary text-sm font-bold hover:underline">
                      View All History
                    </button>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-slate-200 dark:border-primary/20 relative overflow-hidden">
                      <div class="absolute top-0 right-0 p-2">
                        <span class="material-symbols-outlined text-green-500 text-lg">
                          check_circle
                        </span>
                      </div>
                      <div class="flex items-center gap-3 mb-3">
                        <div class="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <span class="material-symbols-outlined">person</span>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm">Marcus V.</h4>
                          <p class="text-[10px] text-primary uppercase font-medium">
                            VIP Pass Holder
                          </p>
                        </div>
                      </div>
                      <div class="flex justify-between items-end border-t border-slate-200 dark:border-primary/10 pt-3">
                        <span class="text-[11px] opacity-60">ID: #8921-TX</span>
                        <span class="text-[11px] font-bold">12:45:02 PM</span>
                      </div>
                    </div>
                    <div class="bg-white dark:bg-red-500/5 p-4 rounded-xl border border-slate-200 dark:border-red-500/20 relative overflow-hidden">
                      <div class="absolute top-0 right-0 p-2">
                        <span class="material-symbols-outlined text-red-500 text-lg">
                          error
                        </span>
                      </div>
                      <div class="flex items-center gap-3 mb-3">
                        <div class="size-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                          <span class="material-symbols-outlined">warning</span>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm">Sarah Jenkins</h4>
                          <p class="text-[10px] text-red-500 uppercase font-medium">
                            Already Scanned
                          </p>
                        </div>
                      </div>
                      <div class="flex justify-between items-end border-t border-slate-200 dark:border-red-500/10 pt-3">
                        <span class="text-[11px] opacity-60 text-red-400">
                          ID: #4402-AQ
                        </span>
                        <span class="text-[11px] font-bold">12:44:51 PM</span>
                      </div>
                    </div>
                    <div class="bg-white dark:bg-primary/5 p-4 rounded-xl border border-slate-200 dark:border-primary/20 relative overflow-hidden">
                      <div class="absolute top-0 right-0 p-2">
                        <span class="material-symbols-outlined text-green-500 text-lg">
                          check_circle
                        </span>
                      </div>
                      <div class="flex items-center gap-3 mb-3">
                        <div class="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <span class="material-symbols-outlined">person</span>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm">Lukas Miller</h4>
                          <p class="text-[10px] text-primary uppercase font-medium">
                            General Admission
                          </p>
                        </div>
                      </div>
                      <div class="flex justify-between items-end border-t border-slate-200 dark:border-primary/10 pt-3">
                        <span class="text-[11px] opacity-60">ID: #1109-BY</span>
                        <span class="text-[11px] font-bold">12:43:28 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
