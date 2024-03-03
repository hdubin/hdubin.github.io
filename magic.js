// console.log ("C:\Users\Daniella\Desktop");
const data = { };
function displayDate(){
    document.getElementById('date').innerHTML = Date()
}

function getValue(input) {
    // console.log(input.value);
    data[input.id] = input.value;
}

function submitData(){
    // console.log(data.fname); // Get the first name from the object
    // console.log(data); // return object
    var data = new FormData(document.querySelector('form'));
    console.log(JSON.stringify(data));
    alert('got all the form values!\nfirst name: '+ data.fname + '\nlast name: ' + data.lname + '\nage: ' + data[age]);
}

// document.getElementById('schizoForm').addEventListener("click", function (e) {
//     e.preventDefault();
    
//     var formData = new FormData(form);
//     // output as an object
//     console.log(Object.fromEntries(formData));
    
//     // ...or iterate through the name-value pairs
//     for (var pair of formData.entries()) {
//         console.log(pair[0] + ": " + pair[1]);
//     }
// });
// function getElems() { 
//     alert('got all the form values!')
// }