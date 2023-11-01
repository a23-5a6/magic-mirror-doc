---
title: README
description: Projet de miroir intelligent
---

## Bien démarrer

### Dépendances

L'application mobile utilise un API pour la gestion des configuration. Bien qu'elle ne soti pas nécessaire, il est fortement recommendé de l'utilisé afin de permettre la synchronisation de nos appareils.

### Installation et initialisation

Afin de permettre la synchronisation, vous devez utiliser [Magic Mirror Config](https://github.com/a23-5a6/magic-mirror-config). Le lien de l'API peut-être modifier dans le [.env](./.env).

Pour pouvoir faire l'installation des packages, il est important d'être connecté a npm.pkg.github.com. Pour plus d'information, vous pouvez lire la [documentation officiel](https://docs.github.com/fr/packages/learn-github-packages/introduction-to-github-packages). 

Pour la connexion, il sera donc possible d'utiliser les identifiants comme suit:

```
npm login --scope=@a23-5a6 --registry=https://npm.pkg.github.com
username: [Github username]
password: ghp_[token]
```

`npm install` pour récupérer et installer les packages nécessaires 

`npm start` pour lancer en local

`npm run make` pour build l'application en un format executable

<span style="color:red"> Si le build est effectué sur Debian ou Ubuntu, il faut executer la commande suivante au préalable : ` sudo apt-get install rpm` </span>

## Authors

[Maxime Lefebvre-Ouelette](https://github.com/xalixilax)  
[Romain Roux](https://github.com/sh3p4rd83)


