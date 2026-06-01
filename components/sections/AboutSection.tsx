import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const checkIcon = (
  <svg className="w-5 h-5 text-[#0A4FD9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutSection() {
  const t = useTranslations("about");
  const points = ["point1", "point2", "point3", "point4"] as const;

  return (
    <section className="py-20 bg-[#EAF6FF]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual accent */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0A4FD9] to-[#102A43] rounded-3xl p-10 text-white">
              <div className="text-[#F5B400] text-5xl font-black mb-4">BY SUN</div>
              <div className="text-2xl font-bold mb-2">Solar Energy Platform</div>
              <p className="text-blue-200 text-sm mb-8 leading-relaxed">
                EPC · O&M · EnergyOS · BESS · ESG
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "10+", label: "Yıl Deneyim" },
                  { num: "100+", label: "MW Kapasitesi" },
                  { num: "50+", label: "Tamamlanan Proje" },
                  { num: "4", label: "Dil Desteği" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-[#F5B400]">{stat.num}</div>
                    <div className="text-xs text-blue-200 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F5B400] rounded-full opacity-20 blur-2xl" />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#102A43] mb-6">
              {t("title")}
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-4">{t("desc")}</p>
            <p className="text-[#64748B] leading-relaxed mb-8">{t("desc2")}</p>

            <ul className="space-y-3 mb-10">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  {checkIcon}
                  <span className="text-[#102A43] font-medium">{t(p)}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-block bg-[#0A4FD9] hover:bg-[#083EA8] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
