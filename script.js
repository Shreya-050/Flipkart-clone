let btn=document.querySelector("#menu");
let menu_contents=document.querySelector("#menu_content");
c=0;
btn.addEventListener("click",function(){
    menu_contents.style.display="flex";
  
    if(c==0){
        menu_contents.style.display="flex";
        c=1;
    }
    else{
        menu_contents.style.display="none";
        c=0;
    }
})