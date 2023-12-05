---
title: Endpoints
description: A guide in my new Starlight docs site.
---

## Création d'une partie
Ressource permettant la création d'une partie.

### URL
`/game/start`  
exemple : `http://localhost:6993/game/create`

### Méthode
`POST`  Fait la création d'une nouvelle partie sur un appareil compatible connecté.

### Paramètres
#### Requis
Id de l'utilisateur
`X-User-ID: {userId}`

### Réponses
#### Code 200 OK
```json
// Exemple
{
    "gameId": "g-9DP30K" // /^g-[A-Z0-9]{6}$/
}
```

#### Code 404 Not Found
```json
// Exemple
{
    "message": "There isn't any compatible device paired"
}
```

#### Code 409 Conflict
```json
//Exemple
{
    "message": "There is already a game in progress.",
},
```

#### Code 422 Unprocessable Content
```json
// Exemple
{
    "message": "User id cannot be null"
}
```
