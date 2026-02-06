import React from "react";

export default function Checkin2() {
  return (
    <>
      <div className="bg-white dark:bg-primary/5 p-4 rounded-xl border border-slate-200 dark:border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2">
          <span className="material-symbols-outlined text-green-500 text-lg">
            check_circle
          </span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Marcus V.</h4>
            <p className="text-[10px] text-primary uppercase font-medium">
              VIP Pass Holder
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end border-t border-slate-200 dark:border-primary/10 pt-3">
          <span className="text-[11px] opacity-60">ID: #8921-TX</span>
          <span className="text-[11px] font-bold">12:45:02 PM</span>
        </div>
      </div>
    </>
  );
}
