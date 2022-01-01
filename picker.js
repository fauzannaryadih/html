function picker() {
    let pick = document.getElementById("img-picker");
    let nom = pick.selectedIndex;
    let img = document.getElementById("images");
    img.src = "imgs/" + pick[nom].value + ".jpg";
}