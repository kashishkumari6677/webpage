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
let body=document.querySelector("body")
let currMode="light"
let modeI=document.querySelector('#modeI')
let darkin=document.querySelectorAll("#darkin")
function changeM(){
    if(currMode==='light'){
    body.classList.add('dark')
    for(let i=0;i<darkin.length;i++){

        darkin[i].classList.add('dark_toggle')
    }
    currMode='dark'
    modeI.src='./media/day-mode.png'
}else{
    body.classList.remove('dark')
    for(let i=0;i<darkin.length;i++){
        darkin[i].classList.remove('dark_toggle')
    }
    currMode='light'
    modeI.src='./media/moon.png'
}
}

