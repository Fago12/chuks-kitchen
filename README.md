# Chuks Kitchen - Authentic West African Cuisine

Chuks Kitchen is a modern, responsive web application for exploring and ordering authentic West African (specifically Nigerian) dishes. The app features a rich menu, detailed dish information, and a seamless cart management experience.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

### Development Server
Run the application locally:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production Build
Create an optimized production build:
```bash
npm run build
```

---

## 🛠 Tech Stack

- **Core**: React 19 (Hooks, Context API)
- **Routing**: React Router 7
- **Styling**: SCSS (Sass) with BEM methodology
- **Icons**: Inline SVG icons
- **State Management**: React Context API (Cart functionality)
- **Build Tool**: Vite 7
- **Notifications**: React Hot Toast
- **Language**: TypeScript

---

## 🏗 Architecture & Design Patterns

### Component Architecture
The app follows a modular component-based architecture. Pages are composed of smaller, reusable components located in `src/pages/[PageName]/components`.

### Service Layer
Data fetching is abstracted into a service layer (`src/services/api/dishes.ts`). This allows for easy swapping of mock data with real API endpoints in the future.

### State Management (Cart)
The application State for the shopping cart is centralized in `src/context/CartContext.tsx`. This provider manages:
- Adding/removing items
- Customization persistence (Proteins, Extras)
- Quantity updates
- Total calculations
- LocalStorage persistence for session recovery

### SCSS Architecture
The styling system is built for scalability and performance:
- **`src/styles/_variables.scss`**: Centralized design tokens (Colors, Typography, Breakpoints).
- **BEM (Block Element Modifier)**: Used consistently (e.g., `.cart-item__image--large`) to ensure styling isolation.
- **Responsive Design**: Mobile-first approach using dedicated mixins for breakpoints.

---

## 📦 Data Management

### Dish Data Structure
Dishes are defined as TypeScript interfaces (`src/mock/dishes.ts`) with support for:
- Unique IDs and Categories
- Chef's Special flags
- Customization options (Proteins and Extras) with individual pricing
- Descriptive tags (Spicy, Vegan, Allergy warnings)

### Data Fetching
Fetching logic mimics asynchronous API calls using a `delay` helper in the service layer. This ensures the UI handles loading states correctly from the start.

---

## 🔄 User Flow & Status

> [!IMPORTANT]
> **Authentication Status**: The current authentication flow (Login/Signup) is a UI placeholder. User authentication logic is not yet connected to a backend.

### Standard Entry Flow
1. **Onboarding**: Start at the landing page.
2. **Accessing Dishes**: Click the **"Start your order"** button or navigate directly to `/home`.
3. **Exploration**: Browse categories or Chef's Specials.
4. **Ordering**: Select a dish to view details, choose customizations, and add to cart.
5. **Cart Management**: Review your order on the "My Orders" page.

---

## 📂 Directory Structure

```text
src/
├── assets/         # Static assets
├── components/     # Global reusable UI components
├── context/        # React Context providers (Cart)
├── mock/           # Mock data and TypeScript interfaces
├── pages/          # Page-level components and their sub-components
├── services/       # API abstraction layer
└── styles/         # Global styles and variables
```

---

## 📄 License

Private - All rights reserved.
