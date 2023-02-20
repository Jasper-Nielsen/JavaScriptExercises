window.addEventListener("load" ,start);

function start(){
document.querySelector("#blue_container").addEventListener("click",clickBlue);
}

function clickBlue(){
    document.querySelector("#blue_container").classList.add("fallover");
}