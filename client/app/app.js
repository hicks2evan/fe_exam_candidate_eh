'use strict';

import angular from 'angular';
<<<<<<< HEAD
=======
// import ngAnimate from 'angular-animate';
>>>>>>> 59db39264133a46d6b40000f9ab9d87ec01f5a79
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';
<<<<<<< HEAD
import 'angular-validation-match';
=======
>>>>>>> 59db39264133a46d6b40000f9ab9d87ec01f5a79

import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

<<<<<<< HEAD
import './app.scss';

angular.module('webProjectsApp', [ngCookies, ngResource, ngSanitize, ngRoute, uiBootstrap, 'validation.match', navbar, footer, main, constants, util
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['webProjectsApp'], {
=======
import './app.css';

angular.module('feExamCandidateEhApp', [ngCookies, ngResource, ngSanitize, ngRoute, uiBootstrap,
  navbar, footer, main, constants, util
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['feExamCandidateEhApp'], {
>>>>>>> 59db39264133a46d6b40000f9ab9d87ec01f5a79
      strictDi: true
    });
  });
