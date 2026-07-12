# Shakti Loto Website — UI Bugfix & Enhancement Design

## Overview

The Shakti Loto Next.js website (Next.js 16 + Tailwind CSS v4 + Framer Motion) has eight
categories of defects: an inverted color palette in `globals.css @theme`, a `<motion.img>`
based `EditorialImage` that ignores the `priority` prop and has no fallback, a `ContactForm`
that simulates email delivery rather than calling the already-present `/api/contact` route,
two page routes (`/philosophy`, `/mentorship`) that redirect instead of rendering content,
four Tailwind utility classes (`bg-lotusPink/10`, `shadow-altar`, `duration-400`,
`duration-1200`) that resolve to nothing under v4's `@theme`-only config model, two missing
footer navigation links, and a hero heading that overflows on viewports narrower than 360 px.

All fixes must be surgical: correct the broken behaviour, leave every other visual detail
unchanged, and keep the build passing TypeScript strict + ESLint.

---

## Glossary

- **Bug_Condition (C)**: Any of the eight defect categories defined in the requirements; each
  has its own `isBugCondition` sub-condition described in the Bug Details section below.
- **Property (P)**: The correct observable behaviour that the fixed code must produce for each
  defect category.
- **Preservation**: The full set of existing behaviours (gold palette, card styles, sacred
  utilities, API route logic, Navbar structure, non-mobile-hero sizing, etc.) that must remain
  byte-for-byte equivalent after each fix.
- **`@theme` block**: The Tailwind CSS v4 mechanism for declaring design tokens inside
  `globals.css`; replaces the v3 `tailwind.config.ts extend` model entirely.
- **`tailwind.config.ts`**: The legacy v3 config file that remains in the project but is NOT
  read by Tailwind v4 at build time — its `extend.colors`, `extend.boxShadow`, and
  `extend.transitionDuration` entries are therefore dead configuration.
- **`EditorialImage`**: The shared image component in `src/components/EditorialImage.tsx` that
  wraps images with Framer Motion animation and optional shape masks.
- **`/api/contact` route**: `src/app/api/contact/route.ts` — an already-complete Next.js Route
  Handler that validates inputs, escapes HTML, and sends via Resend. The ContactForm fix does
  NOT touch this file.
- **`PhilosophyContent`**: New component to be created at
  `src/components/PhilosophyContent.tsx` containing the full `/philosophy` page body.
- **`MentorshipContent`**: New component to be created at
  `src/components/MentorshipContent.tsx` containing the full `/mentorship` page body.

---

## Bug Details

### Bug Condition 1 — Inverted Color Palette (`globals.css`)

The `@theme` block maps semantic names to the wrong hex values. The site is designed as a
dark-background / gold-accent aesthetic (`ink` = deep dark, `ivory` = light cream) but the
current file swaps them:

```
FUNCTION isBugCondition_colors(token)
  INPUT: token — a CSS custom property declared in @theme
  OUTPUT: boolean

  RETURN (token == "--color-ink"      AND value == "#F8F5F1")   -- light, should be dark
      OR (token == "--color-ivory"    AND value == "#2F2A24")   -- dark,  should be light
      OR (token == "--color-parchment"AND value == "#3F3026")   -- very dark, should be light tan
      OR (token == "--color-charcoal" AND value == "#EFE6DB")   -- light, should be mid-dark
      OR (token == "--color-surfaceDark" AND value == "#F8F5F1") -- same as ink, should be dark
      OR (token == "--color-surface"  AND value == "#EFE6DB")   -- light surface ok but textDark wrong
      OR (token == "tailwind.config.ts colors.ivory" AND value == "#2F2A24") -- mirrors wrong value
END FUNCTION
```

**Concrete examples of the defect:**
- `bg-ink` renders as cream `#F8F5F1` — the entire page background appears white.
- `text-ivory` renders as near-black `#2F2A24` — body copy on a dark background becomes
  invisible.
- Mobile nav `text-ivory/90` link text is black-on-black against the `bg-ink/98` overlay.
- `bg-charcoal/62` card backgrounds are light beige instead of dark charcoal.

**Correct colour mapping (post-fix):**

| Token | Current (wrong) | Fixed |
|---|---|---|
| `--color-ink` | `#F8F5F1` (cream) | `#1E1A16` (near-black) |
| `--color-ivory` | `#2F2A24` (near-black) | `#F8F5F1` (light cream) |
| `--color-parchment` | `#3F3026` (very dark) | `#EFE6DB` (warm off-white) |
| `--color-charcoal` | `#EFE6DB` (light) | `#2F2A24` (mid-dark) |
| `--color-surfaceDark` | `#F8F5F1` (same as bad ink) | `#2F2A24` |
| `tailwind.config.ts ivory` | `#2F2A24` | `#F8F5F1` |

Gold tokens (`--color-gold`, `--color-softGold`, `--color-lightGold`, `--color-antiqueGold`,
`--color-mutedGold`) are already correct and MUST NOT change.

### Bug Condition 2 — `EditorialImage` Not Using Next.js Image

```
FUNCTION isBugCondition_editorialImage(component)
  INPUT: component — rendered EditorialImage
  OUTPUT: boolean

  RETURN component.usesRawImgTag == true         -- uses <motion.img> not <Image>
      OR component.priorityPropForwarded == false -- priority prop is declared but unused
      OR component.hasErrorFallback == false       -- no onError / fallback state
END FUNCTION
```

**Current implementation issues:**
1. `<motion.img src={src}>` bypasses Next.js automatic WebP conversion, responsive `srcset`,
   and LCP priority hints.
2. The `priority` prop is present in the interface but is destructured and immediately
   discarded — it's never passed to any image element.
3. No `onError` handler exists; a broken `src` shows a broken-image icon.

**Required post-fix state:**
- A `motion.div` wrapper provides the Framer Motion `animate` / `transition` entrance effect.
- The inner element is `<Image>` from `next/image` with `fill` layout, `sizes` attribute,
  and the `priority` prop forwarded when the caller sets `priority={true}`.
- An `onError` state triggers a gold-tinted fallback `<div>` containing the lotus SVG icon
  (already available at `/shakti-elements/lotus-icon.svg`) and a soft parchment background,
  exactly matching the brand aesthetic. The fallback must respect the same mask class so it
  doesn't break clipping.

### Bug Condition 3 — ContactForm Simulates Email

```
FUNCTION isBugCondition_contactForm(submission)
  INPUT: submission — ContactForm handleSubmit execution
  OUTPUT: boolean

  RETURN submission.makesNetworkRequest == false   -- only calls setTimeout
      OR submission.callsContactRoute == false      -- never POSTs to /api/contact
END FUNCTION
```

The current `handleSubmit` body is:
```ts
await new Promise((resolve) => setTimeout(resolve, 1500));
setIsSuccess(true);
```
No `fetch` call exists. The `/api/contact` route handler already exists and is complete
(validates fields, escapes HTML, sends via Resend, returns `{ success: true }` or error JSON).

**Required post-fix behaviour:**
- `handleSubmit` POSTs `JSON.stringify(formData)` to `/api/contact` with `Content-Type:
  application/json`.
- On a 2xx response: call `setIsSuccess(true)`.
- On a non-2xx or network error: call `setError(message)` and surface an inline error message
  styled consistently with the existing form (gold border, small uppercase tracking text).
- The submit button is disabled (`isSubmitting === true`) during the in-flight request — this
  already works via the `disabled={isSubmitting}` attribute.
- A new `error` state string replaces the `setTimeout` simulation; no other form fields,
  labels, or dropdown logic change.

### Bug Condition 4 — Philosophy Page Redirects

```
FUNCTION isBugCondition_philosophyPage(route)
  INPUT: route — GET /philosophy
  OUTPUT: boolean

  RETURN route.response == redirect("/")   -- currently calls redirect("/")
END FUNCTION
```

The file `src/app/philosophy/page.tsx` contains only `redirect("/")`. The UI reference
(`S UI/philosophy/code.html`) defines the desired content: a Philosophy page with the
"Lineage of the Sacred Feminine" concept — a two-column essay layout, a full-width hero
image, a closing quote, and a CTA. This must be translated into a `PhilosophyContent`
component that matches the dark-gold site aesthetic (NOT the light `#FDFBF7` palette of the
reference HTML prototype).

**Required structure for `/philosophy`:**
1. **Hero header** — display heading "The Lineage of the Sacred Feminine", eyebrow label
   "Philosophy & Teachings", animated entrance via `AnimatedSection`.
2. **Two-column philosophy essay** — two `AnimatedSection` columns with the body copy from
   the reference HTML, using `text-parchment/82`, `font-light`, `leading-loose`.
3. **Full-width image section** — `EditorialImage` using `photos.gardenPortrait` (or similar)
   with `variant="sharp"` and `withBorder`, wrapped in a `rounded-[32px] overflow-hidden`.
4. **Closing quote** — `<blockquote>` with `font-display italic text-lightGold/85`.
5. **CTA** — link to `/contact` using the existing gold button pattern.
6. The page file `src/app/philosophy/page.tsx` replaces the `redirect()` call with a proper
   server component that renders `<PhilosophyContent />`.

### Bug Condition 5 — Mentorship Page Redirects

```
FUNCTION isBugCondition_mentorshipPage(route)
  INPUT: route — GET /mentorship
  OUTPUT: boolean

  RETURN route.response == redirect("/rituals-sessions")
END FUNCTION
```

The file `src/app/mentorship/page.tsx` contains only `redirect("/rituals-sessions")`. The UI
reference (`S UI/1_1_mentorship/code.html`) defines: hero, "The Container" section with a
2-column card grid, "The Investment" section, and an FAQ accordion ("Gentle Inquiries").

**Required structure for `/mentorship`:**
1. **Hero** — "1:1 Mentorship" heading, subtitle about the sacred premium container, entrance
   animation.
2. **The Container** — two `sacred-card` tiles (Sacred Space, Deep Healing) in a 2-column
   grid, using `SacredIcon` for visual anchors.
3. **The Investment** — a highlighted box with the investment framing text, styled with the
   gold border / `sacred-card` pattern.
4. **Gentle Inquiries (FAQ)** — a `<details>`/`<summary>` accordion for 2–3 questions using
   Framer Motion for height animation; consistent with the brand dark palette.
5. **CTA** — link to `/contact` with the standard gold button.
6. The page file `src/app/mentorship/page.tsx` replaces the `redirect()` call and renders
   `<MentorshipContent />`.

### Bug Condition 6 — Undefined Tailwind CSS Utilities

```
FUNCTION isBugCondition_cssUtility(className)
  INPUT: className — a Tailwind class used in JSX
  OUTPUT: boolean

  RETURN className IN ["bg-lotusPink", "shadow-altar", "duration-400", "duration-1200"]
     AND classDefinedOnlyIn("tailwind.config.ts", className)   -- v3 path, not read by v4
     AND NOT classDefinedIn("globals.css @theme", className)
END FUNCTION
```

Under Tailwind CSS v4, only the `@theme` block in `globals.css` is authoritative for custom
tokens. The `tailwind.config.ts` `extend.*` entries are NOT processed.

| Class | Used In | Fix Strategy |
|---|---|---|
| `bg-lotusPink/10` | `PageHero.tsx`, `CTASection.tsx` | Add `--color-lotusPink: #D8C8B6` to `@theme` block |
| `shadow-altar` | `Navbar.tsx` (scrolled header), `page.tsx` (archive grid cards) | Add `--shadow-altar` as a Tailwind v4 shadow token in `@theme` |
| `duration-400` | `Navbar.tsx` (link + underline transitions) | Add `--transition-duration-400: 400ms` to `@theme` |
| `duration-1200` | `EditorialImage.tsx` (border hover transition) | Add `--transition-duration-1200: 1200ms` to `@theme` |

The `@theme` additions use Tailwind v4 naming conventions:
- Colors: `--color-{name}`
- Shadows: `--shadow-{name}` (value: the raw `box-shadow` string)
- Transition durations: `--transition-duration-{n}` (value: `{n}ms`)

`tailwind.config.ts` entries for these four tokens may be left in place (they are harmless
dead code) or removed — either is acceptable, but the document recommends leaving them to
avoid accidental breakage of any future v3-compat tooling.

### Bug Condition 7 — Footer Missing Navigation Links

```
FUNCTION isBugCondition_footer(footer)
  INPUT: footer — rendered Footer component
  OUTPUT: boolean

  RETURN NOT footer.exploreLinks.includes("/philosophy")
      OR NOT footer.exploreLinks.includes("/contact")
END FUNCTION
```

Current "Explore" column links: About Kunti, Work With Me, Rituals & Sessions, Retreats &
Courses, Sacred Jewelry. Missing: Philosophy and Contact.

Fix: append two `<Link>` elements to the grid in `Footer.tsx` matching the existing pattern
(`hover:text-lightGold`, `text-[11px] uppercase tracking-[0.18em] text-parchment/68`).

### Bug Condition 8 — Hero Heading Overflows Below 360 px

```
FUNCTION isBugCondition_heroText(viewport)
  INPUT: viewport — browser viewport width in px
  OUTPUT: boolean

  RETURN viewport < 360
     AND headingBaseClass == "text-4xl"   -- jumps directly to text-6xl at sm (640px)
     AND noIntermediateBreakpoint == true
END FUNCTION
```

The `<h2>` in `src/app/page.tsx` hero starts at `text-4xl` with no sub-360 px guard. The
display font at 36 px (text-4xl) renders "A sacred return to your divine essence" at ~320 px
width already near the edge; on 320 px devices the last word wraps awkwardly or the text
clips.

Fix: change the base class from `text-4xl` to `text-3xl` (30 px). The heading already scales
to `sm:text-6xl md:text-7xl xl:text-8xl` — the only change is the base/default size.
The `xs:text-4xl` variant can be added with an `@custom-variant` or simply using the
Tailwind v4 arbitrary value `min-[360px]:text-4xl` inline in the class string.

---

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- All gold accent tokens (`--color-gold` `#B8904F`, `--color-softGold` `#C8A96B`,
  `--color-lightGold` `#C8A96B`, `--color-antiqueGold` `#C8A96B`, `--color-mutedGold`
  `#7E5A2F`) remain at their current hex values.
- All gradient literals in `globals.css` that use raw hex values (palette-wash, sacred-bg,
  gold-line, palette-band, body radial gradients) are unaffected because they do not
  reference the swapped variables.
- All existing custom utilities (`gold-text`, `sacred-card`, `sacred-glow`, `sacred-bg`,
  `animate-breathe`, `animate-float`, `text-eyebrow`, `pebble-mask`, `organic-mask-1`,
  `organic-mask-2`, `editorial-border`, `moon-phase`, `gold-line`, `writing-mode-vertical`)
  remain exactly as defined.
- `EditorialImage` continues to accept all five `variant` values, `withBorder`, and
  `className`/`imageClassName` props with identical visual output.
- The `ContactForm` success state (SVG checkmark + "Message Received" + subtitle) is
  unchanged; only the `handleSubmit` body changes.
- The `/api/contact` route handler (`route.ts`) is not modified.
- The Navbar desktop links, mobile overlay, active-state underline, and `LanguageTrigger`
  are unchanged.
- The hero heading renders at `sm:text-6xl md:text-7xl xl:text-8xl` on all viewports ≥ 360 px
  — only the sub-360 px base size changes from `text-4xl` to `text-3xl`.
- All existing footer sections (brand description, moon phases, contact details, copyright)
  are unchanged; only two links are appended to the Explore grid.
- `next build` passes with zero TypeScript errors and zero ESLint violations.

**Scope:**
Every input / route / component NOT matching one of the eight bug conditions above must
behave identically before and after the fix. This includes all page routes other than
`/philosophy` and `/mentorship`, all form fields and validation logic, all existing
`EditorialImage` call sites, and all gradient / card / glow CSS.

---

## Hypothesized Root Cause

1. **Color swap at initial development**: The `@theme` block appears to have had `ink` and
   `ivory` copy-pasted with their hex values transposed — the values in `tailwind.config.ts`
   are also wrong for `ivory` (`#2F2A24`), which mirrors the bug, suggesting the config was
   generated from the same mistake.

2. **`motion.img` migration not completed**: `EditorialImage` was written before the decision
   to use Next.js `<Image>` was finalized. The `priority` prop was added to the interface in
   anticipation of the migration but the implementation was never updated to use it.

3. **ContactForm stub left in place**: The form was built UI-first with a simulated delay.
   The `/api/contact` route was added later as a separate task but the form's `handleSubmit`
   was never wired to it.

4. **Page stubs left as redirect placeholders**: `/philosophy` and `/mentorship` pages were
   created as routing placeholders with `redirect()` calls that were never replaced with
   actual content.

5. **Tailwind v4 migration incomplete**: The project was migrated from v3 to v4 (evidenced
   by `@import "tailwindcss"` and `@theme` in `globals.css`) but several custom tokens
   (`lotusPink`, `shadow-altar`, `duration-400`, `duration-1200`) were left only in
   `tailwind.config.ts extend.*`, which v4 does not read.

6. **Footer built before nav was finalised**: The footer "Explore" column was coded before
   `/philosophy` and `/contact` were added to the main navigation.

7. **Hero responsive sizing not tested on very small devices**: The base `text-4xl` class was
   sufficient for 375 px (iPhone SE) but not for 320 px older devices; no sub-360 breakpoint
   guard was added.

---

## Correctness Properties

Property 1: Bug Condition — Color Palette Integrity

_For any_ page render, the fixed `globals.css` `@theme` block SHALL map `--color-ink` to a
deep near-black (`#1E1A16`), `--color-ivory` to light cream (`#F8F5F1`), `--color-parchment`
to warm off-white (`#EFE6DB`), and `--color-charcoal` to mid-dark (`#2F2A24`), such that all
elements using these tokens display the intended dark-background / gold-accent aesthetic. The
corresponding `tailwind.config.ts` `ivory` entry SHALL be corrected to `#F8F5F1` so mobile
nav `text-ivory/90` is legible.

**Validates: Requirements 2.1, 2.2**

Property 2: Bug Condition — EditorialImage Next.js Image Migration

_For any_ `EditorialImage` render, the fixed component SHALL use `<Image>` from `next/image`
(wrapped in a `motion.div`) with `fill` layout and an appropriate `sizes` attribute; the
`priority` prop SHALL be forwarded to `<Image>` when provided; and an `onError` handler SHALL
display a styled lotus-icon fallback that matches the same mask class as the image.

**Validates: Requirements 2.3, 2.4, 2.5**

Property 3: Bug Condition — ContactForm Real API Call

_For any_ ContactForm submission, the fixed `handleSubmit` SHALL POST `formData` as JSON to
`/api/contact`, display the success state only on a 2xx response, and display an inline error
message styled consistently with the existing form on any non-2xx or network error.

**Validates: Requirements 2.6**

Property 4: Bug Condition — Philosophy Page Content

_For any_ request to `GET /philosophy`, the fixed page SHALL render a full philosophy page
(hero, two-column essay, image, closing quote, CTA) consistent with the dark-gold site
aesthetic, with no redirect occurring.

**Validates: Requirements 2.7**

Property 5: Bug Condition — Mentorship Page Content

_For any_ request to `GET /mentorship`, the fixed page SHALL render a dedicated 1:1
mentorship page (hero, container section, investment section, FAQ accordion, CTA) with no
redirect occurring.

**Validates: Requirements 2.8**

Property 6: Bug Condition — Tailwind CSS Utility Resolution

_For any_ build of the project, the classes `bg-lotusPink/10`, `shadow-altar`, `duration-400`,
and `duration-1200` SHALL each resolve to their intended CSS values because the corresponding
tokens are declared in `globals.css @theme`.

**Validates: Requirements 2.9, 2.10, 2.11, 2.12**

Property 7: Bug Condition — Footer Navigation Completeness

_For any_ render of the `Footer` component, the "Explore" column SHALL include links to both
`/philosophy` and `/contact` in addition to the existing five links.

**Validates: Requirements 2.13**

Property 8: Bug Condition — Hero Text Sub-360 px Legibility

_For any_ viewport width, the home page hero heading SHALL display without overflow or
clipping; specifically at widths narrower than 360 px it SHALL render at `text-3xl` (30 px)
base, stepping up to `text-4xl` at `min-w-[360px]` and continuing the existing responsive
ladder from `sm` onward.

**Validates: Requirements 2.14**

Property 9: Preservation — All Non-Buggy Inputs Unchanged

_For any_ input where none of the eight bug conditions holds — including all existing page
routes, all other Tailwind utilities, all card/glow/gradient CSS, the Navbar, the API route
handler, the ContactForm UI fields, and `EditorialImage` mask variants — the fixed code SHALL
produce exactly the same rendered output as the original code.

**Validates: Requirements 3.1 – 3.10**

---

## Fix Implementation

### Fix 1 — `src/app/globals.css` — Color Token Correction

**Function/Section**: `@theme` block (lines 3–27)

**Specific Changes:**
1. **`--color-ink`**: Change from `#F8F5F1` → `#1E1A16`
2. **`--color-charcoal`**: Change from `#EFE6DB` → `#2F2A24`
3. **`--color-ivory`**: Change from `#2F2A24` → `#F8F5F1`
4. **`--color-parchment`**: Change from `#3F3026` → `#EFE6DB`
5. **`--color-surfaceDark`**: Change from `#F8F5F1` → `#2F2A24`
   (surfaceDark is referenced in `EditorialImage` as `bg-surfaceDark/10` for the image
   container background — it should be dark, not light cream)
6. **Add `--color-lotusPink`**: `#D8C8B6` (same value as `nudeRitual`; matches the intent
   from `tailwind.config.ts`)
7. **Add `--shadow-altar`**: `inset 0 8px 32px rgba(0,0,0,0.6), 0 16px 48px rgba(0,0,0,0.4)`
   (exact value from `tailwind.config.ts boxShadow.altar`)
8. **Add `--transition-duration-400`**: `400ms`
9. **Add `--transition-duration-1200`**: `1200ms`

Also update `body` gradient literals that use `var(--color-ink)` and `var(--color-charcoal)`
to use raw hex values (`#1E1A16`, `#2F2A24`) if they are already using literals — they are
already using raw hex in all the gradient strings, so this is a no-op. The `body` background
gradient uses `linear-gradient(135deg, var(--color-ink), var(--color-charcoal) 52%,
var(--color-ink))` which WILL be affected by the token correction — confirm visually that
this produces the correct dark gradient after the fix (it should, since `ink` → dark and
`charcoal` → slightly lighter dark, which is the intended depth layering).

### Fix 2 — `src/tailwind.config.ts` — `ivory` Color Correction

**Specific Change:**
- Change `ivory: "#2F2A24"` → `ivory: "#F8F5F1"` in the `colors` block.
  This ensures any v3-compat tooling or IDE colour preview shows the correct value, and
  prevents confusion if the project ever runs a `tw compat` layer.

### Fix 3 — `src/components/EditorialImage.tsx` — Next.js Image Migration

**Specific Changes:**
1. Add `import Image from "next/image"` at the top.
2. Add `import { useState } from "react"`.
3. Forward the `priority` prop from the component signature to `<Image priority={priority}>`.
4. Add `const [imgError, setImgError] = useState(false)` state.
5. Replace `<motion.img>` with a `<motion.div>` wrapper for the entrance animation
   (`initial={false}`, `animate={{ opacity: 1 }}`, `transition={{ duration: 1.5, ... }}`).
6. Inside the `motion.div`, render either:
   - `<Image fill src={src} alt={alt} sizes="(max-width: 768px) 100vw, 50vw" priority={priority} onError={() => setImgError(true)} className={`object-cover transition-transform duration-[2000ms] group-hover:scale-105 ${imageClassName}`} />`
   - OR (when `imgError` is true) a fallback `<div>` with:
     `className="absolute inset-0 flex items-center justify-center bg-parchment/20"`
     containing an `<img src="/shakti-elements/lotus-icon.svg" className="h-16 w-16 opacity-40" alt="" />`.
7. The outer `<div>` containing `overflow-hidden` must have `position: relative` so `fill`
   images work — it already has `relative w-full h-full`, this is satisfied.

### Fix 4 — `src/components/ContactForm.tsx` — Real API Integration

**Specific Changes:**
1. Remove the `setTimeout` simulation.
2. Add `const [error, setError] = useState<string | null>(null)` state.
3. Replace `handleSubmit` body with:
   ```ts
   setIsSubmitting(true);
   setError(null);
   try {
     const res = await fetch("/api/contact", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData),
     });
     const data = await res.json();
     if (!res.ok) throw new Error(data.error || "Something went wrong.");
     setIsSuccess(true);
   } catch (err) {
     setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
   } finally {
     setIsSubmitting(false);
   }
   ```
4. Below the submit `<button>`, add a conditional error message:
   ```tsx
   {error && (
     <p className="text-center text-[11px] uppercase tracking-[0.18em] text-terracotta/80 mt-2">
       {error}
     </p>
   )}
   ```
   (`terracotta` is `#B8904F` — warm amber, readable against the light form background and
   on-brand for an error state without being jarring.)

### Fix 5 — `src/app/philosophy/page.tsx` — Real Page Content

**New file: `src/components/PhilosophyContent.tsx`**

Content derived from the UI reference (`S UI/philosophy/code.html`), adapted to the
dark-gold site palette. Key sections:

1. **Hero** (full-width, `pt-40 pb-20 text-center`):
   - Eyebrow: `text-eyebrow` "Philosophy & Teachings"
   - Heading: `font-display text-5xl md:text-7xl` — "The Lineage of the Sacred Feminine"
   - `AnimatedSection` wrapper with `direction="up"`

2. **Essay section** (`py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24`):
   - Column 1: Opening paragraph with drop-cap first letter styled as
     `font-display text-6xl text-lightGold float-left leading-none pr-2 pt-1`
   - Column 2: offset `md:mt-32` per the reference design
   - Both columns: `text-parchment/82 font-light leading-loose text-base`
   - Both wrapped in `AnimatedSection` with `direction="left"` / `direction="right"`

3. **Image section** (`py-16 px-6 max-w-5xl mx-auto`):
   - `EditorialImage src={photos.gardenPortrait} variant="sharp" className="aspect-[16/9] w-full"`
   - `withBorder={false}` (the image is wide enough not to need a border offset)

4. **Closing quote** (`py-24 px-6 text-center max-w-2xl mx-auto`):
   - `<blockquote className="font-display text-2xl md:text-4xl italic leading-snug text-lightGold/85">`
   - Text: "The lotus does not struggle to bloom; it simply rests in the mud until the light
     calls it open."

5. **CTA** — standard link to `/contact`

**Update `src/app/philosophy/page.tsx`**: replace `redirect("/")` with:
```tsx
import PhilosophyContent from "@/components/PhilosophyContent";
export default function PhilosophyPage() {
  return <PhilosophyContent />;
}
```
No `"use client"` needed on the page itself (PhilosophyContent can use `"use client"` if
it needs `AnimatedSection`).

### Fix 6 — `src/app/mentorship/page.tsx` — Real Page Content

**New file: `src/components/MentorshipContent.tsx`**

Content derived from the UI reference (`S UI/1_1_mentorship/code.html`), adapted to the
dark-gold palette. Key sections:

1. **Hero** (`pt-40 pb-20 text-center`):
   - Eyebrow: "Sacred 1:1 Container"
   - Heading: `font-display text-5xl md:text-7xl` — "1:1 Mentorship"
   - Subtitle: `text-parchment/80 font-light max-w-2xl mx-auto text-lg` —
     "A deep-dive premium spiritual container designed to hold your transformation with grace,
     absolute presence, and ancient wisdom."

2. **The Container** section (`py-28 px-6 max-w-5xl mx-auto`):
   - Section heading + description
   - 2-column `sacred-card` grid:
     - Card 1: `SacredIcon type="ritual"` + "Sacred Space" + description
     - Card 2: `SacredIcon type="moon"` + "Deep Healing" + description
   - Both cards: `hover:-translate-y-2 transition-transform duration-[1200ms]`

3. **The Investment** section (`py-16 px-6 max-w-3xl mx-auto`):
   - `sacred-card p-12` container with `sacred-glow` border
   - Investment framing text in `text-parchment/80`
   - Investment highlight: `font-display text-3xl text-lightGold` — pricing/commitment copy
   - Payment plan note in `text-parchment/60 text-sm`

4. **Gentle Inquiries (FAQ)** section (`py-24 px-6 max-w-3xl mx-auto`):
   - Section heading
   - Animated accordion using `AnimatePresence` + `motion.div` for each answer:
     - Q: "What is the time commitment?" / A: description
     - Q: "Do you offer payment plans?" / A: description
     - Q: "Is this right for me?" / A: description
   - Each item: `border-b border-lightGold/20 pb-6` with a `+` / `−` toggle using
     `text-lightGold`

5. **CTA** — `Link href="/contact"` with standard gold button

**Update `src/app/mentorship/page.tsx`**: replace `redirect("/rituals-sessions")` with:
```tsx
import MentorshipContent from "@/components/MentorshipContent";
export default function MentorshipPage() {
  return <MentorshipContent />;
}
```

### Fix 7 — `src/components/Footer.tsx` — Add Missing Links

**Specific Change** — in the "Explore" `<div>` grid, append after "Sacred Jewelry":
```tsx
<Link href="/philosophy" className="hover:text-lightGold">Philosophy</Link>
<Link href="/contact" className="hover:text-lightGold">Contact</Link>
```

### Fix 8 — `src/app/page.tsx` — Hero Heading Sub-360 px Fix

**Specific Change** — in the `<h2>` hero heading, change:
```
className="mt-5 font-display text-4xl leading-[1.02] text-ivory sm:text-6xl md:mt-7 md:text-7xl md:leading-[0.98] xl:text-8xl"
```
to:
```
className="mt-5 font-display text-3xl leading-[1.02] text-ivory min-[360px]:text-4xl sm:text-6xl md:mt-7 md:text-7xl md:leading-[0.98] xl:text-8xl"
```
The `min-[360px]:` arbitrary breakpoint is native Tailwind v4 syntax. No config change needed.

---

## Testing Strategy

### Validation Approach

Because no test framework is currently installed, all testing in this project is manual
verification + build-time checking. The strategy below defines what to verify manually
(exploratory), what the build must confirm (fix checking), and what regression checks to
run after each fix (preservation checking). Property-Based Tests are noted as future
recommendations but are not currently executable.

### Exploratory Bug Condition Checking

**Goal**: Surface the bugs on the UNFIXED code to confirm each root cause before implementing
fixes. Run these checks on the current codebase first.

**Test Cases — run before any fix:**

1. **Color inversion smoke test** (Bug C1): Open the site's home page in a browser. Observe
   that the page background appears light cream (`#F8F5F1`) instead of near-black. Open
   DevTools → Computed styles on `<body>` → confirm `background-color` resolves to the
   cream value. Expected counterexample: `body { background-color: rgb(248, 245, 241) }`.

2. **Mobile nav link invisibility** (Bug C1): Open mobile nav overlay on any device at 375 px.
   Observe nav links appear black-on-black. Confirm via DevTools that `text-ivory/90` resolves
   to `rgba(47, 42, 36, 0.9)` (near-black) — invisible on `bg-ink/98`.

3. **`priority` prop ignored** (Bug C2): Add `priority={true}` to an `EditorialImage` call
   in the hero. Inspect the rendered HTML — confirm no `fetchpriority="high"` attribute on
   any `<img>` element (because `priority` is discarded).

4. **No fallback on 404 image** (Bug C2): Change an `EditorialImage` `src` to a non-existent
   path temporarily. Observe broken-image icon with no styled placeholder.

5. **ContactForm sends nothing** (Bug C3): Submit the ContactForm with valid data. Open
   DevTools → Network tab — confirm zero `POST /api/contact` requests are made. The success
   state appears after 1500 ms with no network activity.

6. **`/philosophy` redirects** (Bug C4): Navigate to `http://localhost:3000/philosophy`.
   Observe redirect to `/`.

7. **`/mentorship` redirects** (Bug C5): Navigate to `http://localhost:3000/mentorship`.
   Observe redirect to `/rituals-sessions`.

8. **Missing utility classes** (Bug C6): Run `next build`. Inspect the compiled CSS output
   (or use DevTools on the dev server) — confirm that elements using `bg-lotusPink/10`,
   `shadow-altar`, `duration-400`, `duration-1200` have no corresponding computed styles.

9. **Footer missing links** (Bug C7): View the Footer — confirm `/philosophy` and `/contact`
   are absent from the Explore column.

10. **Hero overflow at 320 px** (Bug C8): Set browser device emulation to 320 px width.
    Observe the hero `<h2>` text overflowing the viewport or wrapping awkwardly at `text-4xl`.

**Expected counterexamples:**
- Body background is light, not dark
- Mobile nav text is near-black-on-black
- No network request on form submit
- Both page routes redirect
- Four CSS classes produce no styles
- Two footer links absent
- Heading clips at 320 px

### Fix Checking

**Goal**: After each fix, verify the specific property holds.

```
FOR ALL bugCondition C IN [C1..C8] DO
  applyFix(C)
  result := verifyProperty(C)
  ASSERT result == expectedBehavior(C)
END FOR
```

Manual checks post-fix:

1. **C1 (colors)**: `body` background in DevTools shows dark (`#1E1A16`); `text-ivory` elements
   show light cream; mobile nav links are legible. Run `next build` — no TypeScript errors.

2. **C2 (EditorialImage)**: In the compiled HTML, images inside `EditorialImage` are rendered
   as `<img>` with `fetchpriority="high"` when `priority={true}`. A test 404 src shows the
   lotus-icon fallback instead of a broken image. All existing mask shapes still display
   correctly.

3. **C3 (ContactForm)**: Submit the form → DevTools Network shows `POST /api/contact` with
   status 200 (or 400 if RESEND_API_KEY is missing — the API gracefully returns 200 in that
   case). Success state appears. Test with network offline — inline error message appears.

4. **C4 (philosophy)**: Navigate to `/philosophy` — page renders with hero, essay, image,
   quote, and CTA. No redirect.

5. **C5 (mentorship)**: Navigate to `/mentorship` — page renders with hero, container grid,
   investment box, FAQ accordion, and CTA. No redirect.

6. **C6 (utilities)**: DevTools on `PageHero` component — `background-color` shows a soft
   blush value for `bg-lotusPink/10`. Navbar scrolled shadow is visible. Duration-400 and
   duration-1200 transitions animate at correct speeds.

7. **C7 (footer)**: Footer Explore column shows all 7 links including Philosophy and Contact.

8. **C8 (hero text)**: At 320 px device emulation, hero heading shows `font-size: 30px` (text-3xl)
   and fits within the viewport. At 360 px it shows `font-size: 36px`. At 640 px+ it scales
   normally.

### Preservation Checking

**Goal**: Verify no regressions after all fixes are applied.

```
FOR ALL input WHERE NOT isBugCondition(input) DO
  ASSERT fixedBehaviour(input) == originalBehaviour(input)
END FOR
```

**Preservation checklist (manual):**

1. **Build passes**: `next build` completes with zero errors and zero warnings.
2. **Gold tokens unchanged**: DevTools — `var(--color-lightGold)` still `#C8A96B`.
3. **Gradient backgrounds**: Body/page gradient still renders dark-to-slightly-lighter, not
   inverted.
4. **Sacred card / glow styles**: A `sacred-card` element still shows the correct rounded
   translucent background with gold border.
5. **All page routes unaffected**: `/`, `/about`, `/work-with-me`, `/rituals-sessions`,
   `/retreats`, `/sacred-jewelry`, `/contact` all load without error.
6. **EditorialImage props preserved**: All five variant shapes (`pebble`, `organic-1`,
   `organic-2`, `rounded`, `sharp`), `withBorder`, and all className overrides still apply
   correctly.
7. **ContactForm field labels and dropdown**: All existing form field UX (floating labels,
   dropdown animation, submit button disabled state) unchanged.
8. **API route unchanged**: `/api/contact` route.ts file is bit-for-bit identical to pre-fix.
9. **Navbar**: Desktop links, active underline, mobile overlay, `LanguageTrigger` all function
   normally.
10. **Hero sizing at normal breakpoints**: At 375 px (sm-equivalent) heading renders at 60 px
    (text-6xl); at 768 px at 72 px (text-7xl); at 1280 px at 96 px (text-8xl).
11. **Footer brand section**: Moon phases, brand description, contact details, copyright all
    present and unchanged.

### Unit Tests

(No test framework currently installed. These are specified for future implementation.)

- Test `EditorialImage` with `priority={true}` — assert that the rendered `<img>` element has
  `fetchpriority="high"`.
- Test `EditorialImage` with a failing `src` — assert the fallback `<div>` is rendered.
- Test `ContactForm.handleSubmit` — mock `fetch`, assert it calls `POST /api/contact` with the
  correct body and sets `isSuccess` on 200, sets `error` on 4xx.
- Test `/api/contact` route handler — assert 400 on missing fields, 200 on valid input (Resend
  mocked), 500 on Resend throw.
- Test `PhilosophyContent` renders without redirecting.
- Test `MentorshipContent` renders without redirecting.

### Property-Based Tests

(Future — requires Jest + fast-check or Vitest + fast-check setup.)

- **Color token invariant**: Generate any component tree that references `ink`, `ivory`,
  `parchment`, or `charcoal` — assert all computed colors satisfy `isDark(ink) &&
  isLight(ivory) && isLight(parchment) && isMidDark(charcoal)`.
- **EditorialImage preservation**: Generate random `src`, `alt`, `variant`, `withBorder`,
  `priority`, `className`, `imageClassName` combinations — assert the outer mask class and
  `withBorder` offset div are always present and correct regardless of prop values.
- **Footer link completeness**: For any future modification to the Footer's explore link list,
  assert that the set `{"/philosophy", "/contact"}` is always a subset of rendered hrefs.

### Integration Tests

(Future — requires Playwright or Cypress setup.)

- Full form submission flow: fill ContactForm → submit → assert network request to
  `/api/contact` → assert success state renders.
- Philosophy page navigation: click "Philosophy" in Navbar → assert current URL is
  `/philosophy` → assert no redirect → assert hero heading text is present.
- Mentorship page navigation: click `/mentorship` directly → assert page renders FAQ
  accordion — open first item → assert answer is visible.
- Mobile nav full flow: viewport 375 px → open hamburger → assert all 8 links visible →
  tap Philosophy → assert navigation to `/philosophy`.
- Hero responsive: emulate 320 px → assert hero heading `font-size` ≤ 32 px; emulate 640 px
  → assert heading `font-size` ≥ 56 px.
