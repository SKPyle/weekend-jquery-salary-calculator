$(document).ready(readyNow);

//let posts = [];
let submissions = []; //garage
let totalSalary = [];






function readyNow() {
  console.log("DOM is loaded!");

  let el = $('#totalSalary')
  el.empty();
  el.append(totalSalary);

  $('#empSubmit').on('click', addEmployeeData);
  $('#empSubmit').on('click', displayData);
  $('#empSubmit').on('click', calculateTotalSalary);

}

function displayData(){
    console.log('In displayData');
    
let el = $('#row1');
el.empty();
for (let submission of submissions){
  el.append(`
  <li>${submission.firstName}</li>
  <li>${submission.lastName}</li>
  <li>${submission.employeeID}</li>
  <li>${submission.title}</li>
  <li>${submission.annualSalary}</li>
  

`)

}

}



function calculateTotalSalary(){
  console.log('in calculatingTotalSalary');


console.log(totalSalary);

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

function removeButton(){
    console.log('in remove button')
   
   let newGarage = [];
   let contentToDelete = $(this)              //what is $(this) referencing
     .parent()
     .siblings()
     .first()
     .text();
     console.log('content to delete,', contentToDelete);
 
         for (let cars of garage){
         if (contentToDelete !== cars.year){
           newGarage.push(cars)
 }
       garage = newGarage;
       render();
 }


}



//posts.push(post);