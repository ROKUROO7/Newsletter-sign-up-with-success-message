function validate_Email(email) {
  
  if (!email) {
    return "Email required"
  }
  
  const email_characters = /^\S+@\S+$/g
  
  if (!email_characters.test(email)) {
    return "Valid email required"
  }
}

const email_Input = document.getElementById("email-input")
const signUp_emailError = document.getElementById("sign-up_email-error-js")

email_Input.addEventListener("click", () => {
  
  email_Input.classList.remove("sign-up_input-email--red");
  signUp_emailError.innerText = " ";
})

const signUp_Form = document.getElementById("sign-up_form-js")

signUp_Form.addEventListener("submit", (e) => {
  
  e.preventDefault()
  
  const form_data = new FormData(e.target).entries()
  const {email} = Object.fromEntries(form_data)
  
  const emailError = validate_Email(email)
  
  if (emailError) {
    
    signUp_emailError.innerText = emailError
    email_Input.classList.add("sign-up_input-email--red")
    email_Input.classList.add("sign-up_input-email--error-animation")
    
    setInterval(() => {
      email_Input.classList.remove("sign-up_input-email--error-animation")
    }, 1000)
  }
  else {
    const signUp = document.getElementById("sign-up-js")
    const customAlert = document.getElementById("custom-alert-js")
    const alertEmail = document.getElementById("alert_email-js")
    
    signUp.classList.add("sign-up--inactive")
    customAlert.classList.remove("custom-alert--inactive")
    alertEmail.innerText = email  //ash@loremcompany.com
  }
  
  const customAlertBtn = document.getElementById("custom-alert_btn-js")
  
  customAlertBtn.addEventListener("click", () => {
    window.location.reload()
  })
})
