'use strict';

import angular from 'angular';

export class BreedOptionComponent {
  /*@ngInject*/
  constructor($location) {
    'ngInject';
    this.$location = $location;
    this.imageUrl = 'test';
  }

}

export default angular.module('directives.breedOption', [])
  .component('breedOption', {
    template: require('./breedOption.html'),
    controller: BreedOptionComponent,
    controllerAs: 'breedOptionController',
    bindings: {
      breed: '='
    }
  })
  .name;
