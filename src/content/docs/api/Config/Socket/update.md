---
title: Update
description: A guide in my new Starlight docs site.
---

## Description
L'evenement `update` permet d'envoyer la mise à jour de la configuration du miroir magique au client. Celui ci est envoyé lors de la modification de la configuration du miroir magique. Cette evenement est déclenché sur tout les clients connectés au socket ayant un `_id` correspondant à celui de la configuration modifiée.

## Valeurs envoyées
Lors de la mise a jour de la configuration, l'évenement `update` est déclenché et possède les valeurs suivantes :
- `_id=[string]` : L'id de l'utilisateur
- `timeZone=[object]` : La configuration de la timeZone, comprenant:
  - `code=[string]` : Le code de la timeZone
  - `offset=[string]` : Le décalage horaire
- `kioskIdleTime=[object]` : heures d'activation et de désactivation du mode kiosk, comprenant:
  - `start=[string]` : L'heure de début
  - `end=[string]` : L'heure de fin
- `weather[object]` : Objet gérant la météo, comprenant:
  - `cityId=[string]` : L'id de la ville
  - `celcius=[boolean]` : Le format de la température
- `isMilitaryTime=[boolean]` : Le format de l'heure
- `desktopIdleDelay=[int]`: Le délai avant le passage en mode veille
- `localization=[string]`: La langue du miroir