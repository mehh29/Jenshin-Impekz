const inputFormRegister = document.querySelector(".input-form-register") ? document.querySelector(".input-form-register") : null
const emailInput = document.querySelector(".email-input") ? document.querySelector(".email-input") : 0
const passwordInput = document.querySelector(".password-input") ? document.querySelector(".password-input")  : 0
const emailErrorMessage = document.querySelector(".email-error-message")  ? document.querySelector(".email-error-message")  : 0
const passwordErrorMessage = document.querySelector(".password-error-message")  ? document.querySelector(".password-error-message")  : 0
const nameInput = document.querySelector(".name-input") ? document.querySelector(".name-input") : 0
const ageInput = document.querySelector(".age-input") ? document.querySelector(".age-input") : 0
const nameErrorMessage = document.querySelector(".name-error-message") ? document.querySelector(".name-error-message") : 0
const ageErrorMessage = document.querySelector(".age-error-message") ? document.querySelector(".age-error-message") : 0
const confirmPasswordInput = document.querySelector(".confirm-password-input") ? document.querySelector(".confirm-password-input") : 0
const confirmPasswordErrorMessage = document.querySelector(".confirm-password-error-message") ? document.querySelector(".confirm-password-error-message") : 0
const termsCheck = document.querySelector(".terms-check") ? document.querySelector(".terms-check") : 0
const termsCheckLabel = document.querySelector(".terms") ? document.querySelector(".terms") : 0
const termsErrorMessage = document.querySelector(".terms-error-message") ? document.querySelector(".terms-error-message") : 0

function registerFormSubmit(event){
    event.preventDefault()
    
    let isEmailValid = true
    let isPasswordValid = true
    let isNameValid = true
    let isAgeValid = true
    let isConfirmPasswordValid = true
    let isTermsChecked = true

    // console.log(emailInput.value)
    if (!emailInput.value.includes("@gmail.com")) {
        // console.log("email error")
        emailInput.classList.add("error-active")
        emailErrorMessage.innerHTML = "*Email Invalid!"
        emailInput.value = ""

        isEmailValid = false
    }

    if (confirmPasswordInput.value != passwordInput.value) {
        confirmPasswordInput.classList.add("error-active")
        confirmPasswordErrorMessage.innerHTML = "*Password Doesn't Match!"
        confirmPasswordInput.value = ""

        isConfirmPasswordValid= false
    }
    if (passwordInput.value.length < 8) {
        passwordInput.classList.add("error-active")
        passwordErrorMessage.innerHTML = "*Password Must be at Least 8 Character!"
        passwordInput.value = ""

        isPasswordValid = false
    }
    
    if(nameInput.value == ""){
        nameInput.classList.add("error-active")
        nameErrorMessage.innerHTML = "*Name Must be Filled"
        nameInput.value = ""
        isNameValid = false
    }

    if(ageInput.value == "" || ageInput.value <= 0){
        // console.log("asdf")
        ageInput.classList.add("error-active")
        ageErrorMessage.innerHTML = "*Age can't! be Blank or Negative"
        ageInput.value = ""
        
        isAgeValid = false
    }

    if (termsCheck.checked == false) 
    {
        // console.log("test");
        termsCheck.classList.add("error-active")
        termsCheckLabel.classList.add("error-active")
        isTermsChecked = false
    }

    if (isEmailValid) {
        emailInput.classList.remove("error-active")
        emailErrorMessage.innerHTML = ""
    }
    
    if (isPasswordValid) {
        passwordInput.classList.remove("error-active")
        passwordErrorMessage.innerHTML = ""
    }

    if (isConfirmPasswordValid) {
        confirmPasswordInput.classList.remove("error-active")
        confirmPasswordErrorMessage.innerHTML = ""
    }
    
    if(isNameValid){
        nameInput.classList.remove("error-active")
        nameErrorMessage.innerHTML = ""
    }
    
    if(isAgeValid){
        ageInput.classList.remove("error-active")
        ageErrorMessage.innerHTML = ""
    }

    if(isTermsChecked){
        termsCheck.classList.remove("error-active")
        termsCheckLabel.classList.remove("error-active")
    }
    
    if (isEmailValid && isPasswordValid&&isAgeValid && isNameValid && isConfirmPasswordValid && isTermsChecked) {
        window.location = "login.html"
    }
}
if (inputFormRegister){
    inputFormRegister.addEventListener("submit", registerFormSubmit, false)
}


console.log(emailInput)