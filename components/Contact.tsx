"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import {
  ADDRESS_FR,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_BASE,
} from "@/lib/site";
import { buildQuoteMessage } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { EmailLink } from "./EmailLink";
import { SectionHeading } from "./SectionHeading";

const inputCls =
  "w-full rounded-2xl border border-ink-900/15 bg-white px-4 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-500 transition-colors focus:border-brand-500 focus:outline-none";
const labelCls = "mb-1.5 block text-sm font-bold text-ink-800";
const errCls = "mt-1.5 text-[13px] font-medium text-red-700";

export function Contact({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const f = t.contact.form;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pest, setPest] = useState("");
  const [place, setPlace] = useState(f.placeOptions[0]);
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = f.errors.name;
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8) e.phone = f.errors.phone;
    if (!pest.trim()) e.pest = f.errors.pest;
    if (!address.trim()) e.address = f.errors.address;
    return e;
  }, [name, phone, pest, address, f]);

  const valid = Object.keys(errors).length === 0;
  const payload = { name: name.trim(), phone: phone.trim(), pest: pest.trim(), place, address: address.trim(), message };
  const waHref = valid
    ? buildQuoteMessage(locale, { ...payload, name: payload.name || "-", phone: payload.phone || "-" })
    : WHATSAPP_BASE;

  return (
    <section id="contact" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form card */}
          <Reveal>
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                setTouched(true);
                if (!valid) {
                  document
                    .getElementById("contact-form-errors")
                    ?.scrollIntoView({ block: "nearest" });
                  return;
                }
                window.open(waHref, "_blank", "noopener,noreferrer");
              }}
              className="rounded-[26px] border border-ink-900/10 bg-white p-6 shadow-[0_20px_50px_rgba(7,24,20,0.08)] sm:p-8"
              aria-label={t.contact.title}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className={labelCls}>{f.name} *</label>
                  <input
                    id="cf-name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={f.namePh}
                    className={inputCls}
                    aria-invalid={touched && !!errors.name}
                    aria-describedby={touched && errors.name ? "cf-name-err" : undefined}
                  />
                  {touched && errors.name && <p id="cf-name-err" role="alert" className={errCls}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="cf-phone" className={labelCls}>{f.phone} *</label>
                  <input
                    id="cf-phone"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={f.phonePh}
                    className={inputCls}
                    aria-invalid={touched && !!errors.phone}
                    aria-describedby={touched && errors.phone ? "cf-phone-err" : undefined}
                  />
                  {touched && errors.phone && <p id="cf-phone-err" role="alert" className={errCls}>{errors.phone}</p>}
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-pest" className={labelCls}>{f.pest} *</label>
                  <input
                    id="cf-pest"
                    name="pest"
                    list="cf-pest-list"
                    value={pest}
                    onChange={(e) => setPest(e.target.value)}
                    placeholder={f.pestPh}
                    className={inputCls}
                    aria-invalid={touched && !!errors.pest}
                    aria-describedby={touched && errors.pest ? "cf-pest-err" : undefined}
                  />
                  <datalist id="cf-pest-list">
                    {f.pestOptions.map((o) => (
                      <option key={o} value={o} />
                    ))}
                  </datalist>
                  {touched && errors.pest && <p id="cf-pest-err" role="alert" className={errCls}>{errors.pest}</p>}
                </div>
                <div>
                  <label htmlFor="cf-place" className={labelCls}>{f.place}</label>
                  <select id="cf-place" name="place" value={place} onChange={(e) => setPlace(e.target.value)} className={inputCls}>
                    {f.placeOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="cf-address" className={labelCls}>{f.address} *</label>
                <input
                  id="cf-address"
                  name="address"
                  autoComplete="address-level2"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={f.addressPh}
                  className={inputCls}
                  aria-invalid={touched && !!errors.address}
                  aria-describedby={touched && errors.address ? "cf-address-err" : undefined}
                />
                {touched && errors.address && <p id="cf-address-err" role="alert" className={errCls}>{errors.address}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="cf-message" className={labelCls}>{f.message}</label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={f.messagePh}
                  className={`${inputCls} resize-y`}
                />
              </div>

              <div id="contact-form-errors" aria-live="polite" />
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="submit"
                  className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-2xl bg-brand-400 px-7 text-base font-extrabold text-ink-950 shadow-[0_10px_30px_rgba(224,142,11,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-300 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  <MessageCircle size={19} aria-hidden="true" />
                  {touched && !valid ? f.viaWhatsapp : f.submit}
                </button>
                <p className="text-center text-[13px] leading-relaxed text-ink-600">{f.hint}</p>
                <a
                  href={PHONE_TEL}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 border-ink-900 px-7 text-base font-bold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
                >
                  <Phone size={18} aria-hidden="true" />
                  {f.viaCall} · <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
              </div>
            </form>
          </Reveal>

          {/* Direct contact card */}
          <Reveal delay={120}>
            <aside className="flex h-full flex-col rounded-3xl bg-ink-900 p-6 text-white sm:p-8" aria-label={t.contact.direct.title}>
              <h3 className="text-xl font-extrabold">{t.contact.direct.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">{t.contact.direct.hours}</p>

              <div className="mt-6 space-y-3">
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-400 text-ink-950">
                    <Phone size={21} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[13px] font-medium text-white/65">{t.contact.direct.call}</span>
                    <span dir="ltr" className="block text-xl font-extrabold tracking-wide tabular-nums">{PHONE_DISPLAY}</span>
                  </span>
                </a>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white">
                    <MessageCircle size={21} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[13px] font-medium text-white/65">{t.contact.direct.whatsapp}</span>
                    <span dir="ltr" className="block text-lg font-extrabold">{PHONE_DISPLAY}</span>
                  </span>
                </a>
                <EmailLink className="flex items-center gap-4 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]" addressClassName="block truncate text-[15px] font-bold">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Mail size={21} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-medium text-white/65">{t.contact.direct.email}</span>
                  </span>
                </EmailLink>
                <div className="flex items-start gap-4 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <MapPin size={21} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[13px] font-medium text-white/65">{t.contact.direct.address}</span>
                    <span className="block text-[15px] font-semibold leading-relaxed">
                      {locale === "ar"
                        ? "شارع ألفرد نوبل، البحيرة 3، مكتب عدد 3، عمارة نابليون، تونس"
                        : ADDRESS_FR}
                    </span>
                  </span>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
