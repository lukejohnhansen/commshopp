$(document).ready(function() {
	console.log("ready");
for (let i = 1; i <= 3; i++){
$('form').submit(function(event){
											console.log("clicked");
											
var quantity = $('#item'+i+'OrderQ').val();
	
	console.log(quantity);
	var db = firebase.database().ref("items/item"+i);
	
	db.on ("value",function(snap){
		   obj = snap.val();
		   console.log(obj);
		   console.log(obj["Quantity"]);   //quantity
		   console.log(obj["Name"]);       //name
	});
	
	db.update({
	"Quantity": quantity
	});
})
}
});