import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

export default function EnergyOSPage() {
  const t = useTranslations("energyos");
  const contact = useTranslations("contact");
  const modules = ["module1", "module2", "module3", "module4", "module5", "module6"] as const;

  return (
    <main>
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#102A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#F5B400]/20 text-[#F5B400] text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-[#F5B400]/30">
            {t("subtitle")}
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">{t("title")}</h1>
          <p className="text-blue-200 text-lg max-w-2xl">{t("desc")}</p>
        </div>
      </section>

      {/* Dashboard Modülleri — 4 col */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#102A43] mb-2">{t("dashboardTitle")}</h2>
          <p className="text-[#64748B] mb-8">{t("dashboardDesc")}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: t("module1"), icon: "⚡", desc: t("module1Desc") },
              { label: t("module2"), icon: "📊", desc: t("module2Desc") },
              { label: t("module3"), icon: "🔋", desc: t("module3Desc") },
              { label: t("module4"), icon: "🚗", desc: t("module4Desc") },
            ].map((m) => (
              <div key={m.label} className="p-6 rounded-2xl border border-gray-100 hover:border-[#0A4FD9]/30 hover:shadow-lg transition-all bg-white text-center">
                <div className="text-4xl mb-3">{m.icon}</div>
                <h3 className="font-bold text-[#102A43] mb-1 text-sm">{m.label}</h3>
                <p className="text-[#64748B] text-xs">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raporlama & Alarm — 3 col */}
      <section className="py-16 bg-[#F4FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#102A43] mb-2">{t("reportingTitle")}</h2>
          <p className="text-[#64748B] mb-8">{t("reportingDesc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: t("reportLabel"), icon: "📈", desc: t("reportDesc") },
              { label: t("alarmLabel"), icon: "🔔", desc: t("alarmDesc") },
              { label: t("roiLabel"), icon: "💰", desc: t("roiDesc") },
            ].map((m) => (
              <div key={m.label} className="p-6 rounded-2xl bg-white border border-blue-50 shadow-sm">
                <div className="text-3xl mb-3">{m.icon}</div>
                <h3 className="font-bold text-[#102A43] mb-2">{m.label}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EnergyOS CTA */}
      <section className="py-14 bg-[#102A43]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-4">{t("cta")}</h2>
          <p className="text-blue-200 mb-8">{t("ctaDesc")}</p>
          <Link href="/contact" className="inline-block bg-[#F5B400] hover:bg-yellow-400 text-[#102A43] font-bold px-10 py-4 rounded-xl transition-colors text-lg">
            {contact("cta")}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
