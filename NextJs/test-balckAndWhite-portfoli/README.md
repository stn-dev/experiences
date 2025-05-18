# 🖥️ Ancien Portfolio – Single Page avec Next.js, GSAP & SCSS

Ce projet est une **ancienne tentative de portfolio personnel**, réalisée avec **Next.js**, stylisée en **SCSS**, et animée avec **GSAP**.  
Il s'agit d'une **Single Page Application (SPA)** avec 4 sections : `Home`, `About`, `Skills`, et `Contact`.

> ⚠️ Ce projet ne reflète **pas mon niveau actuel**. Il m’a permis de tester pas mal de choses, mais avec le recul, le code est désorganisé, certaines animations sont trop chargées, et le style général manque de cohérence.

---

## 🎯 Objectif initial

- Créer un portfolio moderne et animé
- Tester GSAP dans un projet Next.js
- Structurer une SPA en sections (pas de navigation entre pages)

---

## 🔧 Stack technique

- **Next.js** (App Router ou Pages Router selon version)
- **SCSS** pour les styles
- **GSAP** pour les animations (entrées, scroll, curseur, etc.)

---

## 📄 Sections

1. **Home** :
   - Animation GSAP d’intro
   - **Cube animé en background** qui suit le mouvement du curseur
2. **About** :
   - Texte de présentation
   - Animation d’apparition
3. **Skills** :
   - Liste de compétences avec animation en scroll
4. **Contact** :
   - Formulaire de contact (non connecté)
   - Animation d’apparition

---

## ✨ Points intéressants

- 🎯 Un **hero animé avec GSAP** et un **effet de cube interactif** réactif au curseur
- Première expérimentation de **SCSS structuré** dans Next.js
- Utilisation des hooks pour gérer les animations de manière ciblée

---

## 🧪 Limites du projet

- ❌ Trop d’animations GSAP → effet "chargé" ou "fatiguant"
- ❌ SCSS mal structuré (pas de partials, peu de variables)
- ❌ Code JS/React peu optimisé (pas encore de bonnes pratiques à l’époque)

---

## ▶️ Lancer le projet

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```
