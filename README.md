## 🧩 Overview

This project is a **Star Wars Character Viewer** built using **React.js** for the frontend and **Node.js/Express** as a middleware backend. It fetches data from the [SWAPI.tech](https://swapi.tech/) API and supports the following features:

- 🔍 Search by character name
- 📃 Pagination
- 📋 View character details in a modal

---

## Decision Rationale and QA Test Plan in docs file.

## 🧩 Architecture

### 🔧 Frontend

- **Framework**: React.js
- **State Management**: `useState`, `useEffect`
- **UI Components**:

  - Navbar
  - Header
  - Search Input
  - Character List (Card UI)
  - Modal for character details
  - Footer

- **API Consumption**: Uses **Axios** to communicate with the backend middleware

---

### 🛠 Backend (Node.js / Express)

The backend serves as a middleware between the frontend and the [SWAPI.tech](https://swapi.tech/) API to:

- Simplify frontend API consumption
- Provide stable endpoints and handle edge cases

#### Available Endpoints:

- `GET /api/characters?search=&page=` – Fetch characters with optional search & pagination
- `GET /api/characters/:id` – Fetch character details by ID

---

## 🧩 Installation Guide

### 🔗 Live Demo

- **Frontend**: [https://front-swapi.vercel.app](https://front-swapi.vercel.app)
- **Backend**: [https://swapi-server-lyart.vercel.app](https://swapi-server-lyart.vercel.app)

---

### 💻 Local Development Setup

#### ✅ Requirements

- Node.js v18+
- npm
- Git

---

### 🚀 Steps to Run the Project Locally

#### 1. Clone the Repositories

```bash
# Clone Frontend
git clone https://github.com/rahat2020/front-swapi

# Clone Backend
git clone https://github.com/rahat2020/swapi-server
```

---

#### 2. Backend Setup

```bash
cd swapi-server
npm install
npm run dev
```

---

#### 3. Frontend Setup

```bash
cd front-swapi
npm install
```

Update the `.env` file with the backend base URL:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Then run the project:

```bash
npm run dev
```

---
