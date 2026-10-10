# Ashborne Financial Legacy — Visual & Form Refinements

## Changes

### 1. Hero (`src/components/HeroSection.tsx`)
- Remove the "Trusted Financial Guidance" pill/badge above the headline.

### 2. Strategy tiles (`src/components/ApproachSection.tsx`)
- Convert all six tiles (Debt Snowball, Debt Avalanche, Debt Tsunami, Cash Flow Index, Velocity Banking, Infinite Banking Concept) to text-only cards.
- Remove the icon square and all icon imports; each card shows only its serif title and description. Keep the 3-column grid, hover border/shadow, and scroll animations.

### 3. How We Work (`src/components/HowWeWorkSection.tsx`)
- Remove the "Personalized Sessions" card entirely.
- With the right column gone, switch the section to a single centered column so the copy reads cleanly on its own.

### 4. Our Story (`src/components/PhoenixSection.tsx`)
- Remove the small flame icon circle under the "Why We Built Ashborne" heading.
- Keep the rest of the section (heading, blockquote, closing line) unchanged.

### 5. Contact form (`src/components/ContactSection.tsx`)
- Keep Full Name, Email Address, Phone Number exactly as they are.
- Remove the "Short-Term Financial Goals" and "Long-Term Generational Wealth Goals" textareas (and their form state fields).
- Rename "Current Cash Flow Overview (Optional)" to "Financial Outcome Goals (Optional)".
- Update that field's placeholder to: "Brief summary of your current debt and debt-free timeline…"
- Update the message built for the backend email so it only includes the Financial Outcome Goals text (remove references to the deleted fields). No backend/edge-function change needed — it just receives the composed message text.

## Verification
- Check the build log after edits.
- Confirm in the preview: hero has no badge, tiles are text-only, How We Work shows copy only, no flame icon in Our Story, and the form shows Name / Email / Phone plus the renamed optional field.
