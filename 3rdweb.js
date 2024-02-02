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
function changeM(){
    if(currMode==='light'){
    body.classList.add('dark')
    currMode='dark'
    modeI.src='./media/day-mode.png'
    console.lo(currMode)
}else{
    body.classList.remove('dark')
    currMode='light'
    modeI.src='./media/moon.png'
    console.log(currMode)

}
}
