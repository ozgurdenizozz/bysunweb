import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const moduleIcons = [
  <svg key="1" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg key="2" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
  <svg key="3" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="4" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="5" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>,
  <svg key="6" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
];

export default function EnergyOSSection() {
  const t = useTranslations("energyos");
  const modules = ["module1", "module2", "module3", "module4", "module5", "module6"] as const;

  return (
    <section className="py-20 bg-[#102A43]" id="energyos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F5B400]/20 text-[#F5B400] text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-[#F5B400]/30">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              {t("subtitle")}
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">{t("title")}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">{t("desc")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {modules.map((mod, i) => (
                <div key={mod} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-white/10">
                  <div className="text-[#F5B400] flex-shrink-0">{moduleIcons[i]}</div>
                  <span className="text-white text-sm font-medium">{t(mod)}</span>
                </div>
              ))}
            </div>

            <Link
              href="/energyos"
              className="inline-block bg-[#F5B400] hover:bg-yellow-400 text-[#102A43] font-bold px-8 py-4 rounded-xl transition-colors"
            >
              {t("cta")}
            </Link>
          </div>

          {/* Right: Animated dashboard preview */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white font-semibold">EnergyOS Dashboard</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs">Live</span>
              </span>
            </div>

            {/* Metric row */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Solar", value: "847 kW", trend: "+12%" },
                { label: "BESS", value: "240 kWh", trend: "87%" },
                { label: "Grid", value: "103 kW", trend: "-34%" },
              ].map((m) => (
                <div key={m.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-gray-400 text-xs">{m.label}</p>
                  <p className="text-white font-bold mt-1">{m.value}</p>
                  <p className="text-green-400 text-xs mt-1">{m.trend}</p>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="bg-white/5 rounded-xl p-4 mb-4">
              <p className="text-gray-400 text-xs mb-3">Production vs. Consumption</p>
              <div className="flex items-end gap-1 h-20">
                {[70, 85, 60, 90, 75, 95, 80, 65, 88, 72, 93, 78].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className="w-full bg-[#0A4FD9] rounded-t-sm opacity-90"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ESG badge */}
            <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <div>
                <p className="text-white text-xs font-semibold">ESG Score: A+</p>
                <p className="text-green-400 text-xs">CO₂ Azaltım: 2.4 t/ay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
