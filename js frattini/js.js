

const text = document.querySelector(".text");
const body = document.querySelector(".body");
const button = document.querySelector(".button");

const cambio = () => {
    text.classList.toggle("textDark");
    body.classList.toggle("bodyDark");
    button.innerText = button.innerText === "Cambiar tema" ? "Volver" : "Cambiar tema";
};

button.addEventListener("click", cambio);



