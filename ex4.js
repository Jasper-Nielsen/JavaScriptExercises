window.addEventListener("load", start);

function start() {
  document.querySelector("#orange_sprite").addEventListener("click", jump);
  document.querySelector("#orange_sprite").addEventListener("animationend", jumpDone);
}

function jump() {
  document.querySelector("#orange_sprite").classList.add("jump-once");
}

function jumpDone() {
  document.querySelector("#orange_sprite").classList.remove("jump-once");
}
