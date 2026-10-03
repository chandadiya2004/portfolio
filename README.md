# 🌐 Diya Chanda — Official Portfolio & Research Hub

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.34.0-FF4154?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<br />

**A state-of-the-art personal portfolio, research hub, and interactive showcase for Diya Chanda — AI Researcher, Machine Learning Engineer, and Full-Stack Developer.**

[Explore Live Demo](https://www.diyachanda.tech) • [Research Publications](#-peer-reviewed-research-publications) • [Production Systems](#-featured-software--ai-systems) • [Contact](#-contact--connect)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🏛️ Design & Engineering Architecture](#️-design--engineering-architecture)
- [🔬 Peer-Reviewed Research Publications](#-peer-reviewed-research-publications)
- [🚀 Featured Software & AI Systems](#-featured-software--ai-systems)
- [🛠️ Technical Capabilities](#️-technical-capabilities)
- [📜 Verified Certifications](#-verified-certifications)
- [📂 Repository Architecture](#-repository-architecture)
- [⚡ Quick Start & Development](#-quick-start--development)
- [🔐 Environment Configuration](#-environment-configuration)
- [📈 SEO, Structured Data & Performance](#-seo-structured-data--performance)
- [📬 Contact & Connect](#-contact--connect)
- [📄 License](#-license)

---

## ✨ Overview

This repository houses the personal portfolio and academic research index of **Diya Chanda** (B.Tech in Computer Science & Engineering with AI/ML Specialization at *The Neotia University*, CGPA: **9.54 / 10.00 — Top Decile**).

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, the platform bridges high-impact academic machine learning research (IEEE & Springer publications) with production-grade full-stack software engineering.

### Core Highlights:
- 🏛️ **Modern Warm Editorial Aesthetic**: Curated warm dark-mode palette (`#0d0f14`), bespoke terracotta (`#e07a5f`), sage green (`#81b29a`), amber gold (`#f2cc8f`), and clean serif typography.
- 🎯 **Bespoke Framing Reticle Cursor**: Precision SVG vector reticle (`⌜ ⌝ ⌞ ⌟` + terracotta dot) with smooth spring physics, magnetic element targeting, and text-caret morphing.
- 🧭 **Zero-Shift Floating Dock Navigation**: Frosted glass island dock with dynamic scroll-spy tracking, section highlight pill, and mobile-responsive drawer.
- 📚 **Interactive Research Portal**: Modal abstract viewer for 4 peer-reviewed IEEE & Springer publications with direct DOI links.
- 🔍 **Accessible Credential Lightbox**: Category-filtered certification gallery with high-resolution scan inspection.
- 📨 **Secure Next.js Server Actions**: EmailJS REST API dispatch executed on the server side with hidden API keys and robust payload sanitization.
- ⚡ **SEO & Schema.org JSON-LD**: Comprehensive structured data (`Person`, `ProfilePage`, `ScholarlyArticle`, `SoftwareApplication`), OpenGraph cards, and dynamic XML sitemaps.

---

## 🏛️ Design & Engineering Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                          Next.js 16 App Router                         │
│                                                                        │
│   ┌──────────────────┐  ┌──────────────────┐  ┌────────────────────┐   │
│   │   layout.tsx     │  │    page.tsx      │  │  Contact Action    │   │
│   │  JSON-LD Schemas │  │ Static Prerender │  │  (Server Action)   │   │
│   │  Navbar & Footer │  │  Client Sections │  │  EmailJS Secret API│   │
│   └────────┬─────────┘  └────────┬─────────┘  └─────────┬──────────┘   │
│            │                     │                      │              │
│            ▼                     ▼                      ▼              │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                       UI Component Matrix                      │   │
│   │  • Hero (TextScramble & Metrics)   • Research (Abstract Modal) │   │
│   │  • About (Sticky Journey & Pillars)• Certificates (Lightbox)   │   │
│   │  • Skills (Category Filter Matrix) • Contact (Feedback Toast)  │   │
│   │  • Projects (Collapsible Specs)    • Custom Precision Cursor   │   │
│   └────────────────────────────────────────────────────────────────┘   │
│                                  │                                     │
│                                  ▼                                     │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                    Design & Token Foundation                   │   │
│   │  • Tailwind CSS Design System      • Sharp Optimized Images    │   │
│   │  • Framer Motion Orchestrations    • Lucide Vector Iconography │   │
│   └────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🔬 Peer-Reviewed Research Publications

| # | Title | Venue / Indexer | DOI / Link | Core Focus |
|---|---|---|---|---|
| 1 | **FruitQ-GradeX: An Automated Quality Evaluation System for Fruits** | IEEE ICRITO 2025 | [`10.1109/ICRITO66076.2025.11241706`](https://doi.org/10.1109/ICRITO66076.2025.11241706) | Multi-spectral computer vision pipeline for automated fruit sorting and defect grading with 98.4% accuracy. |
| 2 | **Automated Quality Assessment of Fruits and Vegetables: A Hyperspectral Imaging Approach** | Springer LNNS Vol. 1915 / ICDMIS 2025 | [`10.1007/978-3-032-21901-5_35`](https://doi.org/10.1007/978-3-032-21901-5_35) | Non-destructive hyperspectral feature extraction for internal post-harvest decay classification. |
| 3 | **CropSense: Machine Learning-Based Crop Yield and Disease Prediction** | IEEE ICRITO 2025 | [`10.1109/ICRITO66076.2025.11241535`](https://doi.org/10.1109/ICRITO66076.2025.11241535) | Ensemble learning with IoT sensor fusion for real-time agronomic disease forecasting and yield optimization. |
| 4 | **Solanaceous Crops Quality and Health Assessment Using ML** | IEEE COMPUTINGCON 2025 | [`10.1109/COMPUTINGCON64838.2025.11376762`](https://doi.org/10.1109/COMPUTINGCON64838.2025.11376762) | Edge-deployable deep learning for foliar blight and viral infection detection in solanaceous crops. |

---

## 🚀 Featured Software & AI Systems

### 1. **CampusSphere — Smart Campus Social Hub**
- **Architecture**: Next.js (App Router), Node.js, Express, MongoDB, Socket.io, Tailwind CSS.
- **Features**: Real-time peer collaboration, event management, verified academic credentials, sub-millisecond WebSocket messaging, and JWT authentication.
- **Links**: [Live Platform](https://ssh.arpanpramanik.dev/) • [GitHub Repo](https://github.com/chandadiya2004/CampusSphere)

### 2. **JalDrishti — IoT & ML Water Contamination Detection**
- **Architecture**: Python, Scikit-learn, Random Forest, Streamlit, Pandas, IoT Hardware Sensors.
- **Features**: Real-time turbidity, pH, dissolved oxygen, and TDS stream classification, delivering 94.2% contamination prediction accuracy with visual telemetry dashboards.
- **Links**: [GitHub Repo](https://github.com/chandadiya2004/JalDrishti-AI)

### 3. **RecipeAI — Deep Learning Culinary Assistant**
- **Architecture**: React 18, TypeScript, FastAPI, Python, Groq Llama-3.3-70B, Clerk Auth, Supabase Postgres, Tailwind CSS.
- **Features**: Context-aware culinary AI assistant with Pantry Chef zero-waste cooking, on-demand recipe generation, and Supabase activity history.
- **Links**: [Live Demo](https://recipe-ai-diya.vercel.app/) • [GitHub Repo](https://github.com/chandadiya2004/RecipeAI)

### 4. **FruitQ-GradeX Prototype — Automated Grading Engine**
- **Architecture**: TensorFlow, Keras, Multi-Headed CNN, Grad-CAM, OpenCV, Streamlit, Python.
- **Features**: Dual-head prediction with 98.21% quality assessment accuracy, Grad-CAM decision heatmaps, and real-time webcam inference.
- **Links**: [Live Demo](https://fruitq-quality-classifier.streamlit.app/) • [GitHub Repo](https://github.com/chandadiya2004/FruitQ-GradeX)

---

## 🛠️ Technical Capabilities

```
┌──────────────────────────────┬─────────────────────────────────────────────────┐
│ Domain                       │ Technologies & Frameworks                       │
├──────────────────────────────┼─────────────────────────────────────────────────┤
│ Machine Learning & AI        │ PyTorch, TensorFlow, Scikit-Learn, OpenCV,      │
│                              │ Transfer Learning, CNNs, Random Forest, Pandas  │
├──────────────────────────────┼─────────────────────────────────────────────────┤
│ Full-Stack Web Development   │ Next.js 16, React 19, TypeScript, Node.js,     │
│                              │ Express, Tailwind CSS, HTML5, Modern ES6+ CSS   │
├──────────────────────────────┼─────────────────────────────────────────────────┤
│ Database & Real-Time Comms   │ MongoDB, PostgreSQL, SQLite, Socket.io, REST    │
├──────────────────────────────┼─────────────────────────────────────────────────┤
│ MLOps & Cloud Infrastructure │ Docker, Git/GitHub, Streamlit, Render, Vercel,  │
│                              │ Google Cloud Platform, Linux CLI                │
├──────────────────────────────┼─────────────────────────────────────────────────┤
│ Core Computer Science        │ Data Structures & Algorithms, System Design,    │
│                              │ Object-Oriented Programming, Database Design    │
└──────────────────────────────┴─────────────────────────────────────────────────┘
```

---

## 📜 Verified Certifications

- **Stanford University & DeepLearning.AI**: Machine Learning Specialization (Supervised, Advanced Learning Algorithms, Unsupervised Learning)
- **DeepLearning.AI**: Deep Learning Specialization (Neural Networks, Hyperparameter Tuning, Structuring ML Projects)
- **IBM / Coursera**: Python for Data Science, AI & Development
- **IBM / Coursera**: Developing AI Applications with Python and Flask
- **The Neotia University**: Academic Excellence Award & Merit Scholar (CGPA: 9.54)

---

## 📂 Repository Architecture

```bash
portfolio/
├── public/                     # Static assets, scans & optimized images
│   ├── certs/                  # Verified certificate scans
│   ├── projects/               # System demo screenshots & previews
│   ├── publications/           # Research publication diagrams & figures
│   ├── apple-icon.png          # PWA apple touch icon
│   ├── icon.svg                # Dynamic SVG favicon
│   ├── manifest.json           # Progressive Web App manifest
│   ├── og-image.png            # High-resolution social graph banner (1200x630)
│   └── resume.pdf              # Diya Chanda's official verified resume
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── actions/
│   │   │   └── contact.ts      # Server Action for EmailJS REST API dispatch
│   │   ├── layout.tsx          # Root layout with Schema.org JSON-LD & Fonts
│   │   ├── page.tsx            # Main single-page application entry point
│   │   ├── globals.css         # Tailwind directives & Warm Editorial tokens
│   │   ├── robots.ts           # Dynamic robots.txt generation
│   │   └── sitemap.ts          # Dynamic sitemap.xml generator
│   ├── components/
│   │   ├── common/             # Reusable UI primitives
│   │   │   ├── CustomCursor.tsx    # Precision SVG reticle cursor
│   │   │   ├── Footer.tsx          # Semantic footer & quick navigation
│   │   │   ├── Navbar.tsx          # Frosted floating dock with scroll-spy
│   │   │   ├── SectionHeading.tsx  # Editorial section headers
│   │   │   └── TextScramble.tsx    # Cybernetic text decoding animation
│   │   └── sections/           # Modular page sections
│   │       ├── Hero.tsx            # Headline, dynamic metrics, CTA buttons
│   │       ├── About.tsx           # Sticky bio, academic journey, pillars
│   │       ├── Skills.tsx          # Interactive capability matrix
│   │       ├── Projects.tsx        # Production systems with expandable specs
│   │       ├── Publications.tsx    # IEEE & Springer research with modal
│   │       ├── Certificates.tsx    # Categorized credentials & lightbox
│   │       └── Contact.tsx         # Interactive contact form with server actions
│   ├── data/                   # Structured content JSON files
│   │   └── sections/
│   │       ├── about.json          # Academic bio, trajectory, and core pillars
│   │       ├── certificates.json   # Verified certification metadata & scan paths
│   │       ├── hero.json           # Hero copy, social URLs, and quick stats
│   │       ├── projects.json       # Detailed system architecture & link data
│   │       ├── publications.json   # Research papers, DOIs, abstracts, and badges
│   │       └── skills.json         # Categorized skills matrix & proficiency levels
│   └── types/                  # TypeScript interfaces & type definitions
│       └── index.ts
├── .env.example                # Sample environment variables template
├── next.config.ts              # Next.js configuration (Turbopack, Image optimization)
├── tailwind.config.ts          # Tailwind CSS theme extensions & custom tokens
├── tsconfig.json               # Strict TypeScript compiler options
└── package.json                # Project dependencies & npm scripts
```

---

## ⚡ Quick Start & Development

### 1. Prerequisites
- **Node.js**: `v18.18.0` or later (Recommended: `v20.x` / `v22.x` LTS)
- **npm**: `v9.x` or later (or `pnpm` / `yarn`)

### 2. Clone Repository
```bash
git clone https://github.com/chandadiya2004/portfolio_diya.git
cd portfolio_diya/portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

### 6. Build for Production
To generate a fully static, optimized production bundle:
```bash
npm run build
npm run start
```

### 7. Run Type Checking & Linting
```bash
npm run lint
npx tsc --noEmit
```

---

## 🔐 Environment Configuration

Create a `.env.local` file in the `portfolio/` directory with the following variables:

```env
# Public Site URL for SEO, OpenGraph & Sitemaps
SITE_URL=https://www.diyachanda.tech

# Google Search Console Verification Token
GOOGLE_VERIFICATION=DgWUYbYjs7ksUTmBAM02lYUhcDVcuZre7V3cTYHIlj4

# EmailJS Configuration for Next.js Server Actions
# Kept securely on the server side to protect credentials
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
EMAILJS_PRIVATE_KEY=your_emailjs_private_key
```

> **Note**: In local development without EmailJS credentials, the contact form gracefully logs submissions to the console and simulates a successful submission with real-time UI feedback.

---

## 📈 SEO, Structured Data & Performance

- **Core Web Vitals**: Built for near-perfect Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.
- **Schema.org Rich Snippets**:
  - `schema.org/Person`: Academic and professional identity, social links, affiliations.
  - `schema.org/ProfilePage`: Main WebPage metadata.
  - `schema.org/ScholarlyArticle`: DOI-indexed research publications.
  - `schema.org/SoftwareApplication`: Production systems and web applications.
- **Image Optimization**: Built-in Next.js image pipeline backed by `sharp` for responsive WebP/AVIF formatting and zero layout shift.
- **Mobile Responsive**: Extensively tested and optimized for all viewports, including iPhone 16 Pro Max, Samsung Galaxy, tablets, and 4K displays.

---

## 📬 Contact & Connect

- **Name**: Diya Chanda
- **Role**: AI Researcher & Machine Learning Engineer
- **Email**: [chandadiya2004@gmail.com](mailto:chandadiya2004@gmail.com)
- **LinkedIn**: [linkedin.com/in/diya-chanda2004](https://www.linkedin.com/in/diya-chanda2004/)
- **GitHub**: [github.com/chandadiya2004](https://github.com/chandadiya2004)
- **ResearchGate**: [researchgate.net/profile/Diya-Chanda](https://www.researchgate.net/profile/Diya-Chanda)
- **Portfolio Website**: [diyachanda.tech](https://www.diyachanda.tech)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

```
Copyright (c) 2025-2026 Diya Chanda
```