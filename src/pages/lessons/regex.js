const email = document.getElementById("email");
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

email.addEventListener("keyup", () => {
    if (!regexMail.test(email.value)) {
        email.classList.add("input-warning");
    } else {
        email.classList.remove("input-warning");
    }
});

const password = document.getElementById("password");
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

password.addEventListener("keyup", () => {
    if (charDecimal.test(password.value) && charSpecial.test(password.value)) {
        password.classList.remove("input-warning");
    } else {
        password.classList.add("input-warning");
    }
});
