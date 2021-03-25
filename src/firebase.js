import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
//   인증정보를 넣어주세요!
apiKey: "AIzaSyB9Ze1RQ507STtHoWWBq1xE7yA_3xAHGhs",
authDomain: "calendar-30f63.firebaseapp.com",
projectId: "calendar-30f63",
storageBucket: "calendar-30f63.appspot.com",
messagingSenderId: "1068138323159",
appId: "1:1068138323159:web:05c9404968c80f859c6492",
measurementId: "G-YK7R5L0BYJ"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
