import firebase from 'firebase/app';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDpMpHT-IWyKZ-OIegEnHbxGSwdF5Sn2IQ",
    authDomain: "clone-31586.firebaseapp.com",
    projectId: "clone-31586",
    storageBucket: "clone-31586.appspot.com",
    messagingSenderId: "885921063896",
    appId: "1:885921063896:web:2948793abd5911156c88ad"
  };
  firebase.initializeapp(firebaseConfig)
  export default firebase.auth()