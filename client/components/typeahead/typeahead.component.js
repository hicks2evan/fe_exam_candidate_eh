'use strict';

import angular from 'angular';

export class TypeaheadComponent {

  constructor($location) {
    'ngInject';

    this.$location = $location;
    this.selected = [];
    this.tests = ['string1', 'string2', 'string3'];
  }
}

export default angular.module('directives.typeahead', [])
  .component('typeahead', {
    template: require('./typeahead.html'),
    controller: TypeaheadComponent,
    controllerAs: 'typeaheadController'
  })
  .name;
