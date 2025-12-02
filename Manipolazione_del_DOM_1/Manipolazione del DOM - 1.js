/*
Crea la tua To-Do List mediante i metodi visti nel video.
Crea una funzione che ti permetterà di:
Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
Creare un checkbox per ogni task aggiunto.
*/

function addProduct() {
  const $input = document.querySelector("input");
  const $ul = document.querySelector("ul");

  const $value = $input.value;

  const $li = document.createElement("li");
  $ul.appendChild($li);

  const $checkbox = document.createElement("input");
  $checkbox.setAttribute("type", "checkbox");
  $li.appendChild($checkbox);

  const $span = document.createElement("span");
  $span.innerText = $value;
  $li.appendChild($span);

  $input.value = "";
}
