# 📝 Mini Blog Nuxt 3 — Mon premier test de Nuxt

Ce projet est un petit site de blog réalisé avec **Nuxt 3**, dans le but d'apprendre à utiliser ce framework moderne. J'y explore les **routes dynamiques**, les **endpoints API personnalisés**, la **gestion d’un thème clair/sombre**, la **simulation de chargement**, et une **page spéciale pour le blog**.

## ✨ Fonctionnalités principales

- ✅ **Page spéciale `/blog`** pour afficher la liste des articles de blog
- ✅ **Pages dynamiques** pour chaque article via `/blog/[id]`
- ✅ **Simulation d'un chargement** dans l'API avec `setTimeout()`
- ✅ **Thème clair/sombre** via un bouton toggle (non persistant)
- ✅ **Pages statiques** : `About` et `Contact` (contenu décoratif)

## 📁 Structure du projet

```bash
nuxt-blog/
├── pages/
│   ├── index.vue             # Page d'accueil simple ou d'intro
│   ├── blog/
│   │   ├── index.vue         # Page spéciale pour la liste de blogs
│   │   └── [id].vue          # Page dynamique pour chaque article
│   ├── about.vue             # Page statique "À propos"
│   └── contact.vue           # Page statique "Contact"
├── components/
│   └── ToggleTheme.vue       # Bouton pour changer le thème (light/dark)
├── server/
│   └── api/
│       ├── hello.ts         # Endpoint pour récupérer tous les blogs
│       └── hello/[id].ts     # Endpoint dynamique pour récupérer un blog par ID
├── app.vue                   # Layout global avec gestion du thème
└── nuxt.config.ts            # Configuration de l’application Nuxt
```
