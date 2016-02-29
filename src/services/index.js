'use strict';

const cat = require('./cat');

const dog = require('./dog');

const animal = require('./animal');

const authentication = require('./authentication');
const message = require('./message');
const user = require('./user');
const hooks = require('feathers-authentication').hooks;

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(message);

  app.configure(animal);
  app.configure(dog);
  app.configure(cat);
};
