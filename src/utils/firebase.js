import firebase from "firebase/compat/app";  
import "firebase/compat/firestore";
import "firebase/compat/auth";

// if a Firebase instance doesn't exist, create one
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBV9LTGeU3P0pSIKhtIJTAn0Jp_hDI7HNU",
        authDomain: "jovannecuynoolalo.firebaseapp.com",
        projectId: "jovannecuynoolalo",
        storageBucket: "jovannecuynoolalo.appspot.com",
        messagingSenderId: "39894819998",
        appId: "1:39894819998:web:b702c4aa7c83ad2a0dc78f",
        measurementId: "G-543X23GBFH"
    })
    if(typeof window != "undefined"){
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    } 
}

export default firebase;
