import * as firebase from 'firebase';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "PUY_YOUR_DATA_HERE",
    authDomain: "PUY_YOUR_DATA_HERE",
    databaseURL: "PUY_YOUR_DATA_HERE",
    projectId: "PUY_YOUR_DATA_HERE",
    storageBucket: "PUY_YOUR_DATA_HERE",
    messagingSenderId: "PUY_YOUR_DATA_HERE",
    appId: "PUY_YOUR_DATA_HERE",
    measurementId: "PUY_YOUR_DATA_HERE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase.firestore();
