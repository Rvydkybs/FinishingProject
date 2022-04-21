// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC2D7nYV_aP1JmWK5oRl-XBKExTMjeqQY",
  authDomain: "shopapppatika.firebaseapp.com",
  projectId: "shopapppatika",
  storageBucket: "shopapppatika.appspot.com",
  messagingSenderId: "976991780324",
  appId: "1:976991780324:web:717669023737f43e655bf1",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
export { auth };
