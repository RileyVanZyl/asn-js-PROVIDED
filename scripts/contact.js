// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
document.getElementById("submit-button").addEventListener("click", submit);

let contact = document.getElementById("contact-page");

let type = document.createElement("p");
let mssg = document.createTextNode("Thank you for your message");

function submit() {
    contact.innerHTML = '';

    type.appendChild(mssg);
    type.style.fontSize = "24px";
    contact.appendChild(type);

}
