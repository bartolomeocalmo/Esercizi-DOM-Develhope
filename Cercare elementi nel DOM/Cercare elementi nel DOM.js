/*
Cerca tutti gli elementi con classe "paragrafo".
Cerca l' elemento con id "elemento-3"
Cerca tutti gli elementi h2 della pagina
*/
// 1
const paragrafi = document.querySelectorAll(".paragrafo");
console.log(paragrafi);

// 2
const elementId3 = document.getElementById("elemento-3");
console.log(elementId3);

// 3
const titleH2 = document.getElementsByTagName("h2");
console.log(titleH2);
