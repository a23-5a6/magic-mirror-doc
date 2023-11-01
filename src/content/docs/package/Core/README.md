---
title: magic-mirror-core
description: Projet de miroir intelligent
---

Ce package contient tout les éléments de base nécessaire au bon fonctionnement de l'application commun à toutes version de l'application ou packages. 

## Installation
Pour plus d'information sur l'installation, se référer au [README](../README.md#installation) du repository

## Utilisation
Devrait être nécessaire dans pratiquement tout les packages et application comme il contient des éléments commun à tous.

```typescript
import { socket } from '@a23-5a6/magic-mirror-core'
```
## Fonctionnalités Principales
### Socket
- **socket**: Fait le connexion des sockets à tout les services. Peut-être utilisé pour faire la gestion des evènements reçus via les socket.;

## Exemples
### socket
```typescript
import { socket } from '@a23-5a6/magic-mirror-core';
// ...
socket.on('custom-event', (...args) => {
    console.log(args)
  });
```

## Contribution
Si vous souhaitez contribuer à ce package, veuillez suivre ces étapes :

- Clonez ce dépôt.
- Assurez vous de suivre les [instruction d'installation](../README.md#installation)
- Créez une nouvelle branche pour votre contribution.
- Faites vos modifications et assurez-vous de respecter les conventions de codage.
- Soumettez une demande d'extraction (Pull Request) vers la branche principale.