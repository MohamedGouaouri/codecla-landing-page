

const messageContainer = document.getElementById("messageContainer");



document.getElementById("contact").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  
  /* make sure to replace the xxxxxxx with the form id you created on fabform.io */
  
  fetch('https://fabform.io/f/v1EWxwU', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success === "true") {
    //   messageContainer.innerHTML = "<p style='color: green;'>Form submitted successfully!</p>";
      Swal.fire({
        title: "Good job!",
        text: "Form submitted successfully!",
        icon: "success"
      });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
    }
  })
  .catch(error => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
  });
});