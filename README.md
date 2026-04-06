# 🍵 ChaiAdda — The Soul of India, Brewed for the World.

A premium, immersive web experience built for an authentic Indian Chai café brand. Designed with meticulous attention to detail, this project combines traditional heritage with a modern luxury aesthetic — dark themes, cinematic animations, and silky smooth interactions.

---

## ✨ Features

### Pages
| Route | Description |
|---|---|
| `/` | Cinematic homepage with hero, philosophy, best sellers, culture & features sections |
| `/menu` | Interactive menu with category filters and search |
| `/story` | Heritage timeline and brand story |
| `/franchise` | Franchise opportunity hub with investment table |
| `/contact` | Contact form, store locator, catering, FAQ, and social grid |

### Highlights
- 🎭 **Cinematic Hero** — Full-screen immersive visuals with priority-loaded LCP image
- 🌑 **Dark/Light Mode** — Seamless theme switching via `next-themes` with system preference support
- 🍵 **Interactive Menu** — Live category filtering + search with smooth transitions
- 📜 **Brand Storytelling** — Heritage timeline with scroll-triggered animations
- 💼 **Franchise Hub** — Investment breakdown, support ecosystem, and application pathway
- 📱 **Fully Responsive** — Mobile-first layout optimized for all screen sizes
- ⚡ **Performance Optimized** — Lighthouse-ready with 90+ targets on desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Language** | TypeScript 5 |
| **UI Layer** | React 19 |
| **Styling** | Vanilla CSS Modules — no Tailwind, full design control |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Theming** | [next-themes](https://www.npmjs.com/package/next-themes) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Fonts** | `next/font/google` — Playfair Display (headings) + Manrope (body) |
| **Linting** | ESLint 9 + eslint-config-next |

---

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, theme, metadata)
│   ├── page.tsx                # Home page
│   ├── menu/page.tsx
│   ├── story/page.tsx
│   ├── franchise/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── home/                   # Hero, Philosophy, BestSellers, AddaCulture, FeaturesSection
│   ├── menu/                   # MenuBanner, MenuGrid, MenuPhilosophy, MenuPairings, ProductCard
│   ├── story/                  # StoryHero, StoryValues, ProcessTimeline, StoryModern
│   ├── franchise/              # FranchiseHero, FranchiseBenefits, SupportEcosystem, InvestmentTable, FranchisePathway
│   ├── contact/                # ContactForm, ContactCatering, StoreLocator, ContactFAQ, ContactSocial
│   ├── layout/                 # Navbar, Footer
│   └── ui/                     # Button, SectionWrapper, ThemeToggle
│
├── styles/
│   └── globals.css             # Design tokens, resets, global utilities
│
public/
└── images/                     # All brand photography (AI-generated)
```

---

## ⚡ Performance Optimizations

- **Dynamic Imports** — All below-fold components are code-split via `next/dynamic` on every page, reducing initial JS bundle
- **Image Formats** — AVIF + WebP via `next.config.ts` `formats` array for ~30–50% smaller payloads
- **`content-visibility: auto`** — Applied to off-screen sections (BestSellers, AddaCulture, FeaturesSection) to defer browser rendering
- **Font Loading** — `display: 'swap'` with `next/font/google` for zero layout shift from fonts
- **Caching Headers** — Immutable 1-year cache on `/_next/static/*`, 1-day cache on `/images/*`
- **`priority`** on hero images — Ensures LCP image is preloaded
- **`loading="lazy"`** on all below-fold images — Defers image network requests

---

## 🖼️ Brand Assets

All images are custom AI-generated to resonate with Indian tea culture:

| File | Usage |
|---|---|
| `hero_bg.png` | Full-screen homepage hero background |
| `philosophy_prep.png` | Traditional chai brewing — Philosophy section |
| `adda_culture.png` | Community & culture — AddaCulture section |
| `heritage_tea_garden.png` | Parallax background — Features section |
| `masala_chai.png` | Classic chai — Menu + BestSellers |
| `adrak_chai.png` | Ginger chai — Menu |
| `saffron_gold.png` | Premium chai — Menu |
| `iced_masala_latte.png` | Iced chai — Menu |
| `rose_cardamom.png` | Signature blend — Menu |
| `bun_maska.png` | Snack item — Menu + BestSellers |
| `menu-hero.png` | Menu page hero illustration |
| `franchise_premium.png` | Franchise hero background |
| `contact_catering.png` | Catering section — Contact page |
| `modern_chai.png` | Social grid + StoryModern section |
| `logo.png` | Brand logo — Navbar + Footer |

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/shivammane2007/ChaiAdda.git
cd ChaiAdda
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. View in Browser
Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

---

## 📝 License

This project is open-source and intended for portfolio and demonstration purposes.

---

*Crafted with ❤️ for the chai lovers of the world.*

