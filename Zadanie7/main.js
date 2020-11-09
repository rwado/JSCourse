const input = document.getElementById("pass");
const div = document.querySelector(".message");

const passwords = ["jedEN", "dWA", "TRZY"];
const messages = ["This is sample message. If you see this you should contact administrator", "this is wiosna", "one dwa tri"];

input.addEventListener("input", (e) => {


    div.textContent = "";

    passwords.forEach((password, index) => {

        const goodPassword = password.toLowerCase();
        const receivedPassword = e.target.value.toLowerCase();

        if (receivedPassword === goodPassword) {
            div.textContent = messages[index];
            input.value = "";
        }

    })

});

input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
});