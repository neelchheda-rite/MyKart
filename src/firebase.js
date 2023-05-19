import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQgEqGEThFg10E7EgDL9zaFEF0WuOwKWc",
  authDomain: "mykart-ecom.firebaseapp.com",
  projectId: "mykart-ecom",
  storageBucket: "mykart-ecom.appspot.com",
  messagingSenderId: "140851950575",
  appId: "1:140851950575:web:d1c752c44860501007bc1a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

