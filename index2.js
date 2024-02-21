/*
let options = [
    "hello i am here",
    "hello i am there",
    "hello i am nowhere",
    "hello i have everything",
    "hello! how are you"
]
*/

var w = window.innerWidth;
var h = window.innerHeight;

var x = document.getElementById("demo");
x.innerHTML = "Browser width: " + w + ", height: " + h + ".";

const todoBox = document.getElementById('to-do-box')
//const myBtn = document.getElementById('myBtn')
const text = document.getElementById('text');

text.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        add(this.value);
        this.value = "";
    }
} );

function add(item){
    //let randomOptions = Math.floor(Math.random() * options.length); 
    //document.getElementById('addnote').innerHTML = options[randomOptions]
    //const text = document.getElementById('text').value;
    const listItem = document.createElement("li");
    listItem.classList.add("todostyle")
    listItem.innerHTML= `${item}`
    todoBox.appendChild(listItem);
}

let obj = {
    name: "moiz",
    fname: "rashid"
}
console.log(obj)
