window.addEventListener("load", start);

function start(){
document.querySelector("#orange_container").addEventListener("click",clickOrange);
}

function clickOrange(){
    document.querySelector("#orange_container").classList.add("jump");
}