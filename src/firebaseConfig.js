import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCPZgRUOxdY3FcVLrpiCC84NyGspbE9Vlw',
  authDomain: 'tiktok-clone-3ebbb.firebaseapp.com',
  projectId: 'tiktok-clone-3ebbb',
  storageBucket: 'tiktok-clone-3ebbb.appspot.com',
  messagingSenderId: '504057715555',
  appId: '1:504057715555:web:22d71d8b26f49d2fb89156',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
