# 🌬️ Breezy — Social Network Wireframe

> Interactive wireframe of a lightweight social network, built with React, TypeScript and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)

---

## 📌 Overview

**Breezy** is a functional interactive wireframe for a modern social network inspired by Twitter/X. Designed with a **mobile-first** approach, it covers the complete user journey from authentication to private messaging.

This project was built as part of an academic project (Livrable 1) and serves as the front-end prototype before integration with a microservices back-end (Node.js, Express, PostgreSQL, MongoDB, Docker).

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 Authentication | Login & Sign up screens |
| 📰 Home Feed | Chronological post feed with like, comment, share |
| ✍️ Compose | Publish posts with 280 character counter |
| 👤 User Profile | Personal profile with posts list |
| 🔍 Public Profile | View other users' profiles with follow/unfollow |
| 🔔 Notifications | Likes, mentions and new followers notifications |
| 💬 Private Messages | Conversation list + real-time chat with send functionality |
| ⚙️ Settings | Language selector (FR/EN/ES/DE) + dark/light theme toggle |
| 🛡️ Admin Dashboard | User management with ban/unban functionality |

---

## 🖥️ Screens (13 pages)

```
/                        → Login
/signup                  → Sign Up
/app/home                → Home Feed
/app/compose             → New Post
/app/post/:id            → Post Details
/app/profile             → My Profile
/app/user/:handle        → Public Profile
/app/profile/network     → Network (followers/following)
/app/notifications       → Notifications
/app/messages            → Messages List
/app/messages/:id        → Chat
/app/settings            → Settings
/app/admin               → Admin Dashboard
```

---

## 🎨 Design System

The UI follows **WCAG 2.1 AA** accessibility standards with a consistent color palette:

| Token | Hex | Usage |
|---|---|---|
| Primary | `#2563EB` | Buttons, active nav, links |
| Danger | `#DC2626` | Errors, ban actions |
| Success | `#059669` | Follow confirmation, unban |
| Like | `#E11D48` | Heart / like icon |
| Text Primary | `#111827` | Main content |
| Text Muted | `#6B7280` | Handles, timestamps |

---

## 🏗️ Architecture

This wireframe is part of a larger **microservices architecture**:

```
Client (this repo)
      ↓
  API Gateway
      ↓
┌─────────────────────────────────────┐
│  Auth   │  User  │  Post  │  Notif  │
│ Service │ Service│ Service│ Service │
└─────────────────────────────────────┘
│ PostgreSQL │    MongoDB              │
└────────────────────────────────────┘
```

**Back-end stack (in progress):** Node.js · Express · JWT · PostgreSQL · MongoDB · Docker

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

> Default credentials (mock): any email / any password

---

## 🧩 Reusable Components

| Component | Description |
|---|---|
| `PostItem` | Post card with like, comment, share actions |
| `Avatar` | User avatar with multiple sizes |
| `TopNav` | Sticky top navigation bar |
| `Button` | Multi-variant button (primary, outline, ghost) |
| `MainNavLayout` | Bottom tab bar navigation |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── UI.tsx          # Base components
│   │   └── Layouts.tsx     # App layout + nav
│   ├── screens/            # 13 page components
│   ├── PostsContext.tsx     # Shared posts state
│   ├── mockData.ts         # Mock data
│   ├── routes.tsx          # React Router config
│   └── App.tsx
└── styles/
    ├── globals.css
    └── theme.css           # CSS variables (color palette)
```

---

## 👨‍💻 Team

| Member | Role |
|---|---|
| **Kaboré Wend-managda Emmanuel** | Post Service · Notifications · Docker · Front-end |
| **Batcho Jean-luc** | Auth Service · User Service · JWT · PostgreSQL |
| **Cedy Mohamed Jean-paul** | React/Next.js · Tailwind · UX/UI Mobile-first |

---

## 📄 License

This project is built for academic purposes — **2025–2026**.
