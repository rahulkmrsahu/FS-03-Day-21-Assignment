const promise = new Promise((resolve, reject) => {


    let random = Math.floor(Math.random() * 10) + 1

    if (random > 0 || random < 10) {
        resolve("Success" + "   " + "Random number between 1 to 10 is : " + random)

    }
    else {
        reject("Failed")
    }


})

promise.then((message) => {
    console.log("this is in the 'then' " + message)
}).catch((message) => {
    console.log("this is in the 'catch'" + message)

})