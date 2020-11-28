database.ref('notes')
    .push({
        title: 'Hemanth',
        body: 'boy'
    })

database.ref('notes/-MNDG3qNCAUqnQs5w0IV')
    .update({
        title: 'Pratik'
    });

const subscription = database.ref()
    .on('value', (snapshot) => {
        const userDetails = snapshot.val();
        console.log(`${userDetails.name} is a ${userDetails.job.title} at ${userDetails.job.company}`);
    }, (error) => {
        console.log('Unable to fetch user details', error);
    });


const onValueChange = database.ref()
    .on('value', (snapshot) => {
        console.log(snapshot.val());
    },(error) => {
        console.log('Error Fetching', error);
    });

database.ref()
    .once('value')
    .then((snapshot) => {
        console.log(snapshot.val());
    }).catch((err) => {
        console.log('error', err)
    });

//for unsubscribing particular subscription.
database.ref().off(onValueChange);

setTimeout(() => {
    database.ref('name').set('Pratik');
}, 4000);

database.ref().set({
    name: 'Hemanth Kumar',
    age: 26,
    isSingle: true,
    job: {
        title: 'Software developer',
        company: 'TechM'
    },
    location: {
        city: 'Rajahmundry',
        country: 'India'
    }
}).then(() => {
    console.log('Data Saved');
}).catch((error) => {
    console.log('error', error);
});


//We can remove, set new and update existing with this call.
database.ref().update({
    stressLevel: 9,
    'job/company': 'Extentia',
    'location/city': 'Pune',
    isSingle: null
});


//Set can be used to remove.
database.ref('isSingle').set(null);

Remove
database.ref('isSingle').remove().then(() => {
    console.log('successfully removed');
}).catch((error) => {
    console.log('Failed: ',error);
});