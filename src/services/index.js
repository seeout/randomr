'use strict';

const authentication = require('./authentication');
const message = require('./message');
const user = require('./user');
const hooks = require('feathers-authentication').hooks;

module.exports = function() {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(message);

  app.service('/auth/local').before({
    create: hooks.toLowerCase({fieldName: 'username'})
  });
};
