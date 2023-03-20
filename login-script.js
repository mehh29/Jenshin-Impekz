const inputFormLogin = document.querySelector(".input-form-login") ? document.querySelector(".input-form-login") : null
const emailInput = document.querySelector(".email-input") ? document.querySelector(".email-input") : 0
const passwordInput = document.querySelector(".password-input") ? document.querySelector(".password-input")  : 0
const emailErrorMessage = document.querySelector(".email-error-message")  ? document.querySelector(".email-error-message")  : 0
const passwordErrorMessage = document.querySelector(".password-error-message")  ? document.querySelector(".password-error-message")  : 0

function loginFormSubmit(event) {
    let isEmailValid = true
    let isPasswordValid = true
    
    event.preventDefault()
    // console.log(emailInput.value)
    if (!emailInput.value.includes("@gmail.com")) {
        // console.log("email error")
        emailInput.classList.add("error-active")
        emailErrorMessage.innerHTML = "*Email Invalid!"
        emailInput.value = ""
        isEmailValid = false
    }
    
    if (passwordInput.value.length < 8) {
        passwordInput.classList.add("error-active")
        passwordErrorMessage.innerHTML = "*Password Invalid!"
        passwordInput.value = ""

        isPasswordValid = false
    }
    
    if (isEmailValid) {
        emailInput.classList.remove("error-active")
        emailErrorMessage.innerHTML = ""
    }
    
    if (isPasswordValid) {
        passwordInput.classList.remove("error-active")
        passwordErrorMessage.innerHTML = ""
    }
    
    if (isEmailValid && isPasswordValid) {
        window.location = "index.html"
    }
}

if (inputFormLogin) {
    inputFormLogin.addEventListener("submit", loginFormSubmit, false)
}