import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAGQ-85YGo9-6NvRm_v9h2vqrkqXtjRRvg",
    authDomain: "linkedin-clone-9e284.firebaseapp.com",
    projectId: "linkedin-clone-9e284",
    storageBucket: "linkedin-clone-9e284.appspot.com",
    messagingSenderId: "301027583719",
    appId: "1:301027583719:web:4257563224889ae29ee442"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
export {db,auth}