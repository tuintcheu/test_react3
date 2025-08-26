# Gestion de Ressources

---

Ce projet est un système de gestion de ressources (livres, vidéos, etc.) réalisé en **TypeScript**.

## Fonctionnalités

- Ajouter des ressources
- Supprimer des ressources
- Rechercher des ressources par ID
- Afficher toutes les ressources ajoutées

---

## 🗂️ Structure du Projet

- **`main.ts`** : Point d'entrée de l'application
- **`Resource.ts`** : Définition de la classe abstraite `Resource` et des classes concrètes `Book` et `Video`
- **`Repository.ts`** : Définition de l'interface générique `Repository` et de la classe `InMemoryRepository`
- **`book.ts`** : class concrete book qui etends de la classe abstraite resource.ts
- **`video.ts`** :class concrete video qui etends de la classe abstraite resource.ts
- **`InMemoryRepository.ts`** : classe generique qui implemente les fonctionnaliter a appliquer sur chaque ressources

---

## 🚀 Instructions pour Lancer le Projet

- Téléchargez ou clonez le projet :
  git clone https://github.com/tuintcheu/test_react3
- Ouvrez le dossier du projet.
- dans votre terminal saisir **npx tsc** pour compiler les fichier typescript(src) en javascript(dist)
- installer **live server** sur votre editeur pour eviter les probleme de cors
- cliquer sur **Go live** ca vas s'ouvre dans un navigateur puis acceder a la console pour voir le resultat
- ![![apercue](<assets/petit système de gestion de ressources - Google Chrome 2025-08-26 14_48_06.png>)]

---

## Auteur

**Tuintcheu pharel**
