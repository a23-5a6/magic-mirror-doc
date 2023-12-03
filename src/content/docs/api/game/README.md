---
title: README
description: Projet de miroir intelligent
---

Api pour la gestion de partie 

## Attention !
Il est conseillé d'utiliser directement le projet [Magic-mirror](https://github.com/a23-5a6/magic-mirror)

## Installation
Pour l'initialisation de l'environnement, utiliser les commandes suivante :
`docker compose up -d`

## API
Les points d'entrées pour l'api sont les suivants :
- `GET /weather/{id}` [Récupération de la météo](https://a23-5a6.github.io/magic-mirror-doc/api/weather/endpoint/get/)

## Socket
La connection au socket se fait via l'url suivante : `http://localhost:4999/`. Nous pouvons faire la configuration 
au niveau du [`docker-compose`](./docker-compose.yml). Dans le cas ou un nouveau service doit être ajouté, vous devez 
faire la connexion au socket à l'aide de [Socket.IO](https://socket.io/) en s'assurant de respecter 
les paramètres requis.

## Changelog
### 1.0.0
- Initialisation du projet
- Mise en place de la base de données