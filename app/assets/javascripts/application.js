// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .


 function hideThis() {
  var number = document.getElementsByClassName("row").length;
  var location = document.getElementsByClassName("row")[number -1];
  location.style.display = 'none';

}


 function showThis() {
   var number = document.getElementsByClassName("row").length;
   var location = document.getElementsByClassName("row")[number -1];
   location.style.display = 'block';
 }

function onlyOnce() {
  var findButton = document.getElementsByClassName('btn').length;
  document.getElementsByClassName('btn')[findButton-1].disabled = true;
}




function findStuff() {
  description  = document.getElementsByName("#anchor-desription").href;
  students = document.getElementsByName("#anchor-students").href;
  assignments = document.getElementsByName("#anchor-assignments").href;
  lessons = document.getElementsByName("#anchor-lessons").href;
  policies = document.getElementsByName("#anchor-policies").href;

}
