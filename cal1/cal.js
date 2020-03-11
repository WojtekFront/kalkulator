window.addEventListener("DOMContentLoaded", init);
const but = ["*", "/", "+","-","9","8","7","6","5","4","3","2","1","0","."];
const butSpec = ["*", "/", "+","-"];

function init(){
    document.title = "Title in JavaScript";
    let dec = false;
    let eva = false;
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
        butCre(value, readFun);
       // console.log(value);
    })

    butCre("=",evalScreen);
    butCre("C",clrScreen);

    function evalScreen(){
        screenCre.style.border="black 1px solid";
       if(screenCre == "")
       {screenCre.style.border="red 1px solid"}
       else{
           screenCre.value=eval(screenCre.value);
       }
    }

    function clrScreen(){
        screenCre.style.border="black 1px solid";
        screenCre.value="";
    
    }

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
    function readFun(e){
       // console.log(e.target.val);
        screenCre.style.border = "black 1px solid";
        let char = e.target.val;
        
        if(char == "."){
            if(dec){
                char = "";
                screenCre.style.border = "red 1px solid";
            }
            else{
                dec = true;
            }
        }
        eva = butSpec.includes(char);
        if(eva){
            dec = false;
        }
        screenCre.value+=char;
    }
    
}
