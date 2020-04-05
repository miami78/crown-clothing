import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgkGqE1smZluYvlTso9mzjyFJTyURpPhc",
    authDomain: "crown-clothing-9ce92.firebaseapp.com",
    databaseURL: "https://crown-clothing-9ce92.firebaseio.com",
    projectId: "crown-clothing-9ce92",
    storageBucket: "crown-clothing-9ce92.appspot.com",
    messagingSenderId: "694688451531",
    appId: "1:694688451531:web:17e11433227fc3ef0f844e",
    measurementId: "G-RNVQFLEE5H"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;