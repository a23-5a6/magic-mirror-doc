---
title: README
description: Projet de miroir intelligent
---

# magic-mirror-auth
 
Service d'authentification du miroir magique

## Installation
Pour initialisation locale (déconseillée), utiliser les commandes suivante :
- ` Python -m venv .venv `
- ` source .venv/bin/activate `
- ` pip install -r requirements.txt `  
- 
Pour initialisation avec docker, utiliser les commandes suivante :
- `docker compose up -d`

## API  

Les point d'entrées pour l'api sont les suivants :
- [`POST /register : Enregistrement d'un utilisateur`](https://a23-5a6.github.io/magic-mirror-doc/api/auth/endpoint/#post-register)
- [`POST /login : Connexion d'un utilisateur`](https://a23-5a6.github.io/magic-mirror-doc/api/auth/endpoint/#post-login)
- [`POST /pair : Synchroniser un appareil a un utilisateur`](https://a23-5a6.github.io/magic-mirror-doc/api/auth/endpoint/#post-pair)


## Socket
La connection au socket se fait via l'url suivante : `http://localhost:6993/auth`. Nous pouvons faire la configuration 
au niveau du [`docker-compose`](./docker-compose.yml). Dans le cas ou un nouveau service doit être ajouté, vous devez 
faire la connexion au socket à l'aide de [Socket.IO](https://socket.io/) en s'assurant de respecter 
les paramètres requis.

**Evenements**</br>
Les évènements disponibles sont les suivants :
- [`pairing-code : Code généré a la connexion ou a l'expiration du précédent` ](https://a23-5a6.github.io/magic-mirror-doc/api/auth/sockets/#code-de-couplage-des-appareils)
- [`pairing-success : Bearer de l'utilisateur lors du succès de la synchronisation` ](https://a23-5a6.github.io/magic-mirror-doc/api/auth/sockets/#connexion-de-lappareil)