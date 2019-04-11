// function called on submit button press.
// sets the quantities to local storage.
// redirects to the thank you page.
$('#submit').click(function( event ) {
      event.preventDefault();
      var item1OrderQuantity = $('#item1OrderQuantity').val();
      var item2OrderQuantity = $('#item2OrderQuantity').val();
      var item3OrderQuantity = $('#item3OrderQuantity').val();
      console.log(item1OrderQuantity + " " + item2OrderQuantity + " " + item3OrderQuantity);
      localStorage.setItem('item1OrderQuantity', item1OrderQuantity);
      localStorage.setItem('item2OrderQuantity', item2OrderQuantity);
      localStorage.setItem('item3OrderQuantity', item3OrderQuantity);
      window.location.href = "../html/thank_you.html";
});