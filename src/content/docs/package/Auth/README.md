---
title: magic-mirror-config
description: Projet de miroir intelligent
---
Ce package fait la gestion de l'authentification. 

## Installation
Pour plus d'information sur l'installation, se référer au [README](../README.md#installation) du repository

## Utilisation
Devrait être nécessaire dans pratiquement tout les packages et application comme il contient des éléments commun à tous.

```typescript
import { socket, User, AuthManager } from '@a23-5a6/magic-mirror-auth'
```
## Fonctionnalités Principales
### Types
- **User**: Type pour l'utilisateur;
### Services
- **AuthManager**: Fait la gestion de l'authentification;
- **AuthService**: Contient tout ce qui touche aux appel http et web socket;

## Changelog

### 1.0.4
- Correction des peer dependencies

### 1.0.3
- Initialisation du projet