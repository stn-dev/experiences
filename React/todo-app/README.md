# 🔐 Test d'authentification & Protected Routes (ancien projet)

Ce projet est une **ancienne expérimentation avec React** pour comprendre comment protéger certaines routes d'une application via un système d'authentification simple avec `localStorage` et `Context API`.

> ⚠️ Le projet est un **test rapide**, avec une **structure de code un peu brouillon**, mais il m’a aidé à comprendre les bases de la gestion d’auth avec React Router.

---

## 🎯 Objectif

- Tester la **gestion d’authentification simple** dans React
- Créer une **route protégée** redirigeant vers `/login` si l’utilisateur n’est pas connecté
- Utiliser `localStorage` pour simuler une persistance de session
- Apprendre à utiliser `Context API` pour partager l’état de connexion dans l’app

---

## ⚙️ Stack technique

- **React** (CRA ou Vite)
- **React Router DOM v6+**
- **Context API**
- **localStorage**

---

## 📁 Structure (pas très propre)

> Le projet n’a pas été structuré de manière très modulaire. Voici la logique principale :

- `AuthContext.jsx` : contexte global avec état `isAuthenticated`
- `ProtectedRoute.jsx` : composant HOC qui bloque l’accès si l’utilisateur n’est pas connecté
- `Login.jsx` : formulaire basique qui déclenche `login()`
- `Dashboard.jsx` : page protégée
- `Home.jsx` : page d’accueil publique
- `App.jsx` : routes de l’application (React Router)

---

## 🔐 Fonctionnement

- Lors du `login`, on enregistre `"auth": true` dans `localStorage`
- Le contexte Auth lit cette valeur au chargement de l’app
- Le composant `<ProtectedRoute>` bloque les routes comme `/dashboard` si `auth !== true`
- Un bouton `logout` efface `localStorage` et redirige vers `/login`

---

## 📌 Limitations

- ❌ Pas de vraie logique de sécurité (aucun backend)
- ❌ Pas de rôles ou permissions
- ❌ Code peu modulaire (tout dans quelques fichiers)
- ❌ Aucune gestion d’erreurs ou de validation

---

## ▶️ Démarrer le projet

```bash
npm install
npm run dev
```
