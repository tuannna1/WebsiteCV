JotForm.showJotFormPowered = "new_footer";

JotForm.poweredByText = "Powered by JotForm";

var all_spc = document.querySelectorAll("form[id='202671468576465'] .si" + "mple" + "_spc");
for (var i = 0; i < all_spc.length; i++) {
  all_spc[i].value = "202671468576465-202671468576465";
}

$(document).ready(function() {
  $(".dropdown").hover(
    function() {
      $('.dropdown-menu', this).stop(true, true).slideDown("fast");
      $(this).toggleClass('open');
    },
    function() {
      $('.dropdown-menu', this).stop(true, true).slideUp("fast");
      $(this).toggleClass('open');
    }
  );
});

window.onload = function() {
  document.getElementById("password1").onchange = validatePassword;
  document.getElementById("password2").onchange = validatePassword;
}

function validatePassword() {
  var pass2 = document.getElementById("password2").value;
  var pass1 = document.getElementById("password1").value;
  if (pass1 != pass2)
    document.getElementById("password2").setCustomValidity("Passwords Don't Match");
  else
    document.getElementById("password2").setCustomValidity('');
  //empty string means no validation error
}

jQuery(document).ready(function($) {
  $(".scroll").click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 900);
  });
});

$(document).ready(function() {
  /*
              var defaults = {
                  containerID: 'toTop', // fading element id
                containerHoverID: 'toTopHover', // fading element hover id
                scrollSpeed: 1200,
                easingType: 'linear'
               };
              */

  $().UItoTop({
    easingType: 'easeOutQuart'
  });

});
