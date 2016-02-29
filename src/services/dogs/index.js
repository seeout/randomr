'use strict';

const service = require('feathers-memory');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  let options = {
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/dogs', service(options));

  // Get our initialize service to that we can bind hooks
  const dogsService = app.service('/dogs');

  // Set up our before hooks
  dogsService.before(hooks.before);

  // Set up our after hooks
  dogsService.after(hooks.after);
};
