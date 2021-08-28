import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCu5l87izxuUSnZV5AXnpxEE4YU1o87Ni8",
    authDomain: "earnest-cooler-318320.firebaseapp.com",
    projectId: "earnest-cooler-318320",
    storageBucket: "earnest-cooler-318320.appspot.com",
    messagingSenderId: "1029657660030",
    appId: "1:1029657660030:web:f7d6fa96d397b2f8ffa62f",
    measurementId: "G-64WBPC0M5W"
};  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export default db;