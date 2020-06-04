import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import "@firebase/storage";

var config = {
  apiKey: "AIzaSyB2PRk0-sTV-pj0_IBvSwgvec6-Jb3TToM",
  authDomain: "appslack-72ae3.firebaseapp.com",
  databaseURL: "https://appslack-72ae3.firebaseio.com",
  projectId: "appslack-72ae3",
  storageBucket: "appslack-72ae3.appspot.com",
  messagingSenderId: "672248957040",
  // appId: "1:672248957040:web:732b299f8842d214b84cb5",
  // measurementId: "G-1QXR8X0LP9"
};
firebase.initializeApp(config);

export default firebase;
