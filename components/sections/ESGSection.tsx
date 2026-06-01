import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ESGSection() {
  const t = useTranslations("esg");
  const modules = ["module1", "module2", "module3", "module4", "module5"] as const;

  return (
    <section className="py-20 bg-white" id="esg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: ESG Visual */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Main ESG card */}
              <div className="col-span-2 bg-gradient-to-br from-emerald-500 to-green-700 rounded-2xl p-6 text-white">
                <div className="text-3xl font-black mb-2">ESG & GO</div>
                <p className="text-green-100 text-sm leading-relaxed">{t("message")}</p>
              </div>

              {[
                { icon: "🌿", label: "Green Cert.", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
                { icon: "📊", label: "Carbon Report", color: "bg-blue-50 border-blue-200 text-blue-800" },
                { icon: "🏆", label: "I-REC / GO", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
                { icon: "⚡", label: "EnergyOS ESG", color: "bg-purple-50 border-purple-200 text-purple-800" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`border rounded-xl p-4 flex flex-col items-center text-center gap-2 ${item.color}`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-black text-[#102A43] mb-6">{t("title")}</h2>
            <p className="text-[#0A4FD9] font-semibold text-lg mb-8 italic">&ldquo;{t("message")}&rdquo;</p>

            <ul className="space-y-3 mb-10">
              {modules.map((mod) => (
                <li key={mod} className="flex items-center gap-3 p-3 rounded-xl bg-[#EAF6FF] border border-blue-100">
                  <div className="w-2 h-2 rounded-full bg-[#0A4FD9] flex-shrink-0" />
                  <span className="text-[#102A43] font-medium text-sm">{t(mod)}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/esg"
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
