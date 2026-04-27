# Kumo Ramen Website

Kumo Ramen Website is a frontend-focused Next.js project for a ramen restaurant in Bristol.
It presents a cinematic home experience with a data-driven menu explorer and a booking flow where guests can pick date, party size, and time.

<!-- screenshot: responsive hero section with neon frame, navbar, and background video -->

---

## Table of Contents

- [Project Overview](#project-overview)
- [Design and Planning](#design-and-planning)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [AI Usage](#ai-usage)
- [Credits](#credits)

---

## Project Overview

The app is built with the Next.js App Router and has two primary user routes:

- `/home`: hero section, anchored navigation, menu categories, dish details, and footer information
- `/book`: booking calendar and reservation form with client-side confirmation state

The root route redirects to `/home`.

---

## Design and Planning

### User Stories

- As a visitor, I want to quickly understand the restaurant vibe from the landing section.
- As a guest, I want to browse menu categories and inspect individual dishes before deciding.
- As a guest, I want to choose a date and time and submit a table booking request.
- As a large group, I want clear instructions on how to book when online booking is limited.

### Typography

- Primary font: Shorai Sans StdN Var (custom local font in public assets)
- Numeric/utility fallback: Inter, then Arial/sans-serif fallback stack

<!-- screenshot: typography samples showing heading and body styles -->

### Colour Scheme

Defined through CSS variables in the global stylesheet:

- Background: `#0e0e0e`
- Cream / Off-white text: `#f7f4e2`, `#f0f0f0`
- Accent colors: teal `#00e5d4`, pink `#ff1f7a`, yellow `#f6e640`, red `#e63946`

<!-- screenshot: palette swatches and neon accent usage in UI -->

---

## Features

### Cinematic Hero Sections

Home and booking pages reuse a configurable hero video component with overlay, frame treatment, and bilingual branding.

<!-- screenshot: home hero and booking hero comparison -->

### Data-Driven Menu Navigation

Menu categories and dishes are loaded from a single source of truth file.
Users can open a category accordion, choose a dish, and view detailed descriptions, allergens, and prices.

<!-- screenshot: expanded category list with selected dish details -->

### Visual Dish Presentation

Dish cards support a layered photo/cartoon treatment where the alternate image appears on hover.

<!-- screenshot: dish image hover state (photo to cartoon overlay) -->

### Booking Flow with Calendar

The booking page provides:

- Month navigation calendar
- Past date blocking
- Lunch and dinner slot selection
- Party size handling including special handling for 6+ guests
- Client-side form completion checks before submit
- In-page confirmation summary after submission

<!-- screenshot: booking calendar and form with selected date/time -->

### Drinks Placeholder State

The Drinks menu category intentionally renders a Coming Soon panel instead of dish details.

<!-- screenshot: drinks category showing coming soon state -->

---

## Project Structure

```text
src/
	app/
		page.jsx              # redirects to /home
		home/page.jsx         # home route
		book/page.jsx         # booking route
		layout.jsx            # app metadata and global CSS import
	views/
		HomePage.jsx          # page composition for home
		BookPage.jsx          # booking UI and state
	components/
		HeroVideo.jsx
		NavBar.jsx
		MenuSection.jsx
		KumoMenu.jsx
		KumoDish.jsx
		MenuHeader.jsx
		ComingSoon.jsx
		KumoFooter.jsx
	data/
		menuData.js           # menu categories and dish content
	assets/css/
		style.css             # design tokens and responsive styles
```

---

## Technologies Used

- JavaScript (ES modules)
- React 19
- Next.js 16 (App Router)
- CSS (custom, component-class based)
- ESLint 9 with `eslint-config-next`

### Libraries

- `next` for routing, image optimization, and app framework features
- `react` and `react-dom` for UI rendering and client interactivity

---

## Testing

No automated unit or integration tests are configured yet in this repository.

### Code Quality

- Linting is available through ESLint:

```bash
npm run lint
```

### Manual Testing Checklist

| Area | Test | Status |
|---|---|---|
| Routing | Root URL redirects to `/home` | To verify |
| Home menu | Category opens and dish selection updates detail panel | To verify |
| Drinks state | Drinks category shows Coming Soon panel | To verify |
| Booking calendar | Past dates are disabled | To verify |
| Booking form | Submit button enables only when required fields are complete | To verify |
| Large parties | Selecting 6+ guests shows call-to-book message | To verify |
| Confirmation | Successful submit shows reservation summary panel | To verify |
| Responsiveness | Layout adapts at tablet and mobile breakpoints | To verify |
| Motion preferences | Reduced motion media query behavior is respected | To verify |

### Browser Compatibility Target

- Chrome (latest)
- Safari (latest)
- Firefox (latest)

---

## AI Usage

AI assistance was used for documentation drafting and structuring this README.

---

## Credits

- Next.js documentation: https://nextjs.org/docs
- React documentation: https://react.dev
- ESLint documentation: https://eslint.org/docs/latest/
- Brand/content assets and menu copy: project authors
