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
- `POST /config` [Création d'une configuration](./Endpoint/configs_POST.md)
- `PUT /config` [Modification d'une configuration](./Endpoint/configs_PUT.md)

## Socket
La connection au socket se fait via l'url suivante : `http://localhost:4999/`. Nous pouvons faire la configuration 
au niveau du `docker-compose`. Dans le cas ou un nouveau service doit être ajouté, vous devez 
faire la connexion au socket à l'aide de [Socket.IO](https://socket.io/) en s'assurant de respecter 
les paramètres requis.

**Paramètres requis**
- `_id=[string]` : L'id de l'utilisateur

**Paramètres optionnels**
- Aucun

**Evenements**</br>
Les évènements disponibles sont les suivants :
- [`config` : Envoi de la configuration](./Socket/update.md)
- [`update` : Envoi de la mise à jour de la configuration](./Socket/config.md)