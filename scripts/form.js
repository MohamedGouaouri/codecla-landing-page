

const messageContainer = document.getElementById("messageContainer");
const nameErrorMsg = document.getElementById('name-error-msg')
const emailErrorMsg = document.getElementById('email-error-msg')
const textErrorMsg = document.getElementById('text-error-msg')


document.getElementById("name").addEventListener('focus', () => {
  nameErrorMsg.style.display = 'none'
})

document.getElementById("email").addEventListener('focus', () => {
  emailErrorMsg.style.display = 'none'
})
document.getElementById("message").addEventListener('focus', () => {
  textErrorMsg.style.display = 'none'
})

document.getElementById("contact").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  let isInvalid = false
  if (!name) {
    nameErrorMsg.style.display = 'inline'
    isInvalid = true
  }
  if (!email) {
    emailErrorMsg.style.display = 'inline'
    isInvalid = true
  }

  console.log(message)
  if (!message) {
    textErrorMsg.style.display = 'inline'
    isInvalid = true
  }
  if (isInvalid) return
  Swal.fire({
    title: "Thank you for reaching out!",
    text: "Form submitted successfully!",
    icon: "success"
  });
});