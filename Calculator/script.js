let display = document.getElementById("display");

function appendValue(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){

try{
display.value = eval(display.value);
}
catch{
display.value = "Error";
}

}

document.addEventListener("keydown",function(event){

if(!isNaN(event.key) || "+-*/.%".includes(event.key)){
appendValue(event.key);
}

if(event.key==="Enter"){
calculate();
}

if(event.key==="Backspace"){
deleteLast();
}

});

document.getElementById("themeBtn").onclick=function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
this.innerHTML="☀️";
}
else{
this.innerHTML="🌙";
}

};