# Implementation Plan

- [x] 1. Write bug condition exploration tests
  - **Property 1: Bug Condition** - Eight UI Defects (Color Palette, EditorialImage, ContactForm, Page Redirects, CSS Utilities, Footer Links, Hero Text)
  - **CRITICAL**: These tests MUST FAIL on unfixed code — failure confirms the bugs exist
  - **DO NOT attempt to fix the tests or the code when they fail**
  - **NOTE**: These tests encode expected behavior — they will validate the fixes when they pass after implementation
  - **GOAL**: Surface counterexamples that demonstrate each bug exists
  - **Scoped PBT Approach**: For deterministic bugs, scope each property to the concrete failing case(s) to ensure reproducibility
  - Run `next build` on UNFIXED code and confirm it succeeds (build passes despite the runtime bugs)
  - Manual counterexample 1 — Color palette: open `src/app/globals.css` and assert `--color-ink: #F8F5F1` (cream) — expected counterexample: ink is light `#F8F5F1`, should be dark `#1E1A16`
  - Manual counterexample 2 — EditorialImage: open `src/components/EditorialImage.tsx` and assert the component uses `<motion.img>` instead of `<Image>` — expected counterexample: raw `<motion.img>` found, `priority` prop is destructured but never forwarded to any element
  - Manual counterexample 3 — ContactForm: open `src/components/ContactForm.tsx` and assert `handleSubmit` contains `setTimeout` and NO `fetch("/api/contact")` call — expected counterexample: only `setTimeout(resolve, 1500)`, zero network requests
  - Manual counterexample 4 — Philosophy page: read `src/app/philosophy/page.tsx` and assert it contains `redirect("/")` — expected counterexample: `redirect("/")` is the entire page body
  - Manual counterexample 5 — Mentorship page: read `src/app/mentorship/page.tsx` and assert it contains `redirect("/rituals-sessions")` — expected counterexample: redirect to unrelated route
  - Manual counterexample 6 — CSS utilities: grep codebase for `bg-lotusPink`, `shadow-altar`, `duration-400`, `duration-1200` and assert NONE of them appear in `globals.css @theme` — expected counterexample: all four only in `tailwind.config.ts extend.*`
  - Manual counterexample 7 — Footer: read `src/components/Footer.tsx` Explore column and assert `/philosophy` and `/contact` links are absent — expected counterexample: only 5 links, Philosophy and Contact missing
  - Manual counterexample 8 — Hero text: read hero `<h2>` in `src/app/page.tsx` and assert base class is `text-4xl` with no `min-[360px]:` or sub-360 breakpoint — expected counterexample: `text-4xl` base, no intermediate breakpoint
  - Document all counterexamples found above before proceeding
  - Mark task complete when all counterexamples are written, confirmed, and documented
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14_

- [x] 2. Write preservation property tests (BEFORE implementing fixes)
  - **Property 2: Preservation** - Unchanged Site Behaviors (Gold Tokens, Sacred Utilities, Gradient Backgrounds, Existing Routes, ContactForm UI, API Route, Navbar, EditorialImage Variants)
  - **IMPORTANT**: Follow observation-first methodology — observe and record current behavior on UNFIXED code for all non-buggy inputs
  - Observe: `--color-gold` is `#B8904F`, `--color-softGold` is `#C8A96B`, `--color-lightGold` is `#C8A96B`, `--color-antiqueGold` is `#C8A96B`, `--color-mutedGold` is `#7E5A2F` — all gold tokens are already correct
  - Observe: `globals.css` contains all custom utilities (`gold-text`, `sacred-card`, `sacred-bg`, `animate-breathe`, `animate-float`, `text-eyebrow`, `pebble-mask`, `organic-mask-1`, `organic-mask-2`, `editorial-border`, `moon-phase`, `gold-line`, `writing-mode-vertical`) with their current definitions
  - Observe: Body gradient uses raw hex literals (not swapped variables) for radial-gradient stops — these will be unaffected by color token changes
  - Observe: `EditorialImage` currently accepts all five variants (`pebble`, `organic-1`, `organic-2`, `rounded`, `sharp`), `withBorder`, `className`, `imageClassName`, `priority` (unused) props
  - Observe: `ContactForm` existing success state (SVG checkmark, "Message Received" heading, subtitle text) is the correct post-submission UI to preserve
  - Observe: `src/app/api/contact/route.ts` exists and is the complete API handler — it must not be modified
  - Observe: Footer brand section (BrandLogo, moon phases, "Kunti Shakti Loto" heading, brand description paragraph, Contact details column) is the baseline to preserve
  - Observe: Hero heading responsive classes `sm:text-6xl md:text-7xl xl:text-8xl` are the baseline ladder above 360 px
  - Write property-based tests capturing these observed patterns: for any combination of `variant`, `withBorder`, `priority`, `className`, `imageClassName` props passed to `EditorialImage`, the outer mask class and optional border offset div must always be present and correct (from Preservation Requirements in design)
  - Run `next build` on UNFIXED code — confirm zero TypeScript errors and zero ESLint violations
  - **EXPECTED OUTCOME**: Build passes (confirms baseline preservation state before any fix)
  - Mark task complete when all observations are recorded, build passes, and preservation baseline is documented
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10_

- [x] 3. Fix — Color palette correction (`globals.css` + `tailwind.config.ts`)

  - [x] 3.1 Correct swapped color tokens in `globals.css @theme` block
    - Change `--color-ink` from `#F8F5F1` → `#1E1A16` (deep near-black)
    - Change `--color-ivory` from `#2F2A24` → `#F8F5F1` (light cream)
    - Change `--color-parchment` from `#3F3026` → `#EFE6DB` (warm off-white)
    - Change `--color-charcoal` from `#EFE6DB` → `#2F2A24` (mid-dark)
    - Change `--color-surfaceDark` from `#F8F5F1` → `#2F2A24` (dark background for image containers)
    - Add `--color-lotusPink: #D8C8B6` to `@theme` block (fixes `bg-lotusPink/10` in PageHero.tsx and CTASection.tsx)
    - Add `--shadow-altar: inset 0 8px 32px rgba(0,0,0,0.6), 0 16px 48px rgba(0,0,0,0.4)` to `@theme` block (fixes `shadow-altar` in Navbar.tsx and page.tsx)
    - Add `--transition-duration-400: 400ms` to `@theme` block (fixes `duration-400` in Navbar.tsx)
    - Add `--transition-duration-1200: 1200ms` to `@theme` block (fixes `duration-1200` in EditorialImage.tsx)
    - Do NOT change gold tokens: `--color-gold`, `--color-softGold`, `--color-lightGold`, `--color-antiqueGold`, `--color-mutedGold`
    - Do NOT change any gradient hex literals in `globals.css` body, sacred-bg, palette-wash, etc.
    - _Bug_Condition: isBugCondition_colors(token) — any of ink/ivory/parchment/charcoal/surfaceDark mapped to wrong hex; lotusPink/shadow-altar/duration-400/duration-1200 absent from @theme_
    - _Expected_Behavior: --color-ink=#1E1A16, --color-ivory=#F8F5F1, --color-parchment=#EFE6DB, --color-charcoal=#2F2A24; all four missing utilities resolve correctly_
    - _Preservation: gold tokens unchanged; all existing custom utilities (gold-text, sacred-card, sacred-bg, animate-breathe, animate-float, text-eyebrow, pebble-mask, organic-mask-1, organic-mask-2, editorial-border, moon-phase, gold-line, writing-mode-vertical) remain byte-for-byte identical_
    - _Requirements: 2.1, 2.2, 2.9, 2.10, 2.11, 2.12, 3.1, 3.2, 3.7_

  - [x] 3.2 Correct `ivory` value in `tailwind.config.ts`
    - Change `ivory: "#2F2A24"` → `ivory: "#F8F5F1"` in the `colors` block
    - This aligns the v3-compat config with the corrected `@theme` value so IDE previews and any compat tooling are consistent
    - Do NOT remove any other entries from `tailwind.config.ts`
    - _Bug_Condition: tailwind.config.ts colors.ivory == "#2F2A24" mirrors the wrong @theme value_
    - _Expected_Behavior: ivory: "#F8F5F1" in tailwind.config.ts_
    - _Preservation: all other tailwind.config.ts entries unchanged_
    - _Requirements: 2.1, 2.2, 3.1_

- [x] 4. Fix — `EditorialImage` Next.js Image migration

  - [x] 4.1 Migrate `EditorialImage` from `<motion.img>` to `<Image>` with priority and error fallback
    - Add `import Image from "next/image"` at the top of `src/components/EditorialImage.tsx`
    - Add `import { useState } from "react"` (or add `useState` to existing React import)
    - Add `priority` to the destructured props (already in interface, just not destructured before)
    - Add `const [imgError, setImgError] = useState(false)` state
    - Replace the `<motion.img>` element with a `<motion.div>` wrapper that carries the entrance animation (`initial={false}`, `animate={{ opacity: 1, scale: 1 }}`, `transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}`)
    - Inside the `motion.div`, render conditionally:
      - When `imgError` is false: `<Image fill src={src} alt={alt} sizes="(max-width: 768px) 100vw, 50vw" priority={priority} onError={() => setImgError(true)} className={\`object-cover transition-transform duration-[2000ms] group-hover:scale-105 \${imageClassName}\`} />`
      - When `imgError` is true: `<div className="absolute inset-0 flex items-center justify-center bg-parchment/20"><img src="/shakti-elements/lotus-icon.svg" className="h-16 w-16 opacity-40" alt="" /></div>`
    - The outer container `div` already has `relative w-full h-full` — this satisfies the `fill` layout requirement; no other outer structure changes needed
    - All five mask variant classes (`pebble-mask`, `organic-mask-1`, `organic-mask-2`, `rounded-[32px]`, `rounded-none`) must still apply to the same container divs as before
    - The `withBorder` offset div and soft inner shadow overlay div are unchanged
    - _Bug_Condition: isBugCondition_editorialImage — component uses <motion.img>, priority prop not forwarded, no error fallback_
    - _Expected_Behavior: <Image> with fill layout, sizes attr, priority forwarded; onError shows lotus-icon fallback div matching same mask class_
    - _Preservation: all five variant shapes, withBorder, className, imageClassName props produce identical visual output; component signature unchanged_
    - _Requirements: 2.3, 2.4, 2.5, 3.3_

- [x] 5. Fix — ContactForm real API integration

  - [x] 5.1 Wire `handleSubmit` to POST `/api/contact` with error handling
    - Add `const [error, setError] = useState<string | null>(null)` state to `ContactForm`
    - Remove the `await new Promise((resolve) => setTimeout(resolve, 1500))` simulation
    - Replace the `handleSubmit` body with:
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
    - Add inline error display below the submit `<button>`:
      ```tsx
      {error && (
        <p className="text-center text-[11px] uppercase tracking-[0.18em] text-terracotta/80 mt-2">
          {error}
        </p>
      )}
      ```
    - Do NOT modify `src/app/api/contact/route.ts`
    - Do NOT change any form field, label, dropdown, or success state JSX
    - `disabled={isSubmitting}` on the submit button is already correct — no change needed there
    - _Bug_Condition: isBugCondition_contactForm — handleSubmit calls setTimeout only, makesNetworkRequest == false_
    - _Expected_Behavior: POST JSON to /api/contact; setIsSuccess(true) on 2xx; setError(message) on non-2xx or network error_
    - _Preservation: existing success state (checkmark SVG, "Message Received", subtitle) unchanged; submit button disabled state unchanged; all field/label/dropdown logic unchanged_
    - _Requirements: 2.6, 3.4, 3.5_

- [x] 6. Fix — Create `/api/contact` route (if it doesn't already exist)
  - Check whether `src/app/api/contact/route.ts` already exists and is complete
  - If it exists and handles POST with Resend: no changes needed (confirmed by design — "The `/api/contact` route already exists and is complete")
  - If it does not exist: create `src/app/api/contact/route.ts` with:
    - POST handler that reads `{ name, email, interest, message }` from request JSON
    - Validates required fields (name, email, message) — return 400 with `{ error: "..." }` if missing
    - HTML-escapes all inputs before use in email body
    - Sends email via Resend using `RESEND_API_KEY` env variable
    - Returns `{ success: true }` on success or `{ error: "..." }` with appropriate status on failure
  - _Requirements: 2.6, 3.5_

- [ ] 7. Fix — Philosophy page real content

  - [-] 7.1 Create `PhilosophyContent` component
    - Create new file `src/components/PhilosophyContent.tsx` with `"use client"` directive (needed for AnimatedSection)
    - Add imports: `AnimatedSection`, `EditorialImage`, `Link` from `next/link`, `{ photos }` from `@/lib/brand`
    - Section 1 — Hero (`pt-40 pb-20 px-6 text-center`):
      - `AnimatedSection direction="up"`
      - Eyebrow: `<p className="text-eyebrow">Philosophy & Teachings</p>`
      - Heading: `<h1 className="mt-5 font-display text-5xl md:text-7xl text-ivory">The Lineage of the Sacred Feminine</h1>`
      - Gold line divider below heading
    - Section 2 — Two-column philosophy essay (`py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24`):
      - Column 1 (`AnimatedSection direction="left"`): Opening paragraph with drop-cap first letter styled as `font-display text-6xl text-lightGold float-left leading-none pr-2 pt-1`; body text `text-parchment/82 font-light leading-loose text-base`
      - Column 2 (`AnimatedSection direction="right"` with `className="md:mt-32"`): continuation paragraph; same text styling
      - Content from UI reference: lineage of the sacred feminine, tantric yogini path, ancestral wisdom transmission
    - Section 3 — Full-width image (`py-16 px-6 max-w-5xl mx-auto`):
      - `EditorialImage src={photos.gardenPortrait} alt="Kunti Shakti Loto — Garden Portrait" variant="sharp" className="aspect-[16/9] w-full rounded-[32px] overflow-hidden"`
    - Section 4 — Closing quote (`py-24 px-6 text-center max-w-2xl mx-auto`):
      - `<blockquote className="font-display text-2xl md:text-4xl italic leading-snug text-lightGold/85">`
      - Text: "The lotus does not struggle to bloom; it simply rests in the mud until the light calls it open."
    - Section 5 — CTA: standard gold link to `/contact` matching site pattern
    - _Bug_Condition: isBugCondition_philosophyPage — GET /philosophy returns redirect("/")_
    - _Expected_Behavior: renders hero, two-column essay, image, closing quote, CTA; no redirect_
    - _Preservation: page remains reachable at /philosophy path linked in Navbar; dark-gold site palette used (not light reference HTML palette)_
    - _Requirements: 2.7, 3.6_

  - [~] 7.2 Replace redirect in `src/app/philosophy/page.tsx`
    - Remove `import { redirect } from "next/navigation"` and `redirect("/")`
    - Replace with:
      ```tsx
      import PhilosophyContent from "@/components/PhilosophyContent";
      export default function PhilosophyPage() {
        return <PhilosophyContent />;
      }
      ```
    - No `"use client"` on the page file itself
    - _Requirements: 2.7, 3.6_

- [ ] 8. Fix — Mentorship page real content

  - [~] 8.1 Create `MentorshipContent` component
    - Create new file `src/components/MentorshipContent.tsx` with `"use client"` directive
    - Add imports: `AnimatedSection`, `SacredIcon`, `Link` from `next/link`, `{ motion, AnimatePresence }` from `framer-motion`, `{ useState }` from `react`
    - Section 1 — Hero (`pt-40 pb-20 px-6 text-center`):
      - `AnimatedSection`
      - Eyebrow: `<p className="text-eyebrow">Sacred 1:1 Container</p>`
      - Heading: `<h1 className="mt-5 font-display text-5xl md:text-7xl text-ivory">1:1 Mentorship</h1>`
      - Subtitle: `<p className="mt-8 text-parchment/80 font-light max-w-2xl mx-auto text-lg leading-loose">A deep-dive premium spiritual container designed to hold your transformation with grace, absolute presence, and ancient wisdom.</p>`
    - Section 2 — "The Container" (`py-28 px-6 max-w-5xl mx-auto`):
      - Section heading + description paragraph
      - 2-column grid of `sacred-card` tiles:
        - Card 1: `SacredIcon type="ritual"` + heading "Sacred Space" + description about ceremonial holding, transformative rituals, plant allies
        - Card 2: `SacredIcon type="moon"` + heading "Deep Healing" + description about shadow integration, ancestral clearing, energetic restoration
        - Both cards: `p-8 hover:-translate-y-2 transition-transform duration-[1200ms]`
    - Section 3 — "The Investment" (`py-16 px-6 max-w-3xl mx-auto`):
      - `<div className="sacred-card sacred-glow p-12 text-center">`
      - Section heading `font-display text-3xl md:text-4xl text-ivory`
      - Investment framing text `text-parchment/80 font-light leading-loose mt-6`
      - Investment highlight `font-display text-3xl text-lightGold mt-8` — commitment/pricing copy
      - Payment plan note `text-parchment/60 text-sm mt-4`
    - Section 4 — "Gentle Inquiries" FAQ (`py-24 px-6 max-w-3xl mx-auto`):
      - Section heading
      - State: `const [openIndex, setOpenIndex] = useState<number | null>(null)`
      - Three FAQ items using `<details>`-style pattern with Framer Motion height animation:
        - Q: "What is the time commitment?" / A: description of session frequency and duration
        - Q: "Do you offer payment plans?" / A: description of flexible arrangements
        - Q: "Is this right for me?" / A: description of ideal participant
      - Each item: `border-b border-lightGold/20 pb-6` with `+`/`−` toggle `text-lightGold`
      - Answer: `<AnimatePresence>` + `<motion.div initial={{ height: 0 }} animate={{ height: "auto" }}>` for smooth expand/collapse
    - Section 5 — CTA: `Link href="/contact"` with standard gold button pattern
    - _Bug_Condition: isBugCondition_mentorshipPage — GET /mentorship returns redirect("/rituals-sessions")_
    - _Expected_Behavior: renders hero, container grid, investment box, FAQ accordion, CTA; no redirect_
    - _Preservation: Navbar mentorship link works; dark-gold palette used_
    - _Requirements: 2.8_

  - [~] 8.2 Replace redirect in `src/app/mentorship/page.tsx`
    - Remove `import { redirect } from "next/navigation"` and `redirect("/rituals-sessions")`
    - Replace with:
      ```tsx
      import MentorshipContent from "@/components/MentorshipContent";
      export default function MentorshipPage() {
        return <MentorshipContent />;
      }
      ```
    - _Requirements: 2.8_

- [ ] 9. Fix — Footer add Philosophy and Contact links

  - [~] 9.1 Add missing navigation links to Footer "Explore" column
    - Open `src/components/Footer.tsx`
    - In the "Explore" `<div>` grid, after the existing `<Link href="/sacred-jewelry">Sacred Jewelry</Link>`, append:
      ```tsx
      <Link href="/philosophy" className="hover:text-lightGold">Philosophy</Link>
      <Link href="/contact" className="hover:text-lightGold">Contact</Link>
      ```
    - Do NOT modify the brand description section, moon phases, Contact details column, or copyright
    - _Bug_Condition: isBugCondition_footer — footer.exploreLinks does not include "/philosophy" or "/contact"_
    - _Expected_Behavior: Explore column shows 7 links including Philosophy and Contact_
    - _Preservation: all other footer sections unchanged (BrandLogo, brand description, moon phases, contact details, copyright)_
    - _Requirements: 2.13, 3.8_

- [ ] 10. Fix — Hero heading sub-360px text size

  - [~] 10.1 Add intermediate text-size breakpoint below 360px
    - Open `src/app/page.tsx`
    - Find the hero `<h2>` with current classes:
      `"mt-5 font-display text-4xl leading-[1.02] text-ivory sm:text-6xl md:mt-7 md:text-7xl md:leading-[0.98] xl:text-8xl"`
    - Change to:
      `"mt-5 font-display text-3xl leading-[1.02] text-ivory min-[360px]:text-4xl sm:text-6xl md:mt-7 md:text-7xl md:leading-[0.98] xl:text-8xl"`
    - `min-[360px]:` is native Tailwind v4 arbitrary breakpoint syntax — no config change needed
    - Do NOT change any other className on the heading or any other element in the hero section
    - _Bug_Condition: isBugCondition_heroText — viewport < 360px AND headingBaseClass == "text-4xl" AND noIntermediateBreakpoint == true_
    - _Expected_Behavior: text-3xl base (<360px), text-4xl at min-[360px], sm:text-6xl md:text-7xl xl:text-8xl above that_
    - _Preservation: heading renders at sm:text-6xl md:text-7xl xl:text-8xl on all viewports ≥ 360px — only base size changes_
    - _Requirements: 2.14, 3.9_

- [~] 11. Fix — Verify bug condition exploration tests now pass
  - **Property 1: Expected Behavior** - All Eight Bug Conditions Resolved
  - **IMPORTANT**: Re-run the SAME checks from task 1 — do NOT write new checks
  - The checks from task 1 encode the expected behavior; passing them confirms each bug is fixed
  - Re-confirm: `--color-ink` in `globals.css @theme` is now `#1E1A16` (dark)
  - Re-confirm: `--color-ivory` in `globals.css @theme` is now `#F8F5F1` (light cream)
  - Re-confirm: `EditorialImage` uses `<Image>` from `next/image` (not `<motion.img>`)
  - Re-confirm: `EditorialImage` forwards `priority` prop to `<Image>`
  - Re-confirm: `EditorialImage` has `onError` handler that sets `imgError` state
  - Re-confirm: `ContactForm.handleSubmit` contains `fetch("/api/contact", { method: "POST" })`
  - Re-confirm: `src/app/philosophy/page.tsx` renders `<PhilosophyContent />` (no redirect)
  - Re-confirm: `src/app/mentorship/page.tsx` renders `<MentorshipContent />` (no redirect)
  - Re-confirm: `globals.css @theme` contains `--color-lotusPink`, `--shadow-altar`, `--transition-duration-400`, `--transition-duration-1200`
  - Re-confirm: Footer Explore column has 7 links including `/philosophy` and `/contact`
  - Re-confirm: Hero `<h2>` base class is `text-3xl` with `min-[360px]:text-4xl`
  - **EXPECTED OUTCOME**: All checks PASS (confirms all eight bugs are fixed)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14_

- [~] 12. Verify preservation tests still pass
  - **Property 2: Preservation** - All Non-Buggy Behaviors Unchanged
  - **IMPORTANT**: Re-run the SAME observations from task 2 — do NOT write new tests
  - Run `next build` — confirm zero TypeScript errors and zero ESLint violations
  - Confirm gold tokens unchanged: `--color-gold: #B8904F`, `--color-softGold: #C8A96B`, `--color-lightGold: #C8A96B`, `--color-antiqueGold: #C8A96B`, `--color-mutedGold: #7E5A2F`
  - Confirm all custom utilities still present in `globals.css`: `gold-text`, `sacred-card`, `sacred-glow`, `sacred-bg`, `animate-breathe`, `animate-float`, `text-eyebrow`, `pebble-mask`, `organic-mask-1`, `organic-mask-2`, `editorial-border`, `moon-phase`, `gold-line`, `writing-mode-vertical`
  - Confirm `src/app/api/contact/route.ts` is byte-for-byte identical to the pre-fix version
  - Confirm `ContactForm` success state JSX (checkmark SVG, "Message Received" heading, subtitle) is unchanged
  - Confirm `EditorialImage` all five variant classes and `withBorder` behavior unchanged
  - Confirm Footer brand column (BrandLogo, moon phases, brand description, Contact column) unchanged
  - Confirm hero `sm:text-6xl md:text-7xl xl:text-8xl` classes still present
  - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions)
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10_

- [~] 13. Checkpoint — Ensure all tests pass
  - Run `next build` and confirm it completes with zero TypeScript errors and zero ESLint violations
  - Verify the build output includes pages for `/philosophy` and `/mentorship` (no longer static redirect pages)
  - If any TypeScript or lint errors appear, fix them before marking complete
  - Ask the user if any questions arise about design decisions (e.g., exact copy for PhilosophyContent / MentorshipContent, Resend API key configuration, or visual review of color corrections)
