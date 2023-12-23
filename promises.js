const promiseOne = new Promise(function(resolve,reject){
// Do an async task 
// DB calls , cryptography , network

setTimeout(function(){
    console.log('Async task is complete');
    resolve() // connected with then promise consume
},1000)
}) 

promiseOne.then(function(){
    console.log('promise consumed');
}) //relation with resolve


new Promise(function(resolve , reject){

    setTimeout(function(){
        console.log("async is two ");
        resolve();
    },2000)

}).then(function(){
    console.log("promise 2 is consumed");
})


//promise three

const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
          resolve({username:"Sandeep",email: "sandeep@xyz.com"})
    },1000)

})

promiseThree.then(function(user){
    console.log(user)
})


// promise 4

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"sandy",password:"@123"})
        }
        else {
            reject('Error: Something went wrong') //reject connect to catch
        }
    },1000);

})

promiseFour.then(function(user){
     console.log(user);
     return user.username
}).then(function(username){
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('promise is rejected  and resolve ');
})//chaining


// promisefive 
const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({lang:"javaScript",frameWork:"React"})
        }else {
            reject('Error:Syntax error')
        }
    },1000)
})

// promisefive.then()

// async await use krke bhi promise consume kar skte h
async function consumePromiseFive(){
    try {
        const response = await promisefive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }

}
consumePromiseFive()

//async ke andhar await likhte h ....promise response aata h
// jiss cheeze ko krne mai time lgta h uske aage await likhte h jaise fetch , response.json() 
// async function getAllUsers(){
//     try {
//         const response = await fetch('http://api.github.com/users/hiteshchoudhary')
//        const data = await response.json()
//        console.log(data); 
//     } catch (error) {
//         console.log("E: ",error);
//      }
// }
// getAllUsers()

fetch('http://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
}).then(function(data){
   // thenable - chaining
   console.log(data); 
})
.catch((error) => {
console.log(error);
})