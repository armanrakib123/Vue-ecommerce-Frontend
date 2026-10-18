# Nexora Commerce Frontend

> FAANG-Level, Multi-Portal Enterprise E-commerce Platform Architecture Built with Vue 3, Composition API, Pinia, and Tailwind CSS.

---

## 🌟 Executive Architectural Overview

Nexora Commerce is a production-grade, multi-role commerce application engineered to demonstrate modern frontend standards. Rather than a simple storefront demo, this repository houses an entire enterprise commerce ecosystem with dedicated operational dashboards for:
- **Guests & Customers** (Unified Storefront, Interactive Filtering, Cart, Multi-Step Checkout, Orders, RMA Returns, Loyalty Circle)
- **Administrators & Staff** (Executive Analytics, Staff Management, RBAC Matrix Policy, Catalog Moderation, Refunds)
- **Merchants & Sellers** (Store Profile, Products, Inventory, Payouts Ledger, Direct Deposit Telemetry)
- **Support Engineers** (Real-time Ticket Queue, SLA Telemetry, Customer Order Lookup, Multi-turn Messaging)
- **Warehouse & Fulfillment** (Global Stock Levels, Movement Ledger, Picking Station, Packing Line, Carrier Handover)
- **Marketing Managers** (Campaigns, Voucher Generator, Banner Placement, Funnel Conversion)

---

## 🛠 Technology Stack

| Technology | Responsibility |
|---|---|
| **Vue 3 + Composition API** | Reactive UI and domain logic separation |
| **Vite 6** | Instant HMR development and optimized production bundling |
| **Vue Router 4** | Nested layouts, dynamic portal routing, and navigation guard pipeline |
| **Pinia** | Modular centralized state management with persistent storage |
| **Axios** | Resilient HTTP client with mock interceptor layer |
| **Tailwind CSS** | Design system, token-based typography, and Obsidian dark mode |
| **Zod** | Schema validation for forms, checkouts, and RBAC policies |
| **Vitest + Vue Test Utils** | Unit and component test runner with happy-dom |
| **Playwright** | Browser automation for end-to-end user journeys |
| **Lucide Vue Next** | Curated SVG iconography |

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000` (or next available port).

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

### 4. Running Automated Tests
```bash
# Run unit & component tests with Vitest
npm run test

# Run E2E tests with Playwright
npx playwright test
```

---

## 📂 Architecture & Directory Structure

```
nexora-commerce-frontend/
├── public/                     # Static assets, SVG logos, favicons, and locales
├── src/
│   ├── app/                    # Application bootstrap, App.vue, AppProviders, plugin configuration
│   ├── assets/styles/          # Design tokens, reset, themes, utilities, and main Tailwind entry
│   ├── components/             # Reusable atomic UI library (BaseButton, Modal, Table, etc.)
│   ├── composables/            # Core utilities (debounce, pagination, mediaQuery, etc.)
│   ├── config/                 # Environment variables, app metadata, navigation links
│   ├── directives/             # Custom directives (v-click-outside, v-permission)
│   ├── features/               # Domain-driven feature modules (auth, catalog, cart, checkout, orders, etc.)
│   ├── i18n/                   # Multi-language localization engine (English, Bengali)
│   ├── layouts/                # Portal layouts (Storefront, Account, Admin, Seller, Support, Error)
│   ├── mocks/                  # Realistic offline API mocks, fixtures, and telemetry seed
│   ├── permissions/            # RBAC roles, permission policies, and authorization gates
│   ├── portals/                # Specialized role dashboards (Customer, Admin, Seller, Support, Warehouse, Marketing)
│   ├── router/                 # Vue Router configuration, route names, and guard pipeline
│   ├── services/               # HTTP client, storage adapters, and realtime event client
│   ├── stores/                 # Pinia stores (auth, cart, wishlist, notifications, preferences, UI)
│   └── test/                   # Test setup, factories, and unit test helpers
└── tests/                      # Playwright E2E, accessibility (WCAG), and performance benchmarks
```

---

## 🎭 Persona & Role Switcher

For instant interactive evaluation of all 6 portals, a top **Persona & Role Switcher Bar** is permanently docked at the top of the viewport. Selecting any role (*Guest, Customer, Merchant, Admin, Support Agent, Warehouse Lead*) automatically updates authentication credentials, simulated RBAC permissions, and routes you directly into the matching portal!

---

## 📄 License
MIT © 2026 Nexora Commerce Inc.
