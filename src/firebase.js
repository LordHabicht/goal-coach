import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCKkp5vRTpFc5GYCjkB2djSqd6RNa_0uC4",
    authDomain: "goalcoach-f2d9d.firebaseapp.com",
    databaseURL: "https://goalcoach-f2d9d.firebaseio.com",
    projectId: "goalcoach-f2d9d",
    storageBucket: "",
    messagingSenderId: "138146396093"
}

export const firebaseApp = firebase.initializeApp(config);

