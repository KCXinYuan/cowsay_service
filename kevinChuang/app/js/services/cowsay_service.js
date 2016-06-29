const cowsay = require('cowsay-browser');
module.exports = function(app) {
  app.factory('CowsayService', function() {
    const service = {};
    service.makeCow = function(text, type) {
      text = text || 'moo';
      type = type || 'satanic';
      return cowsay.say({text, f:type});
    };
    return service;
  });
};
