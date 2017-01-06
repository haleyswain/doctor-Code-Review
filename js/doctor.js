// back-end file
var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctor = function() {
  console.log('Im a doctor object!');
}

exports.doctorModule = Doctor;
