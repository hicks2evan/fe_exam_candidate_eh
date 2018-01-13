'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';

import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import breedOption from '../components/caughtBreed/caughtBreed.component';
import typeahead from '../components/typeahead/typeahead.component';
import main from './main/main.component';
import constants from './app.constants';

import './app.css';

angular.module('feExamCandidateEhApp', [ngCookies, ngResource, ngSanitize, ngRoute, uiBootstrap, navbar, footer, breedOption, typeahead, main, constants
])
  .config(routeConfig)
angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['feExamCandidateEhApp'], {
      strictDi: true
    });
  });

