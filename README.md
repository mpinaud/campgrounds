# Finders Teepers

An application solely for practice using a tech stack of React, Material-UI & Apollo on the frontend with Prisma & GraphQL Yoga on the backend while deployed to Heroku.

## Known Bugs
Heroku comes with one giant limitation. The app will go to sleep after an hour of inactivity.
When the app is asleep, the next user to access any of its resources will have to wait while the app spins up, resulting in a suboptimal user experience. The screen will be blank for about 30 seconds before the app loads. ⏰

## View
https://campgrounds-yoga-fe-prod.herokuapp.com/#/

# What I Learned
  
* Prisma
  * How to create a connection between Prisma server and database
  * How to create a database schema with type definitions and relations
  * How to generate a set of CRUD API's from the schema
  * How to use the Prisma Playground
  * How to call one endpoint and get specific minimal data returned from the database
  * How to use the Prisma Admin GUI to manually update directly on the tables
  
* GraphQL Yoga
  * How to create a public facing API
  * How to set up a server to handle all query and mutation resolvers
  * How to pass variables as arguments for CRUD operations
  
* Apollo
  * How to store all data to cache
  * How to create CRUD query and mutation resolvers
  * How to mutate data and refresh cache to update the UI
  
* React
  * How to connect the Apollo Client to the backend
  * How to implement a Portal
  * How to implement code splitting in React-Router
  * How to excecute CRUD operations

## Technologies

* React
* JavaScript
* Apollo
* GraphQL Yoga
* Prisma
* Heroku
* Material-UI

## Setup

* Clone this repository from https://github.com/mpinaud/finders-teepers

## By
Mikey Pinaud 12/9/2018
