# 🛒 Shopping Cart Challenge


https://github.com/user-attachments/assets/24857929-995f-47cc-a0ce-a2551a27ef4b


A shopping cart app built with React, TypeScript, Context API, and `useReducer` — no prop drilling, no standalone `useState` for cart data.

---

## 📋 Requirements

### Features
- Display a list of products fetched from [Fake Store API](https://fakestoreapi.com/)
- Add items to the cart
- Remove items from the cart
- Increase / decrease item quantity in the cart
- Cart summary showing total items and total price

### Technical Rules
1. All cart state must live in a **reducer** — no standalone `useState` for cart data
2. **No prop drilling** — components get what they need via Context only
3. Must have a **`CartProvider`** component that wraps everything
4. Must have **custom hooks** — at minimum `useCart()` and `useCartDispatch()`
5. The **`App` component** should be nearly empty — just layout and routing
6. **TypeScript only** — no use of `any`
7. **Lighthouse scores all green** — performance, accessibility, best practices, SEO
8. Implement a **service worker**
9. Use [https://fakestoreapi.com/](https://fakestoreapi.com/) for product data
10. Use a **component library** — UI should look decent and be well aligned
11. **Mobile first** — responsive layout from the start

---

## 🧱 Architecture

### State Management
- All cart state lives in a single `useReducer`
- Wrapped in a `CartProvider` component
- Exposed via hooks

### Custom Hooks
| Hook | Purpose |
|---|---|
| `useCart()` | Access current cart state |
| `useCartDispatch()` | Dispatch cart actions |

### Reducer Actions
| Action | Description |
|---|---|
| `added` | Add a product to the cart (or increment if exists) |
| `removed` | Remove a product entirely from the cart |
| `added_item` | Increase quantity of an item |
| `removed_item` | Decrease quantity (removes if quantity hits 0) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   ├── CartSummary.tsx
├── layouts/
│   └── ProductCardLayout.tsx
├── pages/
│   ├── Home.tsx
│   └── PageNotFound.tsx
├── providers/
│   └── CartProvider.tsx
├── utils/
│   └── ProductList.tsx
└── App.tsx
```

---

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

---

## ♿ Lighthouse

Target: **all green** across Performance, Accessibility, Best Practices, and SEO.

To check:
1. Run `bun run build && bun run preview`
2. Open Chrome DevTools → Lighthouse tab
3. Run audit on the preview URL

NB: Performance has not been reached

---

## 🔧 Service Worker

A service worker is registered to enable offline support and improve load performance. It caches static assets and API responses where appropriate.

NB: Service worker has not been used.

---

## 📦 Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) + [Bun](https://bun.sh/)
- [React Router](https://reactrouter.com/)
- Component library of your choice (e.g. shadcn/ui, Radix, Chakra, MUI)
- [Fake Store API](https://fakestoreapi.com/)
