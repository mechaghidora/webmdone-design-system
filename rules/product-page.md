# Product Page Layout Rules

## Purpose
- Use this layout pattern for all top-level product pages and major feature landing pages across the experience.
- These rules define structure, hierarchy, and responsive behavior only.  
Visual styling (colors, typography tokens, spacing scale, shadows, etc.) is handled separately by the design system.


---


## Page Structure

Product pages should generally follow this order:

1. Primary navigation or app shell
2. Page-level tabs
3. Page header / hero section
4. Page content sections

---


# Tabs Navigation

## Placement
- Tabs should appear near the top of the page directly beneath the global app header/navigation.
- Tabs are horizontally aligned.


## Behavior
- Tabs switch between sibling product sections/pages.
- Active tab should be visually distinguishable.
- Tabs should remain visible above the page header content.


## Layout
- Use the shared `TabsNav` component for product pages. It is full-bleed within the page container (no horizontal section padding on the tab bar).
- Do not wrap `Tabs` in a `Box` (or similar) with `px` using `--space-section-padding-*` — that shrinks the tab bar and leaves visible side gutters.
- Desktop:
  - Tabs appear in a horizontal row.
  - Tab labels are flush left within the content container.
- Mobile:
  - Tabs remain horizontal.
  - Tabs may scroll horizontally if needed.
  - Maintain touch-friendly sizing.


---


# Page Header (Hero Section)

## Purpose
The page header introduces the current product area or experience.

It should contain:
- H1 headline
- Optional Body1 supporting text
- Optional Caption secondary/supporting text (only use when prompted)
- Decorative or contextual illustration 

- Hero shell uses --color-surface and spans the page content width; it does not receive section padding.
- Illustration is decorative and full-bleed within the hero shell:
	- Desktop: CSS `background-image` on the hero shell via `HeroSection` `desktopIllustrationSrc` (do not use a side-by-side `<img>` column)
	- Mobile: full-width image block above text via `mobileIllustrationSrc`, max height 300px
- Text/content lives in a padded inner wrapper (`HeroSection.Content`) using --space-section-padding-mobile / --space-section-padding-desktop.
- Do not place illustration inside padded content wrappers or inside PageSection.
- Text should have a max width of 500px and be right center aligned by default


---


# Header Content Structure

## Text Block
The text block is always left aligned.

Typical structure:
1. H1 headline
2. Body1 supporting paragraph
3. Optional secondary/supporting text
4. Optional CTA or link

Example:
- H1: "Welcome to Coaching!"
- Body1: Supporting explanation of the feature or service

## Illustration Block
- Desktop: illustration is the **background** of the hero shell (text overlays on the left with normal section padding).
- Mobile: illustration appears above the headline as a full-width block (same hero section).
- Illustration is decorative/supportive, not critical to comprehension.
- Use `HeroSection` props `desktopIllustrationSrc` and `mobileIllustrationSrc`; do not hand-roll `backgroundImage` on pages or add positioned `<img>` elements for desktop heroes.

---

# Desktop Layout

## Breakpoint
Desktop layout applies above approximately `899px`.


## Structure
- Desktop: text block on the left over a full-width hero shell; illustration as **background** on the right portion of the shell (not a flex/grid column with a sibling `<img>`)
- Mobile: single column — illustration block, then headline, then body copy


---


# Responsive / Mobile Layout

## Breakpoint
Responsive stacked layout typically begins at `899px` width and below.

## Structure
On smaller screens:
1. Illustration moves above the text content
2. H1 appears beneath the image
3. Body copy follows the H1

Order:
- Tabs
- Illustration
- H1
- Body1 copy
- Additional content

## Mobile Behavior
- Content stacks vertically.
- Text remains left aligned.
- Illustration should scale responsively to full width and should have a max height of 300px
- Avoid side-by-side layouts on mobile.


---


# Content Width & Spacing

## General Rules
- Content should sit inside a consistent page container.
- Avoid overly wide text lines.
- Header sections should breathe with generous vertical spacing.

## Recommended Pattern
- Tabs span the full content width (edge-to-edge within `--page-max-width`).
- Do not add gap between tabs and hero section.
- Hero text and page sections use `--space-section-padding-*` via `HeroSection.Content` and `PageSection`. Tab labels stay flush left; they are not inset with section padding.
- Illustration intentionally breaks out to hero edges.

---

# Accessibility & Readability

- H1 should always be present.
- Text should remain readable at all breakpoints.
- Maintain logical reading order in responsive layouts.
- Mobile layout should preserve hierarchy when stacked.

