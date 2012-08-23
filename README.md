jsonp-repo
=============

simply implemented JSONP repository with node.js
no database. no auth.

### Install & Run
1. git clone
1. npm install
1. mkdir repo
1. node app.js -or- forever start -w app.js

### Usage
1. create repo (returns uuid): http://yourDomain/?data=*json string*
1. read repo. : http://yourDomain/get/*uuid*
1. read repo. with JSONP : http://yourDomain/get/*uuid*?callback=*your function name*
1. update repo : http://yourDomain/*uuid*/?data=*json string*

### working demo
1. client side example: [jsbin](http://jsbin.com/evijes/1/edit)
1. demo JSONP-repo server: [demo](http://jsonp-repo.aws.af.cm)

### thanks to
this idea inspired by [ppillip](http://ppillip.com).