//const grid = document.createElement("div");
//grid.classList.add("grid")
/*
const div = document.querySelector(".grid");
const sub = document.createElement("h1");
div.appendChild(sub);
sub.classList.add("heading");
sub.innerText = "moiz";
sub.style.color = "blue";
sub.style.textAlign= "center"
*/
/*
function clickHandler(color){
  return function(){
    document.body.style.backgroundColor = `${color}`
  }
}
*/
/*
document.getElementById("orange").onclick = function click(){
    document.body.style.backgroundColor = "orange"
  }
document.getElementById("orange").onclick = clickHandler("orange")

document.getElementById("orange").addEventListener("click", function(){
    document.body.style.backgroundColor = "orange"
})
*/ 

/*
function changeText(){
    document.getElementById("text").innerText = "I am here"
  }

  function changeText2(){
    document.getElementById("text").innerText = "I am here moiz"
  }
*/

/*
document.getElementById("button").addEventListener("click", function() {
  document.getElementById("text").innerText = "I am here"
}
)

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("text").innerText = "you are there"
  }
  )
*/

document.getElementById("text").addEventListener("click", function(){
    //this.innerHTML= "this is hasnain";
    this.innerHTML="oho you r awesome"
})
