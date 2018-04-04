import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQjuotvVV63jXSADSj6AwiXW-jpmO8tHc",
  authDomain: "dripr-f870a.firebaseapp.com",
  databaseURL: "https://dripr-f870a.firebaseio.com",
  projectId: "dripr-f870a",
  storageBucket: "dripr-f870a.appspot.com",
  messagingSenderId: "4536579884"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
