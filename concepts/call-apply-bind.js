let username ={
    id: 1,
    name: "moiz",
    category: "maths",
    printDetails: function (state, country, count){
    console.log(this.category ,state, country, count)
}
}
username.printDetails("karachi", "camb", "count");
//printDetails.call(username, "karachi")

let username2 ={
    id:2,
    name: "hasnain",
    category: "phy"
}

//username.printDetails.apply(username2, ["camb", "london", "lon"]);
let newfun = username.printDetails.bind(username2,"camb", "london", "lon");
newfun();
//printDetails.call(username2, "camb")