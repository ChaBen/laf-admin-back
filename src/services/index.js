const users = require('./users/users.service.js');
const tickets = require('./tickets/tickets.service.js');
const press = require('./press/press.service.js');
const channel = require('./channel/channel.service.js');
const artists = require('./artists/artists.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tickets);
  app.configure(press);
  app.configure(channel);
  app.configure(artists);
};
