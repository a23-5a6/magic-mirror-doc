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
```json
{
    "yellow": {
        "s": number,
        "m": number,
        "l": number,
    },
    "purple":{
        "s": number,
        "m": number,
        "l": number,
    },
},
```
`g-results` Envoie le résultat de la partie  

**Paramètre**
```json
{
    "winner": "yellow"|"purple",
},
```

### Évènements `emit`   
`g-create` Annonce la création d'une nouvelle partie.

`g-start` Annonce le démarrage de la partie

`g-spawn` Fait la création d'un nouvel unité dans le jeu   

**Paramètre**
```json
{
    "unit": "s"|"m"|"l",
},
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

### Évènements `on`

`g-start` Signale que la partie peut démarrer

`g-unit` Envoie un unité dans la partie  

**Paramètre**
```json
{
    "unit": "s"|"m"|"l",
},
```

### Évènements `emit`   
`g-ready` Signale que la partie démarre

`g-unit` Envoie le nombre d'unité sur le terrain  

**Paramètres**
```json
{
    "yellow": {
        "s": number,
        "m": number,
        "l": number,
    },
    "purple":{
        "s": number,
        "m": number,
        "l": number,
    },
},
```

`g-results` Envoie le résultat de la partie  

**Paramètre**
```json
{
    "winner": "yellow"|"purple",
},
```