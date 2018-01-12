'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    link: '/'
  }];
<<<<<<< HEAD

  isCollapsed = true;

  constructor($location, Auth) {
    'ngInject';

    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.isStudent = Auth.isStudentSync; //TODO currently set to user role, should be set to student
    this.isTeacher = Auth.isTeacherSync; //TODO currently set to user role, should be set to teacher
    this.getCurrentUser = Auth.getCurrentUserSync;
=======
  $location;
  isCollapsed = true;

  constructor($location) {
    'ngInject';

    this.$location = $location;
>>>>>>> 59db39264133a46d6b40000f9ab9d87ec01f5a79
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
