let image = document.querySelector(".img");
let container = document.querySelector(".container");


function ooo(phone){
    image.src = phone;
    localStorage.setItem('phone' , phone)

}
function color(color){
    container.style.background = color;
    localStorage.setItem('color' ,color);
}

window.onload = function () {
    let savedColor = localStorage.getItem('color');
    let savephone = this.localStorage.getItem('phone')
    if (savedColor) {
        container.style.background = savedColor;
        image.src = savephone;
    }
};