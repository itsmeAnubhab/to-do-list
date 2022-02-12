let inputfield=document.getElementById('inputfield');
let addtodobtn=document.getElementById('addtodo');
let todocontainer=document.getElementById('todocontainer');

addtodobtn.addEventListener('click',function(){
var paragraph=document.createElement('p');
var dltbtn=document.createElement("button");
paragraph.innerText = inputfield.value;
dltbtn.innerText = "Delete";
todocontainer.appendChild(paragraph);
todocontainer.appendChild(dltbtn);
inputfield.value = "";



dltbtn.addEventListener('click', function(){
    todocontainer.removeChild(paragraph);
    todocontainer.removeChild(dltbtn);
})
})
