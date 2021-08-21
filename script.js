const callBtn = document.querySelector("#call-us");
callBtn.addEventListener("click", function () {
  callBtn.textContent = "Calling...";
  //set a timer to reset button text after 3 seconds
  setTimeout(function () {
    callBtn.textContent = "Call Us Now";
  }, 5000);
});

const SendQuoteBtn = document.querySelector("#submit");
SendQuoteBtn.addEventListener("click", function () {
  //input validation
  let inputValues = document.querySelectorAll(".form-control").value;

  //check if not null or empty
  if (inputValues !== "") {
    SendQuoteBtn.textContent = "Sending...";
    //set a timer to reset button text after 3 seconds
    setTimeout(function () {
      SendQuoteBtn.textContent = "Message Sent😊";
    }, 5000);
  } else {
    //show error message
    inputValues = "Hello Missing";
  }
});
