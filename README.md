# Finders Teepers

An application to practice using a tech stack of React, Material-UI & Apollo on the frontend with Prisma & GraphQL Yoga on the backend while being deployed on to Heroku. This app is fully responsive.

![cover](https://github.com/mpinaud/finders-teepers/blob/master/src/assets/readme/cover.png)
![cover](https://github.com/mpinaud/finders-teepers/blob/master/src/assets/readme/form.png)
![cover](https://github.com/mpinaud/finders-teepers/blob/master/src/assets/readme/details.png)

## Known Bugs
The Heroku free dyno type subscription comes with one giant limitation. The app will go to sleep after 30 minutes of inactivity. When the app is asleep, the next user to access any of its resources will have to wait while the app spins up, resulting in a suboptimal user experience. The screen could be blank for up to 30 seconds before the app loads. ⏰

## View
https://campgrounds-yoga-fe-prod.herokuapp.com/#/

# What I Learned
  
* Prisma
  * How to create a connection between Prisma server and database
  * How to create a database schema with type definitions and relations
  * How to generate a set of CRUD API's from the schema
  * How to use the Prisma Playground
  * How to call one endpoint and get specific minimal data returned from the database
  * How to use the Prisma Admin GUI to manually update nodes direct within each table
  
* GraphQL Yoga
  * How to create a public facing API
  * How to set up a server to handle all query and mutation resolvers
  * How to pass variables as arguments for CRUD operations
  
* Apollo
  * How to store all data to cache
  * How to create CRUD query and mutation resolvers
  * How to excecute CRUD operations
  * How to refresh cache after a mutation to update the UI
  
* React
  * How to connect the Apollo Client to the backend
  * How to implement a Portal
  * How to implement router side code splitting
  * How to use react-router to redirect to new campground detail page after mutation is executed

* Material-UI
  * How to implement an MUI theme
  * How to use MUI theme variables
  * How to implement MUI theme overrides
  * How to use the width API to execute media queries
  * How to override all the class names injected by Material-UI for custom CSS properties
  
## Wish List
  * Loading Bar
  * Full CRUD functionality on the frontend including delete and edit
  * Animation page transisions
  * Authentication with login

## Technologies

* React
* JavaScript
* Apollo
* GraphQL Yoga
* Prisma
* Heroku
* Material-UI

## Setup

* Clone these repositories
  * https://github.com/mpinaud/finders-teepers
  * https://github.com/mpinaud/finders-teepers-server

## By
Mikey Pinaud 12/9/2018
