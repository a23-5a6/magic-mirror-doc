---
title: README
description: Projet de miroir intelligent
---

## Description

Portage mobile de l'application Magic Mirror. Toutes les options de l'application Desktop sont disponibles.

## Installation

`Il est important de suivre les étapes dans l'ordre et d'avoir le serveur connecté sur le même reseau que le mobile`

Pour la durée du developpement, la connexion au serveur de l'API doit se faire en passant par l'adresse locale de la machine sur laquelle est hosté la machine virtuelle.

Pour se faire :

#### Sur Windows

- Ouvrir un terminal cmd
- Taper la commande ipconfig

#### Sur Mac

- Ouvrir un terminal
- En connexion filaire, tapez la commande `Ipconfig getifaddr en1`
- En connexion sans fil, tapez la commande `Ipconfig getifaddr en0`

Ensuite, ouvrir le fichier `.env` et coller l'adresse IP a la place de `IPV4ADRESS`.

Pour pouvoir faire l'installation des packages, il est important d'être connecté a npm.pkg.github.com. Pour plus d'information, vous pouvez lire la [documentation officiel](https://docs.github.com/fr/packages/learn-github-packages/introduction-to-github-packages). 

Pour la connexion, il sera donc possible d'utiliser les identifiants comme suit:

```
npm login --scope=@a23-5a6 --registry=https://npm.pkg.github.com
username: [Github username]
password: ghp_[token]
```

`npm install` pour installer les dépendances.    

`npm start` pour lancer l'application.

## Mini jeu

Depuis la version [1.4.0](https://a23-5a6.github.io/magic-mirror-doc/app/mobile/changelog/#140), il est possible de jouer a un mini jeu sur un appareil de bureau connecté. 

### Créer une partie

Pour créer une partie assurez-vous d'être connecté et d'avoir un appareil de bureau connecté. Cliquer sur l'icone de manette, entrez un pseudo, puis `Créer une partie`. Vous serez alors emmené sur le lobby et un code QR sera affiché sur votre autre appareil. D'autres joueurs pourrons ensuite [rejoindre](#rejoindre-une-partie) votre partie en numérisant votre code. Une fois tout les joueurs connecté, vous pourrez démarrer la partie.

### Rejoindre une partie

Pour rejoindre une partie, vliquer sur l'icone de manette, puis `Rejoindre une partie`. Vous serrez alors emmener vers la page qui vous permettra de vous connecter. Pour se faire, simplement pointer la caméra vers le code QR affiché à l'écran. Après un court instant, vous serez emmené au lobby en attendant le démarrage de la partie.

### Déroulement de la partie

Une fois la partie démarré, un écran s'affichera sur votre appareil mobile. Le but du jeux est d'invoquer des unité en cliquant le plus rapidement possible sur votre écran. Il y a 3 unité de disponible avec chacun un nombre de clic requis et avoir une vitesse de déplacement et un nombre de vie différent.

## Autheurs

[Maxime Lefebvre-Ouelette](https://github.com/xalixilax)  
[Romain Roux](https://github.com/sh3p4rd83)