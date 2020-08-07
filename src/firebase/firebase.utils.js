import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDxKQj8xayUO0kTm1aiMDJIopQHRvQKaT4",
    authDomain: "crwn-store-2def0.firebaseapp.com",
    databaseURL: "https://crwn-store-2def0.firebaseio.com",
    projectId: "crwn-store-2def0",
    storageBucket: "crwn-store-2def0.appspot.com",
    messagingSenderId: "740344169867",
    appId: "1:740344169867:web:b5ddd3b3a4f73b18e41b8e",
    measurementId: "G-V5FH58VH31"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch(error){
              console.log('error creating user', error.message);
          }
      }

      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  
  export default firebase;