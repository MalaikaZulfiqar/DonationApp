import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import  'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBksJ80V51NqtDEChPjDqxsQRqor6Kls8",
  authDomain: "charityapp-49b32.firebaseapp.com",
  projectId: "charityapp-49b32",
  storageBucket: "charityapp-49b32.appspot.com",
  messagingSenderId: "619405644082",
  appId: "1:619405644082:web:ae0ca6109fd9dbd010c72b"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
