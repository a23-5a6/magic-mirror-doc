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
### Context
- **useAppContext**:  Context global pour la gestion de l'état de l'application.

## Exemples
### Hook
```typescript
// ...
export function Clock() {
  const { formatedTime, formatedDate } = useClock();

  return (
    <>
      <span>{formatedTime}</span>
      <span>{formatedDate}</span>
    </>
  );
}
```
### Context
```typescript
// app.tsx
import { AppContextProvider } from '@a23-5a6/magic-mirror-react'
// ...
function render() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <AppContextProvider>
      <Main />
    </AppContextProvider>);
}

// ExampleComponent.tsx
import {useAppContext} from '@a23-5a6/magic-mirror-react';
// ...
export default function ExampleComponent() {
    const app = useAppContext();

    console.log(app.config);

    return (
        // ...
    )
}
```

## Contribution
Si vous souhaitez contribuer à ce package, veuillez suivre ces étapes :

- Clonez ce dépôt.
- Assurez vous de suivre les instruction d'[installation](../README.md#installation)
- Créez une nouvelle branche pour votre contribution.
- Faites vos modifications et assurez-vous de respecter les conventions de codage.
- Soumettez une demande d'extraction (Pull Request) vers la branche principale.