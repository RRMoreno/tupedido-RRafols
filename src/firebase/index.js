import firebase from "firebase";

const app = firebase.initializeApp( {
    apiKey: "AIzaSyAPxsUpasJGj4LAkwwZ1DNll58JgQwrd1o",
    authDomain: "tupedido-b7f88.firebaseapp.com",
    projectId: "tupedido-b7f88",
    storageBucket: "tupedido-b7f88.appspot.com",
    messagingSenderId: "934991668361",
    appId: "1:934991668361:web:3fdf83b8350a73568e1258",
    measurementId: "G-R46LM32M29"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
    
}