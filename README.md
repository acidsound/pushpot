pushpot
=============

simply implemented single-unique repository with node.js

no database. no auth.

supports CORS & JSONP

### Install & Run
1. git clone
1. npm install
1. node app.js -or- [forever](https://github.com/nodejitsu/forever) start -w app.js [recommended]

### Usage
1. create repo (returns uuid): http://yourDomain/?data=`json string`
1. read repo : http://yourDomain/get/`uuid`
1. read repo with JSONP : http://yourDomain/get/`uuid`?callback=`your function name`
1. update repo : http://yourDomain/`uuid`/?data=`json string`
1. update repo with JSONP : http://yourDomain/`uuid`/?callback=`your function name`&data=`json string`

### working demo
1. client side example: [jsbin](http://jsbin.com/evijes/11/edit)
1. demo JSONP-repo server: [demo](http://pushpot.aws.af.cm)

### thanks to
this idea inspired by [ppillip](http://ppillip.com).