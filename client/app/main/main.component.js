import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($location, $http) {
    'ngInject';
    this.$location = $location;
    this.$http = $http;
    this.breeds = [];
    this.breedObjects = [];
    this.selectedBreeds = [];
    this.getBreeds();
  }

  getBreeds() {
    this.$http.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        this.breeds = Object.keys(response.data.message);
        this.getBreedImages();
      })
      .catch(err => {
        console.log(err);
      })
  }

  getBreedImages() {
    this.breeds.forEach((aBreed) => {
      var image;
      this.$http.get('https://dog.ceo/api/breed/'+ aBreed + '/images/random')
        .then(response => {
           image = response.data.message;
           this.breedObjects.push({'name': aBreed, 'image' : image});
        })
        .catch(err => {
          console.log(err);
        })
    });
  }

  addBreed(breed) {
    console.log(this.breedObjects[breed]);
    if(this.selectedBreeds.includes(breed)) {
      window.alert('Grr! You have already caught that breed!');
    }
    else if(!this.breeds.includes(breed)) {
      window.alert('Arf! That is not a dog breed we recognize!');
    } else {
      this.selectedBreeds.push(breed);
    }
  }

  addRandomBreed() {
    if(this.selectedBreeds.length === this.breeds.length) {
      window.alert('Woof! You have already caught all of the breeds!');
    } else {
      var someBreed = this.breeds[Math.floor(Math.random() * Math.floor(this.breeds.length))];
      while(this.selectedBreeds.includes(someBreed)) {
        someBreed = this.breeds[Math.floor(Math.random() * Math.floor(this.breeds.length))];
      }
      this.addBreed(someBreed);
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
