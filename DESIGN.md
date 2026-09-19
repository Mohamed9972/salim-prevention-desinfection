# Design System: Salim — Logo Colors

Client request: palette sampled from `public/logo.png` (slate `#3F5A65`,
teal `#299CB9`). Product truth lives in `PRODUCT.md`.

## 1. Visual Theme & Atmosphere

Slate night surfaces hold a white shoreline; one logo-teal accent marks every
action. Density is gallery-balanced (5): generous section air, tight component
groups, more space above headings than below. Variance is modern-asymmetric
(6): bento berths, start-aligned giant type, never three equal cards. Motion
is standard-choreographed (7): quiet spring reveals, video hero background,
no WebGL. The mood is clean professional competence.

## 2. Color Palette & Roles

- **White Paper** (`#FFFFFF`) — light section ground (`--color-paper`, `bg-paper`).
- **Mist Paper** (`#EEF4F6`) — alternating light sections (`--color-paper-deep`).
- **Logo Slate Ink** (`#0B151A` → `#132027` → `#465963`) — near-black slate
  ground for night surfaces and primary text (`--color-ink-*`; never pure
  black). Ink-700 `#465963` matches the logo dark `#3F5A65`.
- **Logo Teal** (`#299CB9` fills, `#0F6278` text, `#EEF8FA` tints) — the single
  accent: primary CTAs (ink text on teal), beacon bars, active states
  (`--color-brand-*`).
- **Signal Green** (`#1FA855`) — WhatsApp actions only; functional, not thematic.
- **Signal Red** (`#B91C1C` family) — form errors only.
- Saturation discipline: logo teals, never neon; teal glows always carry
  offset + heavy blur, never zero-offset halos.
- Pairs (tokens): white/ink-900 high, white/ink-600 high, ink-950/white high,
  brand-400/ink-950 passes AA, white/brand-700 passes AA.

## 3. Typography Rules

- **Display FR:** Bricolage Grotesque 700–800, `tracking -0.015–-0.02em`,
  `text-balance`, `clamp()` scale (hero `2.7rem→5rem`, pages `2.25rem→3.75rem`).
- **Display AR:** Cairo 800–900 via `:lang(ar)` font swap (same `font-display`
  utility; Arabic never inherits the Latin face).
- **Body:** Archivo 400–600 / Cairo 400–700, relaxed leading, 65ch measure.
- **Numerals:** tabular-nums for phone figures and step numerals (data, never
  a mono costume face).
- **Banned:** Inter-as-display, generic serifs, gradient text, kickers and
  eyebrows above headings (headings open with an inline beacon bar instead:
  `h-2 w-12/14 rounded-full bg-brand-400`).

## 4. Component Stylings

- **Buttons:** primary = teal fill + ink text + teal offset shadow
  (`0 14px 38px rgba(41,156,185,0.32)`); ghost = white/ink ring; tactile
  `-translate-y-0.5` hover, `scale-[0.98]` active; 52–56px targets.
- **Berth cards (services bento):** `rounded-[26px]`; lead berth full-width on
  night water with teal icon tile; closing berth full-width light with teal
  ring; middle berths alternate 3/2 and 2/3 spans on a 5-column grid;
  hover lift + 3D tilt on hover-capable pointers only.
- **Icon tiles:** night tile `bg-ink-950 text-brand-300`; accent tile
  `bg-brand-400 text-ink-950`. Lucide, one stroke family.
- **Chips/pills:** zones and points as ringed pills; hover warms to brand-100.
- **Forms:** labels above, errors below with `role="alert"`, teal focus ring
  (`3px brand-600`), WhatsApp-green submit path preserved.
- **Night bands (process, problem, steps):** `bg-ink-950` + film grain +
  dashed passage rule + teal tabular numerals (sequence carries information).
- **Ticker:** zones marquee, `dir="ltr"` track, pauses on hover/focus, static
  under reduced motion.
- **Loaders/empty states:** none in this product (static lead-gen); FB embeds
  lazy-load with labeled frames.

## 5. Layout Principles

- `max-w-6xl` containment, `px-4/sm:px-6`, sections `py-16/md:py-24`.
- Night→dawn cue phases down the homepage: night hero → paper berths → night
  signal band → paper proof → night passage plan → paper ports → night close.
- Start-aligned content in both directions; scrims mirrored with `rtl:`
  variants; logical `start/end` insets throughout.
- Single-column collapse below `sm`; bento banners span full rows on mobile;
  no horizontal scroll; sticky mobile call/WhatsApp bar with safe-area padding.

## 6. Motion & Interaction

- One authored moment: `HarborLights` WebGL sparks (three.js points,
  additive, DPR ≤1.5, pointer parallax, lazy IO start, `ssr:false` boundary,
  off on touch/small screens/reduced-motion/WebGL failure; CSS horizon glow
  is the fallback).
- Reveals: single `Reveal` API, exponential ease-out
  (`cubic-bezier(0.22,1,0.36,1)`), 22px rise + 4px blur resolving once.
- Hero entrance: `harbor-in` staggered load animation (disabled with the
  global reduced-motion kill-switch).
- Everything else: 150–300ms color/translate transitions. Transform and
  opacity only (plus blur at entrances); never layout properties.

## 7. Anti-Patterns (Banned)

No emojis; no Inter-as-display; no generic serifs; no pure black; no neon
glows or zero-offset halos; no gradient text; no glassmorphism as decoration;
no kickers/eyebrows above headings; no three-equal-card rows; no hero-metric
stat blocks; no invented ratings, prices, percentages, or testimonials (real
counts, zones, steps, and authentic FB embeds only); no AI copy clichés; no
filler scroll cues; no custom cursors; no overlapping elements; no
`LABEL // YEAR` scaffolding; no fake physicality (bevels, emboss).
