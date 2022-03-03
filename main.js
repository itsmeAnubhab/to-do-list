const express = require("express");
const bodyparser=require("body-parser");

const app=express();
var items=[];
app.set("view engine","ejs");
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended: true}));
app.get("/",function(req,res){
    var date="monday";
    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day= today.toLocaleDateString("en-US",options);

    res.render("list",{
        kindOfDay:day,newListItems:items
    })
    
})
app.post("/",function(req,res){
    var item=req.body.newItem;
    items.push(item);
    res.redirect("/")
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
})


// let inputfield=document.getElementById('inputfield');
// let addtodobtn=document.getElementById('addtodo');
// let todocontainer=document.getElementById('todocontainer');

// addtodobtn.addEventListener('click',function(){
// var paragraph=document.createElement('p');
// var dltbtn=document.createElement("button");
// paragraph.innerText = inputfield.value;
// dltbtn.innerText = "Delete";
// todocontainer.appendChild(paragraph);
// todocontainer.appendChild(dltbtn);
// inputfield.value = "";



// dltbtn.addEventListener('click', function(){
//     todocontainer.removeChild(paragraph);
//     todocontainer.removeChild(dltbtn);
// })
// })
