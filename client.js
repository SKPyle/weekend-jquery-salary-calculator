$(document).ready(readyNow);

//let posts = [];
let submissions = []; 
let totalSalary = [];
let isolatedSalary = [];


function readyNow() {
  console.log("DOM is loaded!");

    let el = $('#totalSalary')
    el.empty();
    el.append(totalSalary);

    $('#empSubmit').on('click', addEmployeeData);      //event handlers to push employee data to empty array
    $('#empSubmit').on('click', displayData);          //displays data on the DOM 
    $('#empSubmit').on('click', calculateTotalSalary); //adds multiple employee salaries together
    $('#empDelete').on('click', removeButton);

}

function displayData(){
    console.log('In displayData');
    
let el = $('#row1');
el.empty();
for (let submission of submissions){  //looping  through submissions and displaying input information
  el.append(`                       
    <li>${submission.firstName}</li>
    <li>${submission.lastName}</li>
    <li>${submission.employeeID}</li>
    <li>${submission.title}</li>
    <li>${submission.annualSalary}</li>
  `)

}

}

function calculateTotalSalary(){              // should calculate employee combined salaries
  console.log('in calculatingTotalSalary');
  
 let isolatedSalary = {
    annualSalary:$('#annualSalary')};





}

function addEmployeeData(){                   
    console.log('In addEmployeeData');
    
let submission = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),          //getting values
    employeeID: $('#employeeID').val(),
    title: $('#title').val(),
    annualSalary: $('#annualSalary').val()

    
}

submissions.push(submission);
console.log(submission);


{

   $('#firstName').val(''),
   $('#lastName').val(''),                 //setting values
   $('#employeeID').val(''),
   $('#title').val(''),
   $('#annualSalary').val('')

}
/*
function removeButton(){
    console.log('in remove button')
  
   let newSubmission = [];
   let contentToDelete = $(this)              //what is $(this) referencing?
     .parent()
     .siblings()
     .first()
     .text();
     console.log('content to delete,', contentToDelete);
 
         for (let submission of submissions){
         if (contentToDelete !== submission.firstName){
           newSubmission.push(submission);
 }
       submission = newSubmission;
       
 }


}
}
*/

}