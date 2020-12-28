"use strict";

// ========== GLOBAL FIREBASE CONFIG ========== //
let firebaseConfig = {
  apiKey: "AIzaSyB_hzIzGveoKkzeV6qVqm1OlX_EfTa24yE",
  authDomain: "kunstemuseum.firebaseapp.com",
  databaseURL: "https://kunstemuseum.firebaseio.com",
  projectId: "kunstemuseum",
  storageBucket: "kunstemuseum.appspot.com",
  messagingSenderId: "996800259116",
  appId: "1:996800259116:web:b940f8cf566ceb78c81d89"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseDB = firebase.firestore();



