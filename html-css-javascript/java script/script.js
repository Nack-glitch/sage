const newDiv =document.createElement("H1")
document.getElementById("btclick").addEventListener("click" ,insertHTML)
function insertHTML(){
    document.getElementById("chengme"). style.fontsixe ="35px";
    document.getElementById("chengme"). style.color ="red";
    newDiv.innerText="added element"
    document.body.appendChild(newDiv);

}