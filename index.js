import { initializeApp } from "/app";
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "AIzaSyDsG6NfzGL4Pw4-G3SL9nK6fKYUd2d72sA",
    authDomain: "t-math-sce.firebaseapp.com",
    projectId: "t-math-sce",
    storageBucket: "t-math-sce.appspot.com",
    messagingSenderId: "376165570519",
    appId: "1:376165570519:web:45b29b2afd596148441d92",
    measurementId: "G-B87RCJXCWP"
}
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);


console.log('index loaded')
function writeUserData(userId, name, email, role) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    role: role
  });
}

writeUserData(10,'shay','etamar@gmail.com','admin');



