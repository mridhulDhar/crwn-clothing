import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBTvV8gXsjG0UlRyUTDqHHhaFfCmFM-EbM",
    authDomain: "crwn-db-e93de.firebaseapp.com",
    projectId: "crwn-db-e93de",
    storageBucket: "crwn-db-e93de.appspot.com",
    messagingSenderId: "250489324924",
    appId: "1:250489324924:web:941fe00ea5d8d5abdd10f9",
    measurementId: "G-KTJ98LLT2D"
  };

  export const createUserProfileDocument= async (userAuth, additionalData) =>{
      if(!userAuth){
          return;
      }

      const userRef=firestore.doc(`users/${userAuth.uid}`);

      const snapShot=await userRef.get();

      if(!snapShot.exists){
          const {displayName,email} =userAuth;
          const createdAt=new Date();

          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch(error){
            console.log("error while creating user",error.message);
          }
      }
      return userRef;
  };





  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=() => auth.signInWithPopup(provider);

  export default firebase;