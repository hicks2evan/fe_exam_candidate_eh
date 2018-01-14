'use strict';

import angular from 'angular';

export class CaughtBreedComponent {
  /*@ngInject*/
  constructor($location) {
    'ngInject';
    this.$location = $location;
  }

}

export default angular.module('directives.caughtBreed', [])
  .component('caughtBreed', {
    template: require('./caughtBreed.html'),
    controller: CaughtBreedComponent,
    controllerAs: 'caughtBreedController',
    bindings: {
      breed: '=',
      delete: '&'
    }
  })
  .name;
