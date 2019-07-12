// import * as functions from 'firebase-functions';

// import * as admin from 'firebase-admin';
// //import * as firebaseHelper from 'firebase-functions-helper';
// import * as express from 'express';
// import * as bodyParser from "body-parser";

// //admin.initializeApp(functions.config().firebase);

// const firebase = require('firebase');

// //const admin = require("firebase-admin");

// const db = admin.firestore();

// const firebaseHelper = require('firebase-functions-helper');
// //const serviceAccount = require('./cloud-firebase-web-firebase-adminsdk-rw8wx-3435ce5210.json');

// const app = express();
// const main = express();

// const firebaseConfig = {
//     apiKey: "AIzaSyBr1VwMn2jRS18T_gOmd0wdPPiig6ED7Z8",
//     authDomain: "cloud-firebase-web.firebaseapp.com",
//     databaseURL: "https://cloud-firebase-web.firebaseio.com",
//     projectId: "cloud-firebase-web",
//     storageBucket: "cloud-firebase-web.appspot.com",
//     messagingSenderId: "654519431194",
//     appId: "1:654519431194:web:cdf77ee7f6424099"
// };
// firebase.initializeApp(firebaseConfig);

// admin.initializeApp({
//     credential: admin.credential.cert(firebaseConfig),
//     databaseURL: "https://cloud-firebase-web.firebaseio.com"
// });

// main.use('/api/v1', app);
// main.use(bodyParser.json());
// main.use(bodyParser.urlencoded({ extended: false }));

// const contactsCollection = 'Users';

// export const webApi = functions.https.onRequest(main);

// // Add new contact
// app.post('/Users', (req, res) => {
//     firebaseHelper.firestore
//         .createNewDocument(db, contactsCollection, req.body);
//     res.send('Create a new User');
// })
// // // Update new contact
// // app.patch('/contacts/:contactId', (req, res) => {
// //     firebaseHelper.firestore
// //         .updateDocument(db, contactsCollection, req.params.contactId, req.body);
// //     res.send('Update a new contact');
// // })
// // // View a contact
// // app.get('/contacts/:contactId', (req, res) => {
// //     firebaseHelper.firestore
// //         .getDocument(db, contactsCollection, req.params.contactId)
// //         .then(doc => res.status(200).send(doc));
// // })
// // View all contacts
// app.get('/Users/:UserId', (req, res) => {
//     firebaseHelper.firestore
//     .getDocument(db, contactsCollection, req.params.UserId)
//         .then((doc: any) => res.status(200).send(doc))
// })
// // // Delete a contact 
// // app.delete('/contacts/:contactId', (req, res) => {
// //     firebaseHelper.firestore
// //         .deleteDocument(db, contactsCollection, req.params.contactId);
// //     res.send('Document deleted');
// // })

import * as functions from 'firebase-functions';

//import * as admin from 'firebase-admin';
//import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from "body-parser";

const firebase = require('firebase');

const admin = require("firebase-admin");

const db = admin.firestore();

const firebaseHelper = require('firebase-functions-helper');
const serviceAccount = require('./cloud-firebase-web-firebase-adminsdk-rw8wx-3435ce5210.json');

const app = express();
const main = express();

const firebaseConfig = {
    apiKey: "AIzaSyBr1VwMn2jRS18T_gOmd0wdPPiig6ED7Z8",
    authDomain: "cloud-firebase-web.firebaseapp.com",
    databaseURL: "https://cloud-firebase-web.firebaseio.com",
    projectId: "cloud-firebase-web",
    storageBucket: "cloud-firebase-web.appspot.com",
    messagingSenderId: "654519431194",
    appId: "1:654519431194:web:cdf77ee7f6424099"
};
firebase.initializeApp(firebaseConfig);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cloud-firebase-web.firebaseio.com"
});

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

const contactsCollection = 'Users';

export const webApi = functions.https.onRequest(main);

app.get('/', (req, res) => {
    res.json();
})

// Add new contact
app.post('/Users', (req, res) => {
    firebaseHelper.firestore
        .createNewDocument(db, contactsCollection, req.body);
    res.send('Create a new User');
})
// // Update new contact
// app.patch('/contacts/:contactId', (req, res) => {
//     firebaseHelper.firestore
//         .updateDocument(db, contactsCollection, req.params.contactId, req.body);
//     res.send('Update a new contact');
// })
// // View a contact
// app.get('/contacts/:contactId', (req, res) => {
//     firebaseHelper.firestore
//         .getDocument(db, contactsCollection, req.params.contactId)
//         .then(doc => res.status(200).send(doc));
// })

// View all contacts
app.get('/Users/:UserId', (req, res) => {
    firebaseHelper.firestore
    .getDocument(db, contactsCollection, req.params.UserId)
        .then((doc => res.status(200).send(doc)))
});

// // Delete a contact 
// app.delete('/contacts/:contactId', (req, res) => {
//     firebaseHelper.firestore
//         .deleteDocument(db, contactsCollection, req.params.contactId);
//     res.send('Document deleted');
// })


