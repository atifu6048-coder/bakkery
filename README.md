# 🍰 Sweet Crust Bakery

> **"Fresh Cakes, Baked with Love"**  
> Artisanal homemade cakes, cupcakes, brownies, and cookies baked to order in Mardan, Pakistan.
>
> 🌐 **Live Website**: [https://racing-apogee-ig58pvx.vercel.app](https://racing-apogee-ig58pvx.vercel.app)  
> 📦 **GitHub Repository**: [https://github.com/atifu6048-coder/bakkery](https://github.com/atifu6048-coder/bakkery)

---

## 📖 Overview

Sweet Crust Bakery is a modern, responsive, mobile-first static website built for **Ayesha Khan**, owner of Sweet Crust Bakery in Mardan. It showcases oven-fresh small-batch treats with transparent pricing, tells the bakery's artisan story, displays a high-resolution photo gallery, and enables instant ordering via WhatsApp and direct telephone contact.

This project was built strictly adhering to the **Sweet Crust Bakery Product Requirements Document (PRD)**.

---

## 🎨 Design System & PRD Brand Colors

In accordance with PRD Page 8, the website strictly adheres to the curated palette and single typography system:

| Color Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Cream** | `#FFF8F0` | Primary page background |
| **Bakery Brown** | `#6B4226` | Headings, primary buttons, brand accents |
| **Warm Peach** | `#E07856` | Highlights, badges, icons, price accents |
| **Soft Pink** | `#FBE3D9` | Card surfaces, testimonials, decorative backdrops |
| **Dark Cocoa** | `#2E211A` | High-contrast readable body text |

- **Typography**: Google Fonts **Poppins** (`400 Regular`, `500 Medium`, `600 SemiBold`, `700 Bold`).
- **Icons**: Material Symbols Outlined + Clean SVG bakery marks.

---

## 🌐 Five Client-Side Routes

All routes support direct navigation and browser refresh with SPA rewrite configuration:

1. **`/` (Home)**
   - Hero banner: *"Fresh Cakes, Baked with Love"* with *"See Our Menu"* and *"Order on WhatsApp"* actions.
   - Welcome section: *"Welcome to Sweet Crust Bakery"* with daily small-batch promises and feature cards.
   - Best Sellers: 3 customer favorites with direct WhatsApp order links.
   - Why Choose Us: 4 key trust pillars (*Baked Fresh Daily*, *Best Quality Ingredients*, *Made to Order*, *Home Delivery in Mardan*).
   - What Customers Say: 5-star testimonials from Fatima and Ahmed (Mardan).
   - Big Order Banner: *"Ready to Order Something Sweet?"* with WhatsApp chat button.

2. **`/menu` (Menu)**
   - Header banner with direct WhatsApp and telephone quick-dial (`0300 1234567`).
   - **Category 1: Cakes**
     - Chocolate Fudge Cake — *Rich, dark and super soft.* — **Rs 2,800**
     - Strawberry Cream Cake — *Fresh strawberries with soft cream.* — **Rs 3,200**
     - Vanilla Classic Cake — *Simple, soft and loved by everyone.* — **Rs 2,200**
     - Custom Birthday Cake — *Your design, your colours, your words.* — **From Rs 3,500**
   - **Category 2: Cupcakes, brownies and cookies**
     - Party Cupcakes (Box of 6) — *Colourful and fun for parties.* — **Rs 1,500**
     - Chocolate Cupcakes (Box of 6) — *Double chocolate happiness.* — **Rs 1,600**
     - Fudge Brownies (Box of 4) — *Warm, gooey and full of chocolate.* — **Rs 900**
     - Butter Cookies (Box of 12) — *Crunchy, buttery and perfect with tea.* — **Rs 800**
   - Freshness guarantee & advance notice banner with WhatsApp pre-order link.

3. **`/about` (About)**
   - Exact client story: *"I started baking in 2020, in my small home kitchen, for my family and neighbours..."*
   - Three core value cards:
     - *"Fresh Always - I never sell old stock."*
     - *"Honest Prices - Good taste should not be costly."*
     - *"Made with Love - Every order is personal for me."*
   - Visual kitchen mosaic and founder badge (Ayesha Khan, Est. 2020).
   - WhatsApp chat action with the baker.

4. **`/gallery` (Gallery)**
   - Heading: *"Our Sweet Gallery"*
   - Subtitle: *"Real photos of cakes and cupcakes from my kitchen."*
   - 8 bright, high-resolution bakery food photos in a responsive grid.
   - Prominent bottom brown button: *"Order Your Cake on WhatsApp"*.

5. **`/contact` (Contact)**
   - Heading: *"Contact Us"*
   - Subtitle: *"We reply fast - usually in less than one hour."*
   - Exact details:
     - **Address**: Main Bazaar Road, Near City Chowk, Mardan, Pakistan
     - **Phone / WhatsApp**: `0300 1234567` (Practice number with `tel:` link)
     - **Email**: `hello@sweetcrustbakery.pk` (Practice email with `mailto:` link)
     - **Hours**: Monday to Saturday: 9:00 AM - 9:00 PM. Sunday: Closed.
   - Interactive demo contact form (Your Name, Your Phone, Your Message, Send Message button).
   - Form submission feedback banner and note: *"For a fast reply, please message us on WhatsApp."*
   - Mardan pickup & reference photo upload note.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode, `verbatimModuleSyntax` compliant)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: Vanilla CSS with comprehensive Design Tokens & CSS Custom Properties
- **Deployment Platform**: [Vercel](https://vercel.com/) (configured via `vercel.json` SPA rewrites)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended; verified with Node v24.21.0)
- npm (v9+; verified with npm v11.19.0)

### 1. Clone or Open Project

```bash
git clone https://github.com/your-username/sweet-crust-bakery.git
cd sweet-crust-bakery
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 4. Build for Production

```bash
npm run build
```

This compiles TypeScript (`tsc -b`) and generates the static production bundle in `dist/`.

### 5. Preview Production Build Locally

```bash
npm run preview
```

Visit `http://localhost:4173` to test the exact production bundle.

---

## 🚢 GitHub & Vercel Deployment Instructions

### A. Push to GitHub

1. Ensure Git is initialized and files are committed:
   ```bash
   git add .
   git commit -m "feat: complete Sweet Crust Bakery 5-page static website"
   ```

2. If using GitHub CLI (`gh`):
   ```bash
   gh auth login
   gh repo create sweet-crust-bakery --public --source=. --remote=origin --push
   ```

3. Or push to an existing GitHub repository manually:
   ```bash
   git remote add origin https://github.com/<your-username>/sweet-crust-bakery.git
   git branch -M main
   git push -u origin main
   ```

### B. Deploy on Vercel

#### Method 1: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** -> **"Import Git Repository"**.
3. Select `sweet-crust-bakery`.
4. Preset: **Vite** (Root Directory: `./`).
5. Click **"Deploy"**.
6. The site will be live at `https://sweet-crust-bakery.vercel.app` (or your assigned Vercel URL).

#### Method 2: Via Vercel CLI
```bash
npx vercel
```
Follow the terminal prompts and select the default build settings.

> **Note on Client-Side Routing**: The included `vercel.json` ensures that deep links (e.g. `/menu`, `/about`, `/gallery`, `/contact`) resolve properly without 404 errors on browser refresh:
> ```json
> {
>   "rewrites": [{ "source": "/(.*)", "destination": "/" }]
> }
> ```

---

## ✅ PRD Verification Checklist

- [x] **All 5 pages are ready**: Home, Menu, About, Gallery, Contact.
- [x] **Header & Footer consistent**: Identical shared header and footer on every page.
- [x] **Navigation links**: Every link leads to the exact intended route without broken paths.
- [x] **Business name**: Correct everywhere (*Sweet Crust Bakery*).
- [x] **Copy, Items & Prices match PRD**:
  - Chocolate Fudge Cake — Rs 2,800
  - Strawberry Cream Cake — Rs 3,200
  - Vanilla Classic Cake — Rs 2,200
  - Custom Birthday Cake — From Rs 3,500
  - Party Cupcakes (Box of 6) — Rs 1,500
  - Chocolate Cupcakes (Box of 6) — Rs 1,600
  - Fudge Brownies (Box of 4) — Rs 900
  - Butter Cookies (Box of 12) — Rs 800
- [x] **Exact 5 colors**: `#FFF8F0`, `#6B4226`, `#E07856`, `#FBE3D9`, `#2E211A`.
- [x] **Single font**: Poppins loaded and applied across all components and headings.
- [x] **Bright food photography**: Real, appetizing, high-resolution bakery images with fallbacks.
- [x] **WhatsApp & Phone links**:
  - `tel:03001234567`
  - `https://wa.me/923001234567` with product-specific prefilled messages.
- [x] **Mobile responsive**: Mobile-first design, hamburger navigation drawer, no horizontal overflow.
- [x] **Desktop responsive**: Clean grid layouts, comfortable whitespace, balanced typography.
- [x] **No disallowed features**: No login, no shopping cart, no payment gateway, no database, no admin panel.
- [x] **Static build**: Zero TypeScript errors, static production build tested.

---

## 📄 License & Attribution

Practice Client Project prepared by **Umair Khan - Digital Lasuna**.  
Copyright 2026 Sweet Crust Bakery. Made with love in Mardan.
