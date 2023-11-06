---
title: Sockets
description: A guide in my new Starlight docs site.
---

## Code de couplage des appareils
### Description
L'evenement `pairing-code` est appelé lors de l'expiration du code à 6 charactère qui est utilisé pour la synchronisation.

### Nom de l'évènement
`pairing-code`

### Valeurs reçus
```json
{
  "code": "{string}" // String de 6 charactère
}
```