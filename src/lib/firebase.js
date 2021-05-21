import firebase from "firebase";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBQmnPb5z1k1M3g54lnMgfP580m3AxSCeI",
    authDomain: "test-fb-5d568.firebaseapp.com",
    projectId: "test-fb-5d568",
    storageBucket: "test-fb-5d568.appspot.com",
    messagingSenderId: "153302387030",
    appId: "1:153302387030:web:0405f5b946612787cfaef7",
    measurementId: "G-5H0XDWE1X8",
  };

  firebase.initializeApp(firebaseConfig);
}
