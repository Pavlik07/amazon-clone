import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiuuLAi_bBdpV9dulKxvl2u-CeHJ_dXck",
  authDomain: "clone-95891.firebaseapp.com",
  databaseURL: "https://clone-95891.firebaseio.com",
  projectId: "clone-95891",
  storageBucket: "clone-95891.appspot.com",
  messagingSenderId: "241959097232",
  appId: "1:241959097232:web:91998bd56aeb7189d29915",
  measurementId: "G-GQ30S0C9F0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
