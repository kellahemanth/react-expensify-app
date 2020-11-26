// Object Destructuring

// const person = {
//     name: 'Hemanth',
//     age: 26,
//     location: {
//         city: 'Pune',
//         temp: 38
//     }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age} years old.`);

// const { city, temp: temperature = 40 } = person.location;

// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

// Array Destructuring

const address = ['Flat T2', 'Rjy', 'AP', '533101'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const coffee = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [drink, , medium] = coffee;
console.log(`A medium ${drink} costs ${medium}.`);