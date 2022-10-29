import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBiDJSE2Ey1VqLeAWllJ7XCUfCtCXgrobc",
  authDomain: "online-store-db-7bb17.firebaseapp.com",
  projectId: "online-store-db-7bb17",
  storageBucket: "online-store-db-7bb17.appspot.com",
  messagingSenderId: "950113080743",
  appId: "1:950113080743:web:f9ec7f9852f2eedfe69282",
  measurementId: "G-5YKGXWRH2C"
};

firebase.initializeApp(config);

export const auth = new firebase.auth();
export const firestore = new firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;