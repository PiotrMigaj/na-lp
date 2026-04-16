# Claude Code Guide — Niebieskie Aparaty (niebieskie-aparaty.pl)

## SEO & Content

**Polish diacritics are critical.** Google treats `Wrocław` vs `Wroclaw`, `ślubna` vs `slubna` as different keywords for Polish queries. This applies to:
- Page body text, headings, image alt texts
- Meta descriptions, OG tags, schema.org text
- FAQPage schema **must byte-for-byte match visible FAQ text** or Google penalizes
- URL slugs stay ASCII (e.g., `/sesja-slubna-wroclaw`); display text gets diacritics

**Meta tag practices:**
- `titleTemplate` must be a function: `(title) => title ? title : 'fallback'` — static strings append to all pages and create 90+ char titles (truncated in SERPs)
- Remove `keywords` meta from all pages — ignored by Google since 2009, signals amateur SEO
- Title length ≤60 chars, description ≤160 chars (SERPs truncate)
- FAQPage schema: match visible Q&A text exactly (both questions and answers)

**BlogPosting schema** should include:
- `author.url` (link to `/o-mnie`) and `author.image` for E-E-A-T
- `inLanguage: "pl-PL"` and `wordCount` (estimated)

**LocalBusiness schema** (in nuxt.config.ts):
- Include `priceRange`, `serviceType` (array of all service types), `areaServed` (city + nearby towns), `knowsLanguage`, `paymentAccepted`
- Service pricing: if variable, use `priceSpecification` with `"description": "Wycena indywidualna"`

## Architecture & File Structure

**Service pages** (`sesja-*.vue`) follow a consistent pattern:
1. Breadcrumbs (auto-generated from URL)
2. Hero section with H1 + brief description
3. About / intro section with 2-column grid + image
4. What's included / Services grid (3-column cards with icons)
5. Process or Why Choose Us (numbered steps or benefits)
6. FAQ section (FAQPage JSON-LD required)
7. Related Services section (links to other service pages + blog)
8. CTA (call-to-action button to `/kontakt`)

**New service pages must be registered in:**
- `nuxt.config.ts` `routeRules` (add `'/slug': { prerender: true }`)
- `components/Breadcrumbs.vue` `pageNames` map (e.g., `'chrzciny-wroclaw': 'Chrzciny Wrocław'`)
- `components/TheHeader.vue` dropdown nav
- `components/TheFooter.vue` nav
- Homepage `/pages/index.vue` services section or grid

**Internal linking strategy:** Service pages should link to related services and blog articles at the bottom. Blog articles should link to relevant service pages in a "Powiązane usługi" section.

## Image Handling

- Use Cloudinary CDN (`https://res.cloudinary.com/drbgrfsbo/image/upload/...`)
- Specify `.webp` format and include `width`/`height` props
- Alt texts must include Polish keywords and diacritics (e.g., `"Sesja ślubna Wrocław - naturalne zdjęcia Anna Migaj"`)

## Testing & Verification

After bulk edits:
```bash
grep -rn "Wroclaw\b\|czesto\b\|slubn[ae]\b" pages/ --include="*.vue" | grep -v "\/\/"
```
Should return zero matches (except URL slugs). Verify no non-diacritical Polish remains.

Check schema validity:
- Paste HTML into https://validator.schema.org/
- FAQPage, BlogPosting, Service, LocalBusiness, BreadcrumbList should validate with zero errors
- Text in schema must match page text exactly

## Key Files

| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Global SEO config, LocalBusiness schema, routeRules |
| `pages/index.vue` | Homepage — primary keyword target "fotograf wrocław" |
| `pages/o-mnie.vue` | Bio page — Person + E-E-A-T signals |
| `components/TheHeader.vue` | Nav links — add new service pages here |
| `components/TheFooter.vue` | Footer nav — add new service pages here |
| `components/Breadcrumbs.vue` | Auto-generated breadcrumbs — add new routes to `pageNames` map |
| `pages/sesja-*.vue` | Service pages — follow the pattern above |
| `pages/blog/*.vue` | Blog articles — enhance schema with author fields |

## Known Patterns

- Fonts: Cormorant (headings), Montserrat/Bodoni Moda (body)
- Tailwind CSS for styling
- `@nuxtjs/sitemap` auto-generates from routes
- `NuxtImg` component handles image optimization
- Hero sections use `bg-accent` or `bg-secondary` background colors
- Service description text uses `font-light` for elegance
