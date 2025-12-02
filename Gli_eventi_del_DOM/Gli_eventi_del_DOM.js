/*
Crea uno script che:

Al click del bottone inserisca la modalità dark
*/

const $btn = document.querySelector("button");
const $body = document.body;

$btn.addEventListener("click", function () {
  $body.classList.toggle("theme");
});
