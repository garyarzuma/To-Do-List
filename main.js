(()=>{"use strict";const o=(()=>{const o=document.getElementById("myForm");return console.log(o),{showForm:()=>o.style.display="block",closeForm:()=>o.style.display="none"}})();document.querySelector(".addTaskButton").addEventListener("click",o.showForm),(()=>{const o=(o=>({title:o}))("My First Project");console.log(o)})()})();