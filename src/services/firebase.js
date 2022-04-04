import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyA4d_ehKvvXA4LOpsymGiqHP3xt5zJq5l8",
  authDomain: "chat-react-93480.firebaseapp.com",
  projectId: "chat-react-93480",
  storageBucket: "chat-react-93480.appspot.com",
  messagingSenderId: "420813203811",
  appId: "1:420813203811:web:f5be0149880aaaffd88b56",
  databaseURL: "https://chat-react-93480-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(config);
export const auth = getAuth();
export const db = getDatabase();
