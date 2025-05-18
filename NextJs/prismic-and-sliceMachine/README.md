# 🧪 Test Next.js + Prismic + Slice Machine

Ce projet est une expérimentation rapide pour tester l'intégration de **Next.js**, **Prismic** avec **Slice Machine**.

## 📦 Stack utilisée

- [Next.js (App Router)](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Slice Machine](https://www.slicemachine.dev/)
- Aucune couche de style (pas de CSS, SCSS ou Tailwind) — test fonctionnel uniquement.

## 🧩 Slices créés

- `Hero`: section de type bannière, souvent utilisée en haut de page.
- `Card`: composant réutilisable affichant un titre et un contenu.
- `Button`: simple bouton personnalisable via Prismic.

## 🗂 Pages

- `/`: Page d’accueil affichant les slices.
- `/card/[uid]`: Page dynamique générée à partir du type `card` dans Prismic, utilisant le paramètre `uid`.

## 🚀 Objectif

Ce projet avait pour but de **tester le workflow** entre :

- la création de slices avec Slice Machine,
- leur intégration dans Next.js avec le système de routage dynamique,
- la récupération des données depuis Prismic.

## 🛠 À noter

- Aucun style n’a été appliqué.
- Projet non destiné à la production.
- Principalement pour valider la compréhension de la connexion entre Prismic et Next.js.

## ▶️ Lancer le projet

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```
