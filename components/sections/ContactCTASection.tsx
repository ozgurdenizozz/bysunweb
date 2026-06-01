import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ContactCTASection() {
  const t = useTranslations("contact");

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A4FD9] to-[#102A43]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">{t("title")}</h2>
        <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">{t("desc")}</p>
        <Link
          href="/contact"
          className="inline-block bg-[#F5B400] hover:bg-yellow-400 text-[#102A43] font-bold px-10 py-5 rounded-xl text-lg transition-colors shadow-xl shadow-blue-900/30"
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
