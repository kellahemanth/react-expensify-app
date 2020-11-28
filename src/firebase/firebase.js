import * as firebase from 'firebase';
import moment from 'moment';

const firebaseConfig = {
    apiKey: "AIzaSyCSxrcvhIR6BKdHn9h1Et7VgpkvEHVA9Ho",
    authDomain: "react-expensify-a00e0.firebaseapp.com",
    databaseURL: "https://react-expensify-a00e0.firebaseio.com",
    projectId: "react-expensify-a00e0",
    storageBucket: "react-expensify-a00e0.appspot.com",
    messagingSenderId: "632900288886",
    appId: "1:632900288886:web:8a8b24e62616db2d037a57",
    measurementId: "G-H6QCFGXE0W"
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
    //firebase.analytics();