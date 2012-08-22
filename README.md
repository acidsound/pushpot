jsonp-repo
=============

simply implemented JSONP repository with node.js
no database. no auth.

### Install & Run
1. git clone
1. npm install
1. mkdir repo
1. node app.js

### Usage
1. create repo : http://URL/?data=<json string>
1. read repo. : http://URL/get/<uuid>
1. read repo. with JSONP : http://URL/get/<uuid>?callback=<your function name>
1. update repo : http://URL/<uuid>/?data=<json string>

### working demo
1. client side example: [jsbin](http://jsbin.com/evijes/1/edit)
1. server : [demo](http://jsonp-repo.aws.af.cm)