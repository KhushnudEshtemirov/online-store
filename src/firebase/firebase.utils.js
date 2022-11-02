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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc( `users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }) 
    } catch (error) {
        console.log("Error creating user ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = new firebase.auth();
export const firestore = new firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;