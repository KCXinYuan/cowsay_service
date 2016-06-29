const angular = require('angular');
const app = angular.module('CowApp', []);

require('./services')(app);
require('./cow')(app);
