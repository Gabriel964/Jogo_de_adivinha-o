const abrirPopupBtn = document.getElementById("AbrirPopupBtn");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

abrirPopupBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", () => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
