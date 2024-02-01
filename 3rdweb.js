var menu=document.getElementById("menu")
var Status="hide"
function toggle(){
    if(Status==="hide"){
        menu.classList.add("show")
        Status="show"
    }else{
        menu.classList.remove("show")
        Status="hide"
    }
}