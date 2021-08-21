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
  let inputValues_1 = document.querySelector(".form-control-1");
  let inputValues_2 = document.querySelector(".form-control-2");
  let inputValues_3 = document.querySelector(".form-control-3");

  //check if not null or empty
  if (
    inputValues_1.value === "" &&
    inputValues_2.value === "" &&
    inputValues_3.value === ""
  ) {
    //show error message
    const namesError = "Names Missing";
    const emailError = "Email Missing";
    const msgError = "Message Missing";

    inputValues_1.value = namesError;
    inputValues_2.value = emailError;
    inputValues_3.value = msgError;
  } else {
    SendQuoteBtn.textContent = "Sending...";
    //set a timer to reset button text after 3 seconds
    setTimeout(function () {
      //reset input values
      inputValues_1.value = "";
      inputValues_2.value = "";
      inputValues_3.value = "";
      SendQuoteBtn.textContent = "Message Sent😊";
    }, 5000);
  }
});
