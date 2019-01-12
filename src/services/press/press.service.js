// Initializes the `press` service on path `/press`
const createService = require('feathers-sequelize');
const createModel = require('../../models/press.model');
const hooks = require('./press.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/press', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('press');

  service.hooks(hooks);
};
