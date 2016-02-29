'use strict';

const dogs = require('./dogs');
const authentication = require('./authentication');
const message = require('./message');
const user = require('./user');
const hooks = require('feathers-authentication').hooks;

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(message);

  app.configure(dogs);
};
