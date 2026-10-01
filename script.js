

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}



function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been received.");

    document.querySelector(".contact-form").reset();

}

