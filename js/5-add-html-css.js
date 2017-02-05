'use strict';


var mainHeader=document.getElementById('main-header');

mainHeader.innerHTML="Treść nagłówka";

var link= document.getElementsByTagName('a')[0];

link.href="https://www.google.com";
link.className="nowa-klasa";

mainHeader.style.color="#11aa22";

link.style.textDecoration="none";