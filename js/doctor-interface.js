// front-end file

var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;


var showDoc = function(first_name, last_name) {
  $('#showDoctor').append(first_name, last_name);
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $("#showIllness").click(function() {
    var medicalIssue = $("#illness").val();
    currentDoctorObject.getDoctor(medicalIssue, showDoc);
  });
});
