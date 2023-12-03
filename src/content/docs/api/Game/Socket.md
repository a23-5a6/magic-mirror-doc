---
title: Socket
description: Projet de miroir intelligent
---

## Connection d'un appareil hôte
Ressource permettant de faire la connection d'un appareil hôte au serveur.

### URL
`/game/host`

exemple : `http://localhost/game/host`

### Paramètres
#### Requis

**header**  
`X-User-ID: {userId}` Id de l'utilisateur 

### Évènements `on`
`g-unit` Envoie le nombre d'unité sur le terrain  

**Paramètres**
```typescript
{
    yellow: {
        s: number,
        m: number,
        l: number,
    },
    purple:{
        s: number,
        m: number,
        l: number,
    }
}
```
**Error**
```json
{ "message": "Invalid game units" }
```

`g-result` Envoie le résultat de la partie  

**Paramètre**
```typescript
{
    result: "yellow"|"purple"
}
```

### Évènements `emit`   
`g-create` Annonce la création d'une nouvelle partie.

`g-start` Annonce le démarrage de la partie

`g-spawn` Fait la création d'un nouvel unité dans le jeu   

**Paramètre**
```typescript
{
    unit: "s"|"m"|"l"
}
```

## Joindre une partie
Ressource permettant de joindre une partie

### URL
`/game/join/{gameId}`

exemple : `http://localhost/game/game/9SUY5T`

### Paramètres
#### Requis

**header**  
`X-User-ID: {userId}` Id de l'utilisateur 

#### Optionnel
**Header**
`X-Username: {username}` Nom de l'utilisateur

### Évènements `on`

`g-start` Signale que la partie peut démarrer   

**Error**
```json
// When the user is not the host
{"message":"Only the host can start the game"}
```

`g-spawn` Envoie un unité dans la partie  

**Paramètre**
```typescript
{
    unit: "s"|"m"|"l"
}
```
**Error**
```json
// When the game hasn't started yet
{"message":"The game is not in progress"}
```

### Évènements `emit`   
`g-ready` Signale que la partie démarre

`g-unit` Envoie le nombre d'unité sur le terrain  

**Paramètres**
```typescript
{
    yellow: {
        s: number,
        m: number,
        l: number
    },
    purple:{
        s: number,
        m: number,
        l: number
    }
}
```

`g-result` Envoie le résultat de la partie.  

`g-info` Info général sur l'état de la partie.

**Paramètres**
```typescript
{
  type: "connection" | "disconnection";
  message: string;
}
```

**Paramètre**
```typescript
{
    result: "yellow"|"purple"
}
```