# Website Specification & Design Guide: PicoTech

This document provides a detailed blueprint for building a high-end medical aesthetic website for **PicoTech**, inspired by the industry-leading standards of Candela Medical.

## 1. Brand Identity & Design System

To maintain a premium, trustworthy, and high-tech feel, the design should follow a "Dark Mode Professional" aesthetic.

### Color Palette
- **Primary Accent (Vibrant Magenta):** `#A51890` (Used for CTAs, active states, and highlights)
- **Secondary Accent (Deep Purple):** `#6E2B62` (Used for gradients and background depth)
- **Neutral Dark (Black/Grey):** `#1B1C21` (Main background for navigation and core sections)
- **Content Background (Snow White):** `#F9F9F9` (For informational and text-heavy sections)
- **Typography (Heading White):** `#FFFFFF` (High contrast text on dark backgrounds)

### Typography
- **Headings:** Sans-serif (e.g., *Inter* or *Outfit*) - Bold, all-caps for a high-tech look.
- **Body Text:** Clean Sans-serif (e.g., *Roboto* or *Open Sans*) - High readability for clinical information.

---

## 2. Information Architecture (Sitemap)

The site should be structured to serve two distinct audiences: **Providers** (Primary) and **Patients** (Secondary).

### Main Navigation
1.  **Products:** 
    - Browse by Technology (Laser, IPL, RF)
    - Browse by Treatment (Hair Removal, Tattoo Removal, Skin Tightening)
2.  **Resources:** 
    - Clinical Library (White papers, studies)
    - Marketing Center (Assets for clinics)
    - On-demand Webinars
3.  **Support:**
    - Training & Education
    - Technical Support
    - Provider Portal (Login)
4.  **Company:** 
    - About PicoTech
    - Clinical Advisory Board
    - Careers & News

---

## 3. Core Page Templates & Component Patterns

### Homepage (Conversion Machine)
- **Interactive Hero:** Moving gradient or background video showing precision technology in action.
- **Solution Grid:** Large, high-quality images of devices with hover-state descriptions.
- **Trust Bar:** Logos of key medical institutions and 'As Seen In' publications.
- **Quick Links:** "Find a Provider" vs. "Get a Quote".

### Product Deep-Dive Page
- **Hero Image:** High-resolution product shot with clean labels.
- **Value Props:** 3-4 iconography-based benefits (e.g., "Minimal Downtime", "Superior Precision").
- **Before & After Gallery:** Scrollable carousel of clinical results with slider comparison.
- **Technical Specs:** A clean, collapsible table for clinical parameters.

---

## 4. Visual Mockup: PicoTech Homepage
![PicoTech Homepage Mockup Appreciation](/Users/jalaludheenok/.gemini/antigravity/brain/05915f1d-55d4-46ca-b7a5-f13415cca706/picotech_homepage_mockup_1774330524848.png)
*A visual representation of the 'Medical Aesthetic' theme for PicoTech, featuring dark mode, precision lighting, and professional UI.*

---

## 5. Advanced UI & Interaction Patterns

1.  **Clinical Results Slider:** An interactive "Before & After" component using a vertical handle to show the efficacy of PicoTech treatments across different skin types.
2.  **Precision Engineering Carousel:** An auto-play carousel with zooming hotspots that highlight specific technical features of the laser (e.g., "7-Jointed Arm", "Adjustable Spot Size").
3.  **Real-time Event Countdown:** A dynamic countdown timer for upcoming training workshops to create urgency.

## 6. Technical Excellence & Optimization

| Area | Strategy | Key Performance Indicator (KPI) |
| :--- | :--- | :--- |
| **Performance** | Use **Next.js Image Optimization** and **Lighthouse** monitoring. | < 1.5s First Contentful Paint (FCP). |
| **SEO** | Meta tags for each clinical treatment; structured data for products. | Featured snippets for "How it works" queries. |
| **Accessibility** | ARIA labels for complex sliders; high-contrast modes for text. | WCAG 2.1 AA Compliance. |
| **Security** | Secure cookies for Provider Portal; OAuth 2.0 for shop access. | Zero data breaches; SOC2 readiness. |

## 7. Development Milestones

1.  **Phase 1 (MVP):** Homepage with mockup design, Core Product Pages, Lead Forms.
2.  **Phase 2 (Educational Hub):** Clinical Library, About Us, Marketing Asset Download (Password Protected).
3.  **Phase 3 (Interactive Tools):** Provider Locator, Interactive Clinical Timeline, Webinar Integration.

---

## Conclusion
PicoTech's digital presence should mirror the precision of its medical devices. By combining a "Dark Mode Luxury" aesthetic with robust technical performance, the website will command trust from medical professionals and inspire confidence in patients.
