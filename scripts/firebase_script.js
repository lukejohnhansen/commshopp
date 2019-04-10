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

    var firebase = app_firebase;

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
    {
        "name":user.displayName,
         "email":user.email
        });
    });

