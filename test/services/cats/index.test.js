'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('cats service', () => {
  it('registered the cats service', () => {
    assert.ok(app.service('cats'));
  });
});
