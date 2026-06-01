import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#102A43] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/bysun-logo.webp"
              alt="BY SUN Solar Energy Platform"
              width={120}
              height={40}
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-300 leading-relaxed">{t("slogan")}</p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#F5B400] mb-4">
              {t("solutions")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("rooftop")}</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("carport")}</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">{t("bess")}</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#F5B400] mb-4">
              {t("platform")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/energyos" className="hover:text-white transition-colors">{t("energyos")}</Link></li>
              <li><Link href="/esg" className="hover:text-white transition-colors">{t("esg")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[#F5B400] mb-4">
              {t("company")}
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">{t("about")}</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">{t("projects")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("contact")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BY SUN Solar Energy Platform. {t("rights")}</p>
          <Link href="/privacy" className="hover:text-white transition-colors">{t("privacy")}</Link>
        </div>
      </div>
    </footer>
  );
}
