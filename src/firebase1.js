import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhkdKsank9V2XjuDT8U2P9OYKGYPMbCjE",
  authDomain: "disneyplus-clone-e2f09.firebaseapp.com",
  projectId: "disneyplus-clone-e2f09",
  storageBucket: "disneyplus-clone-e2f09.appspot.com",
  messagingSenderId: "297583383101",
  appId: "1:297583383101:web:b46aa85a0b70ab8af51054",
  measurementId: "G-MP7Y57VFRF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { app, auth, provider}
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDhkdKsank9V2XjuDT8U2P9OYKGYPMbCjE",
//   authDomain: "disneyplus-clone-e2f09.firebaseapp.com",
//   projectId: "disneyplus-clone-e2f09",
//   storageBucket: "disneyplus-clone-e2f09.appspot.com",
//   messagingSenderId: "297583383101",
//   appId: "1:297583383101:web:b46aa85a0b70ab8af51054",
//   measurementId: "G-MP7Y57VFRF",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;
