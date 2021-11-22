import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA0Xz27YFwDz-MhXy-SF-62A_deh0J2tUQ",
  authDomain: "instagram-clone-2add1.firebaseapp.com",
  projectId: "instagram-clone-2add1",
  storageBucket: "instagram-clone-2add1.appspot.com",
  messagingSenderId: "1016223579105",
  appId: "1:1016223579105:web:0846cd4677a6fcac7c70a0",
  measurementId: "G-Z4KSHWBE2S",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default firebaseConfig;
