/*console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]


function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
*/







let p= new Promise((resolve, reject) => {
     let a= 1+1
     if(a===2){
         resolve('Success')
     } else{
         reject('Failed')
     }

})

p.then((message) => {
    console.log('this is in the then ' + message)
}).catch((message) =>{
    console.log('this is in the catch' + message)
}
)

/*
const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
              name: "userLeft",
              message: "left",
            });
          } else if (userWatchingCatMeme) {
            reject({
              name: "user Watching Cat Meme ",
              message: "webdev",
            });
          } else {
            resolve("thumbnail up and subscribe");
          }
    })
}

watchTutorialPromise().then((message) => {
    
      console.log("Success: " + message);
    }).catch((error) => {
    
      console.log(error.name + "" + error.message);
    }
  );

*/
/*
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')    
})


Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree

]).then((messages) =>{
console.log(messages)
})
*/

  /*
function watchTutorilaCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "userLeft",
      message: "left",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "user Watching Cat Meme ",
      message: "webdev",
    });
  } else {
    callback("thumbnail up and subscribe");
  }
}

watchTutorilaCallback(
  (message) => {
    console.log("Success: " + message);
  },
  (error) => {
    console.log(error.name + "" + error.message);
  }
);

*/