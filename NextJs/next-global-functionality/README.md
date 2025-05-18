# 🧪 Projet de Test Complet – Next.js + MongoDB + Tailwind

Ce projet est un **bac à sable personnel** pour découvrir et expérimenter **Next.js (App Router)**, MongoDB, Tailwind CSS, la gestion des routes dynamiques, l’animation entre pages, le SEO, les middlewares, les tests avec Jest, et bien plus.

> ❗ Ce projet n’est pas destiné à la production. Il s’agit d’un **projet d'apprentissage** où je teste un peu tout pour comprendre comment fonctionne l'écosystème Next.js.

---

## 🚀 Stack utilisée

- **Next.js** (App Router)
- **MongoDB** (via fonctions d’API et modules `db`)
- **Tailwind CSS**
- **Jest** (pour le test du composant `Button`)
- **TypeScript**
- **Animations personnalisées** (transition entre pages)
- **Middleware** (exemple de test)
- **SEO** (robots.txt et sitemap)

---

## 🧱 Structure du projet

├── app/
│ ├── article/
│ │ ├── page.tsx # Liste des articles
│ │ ├── postarticle/ # Création d’un article
│ │ └── [id]/page.tsx # Page dynamique pour chaque article
│ │
│ ├── user/
│ │ ├── page.tsx # Liste des utilisateurs
│ │ ├── template.tsx # Template utilisateur
│ │ └── [id]/
│ │ ├── page.tsx # Page dynamique utilisateur
│ │ └── update/page.tsx # Page de mise à jour
│ │
│ ├── login/ # Page de connexion
│ ├── robots.ts # Fichier robots.txt
│ └── sitemap.ts # Génération du sitemap
│
├── components/
│ ├── Button.tsx
│ ├── Form.tsx
│ ├── GoBack.tsx
│ └── Link.tsx # Composant personnalisé avec animation
│
├── db/
│ ├── article.ts # Requêtes Mongo pour les articles
│ ├── user.ts # Requêtes Mongo pour les utilisateurs
│ └── types.ts # Typage TypeScript
│
├── middleware.ts # Middleware simple pour test
├── utils/
│ └── animate.ts # Animation de transition entre les pages
│
├── tailwind.config.ts
├── jest.config.js # Config Jest (optionnel)
├── README.md
└── ...

---

## 🧩 Fonctionnalités testées

### 🔧 Core Features

- App Router (`page.tsx`, `[id]/`, etc.)
- Routes dynamiques & imbriquées
- Appels API (via MongoDB)
- Composants réutilisables (`Button`, `Form`, `Link` animé…)

### 🧠 Expérimentations techniques

- **MongoDB** : appels depuis `db/user.ts` et `db/article.ts`
- **Animations de transition de page** (avec `utils/animate.ts`)
- **Composant `Link.tsx` personnalisé** qui exécute une animation avant navigation

### 🔐 Middleware

- Middleware simple ajouté dans `middleware.ts` pour apprendre le fonctionnement (sans authentification).

### 🔎 SEO

- `robots.ts` : génération dynamique du fichier robots.txt
- `sitemap.ts` : génération automatique d’un sitemap XML

### 🧪 Tests

- Utilisation de **Jest** pour tester le composant `Button`

### 🎨 UI

- Aucune maquette, style minimaliste via **Tailwind CSS**

---

✅ Ce que j’ai appris
Création de pages dynamiques et imbriquées dans Next.js App Router

Connexion à une base MongoDB sans ORM

Création d’un système de transition entre pages

Génération SEO avec robots.ts et sitemap.ts

Utilisation de middleware.ts dans Next.js

Test unitaire de composants avec Jest

Typage strict avec TypeScript

## 📦 Installation et démarrage

```bash
# Installer les dépendances
npm install

# Lancer le projet en dev
npm run dev

# Lancer les tests
npm run test
```
