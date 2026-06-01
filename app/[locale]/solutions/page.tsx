import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function SolutionsPage() {
  const t = useTranslations("solutions");
  const contact = useTranslations("contact");

  const solutions = [
    {
      id: "rooftop",
      image: "/images/rooftop.webp",
      features: [
        "Saha fizibilite analizi ve güneş potansiyeli değerlendirmesi",
        "Yüksek verimli panel ve inverter seçimi",
        "EPC (Mühendislik, Tedarik, İnşaat) hizmetleri",
        "Bağlantı ve şebeke entegrasyonu",
        "BY SUN EnergyOS ile izleme",
        "Uzun vadeli O&M sözleşmesi",
      ],
    },
    {
      id: "carport",
      image: "/images/carport.webp",
      features: [
        "Solar carport yapısal tasarım ve mühendislik",
        "EV şarj altyapısı entegrasyonu",
        "Akıllı şarj yönetim sistemi",
        "BESS hazırlığı ile enerji optimizasyonu",
        "Otopark alanı değerlendirmesi",
        "EnergyOS EV Şarj modülü",
      ],
    },
    {
      id: "bess",
      image: "/images/bess.webp",
      features: [
        "Enerji depolama kapasitesi analizi",
        "Li-ion / LFP batarya sistemleri",
        "Hibrit GES + BESS entegrasyonu",
        "Pik talep yönetimi",
        "Şebeke bağımlılığını azaltma",
        "EnergyOS Depolama & Esneklik modülü",
      ],
    },
  ];

  return (
    <main>
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#102A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">{t("title")}</h1>
          <p className="text-blue-200 text-lg max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {solutions.map(({ id, image, features }, idx) => (
            <div
              key={id}
              id={id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                  <Image src={image} alt={t(`${id}.title` as "rooftop.title" | "carport.title" | "bess.title")} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 to-transparent" />
                </div>
              </div>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl lg:text-3xl font-black text-[#102A43] mb-4">
                  {t(`${id}.title` as "rooftop.title" | "carport.title" | "bess.title")}
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-6">
                  {t(`${id}.desc` as "rooftop.desc" | "carport.desc" | "bess.desc")}
                </p>
                <ul className="space-y-2 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#102A43]">
                      <svg className="w-4 h-4 text-[#0A4FD9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block bg-[#0A4FD9] hover:bg-[#083EA8] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                  {contact("cta")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hibrit Enerji Hazırlığı */}
      <section className="py-16 bg-[#EAF6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black text-[#102A43] mb-4">Hibrit Enerji ve BESS Hazırlığı</h2>
              <p className="text-[#64748B] leading-relaxed mb-6">
                Geleceğe hazır enerji altyapıları tasarlıyoruz. GES + BESS + EV Şarj entegrasyonuyla sisteminizi bugünden yarına hazırlıyoruz.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "GES + BESS hibrit sistem entegrasyonu",
                  "Geleceğe yönelik ölçeklenebilir altyapı",
                  "EV şarj hazırlığı ile mobilite dönüşümü",
                  "Şebeke bağımlılığını minimize etme",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#102A43]">
                    <svg className="w-4 h-4 text-[#0A4FD9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-[#0A4FD9] hover:bg-[#083EA8] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                {contact("cta")}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "☀️", label: "GES", desc: "Güneş Enerjisi Sistemi" },
                { icon: "🔋", label: "BESS", desc: "Enerji Depolama" },
                { icon: "⚡", label: "EV Şarj", desc: "Akıllı Şarj Altyapısı" },
                { icon: "🔗", label: "Entegrasyon", desc: "EnergyOS ile Yönetim" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="font-bold text-[#102A43] text-sm">{item.label}</p>
                  <p className="text-[#64748B] text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ön Fizibilite CTA */}
      <section className="py-14 bg-gradient-to-br from-[#0A4FD9] to-[#102A43]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">{contact("title")}</h2>
          <p className="text-blue-200 mb-8">{contact("desc")}</p>
          <Link href="/contact" className="inline-block bg-[#F5B400] hover:bg-yellow-400 text-[#102A43] font-bold px-8 py-4 rounded-xl transition-colors">
            {contact("cta")}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
