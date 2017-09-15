'use strict'

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })

// all routes created

.get('/posts/:id', 'posts#show')
.get('/posts', 'posts#index')
.patch('/posts/:id', 'posts#update')

// **** Need to GET:
// All posts by all users
// All pages by all users
// All posts by current user
// All pages by current user
// One post by current user
// One page by current User

// **** Need to UPDATE:
// One part of one page by current user, without deleting other content
// One part of one post by current user, without deleting other content

// **** Need to DELETE:
// One post by current user
.delete('/posts/:id', 'posts#destroy')
// One page by current user
.delete('/pages/:id', 'pages#destroy')

// **** Need to CREATE:
// One page by current user
.post('/pages', 'pages#create')
// One post by current user
.post('/posts', 'posts#create')
