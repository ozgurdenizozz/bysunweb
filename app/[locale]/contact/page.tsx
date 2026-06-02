"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const requiredFields = ["company", "contact_person", "phone", "email", "location"];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const newErrors: Record<string, boolean> = {};
    requiredFields.forEach((field) => {
      if (!data.get(field)) newErrors[field] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Failed to send form');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert(t("error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Header />

      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0A4FD9] to-[#102A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">{t("title")}</h1>
          <p className="text-blue-200 text-lg max-w-2xl">{t("desc")}</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-[#F4FAFF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-green-100">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-[#102A43] mb-4">{t("success")}</h2>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* 2-kolonlu form: Firma/Yetkili | Tesis/Tüketim */}
              <div className="grid lg:grid-cols-2 gap-6 mb-6">
                {/* Sol: Firma / Yetkili Bilgileri */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
                  <h3 className="font-black text-[#102A43] mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[#EAF6FF] text-[#0A4FD9] flex items-center justify-center text-xs font-bold">1</span>
                    {t("section1")}
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: "company", label: t("company"), type: "text", required: true },
                      { name: "contact_person", label: t("contact_person"), type: "text", required: true },
                      { name: "phone", label: t("phone"), type: "tel", required: true },
                      { name: "email", label: t("email"), type: "email", required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-[#102A43] mb-1.5">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          name={field.name}
                          type={field.type}
                          onChange={() => setErrors((e) => ({ ...e, [field.name]: false }))}
                          className={`w-full border rounded-xl px-4 py-2.5 text-sm text-[#102A43] outline-none focus:ring-2 focus:ring-[#0A4FD9]/30 transition-all ${
                            errors[field.name] ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#0A4FD9]"
                          }`}
                        />
                        {errors[field.name] && <p className="text-red-500 text-xs mt-1">{t("required")}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sağ: Tesis / Tüketim Bilgileri */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50">
                  <h3 className="font-black text-[#102A43] mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[#EAF6FF] text-[#0A4FD9] flex items-center justify-center text-xs font-bold">2</span>
                    {t("section2")}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-1.5">{t("location")} <span className="text-red-500">*</span></label>
                      <input
                        name="location"
                        type="text"
                        onChange={() => setErrors((e) => ({ ...e, location: false }))}
                        className={`w-full border rounded-xl px-4 py-2.5 text-sm text-[#102A43] outline-none focus:ring-2 focus:ring-[#0A4FD9]/30 transition-all ${
                          errors["location"] ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#0A4FD9]"
                        }`}
                      />
                      {errors["location"] && <p className="text-red-500 text-xs mt-1">{t("required")}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-1.5">{t("area")}</label>
                      <input name="area" type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#102A43] outline-none focus:ring-2 focus:ring-[#0A4FD9]/30 focus:border-[#0A4FD9] transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] mb-1.5">{t("consumption")}</label>
                      <input name="consumption" type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#102A43] outline-none focus:ring-2 focus:ring-[#0A4FD9]/30 focus:border-[#0A4FD9] transition-all" />
                    </div>
                  </div>
                </div>
              </div>

              {/* İstenen Belgeler */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 mb-6">
                <h3 className="font-black text-[#102A43] mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#EAF6FF] text-[#0A4FD9] flex items-center justify-center text-xs font-bold">3</span>
                  {t("section3")}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[
                    { label: t("doc1"), icon: "📄", name: "invoice" },
                    { label: t("doc2"), icon: "📐", name: "roof_plan" },
                    { label: t("doc3"), icon: "📊", name: "consumption_profile" },
                    { label: t("doc4"), icon: "📍", name: "location_doc" },
                  ].map((doc) => (
                    <div key={doc.name} className="border-2 border-dashed border-blue-100 rounded-xl p-3 text-center hover:border-[#0A4FD9]/40 transition-colors cursor-pointer">
                      <div className="text-2xl mb-1">{doc.icon}</div>
                      <p className="text-xs text-[#64748B] font-medium">{doc.label}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#102A43] mb-1.5">{t("invoice")}</label>
                  <input
                    name="invoice"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#102A43] file:mr-3 file:border-0 file:bg-[#EAF6FF] file:text-[#0A4FD9] file:font-semibold file:rounded-lg file:px-3 file:py-1 file:text-xs"
                  />
                </div>
              </div>

              {/* CTA / Onay */}
              <div className="bg-[#EAF6FF] rounded-2xl p-6 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[#64748B] text-sm">{t("info")}</p>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-shrink-0 bg-[#0A4FD9] hover:bg-[#083EA8] disabled:opacity-60 text-white font-bold px-8 py-3.5 rounded-xl transition-colors text-sm"
                >
                  {loading ? t("sending") : t("submit")}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
