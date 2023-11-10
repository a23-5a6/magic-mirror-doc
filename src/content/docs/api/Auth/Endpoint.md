---
title: Endpoint
description: A guide in my new Starlight docs site.
---

## POST Register
Ressource permettant de faire la création d'un compte.

### URL

`/auth/register`

exemple : `http://localhost/auth/register`

### Méthode:

`POST` : Pour la modification d'une configuration.

### Paramètres:
#### Requis:

`Content-Type: application/x-www-form-urlencoded`

```json
// template
{
  "email": "{string}",    // Email de l'utilisateur
  "password": "{string}"  // Mot de passe hasher de l'utilisateur
}
```
```json
//exemple
{
  "email": "maxime@mm.com",
  "password": "supersafepassword"
}
```

### Réponses
#### Code 200 OK
**Contenu:** 
```json
{
  "bearer": "{string}"
}
```

#### Code 401 Unauthorized
**Contenu:**
```json
{
  "message": "Registration failed; Invalid email or password."
}
```

## POST Login
Ressource permettant de faire la connexion d'un compte.

### URL

`/auth/login`

exemple : `http://localhost/auth/login`

### Méthode:

`POST` : Pour la modification d'une configuration.

### Paramètres:
#### Requis:

`Content-Type: application/x-www-form-urlencoded`

```json
// template
{
  "email": "{string}",    // Email de l'utilisateur
  "password": "{string}"  // Mot de passe hasher de l'utilisateur
}
```
```json
//exemple
{
  "email": "maxime@mm.com",
  "password": "supersafepassword"
}
```


### Réponses
#### Code 200 OK
**Contenu:** 
```json
{
  "bearer": "AAAAAAAAAAAAAAAAAAAAAMLheAAAAAAA0%2BuSeid%2BULvsea4JtiGRiSDSJSI%3DEUifiRBkKG5E2XzMDjRfl76ZC9Ub0wnz4XsNiRVBChTYbJcE3F"
}
```

#### Code 401 Unauthorized
**Contenu:**
```json
{
  "message": "Login failed; Invalid user ID or password."
}
```

## POST Pair
Ressource permettant de synchroniser un autre appareil à notre compte.

### URL

`/auth/pair`

exemple : `http://localhost/auth/pair`

### Méthode:

`POST` : Pour la modification d'une configuration.

### Paramètres:
#### Requis:
`Authorization: Bearer <token>`  
`Content-Type: application/x-www-form-urlencoded`

```json
// template
{
  "code": "{string}"     // Chaine à 4 charactères [0-9A-Z]
}
```
```json
//exemple
{
  "code": "GHT10Q"
}
```


### Réponses
#### Code 200 OK
**Contenu:** 
```json
{
  "name": "magic-mirror-desktop"
}
```

#### Code 401 Unauthorized
**Contenu:**
```json
{
  "message": "Login failed; Invalid user ID or password."
}
```

#### Code 404 Not Found
**Contenu:**
```json
{
  "message": "No device found"
}
```