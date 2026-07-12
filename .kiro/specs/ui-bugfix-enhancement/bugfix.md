# Bugfix Requirements Document

## Introduction

The Shakti Loto Next.js website (a sacred wellness / spiritual brand for Kunti Shakti Loto) has accumulated a set of functional bugs and UI defects that together break the visual presentation, prevent contact form emails from being delivered, create 404 routes, and use invalid Tailwind CSS utilities. This document captures all current defects, the correct behavior each fix must produce, and the existing behaviors that must not regress once fixes are applied.

---

## Bug Analysis

### Current Behavior (Defect)

**Color Scheme**

1.1 WHEN any page is rendered THEN the system displays an inverted color palette because `--color-ink` is `#F8F5F1` (light cream), `--color-ivory` is `#2F2A24` (near-black), `--color-parchment` is `#3F3026` (very dark), and `--color-charcoal` is `#EFE6DB` (light), causing text that should appear light to appear dark and vice versa across the entire site.

1.2 WHEN the `tailwind.config.ts` color `ivory` is consumed THEN it resolves to `#2F2A24` (near-black) because the config also maps `ivory` to that dark value, making elements such as mobile nav link text (`text-ivory/90`) virtually invisible against the dark overlay background.

**EditorialImage Component**

1.3 WHEN `EditorialImage` is rendered with `priority={true}` THEN the system ignores the prop because the component's function signature destructures but never forwards `priority` to any image element, meaning above-the-fold images receive no priority loading hint.

1.4 WHEN `EditorialImage` renders an image THEN the system uses a raw `<motion.img>` tag instead of the Next.js `<Image>` component, bypassing automatic WebP conversion, lazy loading, blur placeholders, and responsive size optimisation.

1.5 WHEN an image `src` URL returns a 404 THEN the system shows a broken image icon with no fallback, because `<motion.img>` has no `onError` handler or placeholder fallback.

**ContactForm**

1.6 WHEN a user submits the ContactForm THEN the system only simulates a 1 500 ms delay and shows a success state without making any network request, so no email is ever delivered.

**Philosophy Page**

1.7 WHEN a user navigates to `/philosophy` THEN the system immediately redirects them to `/` because the page file contains only `redirect("/")` with no actual content.

**Mentorship Route**

1.8 WHEN a user navigates to `/mentorship` THEN the system redirects to `/rituals-sessions` instead of showing dedicated mentorship content, because the page file contains only `redirect("/rituals-sessions")`.

**Undefined CSS Utilities**

1.9 WHEN Tailwind processes classes `bg-lotusPink/10` in `PageHero.tsx` and `CTASection.tsx` THEN the system silently applies no background color because `lotusPink` is not defined in the `@theme` block of `globals.css` (it only exists in the `tailwind.config.ts` colors extension, which is not the v4 configuration path).

1.10 WHEN Tailwind processes the class `shadow-altar` in `Navbar.tsx` and `page.tsx` THEN the system applies no shadow because `shadow-altar` is not defined in `globals.css`; it is defined only in `tailwind.config.ts` which is not the active v4 config path.

1.11 WHEN Tailwind processes `transition-all duration-400` and `transition-colors duration-400` in `Navbar.tsx` THEN the system applies no duration because `duration-400` is not a default Tailwind CSS class (valid defaults are `duration-300` and `duration-500`).

1.12 WHEN Tailwind processes `transition-transform duration-1200` in `EditorialImage.tsx` THEN the system applies no duration because `duration-1200` is not a default Tailwind class — it is only declared in `tailwind.config.ts` `extend.transitionDuration`, which is not active under Tailwind CSS v4's `@theme` model.

**Footer Missing Links**

1.13 WHEN a user views the footer "Explore" section THEN the system only shows links to About, Work With Me, Rituals & Sessions, Retreats & Courses, and Sacred Jewelry — it is missing Philosophy and Contact links.

**Hero Text Overflow on Very Small Screens**

1.14 WHEN the home page hero heading is rendered on a viewport narrower than 360 px THEN the system allows text overflow because the heading jumps from `text-4xl` directly to `text-6xl` (sm) with no intermediate breakpoint for sub-360 px screens.

---

### Expected Behavior (Correct)

**Color Scheme**

2.1 WHEN any page is rendered THEN the system SHALL display the intended dark-background, gold-accent aesthetic by mapping `--color-ink` to a deep dark brown (e.g., `#1E1A16`), `--color-ivory` to light cream (`#F8F5F1`), `--color-parchment` to warm off-white / light tan (`#EFE6DB`), and `--color-charcoal` to a mid dark tone (`#2F2A24`), with matching corrections in `tailwind.config.ts` so all color references resolve consistently.

2.2 WHEN the mobile overlay menu is rendered THEN the system SHALL display active link text in `text-ivory/90` visibly against the dark background because `ivory` now correctly resolves to the light cream value.

**EditorialImage Component**

2.3 WHEN `EditorialImage` is rendered with `priority={true}` THEN the system SHALL pass the `priority` prop to the underlying Next.js `<Image>` component so browsers receive the correct priority loading hint for above-the-fold images.

2.4 WHEN `EditorialImage` renders any image THEN the system SHALL use the Next.js `<Image>` component (wrapped in a `motion.div` for animation) to enable automatic WebP conversion, lazy loading, and size optimisation, with `fill` layout and appropriate `sizes` attribute.

2.5 WHEN an image `src` URL returns a 404 or fails to load THEN the system SHALL display a styled fallback placeholder (e.g., a gold-tinted surface with the sacred lotus icon) instead of a broken image icon.

**ContactForm**

2.6 WHEN a user submits the ContactForm THEN the system SHALL POST the form data to `/api/contact` and display the success state only upon receiving a 2xx response, or display an inline error message if the request fails.

**Philosophy Page**

2.7 WHEN a user navigates to `/philosophy` THEN the system SHALL render a full philosophy page with content reflecting Kunti Shakti Loto's spiritual philosophy — including a hero section, philosophy pillars, and a call-to-action — rather than redirecting.

**Mentorship Route**

2.8 WHEN a user navigates to `/mentorship` THEN the system SHALL render a dedicated 1:1 mentorship page with relevant content (or a purposeful redirect with user-visible messaging), so the route no longer silently sends users to an unrelated page.

**Undefined CSS Utilities**

2.9 WHEN Tailwind processes `bg-lotusPink/10` THEN the system SHALL apply the intended soft blush background because `lotusPink` SHALL be defined in `globals.css` `@theme` (or the component classes shall be replaced with an equivalent defined color such as `nudeRitual`).

2.10 WHEN Tailwind processes `shadow-altar` THEN the system SHALL apply the deep inset shadow because `shadow-altar` SHALL be declared in `globals.css` as a custom utility or the class shall be replaced with the raw box-shadow value.

2.11 WHEN Tailwind processes `duration-400` THEN the system SHALL apply a 400 ms transition duration because the value SHALL be declared as `--transition-duration-400: 400ms` in the `@theme` block of `globals.css` (Tailwind v4 approach), or the class shall be replaced with `duration-[400ms]`.

2.12 WHEN Tailwind processes `duration-1200` THEN the system SHALL apply a 1 200 ms transition duration because the value SHALL be declared as `--transition-duration-1200: 1200ms` in the `@theme` block of `globals.css`, or the class shall be replaced with `duration-[1200ms]`.

**Footer Missing Links**

2.13 WHEN a user views the footer "Explore" section THEN the system SHALL display links to About Kunti, Work With Me, Rituals & Sessions, Retreats & Courses, Sacred Jewelry, Philosophy, and Contact.

**Hero Text Overflow on Very Small Screens**

2.14 WHEN the home page hero heading is rendered on any viewport THEN the system SHALL display legible, non-overflowing text by adding an intermediate text size (e.g., `text-3xl` as the base, stepping up to `text-4xl` at `xs` or `360px`, then `text-6xl` at `sm`) so the heading fits on sub-360 px screens.

---

### Unchanged Behavior (Regression Prevention)

3.1 WHEN the color scheme is corrected THEN the system SHALL CONTINUE TO use gold accent colors (`--color-gold`, `--color-softGold`, `--color-lightGold`, `--color-antiqueGold`) unchanged, as their current hex values are already correct.

3.2 WHEN the color scheme is corrected THEN the system SHALL CONTINUE TO render the sacred card, gold-line divider, palette-wash, and all gradient backgrounds using their existing hex literals (not the swapped variables), so gradient colors are unaffected.

3.3 WHEN `EditorialImage` is migrated to Next.js `<Image>` THEN the system SHALL CONTINUE TO support all existing props (`src`, `alt`, `className`, `imageClassName`, `variant`, `withBorder`, `priority`) and all mask variants (`pebble`, `organic-1`, `organic-2`, `rounded`, `sharp`) with identical visual output.

3.4 WHEN the ContactForm is updated to call `/api/contact` THEN the system SHALL CONTINUE TO show the existing inline success state when submission succeeds, and SHALL CONTINUE TO disable the submit button while the request is in-flight.

3.5 WHEN the `/api/contact` route already exists and is functional THEN the system SHALL CONTINUE TO validate required fields (name, email, message), sanitise inputs with HTML escaping, and send email via Resend — no changes to the API route are needed for this fix.

3.6 WHEN the `/philosophy` page is given real content THEN the system SHALL CONTINUE TO be reachable at the `/philosophy` path linked in both the desktop and mobile Navbar without any redirects.

3.7 WHEN undefined Tailwind utilities are resolved THEN the system SHALL CONTINUE TO apply all other custom utilities (`gold-text`, `sacred-card`, `sacred-bg`, `animate-breathe`, `animate-float`, `text-eyebrow`, `pebble-mask`, `organic-mask-1`, `organic-mask-2`, `editorial-border`, `moon-phase`, `gold-line`, `writing-mode-vertical`) unchanged.

3.8 WHEN the footer is updated with new links THEN the system SHALL CONTINUE TO display the existing brand description, moon phases, contact details, and copyright section without modification.

3.9 WHEN hero text sizing is adjusted THEN the system SHALL CONTINUE TO render the heading at `text-6xl` / `text-7xl` / `text-8xl` on small, medium, and large viewports respectively, changing only the base (sub-sm) size.

3.10 WHEN any fix is applied THEN the system SHALL CONTINUE TO pass Next.js build (`next build`) without TypeScript errors or ESLint violations.
