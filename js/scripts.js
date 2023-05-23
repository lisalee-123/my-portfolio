(function () {
  let form = document.querySelector("#contact-form");
  let emailInput = document.querySelector("#contact-email");
  let numberInput = document.querySelector("#contact-phone");

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    // Remove existing error
    let error = container.querySelector(".error-message");
    if (error) {
      container.removeChild(error);
    }

    // add error, if message is not empty
    if (message) {
      let error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, "E-mail is a required field.");
      return false;
    }

    if (value.indexOf("@") === -1) {
      showErrorMessage(emailInput, "You must enter a valid e-mail address.");
      return false;
    }

    if (value.indexOf(".") === -1) {
      showErrorMessage(emailInput, "You must enter a valid e-mail address.");
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validateNumber() {
    let value = numberInput.value;

    if (!value) {
      showErrorMessage(passwordInput, "please enter a Telephone number.");
      return false;
    }

    showErrorMessage(numberInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidNumber = validateNumber();
    return isValidEmail && isValidNumber;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Success!");
    }
  });

  emailInput.addEventListener("input", validateEmail);
  numberInput.addEventListener("input", validatePassword);

  // THE RETURN STATEMENT HERE
})();
