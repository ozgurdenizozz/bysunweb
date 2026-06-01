import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

const checkIcon = (
  <svg className="w-5 h-5 text-[#0A4FD9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutPage() {
  const t = useTranslations("about");
  const points = ["point1", "point2", "point3", "point4"] as const;

  return (
    <main>
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#102A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">{t("title")}</h1>
          <p className="text-blue-200 text-lg max-w-2xl">BY SUN Solar Energy Platform</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#64748B] text-lg leading-relaxed mb-6">{t("desc")}</p>
              <p className="text-[#64748B] leading-relaxed mb-10">{t("desc2")}</p>

              <ul className="space-y-4">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 p-4 bg-[#EAF6FF] rounded-xl border border-blue-100">
                    {checkIcon}
                    <span className="text-[#102A43] font-medium">{t(p)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0A4FD9] to-[#102A43] rounded-3xl p-10 text-white">
              <div className="text-[#F5B400] text-4xl font-black mb-6">BY SUN</div>
              <p className="text-blue-200 mb-8 leading-relaxed">
                Enerji sektöründe sahadan gelen güçlü deneyimi, mühendislik yetkinliği ve dijital enerji yönetim kapasitesiyle hizmet veriyoruz.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "EPC", desc: "Tasarım & Kurulum" },
                  { label: "O&M", desc: "Uzun Vadeli İşletme" },
                  { label: "EnergyOS", desc: "Dijital Yönetim" },
                  { label: "ESG", desc: "Yeşil Sertifikasyon" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-4">
                    <div className="text-[#F5B400] font-bold mb-1">{item.label}</div>
                    <div className="text-blue-200 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ekip / Partner Ekosistemi */}
      <section className="py-16 bg-[#F4FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#102A43] mb-2">Ekip / Partner Ekosistemi</h2>
          <p className="text-[#64748B] mb-8">Yazılım, mühendislik, EPC, lokal regülasyon ve O&M partnerleri.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Yazılım", icon: "💻", desc: "EnergyOS platform geliştirme" },
              { label: "Mühendislik", icon: "⚙️", desc: "Tasarım ve EPC süreçleri" },
              { label: "Regülasyon", icon: "📋", desc: "ANRE / ATR süreç yönetimi" },
              { label: "O&M", icon: "🔧", desc: "Uzun vadeli işletme ortakları" },
            ].map((p) => (
              <div key={p.label} className="bg-white rounded-2xl p-5 border border-blue-50 shadow-sm">
                <div className="text-3xl mb-3">{p.icon}</div>
                <p className="font-bold text-[#102A43] mb-1">{p.label}</p>
                <p className="text-[#64748B] text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
