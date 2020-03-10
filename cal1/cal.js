window.addEventListener("DOMContentLoaded", init);
const but = ["*", "/", "+","-","9","8","7","6","5","4","3","2","1","0"];
const butSpec = ["*", "/", "+","-"];



function init(){
    document.title = "Title in JavaScript";

    const content = document.createElement("div");
    content.classList.add("content");
    content.style.maxWidth ="550px";
    content.style.margin="auto";
    document.body.appendChild(content);

    const screenCre = document.createElement("input");
    screenCre.setAttribute("type","text");
    screenCre.classList.add("butCre");
    screenCre.style.width = "80%";
    screenCre.style.lineHeight = "60px";
    screenCre.style.fontSize = "3em";
    screenCre.style.textAlign = "left";
    screenCre.style.backgroundColor = "lightgray";
    screenCre.style.textAlign = 'right';
    content.appendChild(screenCre);

    const butContent = document.createElement("div");
    butContent.classList.add("butContent");
    butContent.style.width = "80%";
    butContent.style.backgroundColor = "gray";
    content.appendChild(butContent);

    but.forEach(function(value){
        butCre(value);
    })

    function butCre(txt, myFunction){
        let btn = document.createElement("button");
        btn.setAttribute("type","button");
        btn.style.width = "22%";
        btn.style.lineHeight = "40px"
        btn.style.margin = "1%";
        btn.style.fontSize = "2em";
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click',myFunction);
        butContent.appendChild(btn);


    }



}