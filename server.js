var express = require("express");
var firebase = require("firebase")
var port = process.env.PORT || 7777;
var app = require("express")();

const functions = require("firebase-functions")

// app.get('/faces', (req, res) => {
//     res.json();
// })

const firebaseConfig = {
    apiKey: "AIzaSyBr1VwMn2jRS18T_gOmd0wdPPiig6ED7Z8",
    authDomain: "cloud-firebase-web.firebaseapp.com",
    databaseURL: "https://cloud-firebase-web.firebaseio.com",
    projectId: "cloud-firebase-web",
    storageBucket: "cloud-firebase-web.appspot.com",
    messagingSenderId: "654519431194",
    appId: "1:654519431194:web:cdf77ee7f6424099"
};

//firebase.initializeApp(firebaseConfig);

var admin = require("firebase-admin");

var serviceAccount = require("./cloud-firebase-web-firebase-adminsdk-rw8wx-3435ce5210.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cloud-firebase-web.firebaseio.com"
});

const db = admin.firestore()
//const faceRef = db.ref().child('Emotions')
// faceRef.child("EmoId").set({
//     "create_at":"26-05-2019",
//     "description":"Test",
//     "id":"2",
//     "percent":"50",
//     "position_left_mouth":"100",
//     "position_right_mouth":"150",
//     "update_at":"27-05-2019"
// })
// .then(function(){
//     console.log("Written");
// })
// .catch(function(error){
//     console.log("is Error");
// });





var docRef = db.collection("Emotions").doc("EmoId");
docRef.get().then(function(doc){
    if(doc.exists){
        console.log("start Emotion data ")
        console.log(doc.data());
        console.log("End Emotion data")
    }else{
        console.log("Not Found");
    }
})
console.log(docRef)

var docUserRef = db.collection("Users").doc("UserId");
docUserRef.get().then(function(doc){
    if(doc.exists){
        console.log("start User data")
        console.log(doc.data());
        console.log("End User data")
    }else{
        console.log("Not Found");
    }
})
console.log(docUserRef)


// app.get('/', function (req, res) {
//     res.send('<h1>Hello Node.js</h1>');
// });

// app.get("/index", function(req, res){
//     res.send("<h1> This is index page </h1>");
// });

// app.listen(port, function(){
//     //res.send(firebaseConfig);
//     console.log('Server Listen At ' +port);
// });



// var faceRef = db.collection('Face_Detections').doc('FaceId');
// var getDoc = faceRef.get()
//     .then(doc => {
//         if (!doc.exists) {
//             console.log('No such document!');
//         } else {
//             console.log('Document data:', doc.data());
//         }
//     })
//     .catch(err => {
//         console.log('Error getting document', err);
//     });

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.listen(3000, () => {
//     res.send(firebaseConfig);
//     console.log('Server Listen At 3000')
// });




//---------------------------------------------------------------------------

//admin.initializeApp(functions.config().firebase);

// const firebase = require('firebase');

// const admin = require("firebase-admin");

// const db = admin.firestore();

// const firebaseHelper = require('firebase-functions-helper');
// const serviceAccount = require('./cloud-firebase-web-firebase-adminsdk-rw8wx-3435ce5210.json');

// const app = express()();
// const main = express();

// const port = process.env.PORT || 7777;

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
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://cloud-firebase-web.firebaseio.com"
// });

// main.use('/api/v1', app);
// main.use(bodyParser.json());
// main.use(bodyParser.urlencoded({ extended: false }));

// const contactsCollection = 'Users';

// export const webApi = functions.https.onRequest(main);

// app.get('/', (req, res) => {
//     res.json();
// })

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
//         .then((doc => res.status(200).send(doc)))
// });

// // // Delete a contact 
// // app.delete('/contacts/:contactId', (req, res) => {
// //     firebaseHelper.firestore
// //         .deleteDocument(db, contactsCollection, req.params.contactId);
// //     res.send('Document deleted');
// // })

