import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const solutions = [
  { key: "rooftop", image: "/images/rooftop.webp", href: "/solutions#rooftop" },
  { key: "carport", image: "/images/carport.webp", href: "/solutions#carport" },
  { key: "bess",    image: "/images/bess.webp",    href: "/solutions#bess" },
] as const;

export default function SolutionsSection() {
  const t = useTranslations("solutions");

  return (
    <section className="py-10 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map(({ key, image, href }) => (
            <Link key={key} href={href} className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white">
              {/* Image — görseller zaten blue circle icon içeriyor */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={t(`${key}.title`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Text */}
              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-[#102A43] mb-2 text-base">{t(`${key}.title`)}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{t(`${key}.desc`)}</p>
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#0A4FD9]/30 flex items-center justify-center text-[#0A4FD9] group-hover:bg-[#0A4FD9] group-hover:text-white transition-colors mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
