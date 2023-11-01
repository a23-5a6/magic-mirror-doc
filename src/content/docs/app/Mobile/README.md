---
title: Magic Mirror Mobile
description: Projet de miroir intelligent
---

## Description

Portage mobile de l'application Magic Mirror. Toutes les options de l'application Desktop sont disponibles.

## Installation

### Premiere étape

`Il est important de suivre les étapes dans l'ordre et d'avoir le serveur connecté sur le même reseau que le mobile`

Pour la durée du developpement, la connexion au serveur de l'API doit se faire en passant par l'adresse locale de la machine sur laquelle est hosté la machine virtuelle.

Pour se faire :

**Sur Windows**

- Ouvrir un terminal cmd
- Taper la commande ipconfig

**Sur Mac**

- Ouvrir un terminal
- En connexion filaire, tapez la commande `Ipconfig getifaddr en1`
- En connexion sans fil, tapez la commande `Ipconfig getifaddr en0`

Ensuite, ouvrir le fichier `.env` et coller l'adresse IP a la place de `IPV4ADRESS`.

### Deuxieme étape

Executez la commande `npm install` pour installer les dépendances.  
Activez votre mobile (machine virtuelle ou smartphone avec expo)  
Executez la commande `npm start` ou `npx expo start` pour lancer l'application.
