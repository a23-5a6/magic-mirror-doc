---
title: GET
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

### Réponses
#### Succès

  - **Code:** 200 <br />
    **Contenu:** `{
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
}`

#### Erreur

  - **Code:** 400 BAD CONTENT <br />
    **Contenu:** `"missingField": [
    "Missing data for required field."
]`

    OU

  - **Code:** 404 NOT FOUND <br />
    **Contenu:** `{
    "error": "User not found in database"
}`
