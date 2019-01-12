const assert = require('assert');
const app = require('../../src/app');

describe('\'press\' service', () => {
  it('registered the service', () => {
    const service = app.service('press');

    assert.ok(service, 'Registered the service');
  });
});
