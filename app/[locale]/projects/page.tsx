import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const contact = useTranslations("contact");

  const cards = [
    { key: "card1", image: "/images/rooftop.webp" },
    { key: "card2", image: "/images/carport.webp" },
    { key: "card3", image: "/images/bess.webp" },
    { key: "card4", image: "/images/hero-ai-energy.webp" },
  ] as const;

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

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#64748B] italic mb-10 text-center bg-[#EAF6FF] border border-blue-100 rounded-xl px-4 py-2 inline-block mx-auto">
            * {t("note")}
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {cards.map(({ key, image }) => (
              <div key={key} className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={image}
                    alt={t(key)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg">{t(key)}</p>
                  </div>
                </div>
                <div className="p-5 bg-white flex justify-end">
                  <Link href="/contact" className="text-[#0A4FD9] font-semibold text-sm hover:underline">
                    {contact("cta")} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
