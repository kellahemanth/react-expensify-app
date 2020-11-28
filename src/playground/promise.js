const promise = new Promise((resolve, reject) => {
    //resolve('This is my resolved data');
    reject('Something went wrong');
    
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// promise.then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// })