---
title: Socketevent Config
description: A guide in my new Starlight docs site.
---

## Description
L'evenement `config` permet d'envoyer la configuration du miroir magique au client. Celui ci est envoyé lors de la connection du client au socket.

## Paramètres
- `_id=[string]` : L'id de l'utilisateur, celui ci permet de retrouver et d'envoyer au client les données de configuration, si celles ci existent.

### Valeurs de retour

**Succès** : <br>
En cas de succès et si l'id est existant, le client reçoit un objet JSON contenant les données de configuration du miroir magique.<br>
Les données sont les suivantes : 
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

- `HTTP Code: 200`
  
En cas de succès et si l'id n'existe pas, le client recoit le message suivant: 
- `"warning=[string]": "No data found with this id"`
- `HTTP Code: 204`

**Echec** : <br>
Si l'id est manquant, le client reçoit le message suivant :
- `'Error': '_id is required'`
  