'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('animal service', () => {
  it('registered the animals service', () => {
    assert.ok(app.service('animals'));
  });
});
