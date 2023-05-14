---
layout: ../../layouts/project.astro
title: Application d'émargement électronique
client: 
publishDate: 2023-04-15
img: 
  - https://images.unsplash.com/photo-1563986768609-322da13575f3?&w=1400&q=80
  - https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1400&q=80
  - https://images.unsplash.com/photo-1505415055475-143e29dd0b6a?w=1400&q=80
description: |
  Création d'une application d'émargement électronique pour les écoles de l'ISEN.
tags:
  - Web App
  - Mobile App
  - API
video: https://www.youtube.com/watch?v=D5oqfVGNytM
---

Ce projet est une solution d'application web et mobile pour simplifier la gestion de la présence des étudiants dans les établissements d'enseignement. Il a été développé pour l'ISEN, mon école d'ingénieur, dans le cadre de mon projet M1. Mon binôme et moi même avons mené ce projet de A à Z, de la conception à la réalisation. 

L'application Web codée en React.JS permet :
- la création/modification/suppression de sessions d'émargement par l'administration.
- la création/modification/suppression de groupes d'étudiants par l'administration.
- la visualisation des présences/absences pour les sessions d'émargement terminées.

L'application mobile codée en React Native offre : 
- Aux enseignants :
  - la possibilité de voir les sessions d'émargement à venir les concernant.
  - la possibilité de faire émarger les étudiants via le NFC de leur smartphone.
  - la visualisation en temps réel des étudiants présents/absents.
- Aux étudiants :
  - la possibilité de voir les sessions d'émargement à venir les concernant.
  - la possibilité d'émarger via le NFC de leur smartphone.

La communication entre les applications et la base de données MySQL se fait via une API REST codée en PHP Symfony.