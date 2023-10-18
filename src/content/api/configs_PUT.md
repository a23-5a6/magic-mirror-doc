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

  - `_id=[string]` : L'id de l'utilisateur

  - `timeZone=[object]` : La configuration de la timeZone, comprenant:
    - `code=[string]` : Le code de la timeZone
    - `offset=[string]` : Le décalage horaire
  - `kioskIdleTime=[object]` : heures d'activation et de désactivation du mode kiosk, comprenant:
    - `start=[string]` : L'heure de début
    - `end=[string]` : L'heure de fin
  - `isMilitaryTime=[boolean]` : Le format de l'heure
  - `desktopIdleDelay=[int]`: Le délai avant le passage en mode veille
  - `localization=[string]`: La langue du miroir

- **Réponse de succès:**

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

- **Réponse d'erreur:**

  - **Code:** 400 BAD CONTENT <br />
    **Contenu:** `"missingField": [
    "Missing data for required field."
]`

    OU

  - **Code:** 404 NOT FOUND <br />
    **Contenu:** `{
    "error": "User not found in database"
}`
