# Learnbay-Style Landing Page

A single responsive landing page replicating the three screenshots in order: navigation + dark hero, light "Upskill" domains strip, then "Project Based Certification Track" with a dark program card.

## Sections (top → bottom)

1. **Sticky Header** — Learnbay logo, "Courses ▾" dropdown button, right-side nav (Career Services, Alumni Reviews, AI Co-lab outlined pill, Apply Now blue button).

2. **Dark Hero** — Deep navy background with subtle brain/chart line art. Left: "Advance Your Career With Real Industry Projects and **Get Hired**" (gradient blue on "Get Hired"), subcopy "Join India's #1 **Project-Based Upskilling** Platform for Working Professionals" (green highlight), two CTAs (blue "Get Expert Callback" with phone icon, outlined "Explore Courses"). Right: three circular portrait badges with role tags ("Data Scientist at KPMG", "Mechanical Engineer to Data analyst", "From non-tech to a Cloud Engineer") — using generated images.

3. **Domains Strip** — Light blue rounded panel, heading "Upskill and transform your career in latest **technologies** and **domains**" (blue words). Two horizontally-scrolling rows of white pill cards with colored circular icons: Data Science, Data Analytics, Business Analytics, Machine Learning, Artificial Intelligence, Cloud Computing, Devops, BFSI, Healthcare, Marketing, Gen AI, etc. Rows auto-scroll in opposite directions (CSS marquee), pause on hover.

4. **Project Based Certification Track** — Light gray background. Centered blue heading + subtitle. Three filter pills (Top-Rated Program, For Working Professionals, Domain Specialization) — clickable, filters the cards below. Dark gradient (near-black with red glow) program card showing: icon tile, program title, "Work on Real AI Startup Projects" pill, "Why this program" with green-check bullets, "Industry-Ready Certification with IBM | Microsoft", skill chips (GenAI, AgenticAI, LLMOps), highlighted "Domain Specialised Program..." bar; right column with Timeline + Projects info box, "Download Brochure" outlined button, coral "View Details" button. Include 2–3 program entries cycling by filter.

5. **Floating WhatsApp** bubble bottom-right.

## State / Interactions

- Filter pills in section 4 maintain selected state and filter the program list.
- Smooth scroll between sections via header anchors (Courses dropdown → domains, etc.).
- Marquee rows pause on hover.
- All sections fully responsive: hero stacks single-column on mobile, domains strip remains horizontally scrollable, program card collapses to single column.

## Technical

- Single route `src/routes/index.tsx` composing components from `src/components/landing/`: `Header`, `Hero`, `DomainsStrip`, `CertificationTrack`, `ProgramCard`, `WhatsAppFab`.
- Design tokens in `src/styles.css`: deep navy `--hero-bg`, brand blue `--brand`, gradient blue → cyan for "Get Hired", green accent, light blue panel, dark red program-card gradient, coral CTA. All via `@theme inline` semantic tokens — no hardcoded colors in components.
- Icons via `lucide-react` inside colored circular badges (tailwind bg tints).
- Hero portraits: 3 generated images saved under `src/assets/` (professional headshots), masked as circles with floating role-tag chips.
- Marquee implemented as a CSS keyframe animation on a duplicated track.
- Update `head()` meta: title "Learnbay — Project-Based Upskilling for Working Professionals", matching description and OG tags.
