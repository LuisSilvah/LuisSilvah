const card = document.querySelector(".card");
const container = document.querySelector(".card-container");
// const profile = document.querySelector("#perfil-img");
// const content = document.querySelector(".card-content");

container.addEventListener("mousemove", (e) => {
    let eixoX = (window.innerWidth / 2 - e.pageX) / 15;
    let eixoY = (window.innerHeight / 2 - e.pageY) / 15;

    card.style.transform = `rotateX(${eixoY}deg) rotateY(${eixoX}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    content.style.transform = "translateZ(75px)";
    profile.style.transform = "translateZ(75px)";

    card.style.transition = "none";
});

container.addEventListener("mouseleave", (e) => {
    content.style.transform = "translateZ(0)";
    profile.style.transform = "translateZ(0)";

    card.style.transition = "transform 200ms ease";
    card.style.transform = "rotate(0deg)";
});