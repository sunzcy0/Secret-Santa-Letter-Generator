const form = document.getElementById("letter-form");
const letterListDiv = document.querySelector(".letter-list");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  const name = document.getElementById("recipient-name").value;
  const email = document.getElementById("recipient-email").value;
  const message = document.getElementById("personal-message").value;

 
  const newLetter = document.createElement("div");
  newLetter.classList.add("letter-card");

 
  newLetter.innerHTML = `
    <h3>To: ${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  letterListDiv.appendChild(newLetter);

  form.reset();
});