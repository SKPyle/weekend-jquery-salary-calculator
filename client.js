$(document).ready(readyNow);

//let posts = [];

function readyNow() {
  console.log("DOM is loaded!");
  $('#empSubmit').on('click', fillInField);

}

function addEmployeeData(){
    console.log('In addEmployeeData');
let submission = {
    firstName: $('#contentInput').val(),
    lastName: $('#authorInput').val(),          //getting values
    ID: $('#dateInput').val(),
    title: $('#dateInput').val(),
    annualSalary: $('#dateInput').val(),
    ID: $('#dateInput').val(),

}

    }
   $('#contentInput').val(''),
   $('#authorInput').val(''),                 //setting values
   $('#dateInput').val('')

//posts.push(post);