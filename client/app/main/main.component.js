import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
<<<<<<< HEAD
=======
  $http;
>>>>>>> 59db39264133a46d6b40000f9ab9d87ec01f5a79

  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }
}

<<<<<<< HEAD
export default angular.module('webProjectsApp.main', [ngRoute])
=======
export default angular.module('feExamCandidateEhApp.main', [ngRoute])
>>>>>>> 59db39264133a46d6b40000f9ab9d87ec01f5a79
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
