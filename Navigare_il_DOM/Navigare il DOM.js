/*Stampa in ordine in console:

l'elemento padre di ul.
il secondo elemento figlio di ul.
l'elemento fratello successivo del secondo li.
l'elemento fratello precedente del secondo li.
Il tutto utilizzando tutte e 4 le proprietà viste nel video.
*/

const $ul = document.querySelector("ul");
// 1
console.log(ul.parentElement);
// 2
const $secondLi = ul.children[1];
console.log(secondLi);
// 3
console.log(secondLi.nextElementSibling);
// 4
console.log(secondLi.previousElementSibling);
