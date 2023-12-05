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
Suite à une révision des packages, ce package se retrouve pour l'instant sans fonctionnalité.

## Changelog

### 3.0.2
- Correction des peer dependencies
  
### 3.0.1
- Suppression des sockets lié aux configurations
- Ajout d'instance axios global

### 2.1.0
- Modification du chemin de connection au socket