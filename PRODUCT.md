# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Particuliers à Tunis et environs** (maisons, appartements, villas) facing an active pest problem (cockroaches, bedbugs, rodents, mosquitoes, fleas…). Situation: discomfort or urgency at home; job = describe what they saw, get an evaluation, book a professional treatment.
- **Professionnels** (bureaux, commerces, restaurants, immeubles, parties communes). Job = restore a clean, controlled environment quickly with minimal disruption.
- Both audiences browse in French or Arabic (Tunisian dialect), very often on a phone, often on mobile data.

## Product Purpose

Lead-generation website for a Tunis pest-control company. It exists to turn worry about nuisibles into direct contact (call, WhatsApp, or quote form). Success = a visitor calls **50 431 208**, opens WhatsApp, or submits the contact form — not online booking or payment (there is none).

## Positioning

What a competitor cannot truthfully copy: one reachable technician-team with a single public number, an evaluate-before-treating method stated plainly on every page, and preventive advice as part of the service — with deliberately unexaggerated claims ("sans promesses exagérées").

## Operating Context

- Base: Rue Alfred Nobel, Lac 3, Tunis. Intervention zone: the eastern coast — Bizerte, Grand Tunis (Tunis, Ariana, Ben Arous, Manouba), Nabeul, Hammamet, Sousse, Monastir, Mahdia (7 zones, availability on request).
- Contact paths: `tel:+21650431208`, `https://wa.me/21650431208`, email `slimkarouni40@gmail.com`, and a quote form that pre-fills a WhatsApp message (no automatic sending — the visitor stays in control).
- Indicative hours (site JSON-LD): Mon–Sat, 08:00–18:00.
- Workflow in 3 steps: contact (pest + address) → evaluation → professional intervention + prevention advice.
- Fully static prerendered pages (FR + AR), per-locale SEO metadata + hreflang, sitemap, `PestControlService` JSON-LD.

## Capabilities and Constraints

- 6 services: désinsectisation, dératisation, punaises de lit, désinfection, traitement des nuisibles, puces — each with a full detail page reusing one article template.
- Bilingual parity is mandatory: every route, string, and SEO entry exists in FR (LTR) and AR (RTL, Tunisian dialect).
- Real-number discipline: only verifiable counts may appear as figures (6 services, 7 zones, 3 steps). No invented ratings, percentages, prices, response times, or testimonials.
- Performance is a conversion constraint: mobile-data audience → lazy-load heavy media, keep WebGL optional and off on small screens / reduced motion.
- Confirmed rebrand scope (user decision, 2026-09-17): full replacement of the visual world (palette, typography, hero concept, sections) across the whole site; factual copy, routes, IA, SEO, contact paths, and the company name stay untouched.

## Brand Commitments

- Legal/public name: **شركة سليم للوقاية و التطهير** / **Salim — Prévention et Désinfection**. Must stay verbatim wherever it appears.
- Tone: direct, honest, professional; Tunisian-dialect Arabic, plain French. No hype, no fear-mongering.
- Existing assets that survive the rebrand: `public/hero-intervention.jpg` (hero video poster — cockroach close-up frame extracted from `public/hero-video.mp4`, replaced with user approval 2026-09-19 to match the video; the original technician photo is superseded), Facebook video embeds, Facebook review embed.

## Evidence on Hand

- Hero poster: `public/hero-intervention.jpg` (landscape video frame, matches `public/hero-video.mp4`).
- Real review: one Facebook post embed (`components/ReviewsSection.tsx` → `REVIEW_POSTS`).
- Real videos: Facebook video embeds (`components/VideoSection.tsx`).
- Full FR/AR service catalog, zone list, FAQ, and process copy in `lib/dictionaries.ts` (source of truth — do not rewrite factual copy).

## Product Principles

1. **Contact beats content**: every surface must offer call/WhatsApp/quote within one glance.
2. **Evaluate before treating**: the method is the message; never present a one-click cure.
3. **Honesty over persuasion tricks**: no fake urgency, no invented proof, no dark patterns.
4. **Bilingual parity, mobile first**: AR mobile is a first-class citizen, never an adaptation.
5. **Proof must be real**: only authentic embeds, real zones, real steps, real counts.

## Accessibility & Inclusion

- Keyboard navigation with visible focus, skip-link, 44px+ touch targets, 4.5:1 text contrast.
- `prefers-reduced-motion` fully respected (static final states, no autoplay motion).
- RTL correctness for Arabic (mirrored icons, logical properties).
