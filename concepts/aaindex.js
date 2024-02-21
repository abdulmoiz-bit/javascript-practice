let divs = document.getElementsByTagName("div")
let btnel = document.querySelectorAll(".btn")
/*
for (elem of document.getElementsByTagName('div')){
    elem.style.marginTop='90px'
  }
*/

/*
for(let i = 0; i<divs.length; i++){
  divs[i].style.backgroundColor= "red";
  divs[i].innerHTML = "something new...";
}
*/
let i = 0;
/*
while (i < divs.length) {
  divs[i].style.backgroundColor = "red";
  divs[i].innerHTML = "something new...";
  divs[i].style.marginTop='90px'
  i++;
}

do{
  divs[i].style.backgroundColor = "red";
  divs[i].innerHTML = "something new...";
  divs[i].style.marginTop='90px';
  i++;
}
while(i < divs.length);
*/
/*
divs.map(item => item.style.backgroundColor = "red")
divs.forEach(item => item.style.backgroundColor = "red")
*/

btnel.forEach(item => {
  item.addEventListener("click", function(){
    document.querySelector(".special")?.classList.remove("special");
    item.classList.add("special")
    //item.innerHTML = "clicked";
    
  })
})
/*
btnel.addEventListener("click", function(){
  btnel.classList.add("special");
})
*/

