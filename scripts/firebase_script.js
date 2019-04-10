// Initialize Firebase
var config = {
  apiKey: "AIzaSyArQsuHet0HsvqAmZJlT7xoq4ztZI_bcp4",
  authDomain: "commshopp-8fabb.firebaseapp.com",
  databaseURL: "https://commshopp-8fabb.firebaseio.com",
  projectId: "commshopp-8fabb",
  storageBucket: "commshopp-8fabb.appspot.com",
  messagingSenderId: "279282392039"
};
firebase.initializeApp(config);

<<<<<<< HEAD
    var firebase = app_firebase;
=======


 var firebase = app_firebase;
>>>>>>> 71b5fb91c2de311dd9b80de0e3a29ca628040621

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
    {
        "username":user.displayName,
         "email":user.email
        });
    });
