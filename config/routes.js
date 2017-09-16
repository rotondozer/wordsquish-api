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

// One post from current user?
.patch('/posts/:id', 'posts#update')
// One page from current user
.patch('/pages/:id', 'pages#update')

// **** Need to GET posts:
// All posts by all users
.get('/posts', 'posts#index')
// All posts by current user
.get('/posts/:user_id/my_posts', 'posts#indexUserPosts')
// One post from any user
.get('/posts/:id', 'posts#show')
// All pages by all users
.get('/pages', 'pages#index')
// One page from any user
.get('/pages/:id', 'posts#show')
// All pages by current user
.get('/pages/:user_id/my_pages', 'pages#indexUserPages')

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
