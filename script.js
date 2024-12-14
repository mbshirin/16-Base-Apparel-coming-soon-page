const form = document.querySelector("form")
const emailInput = document.querySelector("input[type='email']")
const errorMessage = document.createElement("p")

errorMessage.textContent = "Please enter a valid email address"
errorMessage.style.color = "red"
errorMessage.style.fontSize = "0.9rem"
errorMessage.style.marginTop = "0.5rem"
errorMessage.style.display = "none"

document.querySelector(".error").appendChild(errorMessage)

form.addEventListener("submit",function(e){
    e.preventDefault()
    const emailValue = emailInput.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(emailValue)) {
        alert("Thank you! Your email has been submitted successfully.")
        form.reset()
    } else {
        errorMessage.style.display = "block"
    }
})