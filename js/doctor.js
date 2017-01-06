// back-end file
var apiKey = require('./../.env').apiKey;
function Doctor() {
}

var showDoc = function(first_name, last_name) {
  $('#showDoctor').append(first_name, last_name);
}

$(document).ready(function() {
  var currentDoctorObject = new Doctor;
  $("#showIllness").click(function() {
    var medicalIssue = $("#illness").val();
    currentDoctorObject.getDoctor(medicalIssue, showDoc);
  })
})

Doctor.prototype.getDoctor = function(medicalIssue, showDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key='+ apiKey).then(function(result) {
      for (i = 0; i <= 19; i++) {
        console.log(result.data[i].profile.first_name + " " + result.data[i].profile.last_name);
        var first_name = result.data[i].profile.first_name;
        var last_name = result.data[i].profile.last_name;
        $('#showDoctor').append(first_name + last_name);
      }
    })
    .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
