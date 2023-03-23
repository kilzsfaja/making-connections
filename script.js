var nameChanger = document.querySelector("#namechange");
var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");

function accept(id) {
  var element = document.querySelector(id);
  element.remove();
  requestSpan.innerText--;
  connectionSpan.innerText++;
}

function ignore(id) {
  var element = document.querySelector(id);
  element.remove();
  requestSpan.innerText--;
}

function changeName() {
  nameChanger.innerText = "G.I Jane";
}
