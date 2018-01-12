import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
  $http;

  /*@ngInject*/
  constructor($location) {
    'ngInject';
    this.$location = $location;
    this.breeds = ['test1', 'test2', 'test3'];
    this.selectedBreeds = [];
  }

  addBreed(breed) {
    if(this.selectedBreeds.includes(breed)) {
      window.alert('Grr! You have already caught that breed!');
    }
    else if(!this.breeds.includes(breed)) {
      window.alert('Arf! That is not a dog breed we recognize!');
    }
    else {
      this.selectedBreeds.push(breed);
    }
  }
}

export default angular.module('feExamCandidateEhApp.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'mainController'
  })
  .name;
