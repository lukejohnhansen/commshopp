// Gets the quantity of each item.
var item1OrderQuantity = localStorage.getItem('item1OrderQuantity');
var item1Name = localStorage.getItem('item1Name');
$('#orderedItem1').append(item1OrderQuantity + " Apples");

var item2OrderQuantity = localStorage.getItem('item2OrderQuantity');
var item2Name = localStorage.getItem('item2Name');
$('#orderedItem2').append(item2OrderQuantity + " Steamed Buns");

var item3OrderQuantity = localStorage.getItem('item3OrderQuantity');
var item3Name = localStorage.getItem('item3Name');
$('#orderedItem3').append(item3OrderQuantity + " Eggs");

// login/signin creates user and pulls name from firebase.
var userName;
var userEmail;
var userID;
function createUser(userName, userEmail, userID){

          firebase.database().ref('Users/' + userID).set({
            username: userName,
            email: userEmail
          });
}
//grabs user info on login or signup
firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    userName = user.displayName;
    userEmail = user.email;
    userID = user.uid;
    createUser(userName, userEmail, userID);
    console.log(userEmail);
  }
});

//Populates the mailto function with the user email, and the quantities of the items.
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var out = document.getElementById("sendEmail");
    $('#sendEmail').append('<a href="mailto:'+userEmail+'?subject=Your%20CommShopp%20List&amp;body=Apples:%20'+item1OrderQuantity+',%20Eggs%20'+item2OrderQuantity+',%20Steamed%20Buns:%20'+item3OrderQuantity+'">Email me my Grocery List</a>');
  } else {
    $('#sendEmail').append("No Email");
  }
});
