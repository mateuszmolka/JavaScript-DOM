'use strict';


/*var jakisWezel= document.getElementById("parFirst").children[2];
console.log(jakisWezel);

var newElement= document.createElement('p');

var newElementContent= document.createTextNode('To jest nowy paragraf');
newElement.appendChild(newElementContent);

console.log(newElement);

document.getElementById('parFirst').replaceChild(newElement,jakisWezel);*/

var allLinks=document.getElementsByTagName('a');
console.log(allLinks[0]);

for (var i=0; i<allLinks.length;i++){
    var linebreak = document.createElement('br');
    allLinks[i].parentNode.insertBefore(linebreak,allLinks[i].nextSibling);
    allLinks[i].removeAttribute('class');
}