function setup() {
    const elements = document.querySelectorAll(".buy")
    console.log(elements.length)
    elements.forEach( button =>
        button.addEventListener( "click", function() {
            if (button.innerHTML == "В корзине" ) {
                button.innerHTML = "Выбрать";
                button.parentElement.style.backgroundColor = "rgb(255,255,255,0.5)";
            } else {
                button.innerHTML = "В корзине";
                button.parentElement.style.backgroundColor = "white";
            }
        }));
}
