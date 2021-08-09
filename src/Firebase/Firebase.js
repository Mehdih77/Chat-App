import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyACqAHhVXRBdt-6WC0fOLX3XrnjFOKJ2Mw",
    authDomain: "chat-messenger-267e9.firebaseapp.com",
    projectId: "chat-messenger-267e9",
    storageBucket: "chat-messenger-267e9.appspot.com",
    messagingSenderId: "229628475416",
    appId: "1:229628475416:web:ad86a7fb9a1192c20bab6d"
  }).auth();