---
title: Endpoint
description: Ressource permettant la modification d'une configuration.
---

## **Modification d'une configuration**

Ressource permettant la modification d'une configuration.

### URL

`/weather/{id}`

  exemple : http://localhost:6993/weather/6077243

### Méthode

  `GET` : Pour la récupération de la météo. La météo est mise à jour tout les heures sur le serveur.

### Paramètre
#### Requis

`{id}`: Id de la ville recherché

### Réponses
#### Succès 200

```json
{
  "coord": {
    "lon": -73.5878,
    "lat": 45.5088
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "peu nuageux",
      "icon": "02n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": -0.01,
    "feels_like": -1.83,
    "temp_min": -1.1,
    "temp_max": 0.64,
    "pressure": 1022,
    "humidity": 55
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.54,
    "deg": 250
  },
  "rain": null,
  "clouds": {
    "all": 20
  },
  "dt": 1698879123,
  "sys": {
    "type": 1,
    "id": 498,
    "country": "CA",
    "sunrise": 1698838403,
    "sunset": 1698874942
  },
  "timezone": -14400,
  "id": 6077243,
  "name": "Montréal",
  "cod": 200
}
```

#### Erreur 404
```json
{
  "error": "Id not found"
}
```
#### Erreur 400
```json
{
  "error": "Invalid city ID provided",
}
```
#### Erreur 500
```json
{
  "error": "Database error: {error-message}",
}
```