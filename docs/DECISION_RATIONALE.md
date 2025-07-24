## ✅ 4. Decision Rationale Document

This section outlines the reasoning behind major architectural and implementation decisions made during the project.

---

### 💡 Why Use Node.js Middleware?

- The **SWAPI API** has inconsistencies (e.g., query structure differs between search and list).
- A **Node.js middleware** layer helps:

  - Normalize and structure API responses.
  - Simplify API integration on the frontend.
  - Abstract external API logic and prevent tight coupling with third-party services.
  - Handle retries, fallbacks, and error formatting.

---

### 💡 Why React for Frontend?

- Modern, **component-based** architecture ensures clean, modular development.
- React Hooks (`useState`, `useEffect`, etc.) allow for **intuitive state management**.
- **Separation of concerns** between logic and UI makes the app easier to maintain.
- Speeds up development with **reusable UI components** and strong ecosystem support.

---

### 💡 Why Modal for Character Details?

- A **modal** allows users to view details **without leaving the current page**.
- Provides a **simpler UX** by avoiding unnecessary routing or context switching.
- Enhances the experience with **smooth transitions and responsive behavior**.

---

### 💡 Why Separate Environment Variables?

- Enables **easy switching** between local, development, and production environments.
- Keeps sensitive or environment-specific values out of the codebase.
- Promotes a **cleaner and more maintainable configuration structure**.

---

### 💡 Error Handling Approach

- **Try-catch** blocks implemented in both frontend and backend API layers.
- Displays **user-friendly messages** in case of:

  - Empty search results
  - Network/API failures
  - Loading states or timeouts

- Ensures the app **does not crash** and provides graceful fallbacks.

---
