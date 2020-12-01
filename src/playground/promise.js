const promise = new Promise((resolve, reject) => {
    resolve('This is my resolved data');
    //reject('Something went wrong');
    
});


//promise chaining
promise.then((data) => {
    console.log(data);
    return 'arg'
}).then((arg) => {
    console.log('2nd promise', arg);
}).catch((error) => {
    console.log(error);
});

// promise.then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// })