// front-end file

var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var medicalIssue = $('#illness').val();


$(document).ready(function() {
  $('#showIllness').submit(function(event) {
    $('#showDoctor').empty();
    event.preventDefault();
  });
  var currentDoctorObject = new Doctor();
  currentDoctorObject.getDoctor();
      $('#illness').val("");

});
