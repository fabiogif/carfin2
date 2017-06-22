angular.module('pedidorapido').constant('consts', {
  appName: 'Ey! Pag',
  version: '1.0',
  owner: 'Fabio',
  year: '2017',
  site: 'http://',
  apiUrl: 'http://localhost:3003/api',
  oapiUrl: 'http://localhost:3003/oapi',
  userKey: '_primeira_app_user'
  
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])