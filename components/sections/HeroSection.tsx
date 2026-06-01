import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import TrustSection from "@/components/sections/TrustSection";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <>
      <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image src="/images/hero_ai.png" alt="BY SUN Solar Energy Platform" fill className="object-cover object-left" priority />
        {/* Left-to-right: white on left, fades to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 from-[15%] to-transparent" />
        {/* Bottom fade to white — seamless transition into TrustSection */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: text */}
          <div>
            <span className="inline-block text-[#0A4FD9] text-xs font-bold tracking-widest uppercase mb-4">{t("badge")}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-[#102A43] leading-tight mb-4">
              {t("headline")}{" "}
              <span className="text-[#0A4FD9]">{t("headlineAccent")}</span>
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8 max-w-lg">{t("subtext")}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0A4FD9] hover:bg-[#083EA8] text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-blue-900/40">
                {t("cta1")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2.5 text-[#102A43] font-medium text-sm hover:text-[#0A4FD9] transition-colors">
                <span className="w-9 h-9 rounded-full border-2 border-[#102A43]/30 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
                <div>
                  <div>{t("cta2")}</div>
                  <div className="text-xs text-[#64748B]">{t("cta2sub")}</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right: EnergyOS Card (over image) */}
          <div className="hidden lg:flex justify-end">
            <div className="w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                <div className="w-8 h-8 bg-[#EAF6FF] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#F5B400]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07l-.71.71M6.34 17.66l-.71.71m12.73 0l-.71-.71M6.34 6.34l-.71-.71M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0A4FD9] font-black text-sm">BY SUN EnergyOS</p>
                  <p className="text-[#64748B] text-xs">Smart Energy Management Platform</p>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-gray-100">
                {/* Anlık Durum */}
                <div className="p-5">
                  <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-3">Anlık Durum</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 py-1.5">
                      <div className="w-7 h-7 bg-[#0A4FD9] rounded-md flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                      </div>
                      <div>
                        <p className="text-[#64748B] text-[10px] leading-none">Kurulu Güç</p>
                        <p className="font-bold text-[#102A43] text-sm">1.428 kW</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 py-1.5">
                      <div className="w-7 h-7 bg-green-500 rounded-md flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                      </div>
                      <div>
                        <p className="text-[#64748B] text-[10px] leading-none">Anlık Üretim</p>
                        <p className="font-bold text-[#102A43] text-sm">1.025 kW</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 py-1.5">
                      <div className="w-7 h-7 bg-[#0A4FD9] rounded-md flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                      </div>
                      <div>
                        <p className="text-[#64748B] text-[10px] leading-none">Öz Tüketim Oranı</p>
                        <p className="font-bold text-[#102A43] text-sm">56 %</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/energyos" className="inline-flex items-center gap-1 text-[#0A4FD9] text-xs font-semibold hover:underline">
                    Detaylı İzle <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>

                {/* Günlük Enerji Akışı */}
                <div className="p-5">
                  <p className="text-[#64748B] text-xs font-semibold uppercase tracking-wider mb-2">Günlük Enerji Akışı (kWh)</p>
                  <div className="flex gap-1">
                    <div className="flex flex-col justify-between text-right pr-1" style={{ height: "80px" }}>
                      <span className="text-[9px] text-[#64748B] leading-none">12k</span>
                      <span className="text-[9px] text-[#64748B] leading-none">8k</span>
                      <span className="text-[9px] text-[#64748B] leading-none">4k</span>
                      <span className="text-[9px] text-[#64748B] leading-none">0</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-end gap-0.5" style={{ height: "80px" }}>
                        {[
                          {u:28,c:18,b:8,g:4},
                          {u:42,c:26,b:12,g:6},
                          {u:62,c:38,b:16,g:9},
                          {u:78,c:52,b:20,g:11},
                          {u:68,c:44,b:15,g:8},
                          {u:48,c:32,b:11,g:6},
                          {u:18,c:13,b:6,g:3},
                        ].map((bar, i) => (
                          <div key={i} className="flex-1 flex flex-col justify-end gap-px">
                            <div className="w-full bg-[#CBD5E1]" style={{ height: `${Math.round(bar.g * 0.6)}px` }} />
                            <div className="w-full bg-green-400" style={{ height: `${Math.round(bar.b * 0.8)}px` }} />
                            <div className="w-full bg-[#F5B400]/80" style={{ height: `${Math.round(bar.c * 0.38)}px` }} />
                            <div className="w-full bg-[#0A4FD9]" style={{ height: `${Math.round(bar.u * 0.44)}px` }} />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        {["00","04","08","12","16","20","24"].map(h => (
                          <span key={h} className="text-[9px] text-[#64748B]">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-2">
                    <span className="flex items-center gap-0.5 text-[9px] text-[#64748B]"><span className="w-2 h-2 rounded-sm bg-[#0A4FD9] inline-block" /> Üretim</span>
                    <span className="flex items-center gap-0.5 text-[9px] text-[#64748B]"><span className="w-2 h-2 rounded-sm bg-[#F5B400]/80 inline-block" /> Tüketim</span>
                    <span className="flex items-center gap-0.5 text-[9px] text-[#64748B]"><span className="w-2 h-2 rounded-sm bg-green-400 inline-block" /> Batarya</span>
                    <span className="flex items-center gap-0.5 text-[9px] text-[#64748B]"><span className="w-2 h-2 rounded-sm bg-[#CBD5E1] inline-block" /> Şebeke</span>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-[#EAF6FF] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Tüm veriler gerçek zamanlı</span>
                <Link href="/energyos" className="text-xs font-bold text-[#0A4FD9] hover:underline flex items-center gap-1">
                  EnergyOS&apos;u Keşfedin <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
    <TrustSection />
    </>
  );
}
