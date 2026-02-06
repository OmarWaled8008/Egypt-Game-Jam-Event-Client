import { Scanner } from "@yudiel/react-qr-scanner";
import React, { useState } from "react";
import Checkin2 from "../components/Checkin2";
import toast from "react-hot-toast";

export default function Qrscanner() {
  const [lastScanned, setLastScanned] = useState(null);

  const handleScan = async (result) => {
    if (!result) return;

    const qrData = result[0]?.rawValue;

    // Prevent multiple scans of same QR
    if (qrData === lastScanned) return;
    setLastScanned(qrData);

    try {
      const response = await fetch(
        `${qrData}`, 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("✅ " + data.message);
      } else {
        toast.error("⚠️ " + data.message);
      }
    } catch (err) {
      toast.error("❌ Network error");
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
      <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="flex-1 flex flex-col items-center justify-start py-8 px-4 lg:px-40 gap-8">
              <div className="w-full max-w-[960px] flex flex-col items-center">
                <div className="w-full relative flex flex-col items-center">
                  <div className="w-[40%] h-[350px] bg-black rounded-2xl overflow-hidden relative border-2 border-primary/20 scanner-frame group">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-80 transition-opacity"
                      data-alt="Crowded event audience perspective"
                      style={{
                        backgroundImage: 'url("/GDA_LOGO_THEME.png")',
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <Scanner
                        onScan={handleScan}
                        onError={(e) => console.error(e)}
                        constraints={{ facingMode: { ideal: "environment" } }}
                        styles={{
                          container: { width: "100%", margin: "auto" },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row items-center justify-center w-full mt-6 gap-4">
                  <div className="flex justify-center bg-slate-200 dark:bg-primary/5 p-1 rounded-xl w-full md:w-auto">
                    <label className="flex cursor-pointer items-center justify-center gap-2 px-6 py-2 rounded-lg bg-primary text-background-dark shadow-lg transition-all font-bold">
                      <span className="material-symbols-outlined text-sm">
                        person
                      </span>
                      <span className="text-sm">Checked In</span>
                      <span className="text-sm">0</span>
                    </label>
                    <label className="flex cursor-pointer items-center justify-center gap-2 px-6 py-2 rounded-lg text-slate-600 dark:text-primary/60 hover:text-primary transition-all font-bold">
                      <span className="material-symbols-outlined text-sm">
                        person
                      </span>
                      <span className="text-sm">Not Checked In</span>
                      <span className="text-sm">0</span>
                    </label>
                  </div>
                </div>
                <div className="w-full mt-12">
                  <div className="flex items-center justify-between mb-6 border-b border-primary/10 pb-2">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        history
                      </span>
                      Recent Scans
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Checkin2 />
                    
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
