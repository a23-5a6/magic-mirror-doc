---
title: Sockets
description: A guide in my new Starlight docs site.
---

## Code de couplage des appareils
### Description
L'evenement `pairing-code` est appelé lors de l'expiration du code à 6 charactère qui est utilisé pour la synchronisation.

### Nom de l'évènement
`pairing-code`

### Type d'évènements
`emit`

### Valeurs reçus
```json
{
  "code": "{string}" // String de 6 charactère
}
```

## Connexion de l'appareil
### Description
L'evenement `pairing-success` est appelé lors de la synchronisation d'un appareil.

### Nom de l'évènement
`pairing-success`

### Type d'évènements
`emit`

### Valeurs reçus
```json
{
  "email": "{string}",
  "bearer": "{token}"
}
```

## Connexion de l'appareil
### Description
L'evenement `disconnect` est reçus lorsque l'appareil a été correctement couplé.

### Nom de l'évènement
`disconnect`

### Type d'évènements
`on`
