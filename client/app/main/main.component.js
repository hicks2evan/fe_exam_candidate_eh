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

  findBreedObject(breed) {
    var result = this.breedObjects.filter(function(obj) {
      return obj.name === breed;
    });
    console.log(result[0]);
    return result[0];
  }

  addBreed(breed) {
    var breedObj = this.findBreedObject(breed);
    if(!this.breeds.includes(breed)) {
      window.alert('Arf! That is not a dog breed we recognize!');
    }
    else if(this.selectedBreeds.includes(breedObj)) {
      window.alert('Grr! You have already caught that breed!');
    }
    else {
      this.selectedBreeds.unshift(breedObj);
      console.log(breedObj);
    }
  }

  deleteBreed(breed) {
    this.selectedBreeds = this.selectedBreeds.filter(function(obj) {
      return obj !== breed;
    });
  }

  deleteAllBreeds() {
    this.selectedBreeds = [];
  }

  addRandomBreed() {
    if(this.selectedBreeds.length === this.breedObjects.length) {
      window.alert('Woof! You have already caught all of the breeds!');
    } else {
      var someBreed = this.breeds[Math.floor(Math.random() * Math.floor(this.breeds.length))];
      var breedObj = this.findBreedObject(someBreed);
      while(this.selectedBreeds.includes(breedObj)) {
        someBreed = this.breeds[Math.floor(Math.random() * Math.floor(this.breeds.length))];
        breedObj = this.findBreedObject(someBreed);
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
