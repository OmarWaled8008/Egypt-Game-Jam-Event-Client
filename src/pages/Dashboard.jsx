import React, { useContext } from "react";
import { ApiContext } from "../contexts/contexts";

export default function Dashboard() {
  const { generalData, loading, error } = useContext(ApiContext);
  console.log(generalData, loading, error);

  function formatHourTo12Hour(hour24) {
    const date = new Date();
    date.setHours(hour24);
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return formattedTime;
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4 mx-auto"></div>
          <h2 className="text-xl font-semibold">Loading dashboard data...</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
        <main className="max-w-[1440px] mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="flex size-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Live Data Stream
                </span>
              </div>
              <h2 className="text-4xl font-bold">Event Analytics Insights</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Comprehensive performance monitoring for the 2026 Cairo Hub.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-background-light dark:bg-card-dark border border-slate-200 dark:border-white/5 p-6 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    trending_up
                  </span>
                  +2.1%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Total Attendees
              </p>
              <h3 className="text-3xl font-bold mt-1">
                {generalData?.data?.totalAttendees}
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-gold/20">
                <div
                  className="h-full bg-accent-gold"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="bg-background-light dark:bg-card-dark border border-slate-200 dark:border-white/5 p-6 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-gray-500/10 text-gray-500">
                  <span className="material-symbols-outlined">how_to_reg</span>
                </div>
                <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    trending_up
                  </span>
                  +5.2%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Check-in Rate %
              </p>
              <h3 className="text-3xl font-bold mt-1">
                {generalData?.data?.checkInRate}
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20">
                <div
                  className="h-full bg-primary"
                  style={{ width: generalData?.data?.checkInRate }}
                ></div>
              </div>
            </div>
            <div className="bg-background-light dark:bg-card-dark border border-slate-200 dark:border-white/5 p-6 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">group_add</span>
                </div>
                <span className="text-red-500 text-xs font-bold bg-red-500/10 px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    trending_down
                  </span>
                  +12%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Not Checked in Attendees
              </p>
              <h3 className="text-3xl font-bold mt-1">
                {generalData?.data?.notCheckedInAttendees}
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 shadow-[0_0_10px_rgba(244,168,37,0.5)]">
                <div
                  className="h-full bg-primary"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="bg-background-light dark:bg-card-dark border border-slate-200 dark:border-white/5 p-6 rounded-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    trending_up
                  </span>
                  +12%
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Checked in attendees
              </p>
              <h3 className="text-3xl font-bold mt-1">
                {generalData?.data?.checkedInAttendees}
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-purple/20">
                <div
                  className="h-full bg-accent-purple"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-background-light dark:bg-card-dark border border-slate-200 dark:border-white/5 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-6">Age Groups</h3>
              <div className="flex flex-col justify-between h-[80%] gap-6">
                {generalData?.data?.ageNums.map((ageGroup) => {
                  const percentage = (
                    (ageGroup.total / generalData.data.totalAttendees) *
                    100
                  ).toFixed(1);
                  return (
                    <div key={ageGroup._id}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{ageGroup._id}</span>
                        <span className="font-bold">{percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(244,168,37,0.4)]"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-background-light dark:bg-card-dark border border-slate-200 dark:border-white/5 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-6">Profession</h3>
              <div className="grid grid-cols-2 gap-4 gap-y-10">
                {generalData?.data?.professionNums.map((profession) => {
                  const percentage = (
                    (profession.total / generalData.data.totalAttendees) *
                    100
                  ).toFixed(1);
                  return (
                    <div key={profession._id}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{profession._id}</span>
                        <span className="font-bold">{percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-700 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-2 gap-6 mb-8">
              <div className=" flex flex-col justify-center  bg-background-light dark:bg-card-dark border border-slate-200 dark:border-white/5 p-6 rounded-xl relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-red-600/10 text-red-600">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <span className="text-slate-400 text-xs font-bold bg-white/5 px-2 py-1 rounded-full">
                    UnSteady
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Less Common Check-in Time
                </p>
                <h3 className="text-3xl font-bold mt-1">
                  {formatHourTo12Hour(generalData?.data?.lessCommonHour[0]._id)}
                </h3>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-purple/20">
                  <div
                    className="h-full bg-accent-purple"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-background-light dark:bg-card-dark border border-slate-200 dark:border-white/5 p-6 rounded-xl relative overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-green-600/10 text-green-600">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <span className="text-slate-400 text-xs font-bold bg-white/5 px-2 py-1 rounded-full">
                    Steady
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Peak Check-in Time
                </p>
                <h3 className="text-3xl font-bold mt-1">
                  {formatHourTo12Hour(generalData?.data?.peakCheckIn[0]._id)}
                </h3>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-purple/20">
                  <div
                    className="h-full bg-accent-purple"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-8">
              <div className="bg-background-light dark:bg-card-dark border border-slate-200 dark:border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-6">Participation</h3>
                <div className="flex flex-col justify-between h-[80%] gap-6">
                  {generalData?.data?.participationNums.map((participation) => {
                    const percentage = (
                      (participation.total / generalData.data.totalAttendees) *
                      100
                    ).toFixed(1);
                    return (
                      <div key={participation._id}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">
                            {participation._id}
                          </span>
                          <span className="font-bold">{percentage}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-slate-500 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
