$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

$(document).ready(function() {
    $('.btn').click(function(e) {
        e.preventDefault(); // Prevent default form submission

        // Retrieve input values
        var username = $('input[type="text"]').val();
        var password = $('input[type="password"]').val();

        // Check if username and password match
        if (username === 'Kshehu' && password === '12345') {
            // Redirect to instructions page
            window.location.href = 'instructions.html'; // Replace with your actual instructions page URL
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});