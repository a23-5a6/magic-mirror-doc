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

## Authors

[Maxime Lefebvre-Ouelette](https://github.com/xalixilax)  
[Romain Roux](https://github.com/sh3p4rd83)