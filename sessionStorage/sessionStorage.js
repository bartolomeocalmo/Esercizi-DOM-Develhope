/*
Lo scopo di questo task è di salvare tutti i dati di un form nel session storage. -Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome -Fai in modo che questi dati si salvino nel session storage
*/

const $email = document.querySelector(".email");
const $name = document.querySelector(".firstname");
const $lastname = document.querySelector(".lastname");
const $btn = document.querySelector(".btn");
const $title = document.querySelector(".title-name");
const $printed = document.querySelector(".printedform");

$btn.addEventListener("click", () => {
  const data = {
    email: $email.value,
    firstname: $name.value,
    lastname: $lastname.value,
  };

  sessionStorage.setItem("formData", JSON.stringify(data));

  $title.textContent = $name.value;

  $printed.textContent = `${data.firstname} ${data.lastname} - ${data.email}`;
});
