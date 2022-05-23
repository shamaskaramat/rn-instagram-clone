import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADo2BZ3fK-_IfuT8iGsVxqVdPcHeIsBBs",
  authDomain: "insta-clone-459ef.firebaseapp.com",
  projectId: "insta-clone-459ef",
  storageBucket: "insta-clone-459ef.appspot.com",
  messagingSenderId: "559955601470",
  appId: "1:559955601470:web:e3c119c1b266285b32c96f"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = firebase.firestore();

export  {firebase,db} 