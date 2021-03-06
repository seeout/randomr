'use strict';

const hooks = require('./hooks');
const memoryService = require('feathers-memory');

class Service {
  constructor(options) {
    if(typeof options === 'undefined') options = {};
    this.options = options;
  }

  setup(app){
    this.app = app;
  }

  find(params) {
    const dogs = this.app.service('dogs');
    const cats = this.app.service('cats');

    let cleanId = (animal) => {
      delete animal['_id']
      return animal
    }

    let ownerQuery = {query: {owner: params.query.name}};

    return Promise.all([dogs.find(ownerQuery), cats.find(ownerQuery)]).then(animals => {
      let resolution = {
        dogs: animals[0].data.map(cleanId),
        cats: animals[1].data.map(cleanId)
      };
      return Promise.resolve(resolution);
    });
  }

  get(id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create(data, params) {
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/animals', new Service());

  // Get our initialize service to that we can bind hooks
  const animalService = app.service('/animals');

  // Set up our before hooks
  animalService.before(hooks.before);

  // Set up our after hooks
  animalService.after(hooks.after);
};

module.exports.Service = Service;
