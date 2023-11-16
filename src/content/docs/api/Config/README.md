---
title: README
description: Magic Mirror
---

Configuration du miroir magique

## Installation

Pour initialisation locale (déconseillée), utiliser les commandes suivante :
- ` Python -m venv .venv `
- ` source .venv/bin/activate `
- ` pip install -r requirements.txt `

Pour initialisation avec docker, utiliser les commandes suivante :
- `docker compose up -d`

## API
Les points d'entrées pour l'api sont les suivants :  
- [`POST /config : Création d'une configuration`](https://a23-5a6.github.io/magic-mirror-doc/api/config/endpoints/#post)
- [`PUT /config : Modification d'une configuration`](https://a23-5a6.github.io/magic-mirror-doc/api/config/endpoints/#puts)

## Socket
La connection au socket se fait via l'url suivante : `http://localhost:4999/`. Nous pouvons faire la configuration 
au niveau du [`docker-compose`](./docker-compose.yml). Dans le cas ou un nouveau service doit être ajouté, vous devez 
faire la connexion au socket à l'aide de [Socket.IO](https://socket.io/) en s'assurant de respecter 
les paramètres requis.

**Paramètres optionnels**
- Aucun

**Evenements**</br>
Les évènements disponibles sont les suivants :
- [`config : Envoi de la configuration`](https://a23-5a6.github.io/magic-mirror-doc/api/config/socket/#config)
- [`update : Envoi de la mise à jour de la configuration`](https://a23-5a6.github.io/magic-mirror-doc/api/config/socket/#update)

## Changelog
### 2.1.0
- Suppression des ID lors de l'envoie de config

### 2.0.0
- Ajout configuration de la météo

### 1.1.0
- Correction du port d'accès aux sockets et a l'API
- Correction de l'accès a la BD depuis l'extérieur

### 1.0.0
- Initialisation du projet