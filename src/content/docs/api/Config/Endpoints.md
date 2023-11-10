---
title: Endpoints
description: A guide in my new Starlight docs site.
---

## PUTS
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

```typescript
{
    _id: string, // L'id de l'utilisateur
    // La configuration de la timeZone, comprenant
    timeZone: { 
        code: string, // Le code de la timeZone
        offset: string // Le décalage horaire
    },
    // heures d'activation et de désactivation du mode kiosk, comprenant
    kioskIdleTime: { 
        start: string, // L'heure de début
        end: string // L'heure de fin
    },
    isMilitaryTime: boolean, // Le format de l'heure
    desktopIdleDelay: number, // Le délai avant le passage en mode veille
    // Objet gérant la météo, comprenant
    weather: { 
        cityId: string, // L'id de la ville
        celcius: boolean // Le format de la température
    },
    localization: string // La langue du miroir
}
```

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


## POST
## **Modification d'une configuration**

Ressource permettant la modification d'une configuration.

- **URL**

  /config

  exemple : http://localhost/config

- **Méthode:**

  `PUT` : Pour la modification d'une configuration.

- **Paramètres:**

  **Requis:**

  Content-Type: application/x-www-form-urlencoded

  ```typescript
  {
    _id: string, // L'id de l'utilisateur
    // La configuration de la timeZone, comprenant
    timeZone: { 
        code: string, // Le code de la timeZone
        offset: string // Le décalage horaire
    },
    // heures d'activation et de désactivation du mode kiosk, comprenant
    kioskIdleTime: { 
        start: string, // L'heure de début
        end: string // L'heure de fin
    },
    isMilitaryTime: boolean, // Le format de l'heure
    desktopIdleDelay: number, // Le délai avant le passage en mode veille
    // Objet gérant la météo, comprenant
    weather: { 
        cityId: string, // L'id de la ville
        celcius: boolean // Le format de la température
    },
    localization: string // La langue du miroir
   }
  ```

- **Réponse de succès:**

  - **Code:** 200 <br />
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
    },
    "message": "Item updated successfully"
  }
}
```

- **Réponse d'erreur:**

  - **Code:** 400 BAD CONTENT <br />
    **Contenu:**
```json
"missingField": [
    "Missing data for required field."
]
```
OU

  - **Code:** 404 NOT FOUND <br />
    **Contenu:** 
```json
{
    "error": "User not found in database"
}
```
