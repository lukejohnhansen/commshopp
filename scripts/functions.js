$(document).ready(function() {
	console.log("ready");
$('form').submit(function(event){
for (var i = 1; i < 3; i++){
	event.preventDefault();
											console.log("clicked");
											
var quantity = $('#item'+i+'OrderQ').val();
	console.log(quantity);
	var db = firebase.database().ref("items/item"+i);
	db.update({
	"Quantity": quantity
	});
}
}
)}
									);