const ul = document.querySelector("ul");
// 1
console.log(ul.parentElement);
// 2
const secondLi = ul.children[1];
console.log(secondLi);
// 3
console.log(secondLi.nextElementSibling);
// 4
console.log(secondLi.previousElementSibling);
