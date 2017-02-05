'use strict';

var pierwszyDiv= document.getElementById('parFirst');
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.children);
console.log(pierwszyDiv.childNodes);

var pierwszyChild= pierwszyDiv.children[1];
console.log(pierwszyChild.nextSibling.nextSibling);

var childNodes= pierwszyDiv.childNodes;

childNodes.forEach(function(node){
    if (node.nodeType==8){
        console.log(node);
    }
})




