"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";

const locales = ["tr", "en", "de", "ro"] as const;

export default function Header() {
  const t = useTranslations("nav");
  const s = useTranslations("solutions");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const localeRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (localeRef.current && !localeRef.current.contains(e.target as Node)) {
        setLocaleOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const solutionItems = [
    {
      href: "/solutions#rooftop",
      icon: "☀️",
      label: s("rooftop.title"),
      desc: "Endüstriyel & ticari çatı sistemleri",
    },
    {
      href: "/solutions#carport",
      icon: "🚗",
      label: s("carport.title"),
      desc: "EV şarj entegrasyonlu solar carport",
    },
    {
      href: "/solutions#bess",
      icon: "🔋",
      label: s("bess.title"),
      desc: "Enerji depolama ve şebeke esnekliği",
    },
  ];

  const simpleLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/energyos", label: "EnergyOS" },
    { href: "/projects", label: t("projects") },
    { href: "/contact", label: t("contact") },
  ];

  const chevron = (open?: boolean) => (
    <svg
      className={`w-3 h-3 ml-0.5 inline transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/bysun-logo.webp"
              alt="BY SUN Solar Energy Platform"
              width={240}
              height={80}
              className="h-[64px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {simpleLinks.slice(0, 2).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors whitespace-nowrap pb-1 border-b-2 ${
                    isActive
                      ? "text-[#0A4FD9] border-[#0A4FD9]"
                      : "text-[#102A43] hover:text-[#0A4FD9] border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Solutions dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`text-sm font-medium transition-colors whitespace-nowrap pb-1 border-b-2 flex items-center ${
                  pathname === "/solutions"
                    ? "text-[#0A4FD9] border-[#0A4FD9]"
                    : "text-[#102A43] hover:text-[#0A4FD9] border-transparent"
                }`}
              >
                {t("solutions")}
                {chevron(solutionsOpen)}
              </button>
              {solutionsOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 w-72 z-50">
                  <div className="px-4 pb-2 mb-1 border-b border-gray-50">
                    <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">Çözümlerimiz</span>
                  </div>
                  {solutionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-[#F8FAFF] transition-colors group"
                    >
                      <span className="text-xl mt-0.5">{item.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-[#102A43] group-hover:text-[#0A4FD9] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-xs text-[#64748B] mt-0.5">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="px-4 pt-2 mt-1 border-t border-gray-50">
                    <Link
                      href="/solutions"
                      onClick={() => setSolutionsOpen(false)}
                      className="text-xs font-semibold text-[#0A4FD9] hover:underline flex items-center gap-1"
                    >
                      Tüm çözümleri gör
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {simpleLinks.slice(2).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors whitespace-nowrap pb-1 border-b-2 ${
                    isActive
                      ? "text-[#0A4FD9] border-[#0A4FD9]"
                      : "text-[#102A43] hover:text-[#0A4FD9] border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button className="text-sm font-medium text-[#102A43] hover:text-[#0A4FD9] transition-colors whitespace-nowrap pb-1 border-b-2 border-transparent flex items-center">
              {t("resources")}{chevron()}
            </button>
          </nav>

          {/* Right side: Locale dropdown + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Locale dropdown */}
            <div className="relative" ref={localeRef}>
              <button
                onClick={() => setLocaleOpen(!localeOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-[#102A43] hover:text-[#0A4FD9] transition-colors px-2 py-1.5 rounded-lg border border-gray-200 hover:border-[#0A4FD9]/40"
              >
                {locale.toUpperCase()}
                <svg className={`w-3 h-3 transition-transform ${localeOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {localeOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 min-w-[80px]">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => { router.push(pathname, { locale: loc }); setLocaleOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-[#EAF6FF] ${
                        locale === loc ? "text-[#0A4FD9] font-bold" : "text-[#102A43]"
                      }`}
                    >
                      {loc.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="bg-[#0A4FD9] hover:bg-[#083EA8] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              {t("cta")}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-[#102A43]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {simpleLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#102A43] hover:text-[#0A4FD9] py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Solutions expandable */}
            <div>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="w-full text-left text-sm font-medium text-[#102A43] hover:text-[#0A4FD9] py-1 flex items-center justify-between"
              >
                {t("solutions")}
                {chevron(solutionsOpen)}
              </button>
              {solutionsOpen && (
                <div className="mt-1 ml-3 flex flex-col gap-1 border-l-2 border-[#0A4FD9]/20 pl-3">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-[#475569] hover:text-[#0A4FD9] py-1 flex items-center gap-2"
                      onClick={() => { setMenuOpen(false); setSolutionsOpen(false); }}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {simpleLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#102A43] hover:text-[#0A4FD9] py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => { router.push(pathname, { locale: loc }); setMenuOpen(false); }}
                  className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                    locale === loc ? "bg-[#0A4FD9] text-white" : "text-[#64748B] hover:text-[#0A4FD9]"
                  }`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-[#0A4FD9] text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              {t("cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
