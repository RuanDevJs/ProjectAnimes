import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "anime-s-cec02.firebaseapp.com",
  projectId: "anime-s-cec02",
  storageBucket: "anime-s-cec02.appspot.com",
  messagingSenderId: "132796168972",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_ID
};

if(firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
