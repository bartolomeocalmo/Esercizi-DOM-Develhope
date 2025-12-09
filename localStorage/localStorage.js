/*
Lo scopo di questo task è di salvare tutti i dati di un form nel local storage. -Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome -Fai in modo che questi dati si salvino nel local storage -Controlla che al reload il nome nel titolo non scompaia
*/

const $email = document.querySelector(".email");
const $name = document.querySelector(".firstname");
const $lastname = document.querySelector(".lastname");
const $btn = document.querySelector(".btn");
const $title = document.querySelector(".title-name");

const saved = JSON.parse(localStorage.getItem("formData"));
if (saved) {
  $email.value = saved.email;
  $name.value = saved.firstname;
  $lastname.value = saved.lastname;
  $title.textContent = saved.firstname;
}

$btn.addEventListener("click", () => {
  const data = {
    email: $email.value,
    firstname: $name.value,
    lastname: $lastname.value,
  };

  localStorage.setItem("formData", JSON.stringify(data));
  $title.textContent = $name.value;
});
