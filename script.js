let selectedTheme = null;
const templateButtons = document.querySelectorAll("button[class^='template-button']");
const form = document.getElementById("letter-form");

//Saving the theme selected
templateButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (button.classList.contains("template-button-gingerbread")) selectedTheme = "gingerbread";
    if (button.classList.contains("template-button-tree")) selectedTheme = "tree";
    if (button.classList.contains("template-button-santa")) selectedTheme = "santa";
    if (button.classList.contains("template-button-snowman")) selectedTheme = "snowman";

    alert("Theme selected: " + selectedTheme);
  });
});


//Creating the letter
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("recipient-name").value;
    const email = document.getElementById("recipient-email").value;
    const message = document.getElementById("personal-message").value;

    if (!selectedTheme) {
      alert("Please select a theme first!");
      return;
    }

    const newLetter = {
      name,
      email,
      message,
      theme: selectedTheme
    };

    // Save Letter in LocalStorage
    let letters = JSON.parse(localStorage.getItem("letters")) || [];
    letters.push(newLetter);
    localStorage.setItem("letters", JSON.stringify(letters));
    alert("Letter created successfully!");
    
    // Reset form and selected theme
    selectedTheme = null;
    form.reset();

    // Ir al mailbox
    window.location.href = "mailbox.html";
  });
}