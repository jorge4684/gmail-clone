import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyC3f1GEQEPIz-CxORPdpS9PeMjhAlWFGQY",
  authDomain: "clone-67e18.firebaseapp.com",
  projectId: "clone-67e18",
  storageBucket: "clone-67e18.appspot.com",
  messagingSenderId: "1098277703293",
  appId: "1:1098277703293:web:2c1664671d2fac0f79ab14"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};