---
title: POST
description: A guide in my new Starlight docs site.
---

## **Création d'une configuration**

Ressource permettant la création d'une configuration.

- **URL**

  /config

  exemple : http://localhost/config

- **Méthode:**

  `POST` : Pour la création d'une configuration. La configuration est envoyé par le client

- **Paramètres:**

  **Requis:**

  Content-Type: application/x-www-form-urlencoded

  - `_id=[string]` : L'id de l'utilisateur
  - `timeZone=[object]` : La configuration de la timeZone, comprenant:
    - `code=[string]` : Le code de la timeZone
    - `offset=[string]` : Le décalage horaire
  - `kioskIdleTime=[object]` : heures d'activation et de désactivation du mode kiosk, comprenant:
    - `start=[string]` : L'heure de début
    - `end=[string]` : L'heure de fin
  - `isMilitaryTime=[boolean]` : Le format de l'heure
  - `desktopIdleDelay=[int]`: Le délai avant le passage en mode veille
  - `weather[object]` : Objet gérant la météo, comprenant:
    - `cityId=[string]` : L'id de la ville
    - `celcius=[boolean]` : Le format de la température
  - `localization=[string]`: La langue du miroir

- **Réponse de succès:**

  - **Code:** 201 <br />
    **Contenu:** 
```json
  {
    "data": {
      "_id": 132,
      "desktopIdleDelay": 30,
      "isMilitaryTime": true,
      "kioskIdleTime": {
        "end": "20:00",
        "start": "06:00"
      },
      "localization": "fr-FR",
      "timeZone": {
        "code": "GMT",
        "offset": "+1"
      }
    }
  }
```

- **Réponse d'erreur:**

  - **Code:** 400 BAD CONTENT <br />
    **Contenu:** `"missingField": [
        "Missing data for required field."
    ]`

    OU

  - **Code:** 403 FORBIDDEN <br />
    **Contenu:** `{
    "error": "User already exists in database"
}`
