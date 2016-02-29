'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('dogs service', () => {
  it('registered the dogs service', () => {
    assert.ok(app.service('dogs'));
  });
});
