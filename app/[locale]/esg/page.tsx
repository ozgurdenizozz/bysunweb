import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

export default function ESGPage() {
  const t = useTranslations("esg");
  const contact = useTranslations("contact");
  const modules = ["module1", "module2", "module3", "module4", "module5"] as const;

  return (
    <main>
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-700 to-[#102A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">{t("title")}</h1>
          <p className="text-green-200 text-xl font-semibold max-w-2xl italic">&ldquo;{t("message")}&rdquo;</p>
        </div>
      </section>

      {/* Sertifikasyon Akışı — 4 adım */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#102A43] mb-2">Sertifikasyon Akışı</h2>
          <p className="text-[#64748B] mb-10">Yeşil enerjiden kurumsal değere giden yol.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", label: "Üret", desc: "Güneş enerjisi üretimini başlat", icon: "☀️" },
              { step: "02", label: "Belgelen", desc: "GO / I-REC sertifikasyonu al", icon: "📜" },
              { step: "03", label: "Raporla", desc: "ESG & karbon raporlaması yap", icon: "📊" },
              { step: "04", label: "Değere Dönüştür", desc: "Kurumsal ESG değerini artır", icon: "🏆" },
            ].map((s) => (
              <div key={s.step} className="relative p-6 rounded-2xl bg-[#EAF6FF] border border-blue-100 text-center">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-[#0A4FD9] text-xs font-bold mb-1">{s.step}</div>
                <h3 className="font-black text-[#102A43] mb-2">{s.label}</h3>
                <p className="text-[#64748B] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modüller — 3 col */}
      <section className="py-16 bg-[#F4FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#102A43] mb-8">Modüller</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: t("module2"), icon: "🌍", desc: "Garanti of Origin ve I-REC süreç yönetimi" },
              { label: t("module3"), icon: "📋", desc: "Aylık karbon ayak izi ve ESG raporları" },
              { label: t("module4"), icon: "📱", desc: "EnergyOS üzerinden canlı ESG dashboard" },
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

      {/* Premium Teklif Modülü */}
      <section className="py-14 bg-gradient-to-br from-emerald-700 to-[#102A43]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-black text-white mb-4">Premium Teklif Modülü</h2>
              <p className="text-green-200 leading-relaxed mb-6">
                EPC + O&M + EnergyOS + GO/ESG Certification olarak teklif dosyalarına opsiyonel modül olarak eklenir.
              </p>
              <Link href="/contact" className="inline-block bg-[#F5B400] hover:bg-yellow-400 text-[#102A43] font-bold px-8 py-4 rounded-xl transition-colors">
                {contact("cta")}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["EPC", "O&M", "EnergyOS", "GO/ESG"].map((item) => (
                <div key={item} className="bg-white/15 rounded-xl p-4 text-center border border-white/20">
                  <p className="text-white font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
