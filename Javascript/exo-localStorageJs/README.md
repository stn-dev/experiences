# 🗂️ Authentification JavaScript avec Local Storage – Exercice Single Page

## 📋 Description

Ce projet est un exercice d’authentification en **JavaScript vanilla** avec **une seule page HTML**. L’objectif est de gérer dynamiquement différentes sections de l’interface utilisateur (Landing, Login, Sign Up, Accueil) avec JavaScript pur (`appendChild`, `removeChild`, etc.).

Les utilisateurs peuvent s'inscrire, se connecter et rester connectés grâce à `localStorage`. Une fois connecté, une simple alerte `"Vous êtes connecté"` s'affiche.

---

## 🔍 Ce que j'ai appris

- Manipulation avancée du **DOM** avec JavaScript (`appendChild`, `removeChild`, `createElement`, etc.)
- Gestion d’un projet **Single Page Application** sans framework
- Utilisation du **Local Storage** pour :
  - Sauvegarder les utilisateurs
- Modularisation du code JavaScript en plusieurs fichiers
- Organisation des vues dynamiquement selon l’état de l’utilisateur
- Mise en forme avec **SCSS**

---

## 🧱 Structure du projet

📁 project-root/
│
├── index.html # Fichier HTML unique
├── landingPage.js # Génération dynamique de la landing page
├── login.js # Composant de la page de connexion
├── signUp.js # Composant de la page d’inscription
├── acceuil.js # Composant de la page d’accueil
├── style.scss # Feuille de style principale (SCSS)
