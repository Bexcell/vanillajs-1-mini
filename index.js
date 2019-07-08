// console.log("hello world")

function selectTheme(theme){
document.getElementsByTagName("body")[0].className = theme;
document.getElementsByTagName("main")[0].className = theme;
var buttons = document.getElementsByTagName("button")
  for(let i = 0; i < buttons.length; i++){
      buttons[i].className = theme; 
  }
}


let count = 0; 
const element = document.getElementById("counter")



function increase(){
    count++;
   innerText.element = count;
}
function decrease(){
    count--;
  innerText.element = count;                
}
function reset(){
    count = 0;
    innerHTML.element = "<mark> + count + </mark>";
}