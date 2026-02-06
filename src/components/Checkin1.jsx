import React from "react";

export default function Checkin1() {
  return (
    <>
      <div className="bg-white dark:bg-red-500/5 p-4 rounded-xl border border-slate-200 dark:border-red-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2">
          <span className="material-symbols-outlined text-red-500 text-lg">
            error
          </span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="size-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
            <span className="material-symbols-outlined">warning</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Sarah Jenkins</h4>
            <p className="text-[10px] text-red-500 uppercase font-medium">
              Already Scanned
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end border-t border-slate-200 dark:border-red-500/10 pt-3">
          <span className="text-[11px] opacity-60 text-red-400">ID: #4402-AQ</span>
          <span className="text-[11px] font-bold">12:44:51 PM</span>
        </div>
      </div>
    </>
  );
}
