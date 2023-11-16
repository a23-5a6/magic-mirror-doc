---
title: magic-mirror-config
description: Projet de miroir intelligent
---
Ce package fait la gestion des configurations incluant la connnexion au service, la gestion de la sauvegarde locale

## Installation
Pour plus d'information sur l'installation, se référer au [README](../README.md#installation) du repository

## Utilisation
Devrait être nécessaire dans pratiquement tout les packages et application comme il contient des éléments commun à tous.

```typescript
import { ConfigManager, Config } from '@a23-5a6/magic-mirror-config'
```
## Fonctionnalités Principales
### Types
- **Config**: Type par défaut pour les configurations;
- **defaultConfig**: Valeurs pas défaut pour `Config`;
### Services
- **ConfiManager**: Fait la gestion des configurations;
- **ConfigService**: Fait la gestion des appel http et web socket

## Changelog
### 3.0.5
- Suppression de références externe pour les autres packages
- Ajout d'évènements supplémentaire pour la connexion et déconnexion au serveur
- Ajout de configService contenant dorénavent tout les informations sur les socket lié aux configurations

### 2.2.0
- Modification de la config par défaut