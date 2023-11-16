---
title: magic-mirror-react
description: Projet de miroir intelligent
---

Ce package contient tout les éléments React nécessaire et réutilisable pour le UI.

## Installation
Pour plus d'information sur l'installation, se référer au [README](../README.md#installation) du repository

## Utilisation
Peut-être utilisé dans tout les projet React. Tout les hooks et contexts sont exporté directement de la racine du package et doivent être appelé à partir du package comme suit.

```typescript
import { useExampleContext, useExampleHook } from '@a23-5a6/magic-mirror-react'
```
## Fonctionnalités Principales
### Hook
- **useClock**: Fait la gestion pour l'affichage d'un horloge en temps réel;
- **useAuth**: Gestion des fonctions de l'authentification.
- **useWeather**: Gestion de la météo. *(Native seulement)*
### Context
- **useAppContext**:  Context global pour la gestion de l'état de l'application.
- **useAuthContext**: Context global pour faire la gestion de l'utilisateur.

## Changelog
### 3.2.5
- Ajout de components pour l'authentification

### 3.0.2
- Ajout d'un hook pour la gestion de la météo
- Mise à jour des dépendances