# Découvrir l'histoire de l'Algérie

Plateforme web pédagogique pour découvrir les grandes périodes de l'histoire algérienne, à travers des leçons et des quiz interactifs.

## Fonctionnalités

- 4 périodes historiques : l'Algérie antique, l'Algérie médiévale et ottomane, la colonisation française, la guerre de libération
- 2 leçons par période, avec contenu de cours détaillé
- Quiz de 5 questions par leçon, avec feedback immédiat (bonne/mauvaise réponse en couleur)
- Récapitulatif complet des réponses à la fin de chaque quiz
- Célébration finale animée : confettis en forme de drapeau algérien et hymne national
- Suivi de progression (leçons lues, scores aux quiz) via Redux
- Design responsive (mobile et desktop)

## Stack technique

- **React + Vite**
- **React Router** : navigation dynamique (`/periode/:id`, `/lecon/:id`, `/lecon/:id/quiz`)
- **Redux Toolkit** : gestion de la progression utilisateur
- **styled-components** : CSS-in-JS pour le style des composants
- **canvas-confetti** : animation de célébration

## Installation

```bash
npm install
npm run dev
```

## Workflow Git

Ce projet suit la méthodologie **GitHub Flow** : chaque fonctionnalité est développée dans une branche dédiée (`feature/...`), puis fusionnée dans `main` via une Pull Request.

## Sources historiques

Le contenu pédagogique s'appuie sur des faits historiques vérifiés, recoupés notamment avec des sources algériennes (El Moudjahid, Algérie Presse Service) pour les événements de la guerre de libération.