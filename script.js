let knop = document.querySelector("#knop");
let rechthoek = document.querySelector("#rechthoek");

function changebackgroundcolor() { 
    if (rechthoek.style.backgroundColor != "grey") {
        rechthoek.style.backgroundColor = "grey";
        rechthoek.style.color = "black";
        knop.innerHTML = "Change to LIGHT mode!";
    } else {
        rechthoek.style.backgroundColor = "rgb(114, 178, 227)";
        rechthoek.style.color = "#b31b23";
        knop.innerHTML = "Change to DARK mode!";
    }
}
knop.addEventListener("click", changebackgroundcolor);
