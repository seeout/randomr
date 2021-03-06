'use strict';

const globalHooks = require('../../../hooks');

const afterFind = (params) => {
  params.result.data = params.result.data.map(m => { m.text = 'haka'; return m })
};

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [afterFind],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
