var firebase = require("./node_modules/@firebase");

firebase.initializeApp({
    databaseURL: "https://t-math-t-default-rtdb.europe-west1.firebasedatabase.app/users.json"
  });
  var dbRef = firebase.database().ref("users");
  console.log(dbRef);