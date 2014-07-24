Parse.initialize("nWcUZgaArOVAwZu13inuUKyyGzrcZ73r8e8YUxPK", "z87IUk2EXA2VtWmoo1x9eZrPdlU6W2sqhkl2tYdi");


$("#email_input").keypress(function(e) {
    if(e.which == 13) {
        // alert('You pressed enter!');

        $( "#email_submit" ).click();
    }
});

$("#email_submit").click(function() {

		var VintageEmail = Parse.Object.extend("VintageEmail");
		var vintageEmail = new VintageEmail();
		var emailformval = $("#email_input").val();



				vintageEmail.set("emailAddress", emailformval);
				vintageEmail.save(null, {
				  success: function(vintageEmail) {
				    // Execute any logic that should take place after the object is saved.
				    alert('Welcome to our list! Stay tuned for updates coming soon! - Vintage Wine & Market');
				  },
				  error: function(vintageEmail, error) {
				    // Execute any logic that should take place if the save fails.
				    // error is a Parse.Error with an error code and description.
				    alert("Oh no! Something went wrong. Try again soon.");
				  }
				});

});

$(document).ready(function(){
  $('.bxslider').bxSlider();
});