---
title: magic-mirror-config
description: Projet de miroir intelligent
---

# 
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

## Exemples
### ConfigManager
```typescript
import {ConfigManager, Config} from '@a23-5a6/magic-mirror-config';
// ...
const configManager = ConfigManager.getInstance();

configManager.on('ready', async () => {
    console.log('Config Manager is ready with config: ', configManager.getConfigs())
  });

configManager.initialize(
  async () => readConfig(),
  (config: Config) => {
      writeConfig(config);
  },
);
```

## Contribution
Si vous souhaitez contribuer à ce package, veuillez suivre ces étapes :

- Clonez ce dépôt.
- Assurez vous de suivre les [instruction d'installation](../README.md#installation)
- Créez une nouvelle branche pour votre contribution.
- Faites vos modifications et assurez-vous de respecter les conventions de codage.
- Soumettez une demande d'extraction (Pull Request) vers la branche principale.