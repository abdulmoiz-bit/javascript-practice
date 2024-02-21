function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);
  


/*
/// CALLBACK FUNCTIONS
// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]

function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
 getStudents();

*/
/*
const button = document.querySelector('button')

function toggle(){
    button.classList.toggle(''altColor)
}

button.addEventListener('click', toggle)

button.addEventListener('click', function (){
  button.classList.toggle('altColor')
    
})

button.addEventListener('click', () =>{
    button.classList.toggle('altColor')

})
*/

function firstAction(callback, message, anotherCallback, anotherCallback){
    console.log(message)
    setTimeout(callback, 2000)
    anotherCallback()
    setTimeout(anotherCallback, 4000)
    
}

function secondAction(message){
    console.log(message)
}
function thirdAction(){
    console.log('I am the third action')
}
function fourthAction(message){
    console.log(message);
}

//firstAction()
setTimeout(() => firstAction( ()=> secondAction ('I am the second action'), 'I am the first action', thirdAction, () => fourthAction ('I am the fourth action')), 5000)
