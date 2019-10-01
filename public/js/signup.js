$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.form-signin");
  var employerEmail = $("input#employerEmail");
  var employerPassword = $("input#employerPassword");
  var employerName = $("input#employerName");
  var employerCompanyName = $("input#employerCompanyName");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    // alert("you clic");
    event.preventDefault();
    var employerData = {
      employerEmail: employerEmail.val().trim(),
      employerName: employerName.val().trim(),
      employerCompanyName: employerCompanyName.val().trim(),
      employerPassword: employerPassword.val().trim()
    };

    if (!employerData.employerEmail || !employerData.employerPassword) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(employerData);

    employerEmail.val("");
    employerPassword.val("");
    employerName.val("");
    employerCompanyName.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(employerData) {
    $.post("/api/register", {
      employerEmail: employerData.employerEmail,
      employerPassword: employerData.employerPassword,
      employerName: employerData.employerName,
      employerCompanyName: employerData.employerCompanyName
    })
      .then(function(data) {
        if (data) {
          console.log("_)))))))))))))))))))))))((((((&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&", data)

          window.location.replace("/login");
        }else{
          $("#emailtaken").removeClass("invisible");
        }
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
